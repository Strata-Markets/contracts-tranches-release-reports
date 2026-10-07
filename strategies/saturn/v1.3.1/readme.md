# Saturn Strategy Update

This release upgrades the Saturn Strategy implementation to calculate the sUSDat shares transferred to the user with rounding equivalent to ERC4626 `previewWithdraw`.

The previous implementation used `sUSDat.convertToShares(baseAssets)`, which rounds down. The new implementation uses `convertToTokens(address(sUSDat), baseAssets, Math.Rounding.Ceil)` to round up, matching the share amount returned by `Tranche.redeem`. Saturn's sUSDat V2 returns `0` from `previewWithdraw`, so the Strategy uses its existing local conversion formula instead.

# Upgrade via Timelock Transaction

1. Safe Proposal: https://app.safe.global/transactions/tx?safe=eth:0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50&id=multisig_0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50_0x615a5626f81ed31c7c97fc16b20246bb44cecb45d1db63115f8706e42f08694d
2. Timelock Schedule: [Schedule call](#timelock-schedule-call) [0x592c892ea6bec759bc2304cca9798982ffc945624b2fa1496a10d0b68589195a](https://etherscan.io/tx/0x592c892ea6bec759bc2304cca9798982ffc945624b2fa1496a10d0b68589195a)
3. Timelock Execution: Not provided.

----

## Strategy Upgrade

### Implementation Diff

> Compare the **old** Strategy implementation contract source code with the **new** Strategy implementation contract source code on **Etherscan**.

##### Strategy

- Proxy: [`0xce7B00D1004d9ED22E702A6a7F5bBdcE7297B090`](https://etherscan.io/address/0xce7B00D1004d9ED22E702A6a7F5bBdcE7297B090)
- Old implementation: [`0xE3dDFB67ab9f612ffBbE4D696f952A6689E12b86`](https://etherscan.io/address/0xE3dDFB67ab9f612ffBbE4D696f952A6689E12b86#code)
- New implementation: [`0x21afD87E1c166C8A5E0fB2cfD74c97DfEeb4A99c`](https://etherscan.io/address/0x21afD87E1c166C8A5E0fB2cfD74c97DfEeb4A99c#code)

Run from `strategies/saturn/v1.3.1`:

```bash
# Fetch the implementation sources from Etherscan.
0xweb i 0xE3dDFB67ab9f612ffBbE4D696f952A6689E12b86 --chain eth --name SaturnStrategyV3
0xweb i 0x21afD87E1c166C8A5E0fB2cfD74c97DfEeb4A99c --chain eth --name SaturnStrategyV4

mkdir -p diffs
git diff --no-index --output=diffs/SaturnStrategy.patch ./0xc/eth/SaturnStrategyV3/SaturnStrategyV3/contracts/ ./0xc/eth/SaturnStrategyV4/SaturnStrategyV4/contracts/
```

> [./diffs/SaturnStrategy.patch](./diffs/SaturnStrategy.patch)

The fetched contract sources differ only in `SaturnStrategy.withdrawInner`, which now uses the existing ceiling conversion:

```solidity
uint256 shares = convertToTokens(address(sUSDat), baseAssets, Math.Rounding.Ceil);
```

For sUSDat, this calculates `ceil(baseAssets * (totalSupply + 10**12) / (totalAssets + 1))`. It rounds up any fractional share amount when calculating the shares to transfer to the receiver or submit to Saturn's withdrawal queue. No storage declarations or external function signatures change. The fetched OpenZeppelin dependency sources are identical.

## Upgrade via Timelock Transaction

The Safe proposal schedules a single ProxyAdmin upgrade through the Timelock with a delay of 172800 seconds (2 days). The supplied schedule calldata contains the `upgradeAndCall` transaction shown below. Scheduling and execution transaction links have not been supplied.

### Timelock Schedule Call

To:

[`0xB2A3CF69C97AFD4dE7882E5fEE120e4efC77B706`](https://etherscan.io/address/0xB2A3CF69C97AFD4dE7882E5fEE120e4efC77B706)

Data:

```h
0x01d5062a0000000000000000000000006b9a68a2763f05bec4c9af41bd488fe8ad48cff1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000d8d50ae7c29e97392a37223336849b2878a0d7e0f4a2e881c559cf26c1c2912a000000000000000000000000000000000000000000000000000000000002a30000000000000000000000000000000000000000000000000000000000000000849623609d000000000000000000000000ce7b00d1004d9ed22e702a6a7f5bbdce7297b09000000000000000000000000021afd87e1c166c8a5e0fb2cfd74c97dfeeb4a99c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: schedule
Parameters:
  target: 0x6B9A68a2763F05BEc4C9Af41Bd488fE8aD48CfF1
  value: 0
  data: 0x9623609d000000000000000000000000ce7b00d1004d9ed22e702a6a7f5bbdce7297b09000000000000000000000000021afd87e1c166c8a5e0fb2cfd74c97dfeeb4a99c00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
  predecessor: 0x0000000000000000000000000000000000000000000000000000000000000000
  salt: 0xd8d50ae7c29e97392a37223336849b2878a0d7e0f4a2e881c559cf26c1c2912a
  delay: 172800
```

#### Transaction: #1

To:

[`0x6B9A68a2763F05BEc4C9Af41Bd488fE8aD48CfF1`](https://etherscan.io/address/0x6B9A68a2763F05BEc4C9Af41Bd488fE8aD48CfF1)

ID: **SaturnStrategyProxyAdmin**

Data:

```h
0x9623609d000000000000000000000000ce7b00d1004d9ed22e702a6a7f5bbdce7297b09000000000000000000000000021afd87e1c166c8a5e0fb2cfd74c97dfeeb4a99c00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall
Parameters:
  proxy: 0xce7B00D1004d9ED22E702A6a7F5bBdcE7297B090
  implementation: 0x21afD87E1c166C8A5E0fB2cfD74c97DfEeb4A99c
  data: 0x
```

- Old implementation: `0xE3dDFB67ab9f612ffBbE4D696f952A6689E12b86`
- New implementation: `0x21afD87E1c166C8A5E0fB2cfD74c97DfEeb4A99c`
- Etherscan source diff, old vs new: [./diffs/SaturnStrategy.patch](./diffs/SaturnStrategy.patch)
