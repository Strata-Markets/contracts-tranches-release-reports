# Saturn Strategy and APR Pair Provider Update

This release upgrades the Saturn Strategy implementation and configures the existing Saturn `AprPairFeed` to use the new `SaturnAprPairProvider`.

The Strategy upgrade is required because the new Saturn `sUSDat` contract returns `0` from `previewWithdraw`. The Strategy now uses the standard `convertToShares` path when calculating the sUSDat shares required for withdrawals.

## Strategy Upgrade

### Implementation Diff

> Compare the **old** Strategy implementation contract source code with the **new** Strategy implementation contract source code on **Etherscan**.

##### Current Strategy

- Proxy: [`0xce7B00D1004d9ED22E702A6a7F5bBdcE7297B090`](https://etherscan.io/address/0xce7B00D1004d9ED22E702A6a7F5bBdcE7297B090)
- Old implementation: [`0xCAF0865334EB135b8C47Fca6D9049D5EaFe19D9b`](https://etherscan.io/address/0xCAF0865334EB135b8C47Fca6D9049D5EaFe19D9b)
- New implementation: [`0xE3dDFB67ab9f612ffBbE4D696f952A6689E12b86`](https://etherscan.io/address/0xE3dDFB67ab9f612ffBbE4D696f952A6689E12b86)

```bash
# fetches the implementation sources from etherscan
0xweb i 0xCAF0865334EB135b8C47Fca6D9049D5EaFe19D9b --chain eth --name SaturnStrategyV2
0xweb i 0xE3dDFB67ab9f612ffBbE4D696f952A6689E12b86 --chain eth --name SaturnStrategyV3

git diff --no-index ./0xc/eth/SaturnStrategyV2/SaturnStrategyV2/contracts/ ./0xc/eth/SaturnStrategyV3/SaturnStrategyV3/contracts/ > diffs/SaturnStrategy.patch
```

> [./diffs/SaturnStrategy.patch](./diffs/SaturnStrategy.patch)

## APR Pair Provider Deployment

### Source

[`SaturnAprPairProvider.sol`](https://github.com/Strata-Markets/contracts/blob/27a7fc500362b3c89fca39eab416ee728863b69a/contracts/tranches/strategies/saturn/SaturnAprPairProvider.sol)

### Deployed Contract

[`0x81CCc891868194a5605DED10FDF5c77BB889cb01`](https://etherscan.io/address/0x81CCc891868194a5605DED10FDF5c77BB889cb01)

## Upgrade via Timelock Transaction

This transaction is a Timelock batch operation that submits the following two transactions:

#### Transaction: #1

To:

[`0x6B9A68a2763F05BEc4C9Af41Bd488fE8aD48CfF1`](https://etherscan.io/address/0x6B9A68a2763F05BEc4C9Af41Bd488fE8aD48CfF1)

ID: **SaturnStrategyProxyAdmin**

Data:

```h
0x9623609d000000000000000000000000ce7b00d1004d9ed22e702a6a7f5bbdce7297b090000000000000000000000000e3ddfb67ab9f612ffbbe4d696f952a6689e12b8600000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall
Parameters:
  proxy: 0xce7B00D1004d9ED22E702A6a7F5bBdcE7297B090
  implementation: 0xE3dDFB67ab9f612ffBbE4D696f952A6689E12b86
  data: 0x
```

- Old implementation: `0xCAF0865334EB135b8C47Fca6D9049D5EaFe19D9b`
- New implementation: `0xE3dDFB67ab9f612ffBbE4D696f952A6689E12b86`
- Etherscan diff, old vs new: [./diffs/SaturnStrategy.patch](./diffs/SaturnStrategy.patch)

#### Transaction: #2

To:

[`0x21d616977F355afD0eaB7A1D11C9fd58C8579115`](https://etherscan.io/address/0x21d616977F355afD0eaB7A1D11C9fd58C8579115)

ID: **SaturnAprPairFeed**

Source: [`AprPairFeed.sol`](https://github.com/Strata-Markets/contracts/blob/27a7fc500362b3c89fca39eab416ee728863b69a/contracts/tranches/oracles/AprPairFeed.sol)

Data:

```h
0xcfd8d6c000000000000000000000000081ccc891868194a5605ded10fdf5c77bb889cb01
```

Function:

```yml
Function: setProvider
Parameters:
  _provider: 0x81CCc891868194a5605DED10FDF5c77BB889cb01
```

- APR Pair Feed: `0x21d616977F355afD0eaB7A1D11C9fd58C8579115`
- New APR Pair Provider: `0x81CCc891868194a5605DED10FDF5c77BB889cb01`
- Provider source: [`SaturnAprPairProvider.sol`](https://github.com/Strata-Markets/contracts/blob/27a7fc500362b3c89fca39eab416ee728863b69a/contracts/tranches/strategies/saturn/SaturnAprPairProvider.sol)
