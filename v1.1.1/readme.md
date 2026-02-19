# Accounting
### Increase Performance-Fee Guardian Limit and Update Risk, Retention and Performance Fee Parameters

Originally, the performance-fee guardian (`reserveBps`) was set to 2%. Based on tranche performance and economic considerations, it now makes sense to increase the guardian limit to 10% and activate the performance fee at 5%.

This update changes the constant in the contract and, as a next step, configures the following parameters:

| Parameter | Old Value | New Value |
| --- | --- | --- |
| Performance Fee  | 0%   | 5%    |
| Fee Retention    | 100% | 50%   |
| Risk X           | 20%  | 10%   |
| Risk Y           | 20%  | 12.5% |
| Risk K           | 0.3  | 0.3   |


>
- [ℹ️ Performance Fee and Redemption Fee 🔗](https://docs.strata.markets/protocol-mechanism/mechanism-overview#protocol-revenue-and-fees)
- [ℹ️ Risk Premium 🔗](https://docs.strata.markets/protocol-mechanism/dynamic-yield-split#risk-premium)

## Accounting Upgrade

#### Commit

- [change(Accounting): increase performance-fee guardian limit](https://github.com/Strata-Money/contracts-tranches/commit/c2592613489ec30933b28f0b82cd35fdb0440a6f)

#### Commit Comparison to Previous Deployment

- Previous report: [v1.1.0](https://github.com/Strata-Money/contracts-tranches-release-reports/tree/master/v1.1.0)
- Previous deployment commit: [init (TwoStepConfigManager) 2-step fee-setter](https://github.com/Strata-Money/contracts-tranches/commit/8eec77791ff01d2735f2c62cfc1502daa2b7904f)
- [Comparison](https://github.com/Strata-Money/contracts-tranches/compare/8eec77791ff01d2735f2c62cfc1502daa2b7904f..c2592613489ec30933b28f0b82cd35fdb0440a6f)

#### Implementation Deployment

[`0x5A8d34d785B5008Cce9B9F4AAa0e445f6959CBFf`](https://etherscan.io/address/0x5A8d34d785B5008Cce9B9F4AAa0e445f6959CBFf) at [`0xf50e731e4b4645872ae51aa706b72339cf130f67ee17ecef33154764cbc1e871`](https://etherscan.io/tx/0xf50e731e4b4645872ae51aa706b72339cf130f67ee17ecef33154764cbc1e871)

#### Implementation Diff

Current Accounting:

- Proxy: [`0xa436c5Dd1Ba62c55D112C10cd10E988bb3355102`](https://etherscan.io/address/0xa436c5Dd1Ba62c55D112C10cd10E988bb3355102)
- Impl.: [`0x4e9f8d06aaed67ac4aaa52d9175c842e0f8e8da2`](https://etherscan.io/address/0x4e9f8d06aaed67ac4aaa52d9175c842e0f8e8da2)

```bash
# fetches contract and the implementation sources from etherscan
0xweb i 0xa436c5Dd1Ba62c55D112C10cd10E988bb3355102 --chain eth --name USDeAccountingV1
0xweb i 0x5A8d34d785B5008Cce9B9F4AAa0e445f6959CBFf --chain eth --name USDeAccountingV2

git diff --no-index ./0xc/eth/USDeAccountingV1/USDeAccountingV1/contracts/ ./0xc/eth/USDeAccountingV2/USDeAccountingV2/contracts/ > contracts/USDeAccounting.patch
```

```diff
diff --git a/./0xc/eth/USDeAccountingV1/USDeAccountingV1/contracts/tranches/Accounting.sol b/./0xc/eth/USDeAccountingV2/USDeAccountingV2/contracts/tranches/Accounting.sol
index 0beba29..b576bc3 100644
--- a/./0xc/eth/USDeAccountingV1/USDeAccountingV1/contracts/tranches/Accounting.sol
+++ b/./0xc/eth/USDeAccountingV2/USDeAccountingV2/contracts/tranches/Accounting.sol
@@ -41,7 +41,7 @@ contract Accounting is IAccounting, CDOComponent {

     uint256 public reserveBps;
     uint256 constant PERCENTAGE_100 = 1e18;
-    uint256 constant RESERVE_BPS_MAX = 0.02e18;
+    uint256 constant RESERVE_BPS_MAX = 0.1e18;

     /// @dev Latest balances at T0 (latest protocol interrogation)
     uint256 public nav;
```


## Upgrade and Configuration Timelock Transaction


1. 🔒 Safe Proposal: https://app.safe.global/transactions/tx?safe=eth:0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50&id=multisig_0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50_0x524ed89cf00dfd4e356986c8369cd4214dfb8bcea3cc259ac03b9321498219c8

2. ⌛ Timelock Schedule: _pending_

3. ✅ Timelock Execution: _pending_

----

This transaction is a Timelock batch operation that submits the following transactions:

#### Transaction: #1
To:

[`0x25A733feBA393a48C07A76441777324B471d212E`](https://etherscan.io/address/0x25A733feBA393a48C07A76441777324B471d212E)
ID: **USDeAccountingProxyAdmin**
Source: [`Accounting.sol`](https://github.com/Strata-Money/contracts-tranches/blob/c2592613489ec30933b28f0b82cd35fdb0440a6f/contracts/tranches/Accounting.sol)

Data:

```h
0x9623609d000000000000000000000000a436c5dd1ba62c55d112c10cd10e988bb33551020000000000000000000000005a8d34d785b5008cce9b9f4aaa0e445f6959cbff00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall
Parameters:
  proxy: 0xa436c5Dd1Ba62c55D112C10cd10E988bb3355102
  implementation: 0x5A8d34d785B5008Cce9B9F4AAa0e445f6959CBFf
  data: 0x
```

- Old implementation: `0x4e9f8d06aaed67ac4aaa52d9175c842e0f8e8da2`
- New implementation: `0x5A8d34d785B5008Cce9B9F4AAa0e445f6959CBFf`
- Etherscan-Diff Old vs New: [./contracts/USDeAccounting.patch](./contracts/USDeAccounting.patch)
- Etherscan-Source(New) vs Git-Commit(`c2592613489ec30933b28f0b82cd35fdb0440a6f`): [./contracts/USDeAccountingV2-git.patch](./contracts/USDeAccountingV2-git.patch) (_must be empty_)

----

#### Transaction: #2

To:

[`0xa436c5Dd1Ba62c55D112C10cd10E988bb3355102`](https://etherscan.io/address/0xa436c5Dd1Ba62c55D112C10cd10E988bb3355102)
ID: **USDeAccounting**
Source: [Accounting.sol](https://github.com/Strata-Money/contracts-tranches/blob/c2592613489ec30933b28f0b82cd35fdb0440a6f/contracts/tranches/Accounting.sol)

> Set the percentage of gains allocated to the reserve (5% in WAD)

Data:

```h
0xe9308c2500000000000000000000000000000000000000000000000000b1a2bc2ec50000
```

```yml
Function: setReserveBps(uint256 value)
Parameters:
  value: 0xb1a2bc2ec50000 # 50000000000000000 == 0.05e18 == 5%
```

----

#### Transaction: #3

To:

[`0xa436c5Dd1Ba62c55D112C10cd10E988bb3355102`](https://etherscan.io/address/0xa436c5Dd1Ba62c55D112C10cd10E988bb3355102)
ID: **USDeAccounting**
Source: [Accounting.sol](https://github.com/Strata-Money/contracts-tranches/blob/c2592613489ec30933b28f0b82cd35fdb0440a6f/contracts/tranches/Accounting.sol)

> Sets the portion of fees from each tranche that is returned to tranche TVL. The remainder goes to the reserve. (50% in WAD)


Data:

```h
0xb3f56b1000000000000000000000000000000000000000000000000006f05b59d3b2000000000000000000000000000000000000000000000000000006f05b59d3b20000
```

```yml
Function: setFeeRetentionBps (uint256 jrtRetention, uint256 srtRetention)
Parameters:
  value:
    - jrtRetention = 0x6f05b59d3b20000 # 0.5e18 (50%)
    - srtRetention = 0x6f05b59d3b20000 # 0.5e18 (50%)
```


----

#### Transaction: #4

To:

[`0xa436c5Dd1Ba62c55D112C10cd10E988bb3355102`](https://etherscan.io/address/0xa436c5Dd1Ba62c55D112C10cd10E988bb3355102)
ID: **USDeAccounting**
Source: [Accounting.sol](https://github.com/Strata-Money/contracts-tranches/blob/c2592613489ec30933b28f0b82cd35fdb0440a6f/contracts/tranches/Accounting.sol)

> Sets the risk premium parameters used in calculating the risk-adjusted APR (10%, 12.5%, 0.3 in WAD)


Data:

```h
0x29b39158000000000000000000000000000000000000000000000000016345785d8a000000000000000000000000000000000000000000000000000001bc16d674ec80000000000000000000000000000000000000000000000000000429d069189e0000
```

```yml
Function: setRiskParameters (uint256 riskX, uint256 riskY, uint256 riskK)
Parameters:
  value:
    - riskX = 0x16345785d8a0000 # 0.1e18   (10%)
    - riskY = 0x1bc16d674ec8000 # 0.125e18 (12.5%)
    - riskK = 0x429d069189e0000 # 0.3e18   (0.3)
```


----

### ℹ️ Implementation comparison methodology

```bash
# Install the contract - it fetches sources from Etherscan.

0xweb i <addressOldImpl> --chain eth --name contractv1
0xweb i <addressNewImpl> --chain eth --name contractv2

# Compare sources from the old vs the new implementation
git diff --no-index ./0xc/eth/contractv1/contractv1/contracts/ ./0xc/eth/contractv2/contractv2/contracts/ > contracts/contract.patch

# Compare the new implementation with the source in a submodule (latest commit)
# Compares only files that are modified or deleted

git diff --no-index --diff-filter=DM ./0xc/eth/contractv2/contractv2/contracts/ ./contracts-tranches/contracts/ > contracts/contractv2-git.patch
```


🏁
