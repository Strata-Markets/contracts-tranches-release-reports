# Per-token configuration in Saturn's Strategy

Added the possibility for `PAUSER_ROLE` to granularly disable deposits or redemptions per supported token in Saturn's Strategy.

## Strategy Upgrade

### Implementation commit

[23fea6a33ae586fb3762d0b8d623fb05be81c14b](https://github.com/Strata-Markets/contracts/commit/23fea6a33ae586fb3762d0b8d623fb05be81c14b)

### Implementation Deployment

[`0xCAF0865334EB135b8C47Fca6D9049D5EaFe19D9b`](https://etherscan.io/address/0xCAF0865334EB135b8C47Fca6D9049D5EaFe19D9b) at [`0xa4dc528681f289f6d3569c7b6db8887c16d5edb56c4c086d69860a6b3835fac3`](https://etherscan.io/tx/0xa4dc528681f289f6d3569c7b6db8887c16d5edb56c4c086d69860a6b3835fac3)


## Implementation Diff

### Compare implementations

> Compare the **old** implementation contract source code with the **new** implementation contract source code on **Etherscan**.

##### Current Strategy

- Proxy: [`0xce7B00D1004d9ED22E702A6a7F5bBdcE7297B090`](https://etherscan.io/address/0xce7B00D1004d9ED22E702A6a7F5bBdcE7297B090)
- Impl.: [`0x9686e327a6f50aca2a1bea4219e04dc4449dc286`](https://etherscan.io/address/0x9686e327a6f50aca2a1bea4219e04dc4449dc286)


```bash
# fetches contract and the implementation sources from etherscan
0xweb i 0x9686e327a6f50aca2a1bea4219e04dc4449dc286 --chain eth --name SaturnStrategyV1
0xweb i 0xCAF0865334EB135b8C47Fca6D9049D5EaFe19D9b --chain eth --name SaturnStrategyV2

git diff --no-index ./0xc/eth/SaturnStrategyV1/SaturnStrategyV1/contracts/ ./0xc/eth/SaturnStrategyV2/SaturnStrategyV2/contracts/ > diffs/SaturnStrategy.patch
```

> [./diffs/SaturnStrategy.patch](./diffs/SaturnStrategy.patch)

```diff
diff --git a/./0xc/eth/SaturnStrategyV1/SaturnStrategyV1/contracts/tranches/strategies/saturn/SaturnStrategy.sol b/./0xc/eth/SaturnStrategyV2/SaturnStrategyV2/contracts/tranches/strategies/saturn/SaturnStrategy.sol
index a4d466e..201c1f6 100644
--- a/./0xc/eth/SaturnStrategyV1/SaturnStrategyV1/contracts/tranches/strategies/saturn/SaturnStrategy.sol
+++ b/./0xc/eth/SaturnStrategyV2/SaturnStrategyV2/contracts/tranches/strategies/saturn/SaturnStrategy.sol
@@ -44,10 +44,23 @@ contract SaturnStrategy is Strategy {
     uint256 public sUSDatCooldownJrt;
     uint256 public sUSDatCooldownSrt;

+    struct TTokenConfig {
+        bool jrtDepositsPaused;
+        bool jrtWithdrawalsPaused;
+        bool srtDepositsPaused;
+        bool srtWithdrawalsPaused;
+    }
+
+    mapping(address token => TTokenConfig) public tokenConfigs;
+
     /// @dev sUSDat._decimalsOffset() = 12, used for manual ceil conversion
     uint256 private constant DECIMALS_OFFSET = 1e12;

     event CooldownsChanged(uint256 jrt, uint256 srt);
+    event TokenConfigChanged(address token, TTokenConfig config);
+
+    error TokenDepositPaused(address tranche, address token);
+    error TokenWithdrawalPaused(address tranche, address token);

     constructor (IsUSDat sUSDat_) {
         sUSDat = sUSDat_;
@@ -83,7 +96,13 @@ contract SaturnStrategy is Strategy {
      * @param owner The address of the asset owner from whom to transfer tokens
      * @return The amount of base assets received after deposit
      */
-    function deposit (address /* tranche */, address token, uint256 tokenAmount, uint256 baseAssets, address owner) external onlyCDO returns (uint256) {
+    function deposit (address tranche, address token, uint256 tokenAmount, uint256 baseAssets, address owner) external onlyCDO returns (uint256) {
+
+        bool isDepositEnabled = isTokenEnabledForDeposit(tranche, token);
+        if (!isDepositEnabled) {
+            revert TokenDepositPaused(tranche, token);
+        }
+
         SafeERC20.safeTransferFrom(IERC20(token), owner, address(this), tokenAmount);

         if (token == address(USDat)) {
@@ -121,6 +140,11 @@ contract SaturnStrategy is Strategy {
     }

     function withdrawInner (address tranche, address token, uint256 /* tokenAmount */, uint256 baseAssets, address sender, address receiver, bool shouldSkipCooldown) internal returns (uint256) {
+        bool isWithdrawalEnabled = isTokenEnabledForWithdrawal(tranche, token);
+        if (!isWithdrawalEnabled) {
+            revert TokenWithdrawalPaused(tranche, token);
+        }
+
         // Convert base assets to sUSDat shares needed (ceil rounding, favors protocol)
         // previewWithdraw is standard OZ (no fee override) ΓÇö returns shares needed for given assets
         uint256 shares = sUSDat.previewWithdraw(baseAssets);
@@ -266,6 +290,36 @@ contract SaturnStrategy is Strategy {
         return tokens;
     }

+    /**
+     * @notice Checks if withdrawals are enabled for a specific token and tranche combination
+     * @dev Does not validate if the token is supported by the strategy - caller must ensure token validity.
+     *      Returns true if withdrawals are not paused for the given tranche type (JRT/SRT).
+     * @param tranche The address of the tranche (JRT or SRT)
+     * @param token The address of the token to check (not validated against supported tokens)
+     * @return True if withdrawals are enabled (not paused), false otherwise
+     */
+    function isTokenEnabledForWithdrawal (address tranche, address token) public view returns (bool) {
+        bool isWithdrawalPaused = cdo.isJrt(tranche)
+            ? tokenConfigs[token].jrtWithdrawalsPaused
+            : tokenConfigs[token].srtWithdrawalsPaused;
+        return isWithdrawalPaused != true;
+    }
+
+    /**
+     * @notice Checks if deposits are enabled for a specific token and tranche combination
+     * @dev Does not validate if the token is supported by the strategy - caller must ensure token validity.
+     *      Returns true if deposits are not paused for the given tranche type (JRT/SRT).
+     * @param tranche The address of the tranche (JRT or SRT)
+     * @param token The address of the token to check (not validated against supported tokens)
+     * @return True if deposits are enabled (not paused), false otherwise
+     */
+    function isTokenEnabledForDeposit (address tranche, address token) public view returns (bool) {
+        bool isDepositPaused = cdo.isJrt(tranche)
+            ? tokenConfigs[token].jrtDepositsPaused
+            : tokenConfigs[token].srtDepositsPaused;
+        return isDepositPaused != true;
+    }
+
     /**
      * @notice Updates the cooldown periods for sUSDat withdrawals
      * @dev USDat cooldown is handled by Saturn's WithdrawalQueueERC721 (~7 days).
@@ -284,6 +338,22 @@ contract SaturnStrategy is Strategy {
         emit CooldownsChanged(sUSDatCooldownJrt_, sUSDatCooldownSrt_);
     }

+    /**
+    * @notice Updates the configuration for a supported token
+    * @dev Controls whether deposits/withdrawals are paused for junior (jrt) and/or senior (srt) tranches.
+    *      By default (false), all tokens and actions are allowed. Set to true to pause specific actions.
+    *      Only callable by accounts with PAUSER_ROLE.
+    * @param token The address of the token to configure (sUSDat or USDat)
+    * @param config The token configuration with pause flags
+    */
+    function setTokenConfig (address token, TTokenConfig calldata config) external onlyRole(PAUSER_ROLE) {
+        if (token != address(sUSDat) && token != address(USDat)) {
+            revert UnsupportedToken(token);
+        }
+        tokenConfigs[token] = config;
+        emit TokenConfigChanged(token, config);
+    }
+
     /**
      * @notice Returns the deposit fee percentage for the underlying protocol
      * @return feeBps The deposit fee in basis points (e.g., 10 = 0.1%)

```


### Compare new contracts source code


> Compare the **new** implementation contract source code on **Etherscan** with the GitHub commit.

```bash

# 1. Checkout the commit `23fea6a33ae586fb3762d0b8d623fb05be81c14b`

git archive --remote=https://github.com/Strata-Markets/contracts 23fea6a33ae586fb3762d0b8d623fb05be81c14b | tar -x -C contracts-tranches
0xweb i 0xCAF0865334EB135b8C47Fca6D9049D5EaFe19D9b --chain eth --name SaturnStrategyV2
git diff --no-index --diff-filter=DM ./0xc/eth/SaturnStrategyV2/SaturnStrategyV2/contracts/ ./contracts-tranches/contracts/ > diffs/SaturnStrategy-git.patch

```

> [./diffs/SaturnStrategy-git.patch](./diffs/SaturnStrategy-git.patch) (_must be empty: no difference_)

# Upgrade via Timelock Transaction

1. 🔒 Safe Proposal: https://app.safe.global/transactions/tx?safe=eth:0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50&id=multisig_0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50_0x23c579de759ab584176590596f8b20fb5c25d98c6f27067cff1646b884a049d1

2. ⌛

3. ⌛

----

This transaction is a Timelock batch operation that submits the following single transaction:

#### Transaction: #1
To:

[`0x6B9A68a2763F05BEc4C9Af41Bd488fE8aD48CfF1`](https://etherscan.io/address/0x6B9A68a2763F05BEc4C9Af41Bd488fE8aD48CfF1)
ID: **SaturnStrategyProxyAdmin**
Source: [`SaturnStrategy.sol`](https://github.com/Strata-Markets/contracts/blob/23fea6a33ae586fb3762d0b8d623fb05be81c14b/contracts/tranches/strategies/saturn/SaturnStrategy.sol)

Data:

```h
0x9623609d000000000000000000000000ce7b00d1004d9ed22e702a6a7f5bbdce7297b090000000000000000000000000caf0865334eb135b8c47fca6d9049d5eafe19d9b00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall
Parameters:
  proxy: 0xce7B00D1004d9ED22E702A6a7F5bBdcE7297B090
  implementation: 0xCAF0865334EB135b8C47Fca6D9049D5EaFe19D9b
  data: 0x
```

- Old implementation: `0x9686e327a6f50aca2a1bea4219e04dc4449dc286`
- New implementation: `0xCAF0865334EB135b8C47Fca6D9049D5EaFe19D9b`
- Etherscan-Diff Old vs New: [./diffs/SaturnStrategy.patch](./diffs/SaturnStrategy.patch)
- Etherscan-Source(New) vs Git-Commit([`23fea6a33ae586fb3762d0b8d623fb05be81c14b`](https://github.com/Strata-Markets/contracts/commit/23fea6a33ae586fb3762d0b8d623fb05be81c14b)): [./diffs/SaturnStrategy-git.patch](./diffs/SaturnStrategy-git.patch) (_must be empty_)



----

🏁
