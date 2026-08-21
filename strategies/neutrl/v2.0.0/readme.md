# Strata v2.0.0 Upgrade for Neutrl Market


## Executive Summary

| Item | Value |
| --- | --- |
| Market | Neutrl |
| Version | v2.0.0 |
| Deployment commit | [`71b32b412db646af47d93e878da17f0ee1c2f517`](https://github.com/Strata-Markets/contracts/commit/71b32b412db646af47d93e878da17f0ee1c2f517) |
| Upgraded contracts | 10 |
| New contracts | 1 |
| Timelock transactions | 15 |

## Verification Checklist

- [x] All upgraded contract implementations match `deployments-eth.json`.
- [x] All `upgradeAndCall` calldata was decoded and matched against the expected proxy and implementation addresses.
- [x] `Accounting` upgrade calldata decodes to `initializeV2()`.
- [x] `PAUSER_ROLE` hash was verified.
- [x] `setValuationGracePeriod(uint64)` decodes to `86400`.
- [x] All Etherscan source vs Git commit patches are empty.

## Review Notes

- `Accounting` is the only upgrade with non-empty initializer calldata: `initializeV2()`.
- `AccountablePushOracle` receives `PAUSER_ROLE`.
- The CDO valuation keeper is set to `AccountablePushOracle`.
- Every deployed V2 source matches the audited Git commit, based on the empty `*-git.patch` files.


## Deployment Commit

https://github.com/Strata-Markets/contracts/commit/71b32b412db646af47d93e878da17f0ee1c2f517

```bash
git submodule add https://github.com/Strata-Markets/contracts strategies/neutrl/v2.0.0/strata-contracts
cd strategies/neutrl/v2.0.0/strata-contracts
git checkout 71b32b412db646af47d93e878da17f0ee1c2f517
```


## Upgraded Contracts


1. StrataCDO

- Proxy: [`0x7b6c960cf185fb27ECb91c174FAe065978beDd10`](https://etherscan.io/address/0x7b6c960cf185fb27ECb91c174FAe065978beDd10)
- Old implementation: [`0x3AFC31C41a53C355940d48A0D1c6005d8905d0A9`](https://etherscan.io/address/0x3AFC31C41a53C355940d48A0D1c6005d8905d0A9)
- New implementation: [`0x19A123423ca8dAF9E87DED8daD690c3Efc094f02`](https://etherscan.io/address/0x19A123423ca8dAF9E87DED8daD690c3Efc094f02)

```bash
# Fetches the contract and implementation sources from Etherscan.
0xweb i 0x3AFC31C41a53C355940d48A0D1c6005d8905d0A9 --chain eth --name StrataCDOV1
0xweb i 0x19A123423ca8dAF9E87DED8daD690c3Efc094f02 --chain eth --name StrataCDOV2

git diff --no-index ./0xc/eth/StrataCDOV1/StrataCDOV1/contracts/ ./0xc/eth/StrataCDOV2/StrataCDOV2/contracts/ > diffs/StrataCDO.patch
git diff --no-index --diff-filter=DM ./0xc/eth/StrataCDOV2/StrataCDOV2/contracts/ ./contracts-tranches/contracts/ > diffs/StrataCDO-git.patch
```


2. ERC20Cooldown

- Proxy: [`0x1Abc3c3C15A862276D057b2AcBcFEab358907990`](https://etherscan.io/address/0x1Abc3c3C15A862276D057b2AcBcFEab358907990)
- Old implementation: [`0xa14009B8865C1B951511a8750E5E3d02e574db9d`](https://etherscan.io/address/0xa14009B8865C1B951511a8750E5E3d02e574db9d)
- New implementation: [`0x5715a7c5aDF96185F76E52F2a647D1904BF53f19`](https://etherscan.io/address/0x5715a7c5aDF96185F76E52F2a647D1904BF53f19)

```bash
# Fetches the contract and implementation sources from Etherscan.
0xweb i 0xa14009B8865C1B951511a8750E5E3d02e574db9d --chain eth --name ERC20CooldownV1
0xweb i 0x5715a7c5aDF96185F76E52F2a647D1904BF53f19 --chain eth --name ERC20CooldownV2

git diff --no-index ./0xc/eth/ERC20CooldownV1/ERC20CooldownV1/contracts/ ./0xc/eth/ERC20CooldownV2/ERC20CooldownV2/contracts/ > diffs/ERC20Cooldown.patch
git diff --no-index --diff-filter=DM ./0xc/eth/ERC20CooldownV2/ERC20CooldownV2/contracts/ ./contracts-tranches/contracts/ > diffs/ERC20Cooldown-git.patch
```


3. UnstakeCooldown

- Proxy: [`0x2a52363A2a0d765B31Cb117a8e4D9CE58c2Bc749`](https://etherscan.io/address/0x2a52363A2a0d765B31Cb117a8e4D9CE58c2Bc749)
- Old implementation: [`0x2822B8d7Db77102937b040ed17Ac6785dfd98ce5`](https://etherscan.io/address/0x2822B8d7Db77102937b040ed17Ac6785dfd98ce5)
- New implementation: [`0x1Ae1d8B39ee6EEC816681a0355c844bB150Db35F`](https://etherscan.io/address/0x1Ae1d8B39ee6EEC816681a0355c844bB150Db35F)

```bash
# Fetches the contract and implementation sources from Etherscan.
0xweb i 0x2822B8d7Db77102937b040ed17Ac6785dfd98ce5 --chain eth --name UnstakeCooldownV1
0xweb i 0x1Ae1d8B39ee6EEC816681a0355c844bB150Db35F --chain eth --name UnstakeCooldownV2

git diff --no-index ./0xc/eth/UnstakeCooldownV1/UnstakeCooldownV1/contracts/ ./0xc/eth/UnstakeCooldownV2/UnstakeCooldownV2/contracts/ > diffs/UnstakeCooldown.patch
git diff --no-index --diff-filter=DM ./0xc/eth/UnstakeCooldownV2/UnstakeCooldownV2/contracts/ ./contracts-tranches/contracts/ > diffs/UnstakeCooldown-git.patch
```


4. SharesCooldown

- Proxy: [`0x0404EA6f1c89a5032eA2BAdDFbac20CE11CdF1cE`](https://etherscan.io/address/0x0404EA6f1c89a5032eA2BAdDFbac20CE11CdF1cE)
- Old implementation: [`0x655c80af21FA35d5d94bd8BB32b9e325E38A1E58`](https://etherscan.io/address/0x655c80af21FA35d5d94bd8BB32b9e325E38A1E58)
- New implementation: [`0x91d7ceD99b72029CeE91528Daa26441daFfA07dC`](https://etherscan.io/address/0x91d7ceD99b72029CeE91528Daa26441daFfA07dC)

```bash
# Fetches the contract and implementation sources from Etherscan.
0xweb i 0x655c80af21FA35d5d94bd8BB32b9e325E38A1E58 --chain eth --name SharesCooldownV1
0xweb i 0x91d7ceD99b72029CeE91528Daa26441daFfA07dC --chain eth --name SharesCooldownV2

git diff --no-index ./0xc/eth/SharesCooldownV1/SharesCooldownV1/contracts/ ./0xc/eth/SharesCooldownV2/SharesCooldownV2/contracts/ > diffs/SharesCooldown.patch
git diff --no-index --diff-filter=DM ./0xc/eth/SharesCooldownV2/SharesCooldownV2/contracts/ ./contracts-tranches/contracts/ > diffs/SharesCooldown-git.patch
```


5. SNUSDStrategy

- Proxy: [`0x3CeF2c09c4fAD37E9bdD86CD9810c3042fB5DE88`](https://etherscan.io/address/0x3CeF2c09c4fAD37E9bdD86CD9810c3042fB5DE88)
- Old implementation: [`0x4C8fA0DbC1B3021b518DF4476E33AEbe2c4aF269`](https://etherscan.io/address/0x4C8fA0DbC1B3021b518DF4476E33AEbe2c4aF269)
- New implementation: [`0x2bc7ddF4bC208e8462B37246961c40dDac76A635`](https://etherscan.io/address/0x2bc7ddF4bC208e8462B37246961c40dDac76A635)

```bash
# Fetches the contract and implementation sources from Etherscan.
0xweb i 0x4C8fA0DbC1B3021b518DF4476E33AEbe2c4aF269 --chain eth --name SNUSDStrategyV1
0xweb i 0x2bc7ddF4bC208e8462B37246961c40dDac76A635 --chain eth --name SNUSDStrategyV2

git diff --no-index ./0xc/eth/SNUSDStrategyV1/SNUSDStrategyV1/contracts/ ./0xc/eth/SNUSDStrategyV2/SNUSDStrategyV2/contracts/ > diffs/SNUSDStrategy.patch
git diff --no-index --diff-filter=DM ./0xc/eth/SNUSDStrategyV2/SNUSDStrategyV2/contracts/ ./contracts-tranches/contracts/ > diffs/SNUSDStrategy-git.patch
```


6. AprPairFeed

- Proxy: [`0x1695a2fF3e45365Ab4111d2E1083B2A143b4D171`](https://etherscan.io/address/0x1695a2fF3e45365Ab4111d2E1083B2A143b4D171)
- Old implementation: [`0x80F7b35310861F0e3D73ec03C0400D6B7641EcF9`](https://etherscan.io/address/0x80F7b35310861F0e3D73ec03C0400D6B7641EcF9)
- New implementation: [`0xcAd8b0541b68Fe4EF07f4e87Aa33bb6d96bAaBC5`](https://etherscan.io/address/0xcAd8b0541b68Fe4EF07f4e87Aa33bb6d96bAaBC5)

```bash
# Fetches the contract and implementation sources from Etherscan.
0xweb i 0x80F7b35310861F0e3D73ec03C0400D6B7641EcF9 --chain eth --name AprPairFeedV1
0xweb i 0xcAd8b0541b68Fe4EF07f4e87Aa33bb6d96bAaBC5 --chain eth --name AprPairFeedV2

git diff --no-index ./0xc/eth/AprPairFeedV1/AprPairFeedV1/contracts/ ./0xc/eth/AprPairFeedV2/AprPairFeedV2/contracts/ > diffs/AprPairFeed.patch
git diff --no-index --diff-filter=DM ./0xc/eth/AprPairFeedV2/AprPairFeedV2/contracts/ ./contracts-tranches/contracts/ > diffs/AprPairFeed-git.patch
```


7. Accounting

- Proxy: [`0x5eFE7C9DA88568709E98b237D4D946aFbDA2aA52`](https://etherscan.io/address/0x5eFE7C9DA88568709E98b237D4D946aFbDA2aA52)
- Old implementation: [`0xeB97f3084d3817C9e64250B6D43cEF28E9dEa057`](https://etherscan.io/address/0xeB97f3084d3817C9e64250B6D43cEF28E9dEa057)
- New implementation: [`0x0C25e873C951470C4Fb4f4420018B136f7716a9C`](https://etherscan.io/address/0x0C25e873C951470C4Fb4f4420018B136f7716a9C)

```bash
# Fetches the contract and implementation sources from Etherscan.
0xweb i 0xeB97f3084d3817C9e64250B6D43cEF28E9dEa057 --chain eth --name AccountingV1
0xweb i 0x0C25e873C951470C4Fb4f4420018B136f7716a9C --chain eth --name AccountingV2

git diff --no-index ./0xc/eth/AccountingV1/AccountingV1/contracts/ ./0xc/eth/AccountingV2/AccountingV2/contracts/ > diffs/Accounting.patch
git diff --no-index --diff-filter=DM ./0xc/eth/AccountingV2/AccountingV2/contracts/ ./contracts-tranches/contracts/ > diffs/Accounting-git.patch
```


8. Junior Tranche

- Proxy: [`0xFC807058A352b61aEef6A38e2D0fC3990225E772`](https://etherscan.io/address/0xFC807058A352b61aEef6A38e2D0fC3990225E772)
- Old implementation: [`0xC71B908fA50Ce773C248e3632E46c7192807e767`](https://etherscan.io/address/0xC71B908fA50Ce773C248e3632E46c7192807e767)
- New implementation: [`0x0Ea5BdF736F84949563F1Ec66c79b9c047fb8965`](https://etherscan.io/address/0x0Ea5BdF736F84949563F1Ec66c79b9c047fb8965)

```bash
# Fetches the contract and implementation sources from Etherscan.
0xweb i 0xC71B908fA50Ce773C248e3632E46c7192807e767 --chain eth --name TrancheJrtV1
0xweb i 0x0Ea5BdF736F84949563F1Ec66c79b9c047fb8965 --chain eth --name TrancheJrtV2

git diff --no-index ./0xc/eth/TrancheJrtV1/TrancheJrtV1/contracts/ ./0xc/eth/TrancheJrtV2/TrancheJrtV2/contracts/ > diffs/TrancheJrt.patch
git diff --no-index --diff-filter=DM ./0xc/eth/TrancheJrtV2/TrancheJrtV2/contracts/ ./contracts-tranches/contracts/ > diffs/TrancheJrt-git.patch
```


9. Senior Tranche

- Proxy: [`0x65a44528e8868166401eA08b549E19552af589dB`](https://etherscan.io/address/0x65a44528e8868166401eA08b549E19552af589dB)
- Old implementation: [`0x86E638BCF6dFC98361491Faa4c6F8edE25CD739E`](https://etherscan.io/address/0x86E638BCF6dFC98361491Faa4c6F8edE25CD739E)
- New implementation: [`0x470B9D44674b4706bAD670DaBb75ccFDa90D2743`](https://etherscan.io/address/0x470B9D44674b4706bAD670DaBb75ccFDa90D2743)

```bash
# Fetches the contract and implementation sources from Etherscan.
0xweb i 0x86E638BCF6dFC98361491Faa4c6F8edE25CD739E --chain eth --name TrancheSrtV1
0xweb i 0x470B9D44674b4706bAD670DaBb75ccFDa90D2743 --chain eth --name TrancheSrtV2

git diff --no-index ./0xc/eth/TrancheSrtV1/TrancheSrtV1/contracts/ ./0xc/eth/TrancheSrtV2/TrancheSrtV2/contracts/ > diffs/TrancheSrt.patch
git diff --no-index --diff-filter=DM ./0xc/eth/TrancheSrtV2/TrancheSrtV2/contracts/ ./contracts-tranches/contracts/ > diffs/TrancheSrt-git.patch
```


10. TwoStepConfigManager

- Proxy: [`0x60DAe21944e6c1F4a185d33a217B05bFD647Eb79`](https://etherscan.io/address/0x60DAe21944e6c1F4a185d33a217B05bFD647Eb79)
- Old implementation: [`0x452F0E1BD7310e3cFb32383d7c200308E551FE8A`](https://etherscan.io/address/0x452F0E1BD7310e3cFb32383d7c200308E551FE8A)
- New implementation: [`0x658B16ceec3bbbdB05A91eBd73F297d064e931c9`](https://etherscan.io/address/0x658B16ceec3bbbdB05A91eBd73F297d064e931c9)

```bash
# Fetches the contract and implementation sources from Etherscan.
0xweb i 0x452F0E1BD7310e3cFb32383d7c200308E551FE8A --chain eth --name TwoStepConfigManagerV1
0xweb i 0x658B16ceec3bbbdB05A91eBd73F297d064e931c9 --chain eth --name TwoStepConfigManagerV2

git diff --no-index ./0xc/eth/TwoStepConfigManagerV1/TwoStepConfigManagerV1/contracts/ ./0xc/eth/TwoStepConfigManagerV2/TwoStepConfigManagerV2/contracts/ > diffs/TwoStepConfigManager.patch
git diff --no-index --diff-filter=DM ./0xc/eth/TwoStepConfigManagerV2/TwoStepConfigManagerV2/contracts/ ./contracts-tranches/contracts/ > diffs/TwoStepConfigManager-git.patch
```



## New Contracts

### AccountablePushOracle

> Accountable push oracle for valuation updates.

- Contract: [`0x433483570B69691a9e1e4Ef9791a4ca92DD8c1FC`](https://etherscan.io/address/0x433483570B69691a9e1e4Ef9791a4ca92DD8c1FC#code)

- Source code: [`contracts/tranches/oracles/valuation/AccountablePushOracle.sol`](https://github.com/Strata-Markets/contracts/blob/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/tranches/oracles/valuation/AccountablePushOracle.sol)

## Upgrade via Timelock Transactions

1. Safe Proposal: https://app.safe.global/transactions/tx?safe=eth:0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50&id=multisig_0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50_0x014a4b2bf84ebddbc73055c2cfa092692daefd569ce7dc26ff53e77ed67743ec

2. Timelock Schedule:

3. Timelock Execution:

----

This Timelock batch operation submits the following transactions:

| # | Target | Function | Contract / action | Notes |
| --- | --- | --- | --- | --- |
| 1 | `NeutrlCDOProxyAdmin` | `upgradeAndCall` | `StrataCDO` | Upgrade only |
| 2 | `NeutrlERC20CooldownProxyAdmin` | `upgradeAndCall` | `ERC20Cooldown` | Upgrade only |
| 3 | `NeutrlUnstakeCooldownProxyAdmin` | `upgradeAndCall` | `UnstakeCooldown` | Upgrade only |
| 4 | `NeutrlSharesCooldownProxyAdmin` | `upgradeAndCall` | `SharesCooldown` | Upgrade only |
| 5 | `NeutrlSNUSDStrategyProxyAdmin` | `upgradeAndCall` | `SNUSDStrategy` | Upgrade only |
| 6 | `NeutrlAprFeedsProxyAdmin` | `upgradeAndCall` | `AprPairFeed` | Upgrade only |
| 7 | `NeutrlAccountingProxyAdmin` | `upgradeAndCall` | `Accounting` | Calls `initializeV2()` |
| 8 | `NeutrlAprFeedsProxyAdmin` | `upgradeAndCall` | `AprPairFeed` | Duplicate of #6 |
| 9 | `NeutrlJrtProxyAdmin` | `upgradeAndCall` | Junior `Tranche` | Upgrade only |
| 10 | `NeutrlSrtProxyAdmin` | `upgradeAndCall` | Senior `Tranche` | Upgrade only |
| 11 | `NeutrlAccessControlManager` | `grantRole` | `PAUSER_ROLE` | Grants role to `0xb2a3cf69c97afd4de7882e5fee120e4efc77b706` |
| 12 | `NeutrlConfigManagerProxyAdmin` | `upgradeAndCall` | `TwoStepConfigManager` | Upgrade only |
| 13 | `NeutrlAccountingProxy` | `setValuationGracePeriod` | `Accounting` | Sets grace period to `86400` seconds |
| 14 | `NeutrlAccessControlManager` | `grantRole` | `PAUSER_ROLE` | Grants role to `AccountablePushOracle` |
| 15 | `NeutrlCDOProxy` | `setValuationKeeper` | `StrataCDO` | Sets keeper to `AccountablePushOracle` |

#### Transaction: #1

To:

[`0x12C609ef6d60eA23c84d1da0cD4c4Ca025025221`](https://etherscan.io/address/0x12C609ef6d60eA23c84d1da0cD4c4Ca025025221)
ID: **NeutrlCDOProxyAdmin**
Source: [`StrataCDO.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/tranches/StrataCDO.sol)

Data:

```h
0x9623609d0000000000000000000000007b6c960cf185fb27ecb91c174fae065978bedd1000000000000000000000000019a123423ca8daf9e87ded8dad690c3efc094f0200000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x7b6c960cf185fb27ECb91c174FAe065978beDd10
  implementation: 0x19A123423ca8dAF9E87DED8daD690c3Efc094f02
  data: 0x
```

- Old implementation: `0x3AFC31C41a53C355940d48A0D1c6005d8905d0A9`
- New implementation: `0x19A123423ca8dAF9E87DED8daD690c3Efc094f02`
- Etherscan diff, old vs new: [./diffs/StrataCDO.patch](./diffs/StrataCDO.patch)
- Etherscan source (new) vs Git commit ([`71b32b412db646af47d93e878da17f0ee1c2f517`](https://github.com/Strata-Markets/contracts/commit/71b32b412db646af47d93e878da17f0ee1c2f517)): [./diffs/StrataCDO-git.patch](./diffs/StrataCDO-git.patch) (_must be empty_)

----

#### Transaction: #2

To:

[`0xbD2fc75Cb79C73F98458a11037A7F645E38E8E64`](https://etherscan.io/address/0xbD2fc75Cb79C73F98458a11037A7F645E38E8E64)
ID: **NeutrlERC20CooldownProxyAdmin**
Source: [`ERC20Cooldown.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/tranches/base/cooldown/ERC20Cooldown.sol)

Data:

```h
0x9623609d0000000000000000000000001abc3c3c15a862276d057b2acbcfeab3589079900000000000000000000000005715a7c5adf96185f76e52f2a647d1904bf53f1900000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x1Abc3c3C15A862276D057b2AcBcFEab358907990
  implementation: 0x5715a7c5aDF96185F76E52F2a647D1904BF53f19
  data: 0x
```

- Old implementation: `0xa14009B8865C1B951511a8750E5E3d02e574db9d`
- New implementation: `0x5715a7c5aDF96185F76E52F2a647D1904BF53f19`
- Etherscan diff, old vs new: [./diffs/ERC20Cooldown.patch](./diffs/ERC20Cooldown.patch)
- Etherscan source (new) vs Git commit ([`71b32b412db646af47d93e878da17f0ee1c2f517`](https://github.com/Strata-Markets/contracts/commit/71b32b412db646af47d93e878da17f0ee1c2f517)): [./diffs/ERC20Cooldown-git.patch](./diffs/ERC20Cooldown-git.patch) (_must be empty_)

----

#### Transaction: #3

To:

[`0xe2d3BBe738567228277312DE250FA2181Bcc8c4f`](https://etherscan.io/address/0xe2d3BBe738567228277312DE250FA2181Bcc8c4f)
ID: **NeutrlUnstakeCooldownProxyAdmin**
Source: [`UnstakeCooldown.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/tranches/base/cooldown/UnstakeCooldown.sol)

Data:

```h
0x9623609d0000000000000000000000002a52363a2a0d765b31cb117a8e4d9ce58c2bc7490000000000000000000000001ae1d8b39ee6eec816681a0355c844bb150db35f00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x2a52363A2a0d765B31Cb117a8e4D9CE58c2Bc749
  implementation: 0x1Ae1d8B39ee6EEC816681a0355c844bB150Db35F
  data: 0x
```

- Old implementation: `0x2822B8d7Db77102937b040ed17Ac6785dfd98ce5`
- New implementation: `0x1Ae1d8B39ee6EEC816681a0355c844bB150Db35F`
- Etherscan diff, old vs new: [./diffs/UnstakeCooldown.patch](./diffs/UnstakeCooldown.patch)
- Etherscan source (new) vs Git commit ([`71b32b412db646af47d93e878da17f0ee1c2f517`](https://github.com/Strata-Markets/contracts/commit/71b32b412db646af47d93e878da17f0ee1c2f517)): [./diffs/UnstakeCooldown-git.patch](./diffs/UnstakeCooldown-git.patch) (_must be empty_)

----

#### Transaction: #4

To:

[`0xBEDb9acFcd3bC7FeE967AC5663283595b166f26B`](https://etherscan.io/address/0xBEDb9acFcd3bC7FeE967AC5663283595b166f26B)
ID: **NeutrlSharesCooldownProxyAdmin**
Source: [`SharesCooldown.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/tranches/base/cooldown/SharesCooldown.sol)

Data:

```h
0x9623609d0000000000000000000000000404ea6f1c89a5032ea2baddfbac20ce11cdf1ce00000000000000000000000091d7ced99b72029cee91528daa26441daffa07dc00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x0404EA6f1c89a5032eA2BAdDFbac20CE11CdF1cE
  implementation: 0x91d7ceD99b72029CeE91528Daa26441daFfA07dC
  data: 0x
```

- Old implementation: `0x655c80af21FA35d5d94bd8BB32b9e325E38A1E58`
- New implementation: `0x91d7ceD99b72029CeE91528Daa26441daFfA07dC`
- Etherscan diff, old vs new: [./diffs/SharesCooldown.patch](./diffs/SharesCooldown.patch)
- Etherscan source (new) vs Git commit ([`71b32b412db646af47d93e878da17f0ee1c2f517`](https://github.com/Strata-Markets/contracts/commit/71b32b412db646af47d93e878da17f0ee1c2f517)): [./diffs/SharesCooldown-git.patch](./diffs/SharesCooldown-git.patch) (_must be empty_)

----

#### Transaction: #5

To:

[`0xd7897cC9Ddab05Fa92e137f10393AcC5DD084E37`](https://etherscan.io/address/0xd7897cC9Ddab05Fa92e137f10393AcC5DD084E37)
ID: **NeutrlSNUSDStrategyProxyAdmin**
Source: [`sNUSDStrategy.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/tranches/strategies/neutrl/sNUSDStrategy.sol)

Data:

```h
0x9623609d0000000000000000000000003cef2c09c4fad37e9bdd86cd9810c3042fb5de880000000000000000000000002bc7ddf4bc208e8462b37246961c40ddac76a63500000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x3CeF2c09c4fAD37E9bdD86CD9810c3042fB5DE88
  implementation: 0x2bc7ddF4bC208e8462B37246961c40dDac76A635
  data: 0x
```

- Old implementation: `0x4C8fA0DbC1B3021b518DF4476E33AEbe2c4aF269`
- New implementation: `0x2bc7ddF4bC208e8462B37246961c40dDac76A635`
- Etherscan diff, old vs new: [./diffs/SNUSDStrategy.patch](./diffs/SNUSDStrategy.patch)
- Etherscan source (new) vs Git commit ([`71b32b412db646af47d93e878da17f0ee1c2f517`](https://github.com/Strata-Markets/contracts/commit/71b32b412db646af47d93e878da17f0ee1c2f517)): [./diffs/SNUSDStrategy-git.patch](./diffs/SNUSDStrategy-git.patch) (_must be empty_)

----

#### Transaction: #6

To:

[`0x963106aE3d824dF66E17BE128e6e9e8F7A3Bc76F`](https://etherscan.io/address/0x963106aE3d824dF66E17BE128e6e9e8F7A3Bc76F)
ID: **NeutrlAprFeedsProxyAdmin**
Source: [`AprPairFeed.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/tranches/oracles/AprPairFeed.sol)

Data:

```h
0x9623609d0000000000000000000000001695a2ff3e45365ab4111d2e1083b2a143b4d171000000000000000000000000cad8b0541b68fe4ef07f4e87aa33bb6d96baabc500000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x1695a2fF3e45365Ab4111d2E1083B2A143b4D171
  implementation: 0xcAd8b0541b68Fe4EF07f4e87Aa33bb6d96bAaBC5
  data: 0x
```

- Old implementation: `0x80F7b35310861F0e3D73ec03C0400D6B7641EcF9`
- New implementation: `0xcAd8b0541b68Fe4EF07f4e87Aa33bb6d96bAaBC5`
- Etherscan diff, old vs new: [./diffs/AprPairFeed.patch](./diffs/AprPairFeed.patch)
- Etherscan source (new) vs Git commit ([`71b32b412db646af47d93e878da17f0ee1c2f517`](https://github.com/Strata-Markets/contracts/commit/71b32b412db646af47d93e878da17f0ee1c2f517)): [./diffs/AprPairFeed-git.patch](./diffs/AprPairFeed-git.patch) (_must be empty_)

----

#### Transaction: #7

To:

[`0xcb484645698360b68652ed33F1Cb49836DFEb4B4`](https://etherscan.io/address/0xcb484645698360b68652ed33F1Cb49836DFEb4B4)
ID: **NeutrlAccountingProxyAdmin**
Source: [`Accounting.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/tranches/Accounting.sol)

Data:

```h
0x9623609d0000000000000000000000005efe7c9da88568709e98b237d4d946afbda2aa520000000000000000000000000c25e873c951470c4fb4f4420018b136f7716a9c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000045cd8a76b00000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x5eFE7C9DA88568709E98b237D4D946aFbDA2aA52
  implementation: 0x0C25e873C951470C4Fb4f4420018B136f7716a9C
  data: 0x5cd8a76b
  dataDecoded: initializeV2()
```

- Old implementation: `0xeB97f3084d3817C9e64250B6D43cEF28E9dEa057`
- New implementation: `0x0C25e873C951470C4Fb4f4420018B136f7716a9C`
- Etherscan diff, old vs new: [./diffs/Accounting.patch](./diffs/Accounting.patch)
- Etherscan source (new) vs Git commit ([`71b32b412db646af47d93e878da17f0ee1c2f517`](https://github.com/Strata-Markets/contracts/commit/71b32b412db646af47d93e878da17f0ee1c2f517)): [./diffs/Accounting-git.patch](./diffs/Accounting-git.patch) (_must be empty_)

----

#### Transaction: #8

> Duplicate: see transaction #6. The deployment script generated the same `NeutrlAprFeedsProxyAdmin.upgradeAndCall` call twice. This is not a blocker.

To:

[`0x963106aE3d824dF66E17BE128e6e9e8F7A3Bc76F`](https://etherscan.io/address/0x963106aE3d824dF66E17BE128e6e9e8F7A3Bc76F)
ID: **NeutrlAprFeedsProxyAdmin**
Source: [`AprPairFeed.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/tranches/oracles/AprPairFeed.sol)

Data:

```h
0x9623609d0000000000000000000000001695a2ff3e45365ab4111d2e1083b2a143b4d171000000000000000000000000cad8b0541b68fe4ef07f4e87aa33bb6d96baabc500000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x1695a2fF3e45365Ab4111d2E1083B2A143b4D171
  implementation: 0xcAd8b0541b68Fe4EF07f4e87Aa33bb6d96bAaBC5
  data: 0x
```

- Old implementation: `0x80F7b35310861F0e3D73ec03C0400D6B7641EcF9`
- New implementation: `0xcAd8b0541b68Fe4EF07f4e87Aa33bb6d96bAaBC5`
- Etherscan diff, old vs new: [./diffs/AprPairFeed.patch](./diffs/AprPairFeed.patch)
- Etherscan source (new) vs Git commit ([`71b32b412db646af47d93e878da17f0ee1c2f517`](https://github.com/Strata-Markets/contracts/commit/71b32b412db646af47d93e878da17f0ee1c2f517)): [./diffs/AprPairFeed-git.patch](./diffs/AprPairFeed-git.patch) (_must be empty_)

----

#### Transaction: #9

To:

[`0xec45EBDd0278ffBC9ce5731DC8E3a34dc8674c07`](https://etherscan.io/address/0xec45EBDd0278ffBC9ce5731DC8E3a34dc8674c07)
ID: **NeutrlJrtProxyAdmin**
Source: [`Tranche.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/tranches/Tranche.sol)

Data:

```h
0x9623609d000000000000000000000000fc807058a352b61aeef6a38e2d0fc3990225e7720000000000000000000000000ea5bdf736f84949563f1ec66c79b9c047fb896500000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0xFC807058A352b61aEef6A38e2D0fC3990225E772
  implementation: 0x0Ea5BdF736F84949563F1Ec66c79b9c047fb8965
  data: 0x
```

- Old implementation: `0xC71B908fA50Ce773C248e3632E46c7192807e767`
- New implementation: `0x0Ea5BdF736F84949563F1Ec66c79b9c047fb8965`
- Etherscan diff, old vs new: [./diffs/TrancheJrt.patch](./diffs/TrancheJrt.patch)
- Etherscan source (new) vs Git commit ([`71b32b412db646af47d93e878da17f0ee1c2f517`](https://github.com/Strata-Markets/contracts/commit/71b32b412db646af47d93e878da17f0ee1c2f517)): [./diffs/TrancheJrt-git.patch](./diffs/TrancheJrt-git.patch) (_must be empty_)

----

#### Transaction: #10

To:

[`0xBfA0344ee901C425F42039D203526cC26bC186fD`](https://etherscan.io/address/0xBfA0344ee901C425F42039D203526cC26bC186fD)
ID: **NeutrlSrtProxyAdmin**
Source: [`Tranche.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/tranches/Tranche.sol)

Data:

```h
0x9623609d00000000000000000000000065a44528e8868166401ea08b549e19552af589db000000000000000000000000470b9d44674b4706bad670dabb75ccfda90d274300000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x65a44528e8868166401eA08b549E19552af589dB
  implementation: 0x470B9D44674b4706bAD670DaBb75ccFDa90D2743
  data: 0x
```

- Old implementation: `0x86E638BCF6dFC98361491Faa4c6F8edE25CD739E`
- New implementation: `0x470B9D44674b4706bAD670DaBb75ccFDa90D2743`
- Etherscan diff, old vs new: [./diffs/TrancheSrt.patch](./diffs/TrancheSrt.patch)
- Etherscan source (new) vs Git commit ([`71b32b412db646af47d93e878da17f0ee1c2f517`](https://github.com/Strata-Markets/contracts/commit/71b32b412db646af47d93e878da17f0ee1c2f517)): [./diffs/TrancheSrt-git.patch](./diffs/TrancheSrt-git.patch) (_must be empty_)

----

#### Transaction: #11

To:

[`0x06E84a0Fe0c4Bc5C4ee3eDb580B32eB4B88203E4`](https://etherscan.io/address/0x06E84a0Fe0c4Bc5C4ee3eDb580B32eB4B88203E4)
ID: **NeutrlAccessControlManager**
Source: [`AccessControlManager.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/governance/AccessControlManager.sol)

Data:

```h
0x2f2ff15d65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a000000000000000000000000b2a3cf69c97afd4de7882e5fee120e4efc77b706
```

Function:

```yml
Function: grantRole(bytes32,address)
Parameters:
  role: 0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a
  roleName: PAUSER_ROLE
  account: 0xb2a3cf69c97afd4de7882e5fee120e4efc77b706
```

----

#### Transaction: #12

To:

[`0x61723F6bBFf3f74f2862028bb2353e76b6Fb8e99`](https://etherscan.io/address/0x61723F6bBFf3f74f2862028bb2353e76b6Fb8e99)
ID: **NeutrlConfigManagerProxyAdmin**
Source: [`TwoStepConfigManager.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/tranches/TwoStepConfigManager.sol)

Data:

```h
0x9623609d00000000000000000000000060dae21944e6c1f4a185d33a217b05bfd647eb79000000000000000000000000658b16ceec3bbbdb05a91ebd73f297d064e931c900000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x60DAe21944e6c1F4a185d33a217B05bFD647Eb79
  implementation: 0x658B16ceec3bbbdB05A91eBd73F297d064e931c9
  data: 0x
```

- Old implementation: `0x452F0E1BD7310e3cFb32383d7c200308E551FE8A`
- New implementation: `0x658B16ceec3bbbdB05A91eBd73F297d064e931c9`
- Etherscan diff, old vs new: [./diffs/TwoStepConfigManager.patch](./diffs/TwoStepConfigManager.patch)
- Etherscan source (new) vs Git commit ([`71b32b412db646af47d93e878da17f0ee1c2f517`](https://github.com/Strata-Markets/contracts/commit/71b32b412db646af47d93e878da17f0ee1c2f517)): [./diffs/TwoStepConfigManager-git.patch](./diffs/TwoStepConfigManager-git.patch) (_must be empty_)

----

#### Transaction: #13

To:

[`0x5eFE7C9DA88568709E98b237D4D946aFbDA2aA52`](https://etherscan.io/address/0x5eFE7C9DA88568709E98b237D4D946aFbDA2aA52)
ID: **NeutrlAccountingProxy**
Source: [`Accounting.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/tranches/Accounting.sol)

Data:

```h
0x7fdb18f10000000000000000000000000000000000000000000000000000000000015180
```

Function:

```yml
Function: setValuationGracePeriod(uint64)
Parameters:
  period: 86400
```

----

#### Transaction: #14

To:

[`0x06E84a0Fe0c4Bc5C4ee3eDb580B32eB4B88203E4`](https://etherscan.io/address/0x06E84a0Fe0c4Bc5C4ee3eDb580B32eB4B88203E4)
ID: **NeutrlAccessControlManager**
Source: [`AccessControlManager.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/governance/AccessControlManager.sol)

Data:

```h
0x2f2ff15d65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a000000000000000000000000433483570b69691a9e1e4ef9791a4ca92dd8c1fc
```

Function:

```yml
Function: grantRole(bytes32,address)
Parameters:
  role: 0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a
  roleName: PAUSER_ROLE
  account: 0x433483570B69691a9e1e4Ef9791a4ca92DD8c1FC
```

----

#### Transaction: #15

To:

[`0x7b6c960cf185fb27ECb91c174FAe065978beDd10`](https://etherscan.io/address/0x7b6c960cf185fb27ECb91c174FAe065978beDd10)
ID: **NeutrlCDOProxy**
Source: [`StrataCDO.sol`](https://github.com/Strata-Markets/contracts/tree/71b32b412db646af47d93e878da17f0ee1c2f517/contracts/tranches/StrataCDO.sol)

Data:

```h
0x34a4338a000000000000000000000000433483570b69691a9e1e4ef9791a4ca92dd8c1fc
```

Function:

```yml
Function: setValuationKeeper(address)
Parameters:
  valuationKeeper: 0x433483570B69691a9e1e4Ef9791a4ca92DD8c1FC
```



----

## Post-Execution Checks

- [ ] `NeutrlCDOProxy` implementation is `0x19A123423ca8dAF9E87DED8daD690c3Efc094f02`.
- [ ] `NeutrlERC20CooldownProxy` implementation is `0x5715a7c5aDF96185F76E52F2a647D1904BF53f19`.
- [ ] `NeutrlUnstakeCooldownProxy` implementation is `0x1Ae1d8B39ee6EEC816681a0355c844bB150Db35F`.
- [ ] `NeutrlSharesCooldownProxy` implementation is `0x91d7ceD99b72029CeE91528Daa26441daFfA07dC`.
- [ ] `NeutrlSNUSDStrategyProxy` implementation is `0x2bc7ddF4bC208e8462B37246961c40dDac76A635`.
- [ ] `NeutrlAprFeedsProxy` implementation is `0xcAd8b0541b68Fe4EF07f4e87Aa33bb6d96bAaBC5`.
- [ ] `NeutrlAccountingProxy` implementation is `0x0C25e873C951470C4Fb4f4420018B136f7716a9C`.
- [ ] `NeutrlJrtProxy` implementation is `0x0Ea5BdF736F84949563F1Ec66c79b9c047fb8965`.
- [ ] `NeutrlSrtProxy` implementation is `0x470B9D44674b4706bAD670DaBb75ccFDa90D2743`.
- [ ] `NeutrlConfigManagerProxy` implementation is `0x658B16ceec3bbbdB05A91eBd73F297d064e931c9`.
- [ ] `NeutrlAccountingProxy` initializer version includes the `initializeV2()` migration.
- [ ] `NeutrlAccountingProxy` `valuationGracePeriod` is `86400`.
- [ ] `AccountablePushOracle` has `PAUSER_ROLE` in `NeutrlAccessControlManager`.
- [ ] `NeutrlCDOProxy` `valuationKeeper` is `0x433483570B69691a9e1e4Ef9791a4ca92DD8c1FC`.

## Full Deployment Overview:

- [neutrl/deployments-eth.json](https://github.com/Strata-Markets/contracts/blob/71b32b412db646af47d93e878da17f0ee1c2f517/deployments/neutrl/deployments-eth.json)
- [common/deployments-eth.json](https://github.com/Strata-Markets/contracts/blob/71b32b412db646af47d93e878da17f0ee1c2f517/deployments/deployments-eth.json)
