# Continuous Accounting

### Add `ONE` as a base-asset-decimals aware constant

The code was migrated from `DiscreteAccounting.sol`:

https://github.com/Strata-Markets/contracts/blob/tranches/contracts/tranches/DiscreteAccounting.sol

These changes are required so `Accounting` correctly handles yield from strategies with 6-decimal assets:

* Junior Loss - prevents dropping to `0`; instead, the loss is limited to `ONE` asset unit (`$1`)
* Senior Yield - ensures it doesn't exceed the Junior's available TVL



## Accounting Upgrade

### Implementation commit

[ad6e401c98503bbf46793da6ee923388cbec62c2](https://github.com/Strata-Markets/contracts/commit/ad6e401c98503bbf46793da6ee923388cbec62c2)

### Implementation Deployment

[`0x8CabD13AF1D45404a484ab22bB65dAdF71048643`](https://etherscan.io/address/0x8CabD13AF1D45404a484ab22bB65dAdF71048643) at [`0x8802708a47fa65d139eebf9d7bdb393cf6ee23539126b207af79ea835b501a7f`](https://etherscan.io/tx/0x8802708a47fa65d139eebf9d7bdb393cf6ee23539126b207af79ea835b501a7f)


## Implementation Diff

### Compare implementations

> Compare the **old** implementation contract source code with the **new** implementation contract source code on **Etherscan**.

##### Current Accounting

- Proxy: [`0x180f7b3b807FA91EDb6e864802e4664D6Ee8Cf88`](https://etherscan.io/address/0x180f7b3b807FA91EDb6e864802e4664D6Ee8Cf88)
- Impl.: [`0x4e409d5f9867352555e99a50cee2c4a73364e5b6`](https://etherscan.io/address/0x4e409d5f9867352555e99a50cee2c4a73364e5b6)


```bash
# fetches contract and the implementation sources from etherscan
0xweb i 0x4e409d5f9867352555e99a50cee2c4a73364e5b6 --chain eth --name SaturnAccountingV1
0xweb i 0x8CabD13AF1D45404a484ab22bB65dAdF71048643 --chain eth --name SaturnAccountingV2

git diff --no-index ./0xc/eth/SaturnAccountingV1/SaturnAccountingV1/contracts/ ./0xc/eth/SaturnAccountingV2/SaturnAccountingV2/contracts/ > diffs/SaturnAccounting.patch
```

> [./diffs/SaturnAccounting.patch](./diffs/SaturnAccounting.patch)

```diff
diff --git a/./0xc/eth/SaturnAccountingV1/SaturnAccountingV1/contracts/tranches/Accounting.sol b/./0xc/eth/SaturnAccountingV2/SaturnAccountingV2/contracts/tranches/Accounting.sol
index 44fcbb6..3998abf 100644
--- a/./0xc/eth/SaturnAccountingV1/SaturnAccountingV1/contracts/tranches/Accounting.sol
+++ b/./0xc/eth/SaturnAccountingV2/SaturnAccountingV2/contracts/tranches/Accounting.sol
@@ -21,6 +21,7 @@ contract Accounting is IAccounting, CDOComponent {
     int64   private constant APR_FEED_BOUNDARY_MAX = 2e12; // 200%
     int64   private constant APR_FEED_BOUNDARY_MIN = 0;
     uint256 private constant APR_FEED_DECIMALS = 12;
+    uint256 private immutable ONE_ASSET;

     /// @dev The oracle to fetch the latest APR floor and APR base.
     /// @notice When the oracle is updated, it can actively push the latest values to this contract, allowing us to adjust srtTargetIndex.
@@ -85,6 +86,10 @@ contract Accounting is IAccounting, CDOComponent {
     event FeeAccrued(bool isJrt, uint256 amountToReserve, uint256 amountToTranche);
     event FeeRetentionChanged(uint256 feeJrtRetention, uint256 feeSrtRetention);

+    constructor (uint256 navDecimals) {
+        ONE_ASSET = 10 ** navDecimals;
+    }
+
     function initialize(
         address owner_,
         address acm_,
@@ -283,7 +288,10 @@ contract Accounting is IAccounting, CDOComponent {
             // Should never happen to USDe, jic: cover by Jrt, then Reserve, then Srt
             uint256 loss = uint256(-gain_dT);

-            uint256 jrtLoss = Math.min(jrtNavT0, loss);
+            uint256 jrtLoss = Math.min(
+                Math.saturatingSub(jrtNavT0, ONE_ASSET),
+                loss
+            );

             loss -= jrtLoss;
             uint256 reserveLoss = Math.min(reserveNavT0, loss);
@@ -327,7 +335,7 @@ contract Accounting is IAccounting, CDOComponent {
         }
         uint256 srtGainTargetAbs = Math.min(
             uint256(srtGainTarget),
-            Math.saturatingSub(jrtNavT1, 1e18)
+            Math.saturatingSub(jrtNavT1, ONE_ASSET)
         );

         // #2 Final new Jrt
diff --git a/./0xc/eth/SaturnAccountingV1/SaturnAccountingV1/contracts/tranches/interfaces/IStrategy.sol b/./0xc/eth/SaturnAccountingV2/SaturnAccountingV2/contracts/tranches/interfaces/IStrategy.sol
index 89b4a7d..a844272 100644
--- a/./0xc/eth/SaturnAccountingV1/SaturnAccountingV1/contracts/tranches/interfaces/IStrategy.sol
+++ b/./0xc/eth/SaturnAccountingV2/SaturnAccountingV2/contracts/tranches/interfaces/IStrategy.sol
@@ -20,5 +20,5 @@ interface IStrategy is ICDOComponent {
     function getSupportedTokens () external view returns (IERC20[] memory);
     function ensureRedeemable(address caller, address metaToken, uint256 baseAssets) external view;

-    function depositFeeBps() external view returns (uint256 feeBps);
+    function depositFeeBps(address tokenIn) external view returns (uint256 feeBps);
 }
```


### Compare new contracts source code


> Compare the **new** implementation contract source code on **Etherscan** with the GitHub commit.

```bash

# 1. Checkout the commit `ad6e401c98503bbf46793da6ee923388cbec62c2`

git archive --remote=https://github.com/Strata-Markets/contracts ad6e401c98503bbf46793da6ee923388cbec62c2 | tar -x -C contracts-tranches
0xweb i 0x8CabD13AF1D45404a484ab22bB65dAdF71048643 --chain eth --name SaturnAccountingV2
git diff --no-index --diff-filter=DM ./0xc/eth/SaturnAccountingV2/SaturnAccountingV2/contracts/ ./contracts-tranches/contracts/ > diffs/SaturnAccounting-git.patch

```

> [./diffs/SaturnAccounting-git.patch](./diffs/SaturnAccounting-git.patch) (_must be empty: no difference_)

# Upgrade via Timelock Transaction

1. 🔒 Safe Proposal: https://app.safe.global/transactions/tx?safe=eth:0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50&id=multisig_0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50_0xbe4959eba57c368f23b30cb8b6a18a35a440dd4cde43478891b82497661530e1

2. ⌛ Timelock Schedule: https://etherscan.io/tx/0x01c4704e89d8a3ee1a97182504cd3200eb4699f2cef57b9a1dff582939549e1a

3. 🏁 Timelock Execution: https://etherscan.io/tx/0x41506f80799bdf158322da96bb1f2d1b0df066fe2b2e9358c2d7a5ff1e35b404

----

This transaction is a Timelock batch operation that submits the following single transaction:

#### Transaction: #1
To:

[`0xaA306ecf31523db57861ed87d9DAcE3d7522B24a`](https://etherscan.io/address/0xaA306ecf31523db57861ed87d9DAcE3d7522B24a)
ID: **SaturnAccountingProxyAdmin**
Source: [`Accounting.sol`](https://github.com/Strata-Markets/contracts/blob/ad6e401c98503bbf46793da6ee923388cbec62c2/contracts/tranches/Accounting.sol)

Data:

```h
0x9623609d000000000000000000000000180f7b3b807fa91edb6e864802e4664d6ee8cf880000000000000000000000008cabd13af1d45404a484ab22bb65dadf7104864300000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall
Parameters:
  proxy: 0x180f7b3b807FA91EDb6e864802e4664D6Ee8Cf88
  implementation: 0x8CabD13AF1D45404a484ab22bB65dAdF71048643
  data: 0x
```

- Old implementation: `0x4e409d5f9867352555e99a50cee2c4a73364e5b6`
- New implementation: `0x8CabD13AF1D45404a484ab22bB65dAdF71048643`
- Etherscan-Diff Old vs New: [./diffs/SaturnAccounting.patch](./diffs/SaturnAccounting.patch)
- Etherscan-Source(New) vs Git-Commit([`ad6e401c98503bbf46793da6ee923388cbec62c2`](https://github.com/Strata-Markets/contracts/commit/ad6e401c98503bbf46793da6ee923388cbec62c2)): [./diffs/SaturnAccounting-git.patch](./diffs/SaturnAccounting-git.patch) (_must be empty_)



----

🏁
