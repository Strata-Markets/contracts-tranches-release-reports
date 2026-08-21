/**
 *  AUTO-Generated Class: 2026-08-21 10:04
 *  Implementation: https://etherscan.io/address/0x3AFC31C41a53C355940d48A0D1c6005d8905d0A9#code
 */
import di from 'a-di';
import { TAddress } from 'dequanto/models/TAddress';
import { TAccount } from 'dequanto/models/TAccount';
import { TBufferLike } from 'dequanto/models/TBufferLike';
import { ClientEventsStream, TClientEventsStreamData } from 'dequanto/clients/ClientEventsStream';
import { ContractBase } from 'dequanto/contracts/ContractBase';
import { ContractBaseUtils } from 'dequanto/contracts/utils/ContractBaseUtils';
import { ContractStorageReaderBase } from 'dequanto/contracts/ContractStorageReaderBase';
import { TxWriter } from 'dequanto/txs/TxWriter';
import { ITxLogItem } from 'dequanto/txs/receipt/ITxLogItem';
import { Web3Client } from 'dequanto/clients/Web3Client';
import { IBlockchainExplorer } from 'dequanto/explorer/IBlockchainExplorer';
import { SubjectStream } from 'dequanto/class/SubjectStream';


import type { ContractWriter } from 'dequanto/contracts/ContractWriter';
import type { TAbiItem } from 'dequanto/types/TAbi';
import type { TEth } from 'dequanto/models/TEth';
import type { TOverrideReturns } from 'dequanto/utils/types';


import { Evmscan } from 'dequanto/explorer/Evmscan';
import { EvmWeb3Client } from 'dequanto/clients/EvmWeb3Client';

export namespace StrataCDOV1Errors {
    export interface AccessControlUnauthorizedAccount {
        type: 'AccessControlUnauthorizedAccount'
        params: {
            account: TAddress
            neededRole: TEth.Hex
        }
    }
    export interface AlreadyConfigured {
        type: 'AlreadyConfigured'
        params: {
        }
    }
    export interface DepositCapReached {
        type: 'DepositCapReached'
        params: {
            tranche: TAddress
        }
    }
    export interface DepositsDisabled {
        type: 'DepositsDisabled'
        params: {
            tranche: TAddress
        }
    }
    export interface InvalidCaller {
        type: 'InvalidCaller'
        params: {
            caller: TAddress
        }
    }
    export interface InvalidConfigCooldown {
        type: 'InvalidConfigCooldown'
        params: {
        }
    }
    export interface InvalidInitialization {
        type: 'InvalidInitialization'
        params: {
        }
    }
    export interface InvalidTranche {
        type: 'InvalidTranche'
        params: {
            tranche: TAddress
        }
    }
    export interface MinSharesViolation {
        type: 'MinSharesViolation'
        params: {
        }
    }
    export interface NotInitializing {
        type: 'NotInitializing'
        params: {
        }
    }
    export interface OwnableInvalidOwner {
        type: 'OwnableInvalidOwner'
        params: {
            owner: TAddress
        }
    }
    export interface OwnableUnauthorizedAccount {
        type: 'OwnableUnauthorizedAccount'
        params: {
            account: TAddress
        }
    }
    export interface ReentrancyGuardReentrantCall {
        type: 'ReentrancyGuardReentrantCall'
        params: {
        }
    }
    export interface Unauthorized {
        type: 'Unauthorized'
        params: {
            sender: TAddress
            calledContract: TAddress
            sel: TEth.Hex
        }
    }
    export interface UnsupportedToken {
        type: 'UnsupportedToken'
        params: {
            token: TAddress
        }
    }
    export interface WithdrawalCapReached {
        type: 'WithdrawalCapReached'
        params: {
            tranche: TAddress
        }
    }
    export interface WithdrawalsDisabled {
        type: 'WithdrawalsDisabled'
        params: {
            tranche: TAddress
        }
    }
    export interface ZeroAddress {
        type: 'ZeroAddress'
        params: {
        }
    }
    export interface ZeroAmount {
        type: 'ZeroAmount'
        params: {
        }
    }
    export type Error = AccessControlUnauthorizedAccount | AlreadyConfigured | DepositCapReached | DepositsDisabled | InvalidCaller | InvalidConfigCooldown | InvalidInitialization | InvalidTranche | MinSharesViolation | NotInitializing | OwnableInvalidOwner | OwnableUnauthorizedAccount | ReentrancyGuardReentrantCall | Unauthorized | UnsupportedToken | WithdrawalCapReached | WithdrawalsDisabled | ZeroAddress | ZeroAmount
}

export class StrataCDOV1 extends ContractBase {
    constructor(
        public address: TEth.Address = '0x3AFC31C41a53C355940d48A0D1c6005d8905d0A9',
        public client: Web3Client = di.resolve(EvmWeb3Client, { platform: 'eth' }),
        public explorer: IBlockchainExplorer = di.resolve(Evmscan, { platform: 'eth' }),
    ) {
        super(address, client, explorer)

        this.storage = new StrataCDOV1StorageReader(this.address, this.client, this.explorer);
    }

    Types: TStrataCDOV1Types;

    $meta = {
        "class": "./0xc/eth/StrataCDOV1/StrataCDOV1.ts"
    }

    // 0x737b332d
    async COOLDOWN_WORKER_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'COOLDOWN_WORKER_ROLE'));
    }

    // 0xe63ab1e9
    async PAUSER_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'PAUSER_ROLE'));
    }

    // 0xbe290e19
    async PROPOSER_CONFIG_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'PROPOSER_CONFIG_ROLE'));
    }

    // 0xc5f87257
    async RESERVE_MANAGER_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'RESERVE_MANAGER_ROLE'));
    }

    // 0xfb2fa628
    async UPDATER_CDO_APR_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'UPDATER_CDO_APR_ROLE'));
    }

    // 0x8f3cc657
    async UPDATER_FEED_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'UPDATER_FEED_ROLE'));
    }

    // 0x668983ee
    async UPDATER_STRAT_CONFIG_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'UPDATER_STRAT_CONFIG_ROLE'));
    }

    // 0x79ba5097
    async acceptOwnership (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'acceptOwnership'), sender);
    }

    // 0x9624e83e
    async accounting (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'accounting'));
    }

    // 0xff5e3893
    async accrueFee (sender: TSender, tranche: TAddress, assets: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'accrueFee'), sender, tranche, assets);
    }

    // 0x7338ddcc
    async acm (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'acm'));
    }

    // 0xb59ff385
    async actionsJrt (): Promise<{ isDepositEnabled: boolean, isWithdrawEnabled: boolean }> {
        return this.$read(this.$getAbiItem('function', 'actionsJrt'));
    }

    // 0xfa0429f4
    async actionsSrt (): Promise<{ isDepositEnabled: boolean, isWithdrawEnabled: boolean }> {
        return this.$read(this.$getAbiItem('function', 'actionsSrt'));
    }

    // 0xaff38680
    async calculateExitMode (tranche: TAddress, owner: TAddress): Promise<{ mode: number, fee: bigint, cooldownSeconds: number }> {
        return this.$read(this.$getAbiItem('function', 'calculateExitMode'), tranche, owner);
    }

    // 0x5acb5082
    async configure (sender: TSender, accounting_: TAddress, strategy_: TAddress, jrtVault_: TAddress, srtVault_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'configure'), sender, accounting_, strategy_, jrtVault_, srtVault_);
    }

    // 0x575e16ff
    async cooldownShares (sender: TSender, tranche: TAddress, token: TAddress, shares: bigint, _sender: TAddress, receiver: TAddress, fee: bigint, cooldownSeconds: number): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'cooldownShares'), sender, tranche, token, shares, _sender, receiver, fee, cooldownSeconds);
    }

    // 0xee8f6a0e
    async coverage (): Promise<number> {
        return this.$read(this.$getAbiItem('function', 'coverage'));
    }

    // 0x20e8c565
    async deposit (sender: TSender, tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'deposit'), sender, tranche, token, tokenAmount, baseAssets);
    }

    // 0xd9b89244
    async distributeReserve (sender: TSender, jrtAmountIn: bigint, srtAmountIn: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'distributeReserve'), sender, jrtAmountIn, srtAmountIn);
    }

    // 0xc603df0f
    async exitFeeJrt (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'exitFeeJrt'));
    }

    // 0x1cf21f35
    async exitFeeSrt (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'exitFeeSrt'));
    }

    // 0x485cc955
    async initialize (sender: TSender, owner_: TAddress, acm_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'initialize'), sender, owner_, acm_);
    }

    // 0x4243ec4b
    async isJrt (tranche: TAddress): Promise<boolean> {
        return this.$read(this.$getAbiItem('function', 'isJrt'), tranche);
    }

    // 0x173eaa30
    async jrtShortfallPausePrice (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'jrtShortfallPausePrice'));
    }

    // 0x3e402006
    async jrtVault (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'jrtVault'));
    }

    // 0x402d267d
    async maxDeposit (tranche: TAddress): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'maxDeposit'), tranche);
    }

        
    // 0x8c22e9b0
    async maxWithdraw (tranche: TAddress, owner: TAddress): Promise<bigint>
    // 0xce96cb77
    async maxWithdraw (tranche: TAddress): Promise<bigint>
        async maxWithdraw (...args): Promise<bigint> {
            let abi = this.$getAbiItemOverload('maxWithdraw', args);
            return this.$read(abi, ...args);
        }

    // 0x8da5cb5b
    async owner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'owner'));
    }

    // 0xe30c3978
    async pendingOwner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'pendingOwner'));
    }

    // 0x8b46ae5e
    async pricePerShare (tranche: TAddress): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'pricePerShare'), tranche);
    }

    // 0xd3e0c4af
    async reduceReserve (sender: TSender, token: TAddress, tokenAmount: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'reduceReserve'), sender, token, tokenAmount);
    }

    // 0x715018a6
    async renounceOwnership (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'renounceOwnership'), sender);
    }

    // 0x0e32cb86
    async setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setAccessControlManager'), sender, accessControlManager_);
    }

    // 0x8c936c0d
    async setActionStates (sender: TSender, tranche: TAddress, isDepositEnabled: boolean, isWithdrawEnabled: boolean): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setActionStates'), sender, tranche, isDepositEnabled, isWithdrawEnabled);
    }

    // 0x1872cc60
    async setExitFees (sender: TSender, feeJrt: bigint, feeSrt: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setExitFees'), sender, feeJrt, feeSrt);
    }

    // 0xea75991d
    async setJrtShortfallPausePrice (sender: TSender, jrtShortfallPausePrice_: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setJrtShortfallPausePrice'), sender, jrtShortfallPausePrice_);
    }

    // 0x9e4bca6b
    async setReserveTreasury (sender: TSender, treasury_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setReserveTreasury'), sender, treasury_);
    }

    // 0x38c13fbc
    async setSharesCooldown (sender: TSender, sharesCooldown_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setSharesCooldown'), sender, sharesCooldown_);
    }

    // 0x593ec077
    async setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setTwoStepConfigManager'), sender, twoStepConfigManager_);
    }

    // 0xdb9eb2d8
    async sharesCooldown (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'sharesCooldown'));
    }

    // 0xa6ee7904
    async srtVault (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'srtVault'));
    }

    // 0xa8c62e76
    async strategy (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'strategy'));
    }

    // 0xf3e0ffbf
    async totalAssets (tranche: TAddress): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'totalAssets'), tranche);
    }

    // 0xe56fc243
    async totalAssetsUnlocked (): Promise<{ jrtNav: bigint, srtNav: bigint }> {
        return this.$read(this.$getAbiItem('function', 'totalAssetsUnlocked'));
    }

    // 0x8e57fd9d
    async totalStrategyAssets (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'totalStrategyAssets'));
    }

    // 0xf2fde38b
    async transferOwnership (sender: TSender, newOwner: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transferOwnership'), sender, newOwner);
    }

    // 0x61d027b3
    async treasury (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'treasury'));
    }

    // 0x2a1590a4
    async twoStepConfigManager (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'twoStepConfigManager'));
    }

    // 0x494347e7
    async updateAccounting (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'updateAccounting'), sender);
    }

    // 0x460816a0
    async updateBalanceFlow (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'updateBalanceFlow'), sender);
    }

    // 0x390425b0
    async withdraw (sender: TSender, tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, _sender: TAddress, receiver: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'withdraw'), sender, tranche, token, tokenAmount, baseAssets, _sender, receiver);
    }

    $call () {
        return super.$call() as IStrataCDOV1TxCaller;
    }
    $signed (): TOverrideReturns<IStrataCDOV1TxCaller, Promise<{ signed: TEth.Hex, error?: Error & { data?: { type: string, params } } }>> {
        return super.$signed() as any;
    }
    $data (): IStrataCDOV1TxData {
        return super.$data() as IStrataCDOV1TxData;
    }
    $gas (): TOverrideReturns<IStrataCDOV1TxCaller, Promise<{ gas?: bigint, price?: bigint, error?: Error & { data?: { type: string, params } } }>> {
        return super.$gas() as any;
    }

    onTransaction <TMethod extends keyof TStrataCDOV1Types['Methods']> (method: TMethod, options: Parameters<ContractBase['$onTransaction']>[0]): SubjectStream<{
        tx: TEth.Tx
        block: TEth.Block<TEth.Hex>
        calldata: {
            method: TMethod
            arguments: TStrataCDOV1Types['Methods'][TMethod]['arguments']
        }
    }> {
        options ??= {};
        options.filter ??= {};
        options.filter.method = method;
        return <any> this.$onTransaction(options);
    }

    onLog (event: keyof TEvents, cb?: (event: TClientEventsStreamData) => void): ClientEventsStream<TClientEventsStreamData> {
        return this.$onLog(event, cb);
    }

    async getPastLogs <TEventName extends keyof TEvents> (
        events: TEventName[]
        , options?: TEventLogOptions<TEventParams<TEventName>>
    ): Promise<ITxLogItem<TEventParams<TEventName>, TEventName>[]>
    async getPastLogs <TEventName extends keyof TEvents> (
        event: TEventName
        , options?: TEventLogOptions<TEventParams<TEventName>>
    ): Promise<ITxLogItem<TEventParams<TEventName>, TEventName>[]>
    async getPastLogs (mix: any, options?): Promise<any> {
        return await super.getPastLogs(mix, options) as any;
    }

    onDepositsStateChanged (fn?: (event: TClientEventsStreamData<TEventArguments<'DepositsStateChanged'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'DepositsStateChanged'>>> {
        return this.$onLog('DepositsStateChanged', fn);
    }

    onExitFeesSet (fn?: (event: TClientEventsStreamData<TEventArguments<'ExitFeesSet'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'ExitFeesSet'>>> {
        return this.$onLog('ExitFeesSet', fn);
    }

    onInitialized (fn?: (event: TClientEventsStreamData<TEventArguments<'Initialized'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'Initialized'>>> {
        return this.$onLog('Initialized', fn);
    }

    onJrtShortfallPausePriceSet (fn?: (event: TClientEventsStreamData<TEventArguments<'JrtShortfallPausePriceSet'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'JrtShortfallPausePriceSet'>>> {
        return this.$onLog('JrtShortfallPausePriceSet', fn);
    }

    onNewAccessControlManager (fn?: (event: TClientEventsStreamData<TEventArguments<'NewAccessControlManager'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'NewAccessControlManager'>>> {
        return this.$onLog('NewAccessControlManager', fn);
    }

    onNewTwoStepConfigManager (fn?: (event: TClientEventsStreamData<TEventArguments<'NewTwoStepConfigManager'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'NewTwoStepConfigManager'>>> {
        return this.$onLog('NewTwoStepConfigManager', fn);
    }

    onOwnershipTransferStarted (fn?: (event: TClientEventsStreamData<TEventArguments<'OwnershipTransferStarted'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'OwnershipTransferStarted'>>> {
        return this.$onLog('OwnershipTransferStarted', fn);
    }

    onOwnershipTransferred (fn?: (event: TClientEventsStreamData<TEventArguments<'OwnershipTransferred'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'OwnershipTransferred'>>> {
        return this.$onLog('OwnershipTransferred', fn);
    }

    onReserveDistributed (fn?: (event: TClientEventsStreamData<TEventArguments<'ReserveDistributed'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'ReserveDistributed'>>> {
        return this.$onLog('ReserveDistributed', fn);
    }

    onReserveReduced (fn?: (event: TClientEventsStreamData<TEventArguments<'ReserveReduced'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'ReserveReduced'>>> {
        return this.$onLog('ReserveReduced', fn);
    }

    onSharesCooldownSet (fn?: (event: TClientEventsStreamData<TEventArguments<'SharesCooldownSet'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'SharesCooldownSet'>>> {
        return this.$onLog('SharesCooldownSet', fn);
    }

    onShortfallPaused (fn?: (event: TClientEventsStreamData<TEventArguments<'ShortfallPaused'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'ShortfallPaused'>>> {
        return this.$onLog('ShortfallPaused', fn);
    }

    onTreasurySet (fn?: (event: TClientEventsStreamData<TEventArguments<'TreasurySet'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'TreasurySet'>>> {
        return this.$onLog('TreasurySet', fn);
    }

    onWithdrawalsStateChanged (fn?: (event: TClientEventsStreamData<TEventArguments<'WithdrawalsStateChanged'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'WithdrawalsStateChanged'>>> {
        return this.$onLog('WithdrawalsStateChanged', fn);
    }

    extractLogsDepositsStateChanged (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'DepositsStateChanged'>>[] {
        let abi = this.$getAbiItem('event', 'DepositsStateChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'DepositsStateChanged'>>[];
    }

    extractLogsExitFeesSet (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'ExitFeesSet'>>[] {
        let abi = this.$getAbiItem('event', 'ExitFeesSet');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'ExitFeesSet'>>[];
    }

    extractLogsInitialized (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'Initialized'>>[] {
        let abi = this.$getAbiItem('event', 'Initialized');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'Initialized'>>[];
    }

    extractLogsJrtShortfallPausePriceSet (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'JrtShortfallPausePriceSet'>>[] {
        let abi = this.$getAbiItem('event', 'JrtShortfallPausePriceSet');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'JrtShortfallPausePriceSet'>>[];
    }

    extractLogsNewAccessControlManager (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'NewAccessControlManager'>>[] {
        let abi = this.$getAbiItem('event', 'NewAccessControlManager');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'NewAccessControlManager'>>[];
    }

    extractLogsNewTwoStepConfigManager (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'NewTwoStepConfigManager'>>[] {
        let abi = this.$getAbiItem('event', 'NewTwoStepConfigManager');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'NewTwoStepConfigManager'>>[];
    }

    extractLogsOwnershipTransferStarted (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'OwnershipTransferStarted'>>[] {
        let abi = this.$getAbiItem('event', 'OwnershipTransferStarted');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'OwnershipTransferStarted'>>[];
    }

    extractLogsOwnershipTransferred (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'OwnershipTransferred'>>[] {
        let abi = this.$getAbiItem('event', 'OwnershipTransferred');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'OwnershipTransferred'>>[];
    }

    extractLogsReserveDistributed (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'ReserveDistributed'>>[] {
        let abi = this.$getAbiItem('event', 'ReserveDistributed');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'ReserveDistributed'>>[];
    }

    extractLogsReserveReduced (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'ReserveReduced'>>[] {
        let abi = this.$getAbiItem('event', 'ReserveReduced');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'ReserveReduced'>>[];
    }

    extractLogsSharesCooldownSet (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'SharesCooldownSet'>>[] {
        let abi = this.$getAbiItem('event', 'SharesCooldownSet');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'SharesCooldownSet'>>[];
    }

    extractLogsShortfallPaused (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'ShortfallPaused'>>[] {
        let abi = this.$getAbiItem('event', 'ShortfallPaused');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'ShortfallPaused'>>[];
    }

    extractLogsTreasurySet (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'TreasurySet'>>[] {
        let abi = this.$getAbiItem('event', 'TreasurySet');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'TreasurySet'>>[];
    }

    extractLogsWithdrawalsStateChanged (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'WithdrawalsStateChanged'>>[] {
        let abi = this.$getAbiItem('event', 'WithdrawalsStateChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'WithdrawalsStateChanged'>>[];
    }

    async getPastLogsDepositsStateChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { tranche?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'DepositsStateChanged'>>[]> {
        return await this.$getPastLogsParsed('DepositsStateChanged', options) as any;
    }

    async getPastLogsExitFeesSet (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'ExitFeesSet'>>[]> {
        return await this.$getPastLogsParsed('ExitFeesSet', options) as any;
    }

    async getPastLogsInitialized (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'Initialized'>>[]> {
        return await this.$getPastLogsParsed('Initialized', options) as any;
    }

    async getPastLogsJrtShortfallPausePriceSet (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'JrtShortfallPausePriceSet'>>[]> {
        return await this.$getPastLogsParsed('JrtShortfallPausePriceSet', options) as any;
    }

    async getPastLogsNewAccessControlManager (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'NewAccessControlManager'>>[]> {
        return await this.$getPastLogsParsed('NewAccessControlManager', options) as any;
    }

    async getPastLogsNewTwoStepConfigManager (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'NewTwoStepConfigManager'>>[]> {
        return await this.$getPastLogsParsed('NewTwoStepConfigManager', options) as any;
    }

    async getPastLogsOwnershipTransferStarted (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { previousOwner?: TAddress,newOwner?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'OwnershipTransferStarted'>>[]> {
        return await this.$getPastLogsParsed('OwnershipTransferStarted', options) as any;
    }

    async getPastLogsOwnershipTransferred (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { previousOwner?: TAddress,newOwner?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'OwnershipTransferred'>>[]> {
        return await this.$getPastLogsParsed('OwnershipTransferred', options) as any;
    }

    async getPastLogsReserveDistributed (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'ReserveDistributed'>>[]> {
        return await this.$getPastLogsParsed('ReserveDistributed', options) as any;
    }

    async getPastLogsReserveReduced (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'ReserveReduced'>>[]> {
        return await this.$getPastLogsParsed('ReserveReduced', options) as any;
    }

    async getPastLogsSharesCooldownSet (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'SharesCooldownSet'>>[]> {
        return await this.$getPastLogsParsed('SharesCooldownSet', options) as any;
    }

    async getPastLogsShortfallPaused (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'ShortfallPaused'>>[]> {
        return await this.$getPastLogsParsed('ShortfallPaused', options) as any;
    }

    async getPastLogsTreasurySet (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'TreasurySet'>>[]> {
        return await this.$getPastLogsParsed('TreasurySet', options) as any;
    }

    async getPastLogsWithdrawalsStateChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { tranche?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'WithdrawalsStateChanged'>>[]> {
        return await this.$getPastLogsParsed('WithdrawalsStateChanged', options) as any;
    }

    abi: TAbiItem[] = [{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32","name":"neededRole","type":"bytes32"}],"name":"AccessControlUnauthorizedAccount","type":"error"},{"inputs":[],"name":"AlreadyConfigured","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"DepositCapReached","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"DepositsDisabled","type":"error"},{"inputs":[{"internalType":"address","name":"caller","type":"address"}],"name":"InvalidCaller","type":"error"},{"inputs":[],"name":"InvalidConfigCooldown","type":"error"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"InvalidTranche","type":"error"},{"inputs":[],"name":"MinSharesViolation","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"calledContract","type":"address"},{"internalType":"bytes4","name":"sel","type":"bytes4"}],"name":"Unauthorized","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"UnsupportedToken","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"WithdrawalCapReached","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"WithdrawalsDisabled","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"inputs":[],"name":"ZeroAmount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tranche","type":"address"},{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"DepositsStateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"jrt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"srt","type":"uint256"}],"name":"ExitFeesSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"pricePerShare","type":"uint256"}],"name":"JrtShortfallPausePriceSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"accessControlManager","type":"address"}],"name":"NewAccessControlManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"twoStepConfigManager","type":"address"}],"name":"NewTwoStepConfigManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"jrtAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"srtAmount","type":"uint256"}],"name":"ReserveDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReserveReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sharesCooldown","type":"address"}],"name":"SharesCooldownSet","type":"event"},{"anonymous":false,"inputs":[],"name":"ShortfallPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"treasury","type":"address"}],"name":"TreasurySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tranche","type":"address"},{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"WithdrawalsStateChanged","type":"event"},{"inputs":[],"name":"COOLDOWN_WORKER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROPOSER_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RESERVE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_CDO_APR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_FEED_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_STRAT_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"accounting","outputs":[{"internalType":"contract IAccounting","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"},{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"accrueFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acm","outputs":[{"internalType":"contract IAccessControlManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"actionsJrt","outputs":[{"internalType":"bool","name":"isDepositEnabled","type":"bool"},{"internalType":"bool","name":"isWithdrawEnabled","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"actionsSrt","outputs":[{"internalType":"bool","name":"isDepositEnabled","type":"bool"},{"internalType":"bool","name":"isWithdrawEnabled","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"calculateExitMode","outputs":[{"internalType":"enum IStrataCDO.TExitMode","name":"mode","type":"uint8"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint32","name":"cooldownSeconds","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IAccounting","name":"accounting_","type":"address"},{"internalType":"contract IStrategy","name":"strategy_","type":"address"},{"internalType":"contract ITranche","name":"jrtVault_","type":"address"},{"internalType":"contract ITranche","name":"srtVault_","type":"address"}],"name":"configure","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint32","name":"cooldownSeconds","type":"uint32"}],"name":"cooldownShares","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"coverage","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"baseAssets","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"jrtAmountIn","type":"uint256"},{"internalType":"uint256","name":"srtAmountIn","type":"uint256"}],"name":"distributeReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exitFeeJrt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exitFeeSrt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"acm_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"isJrt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jrtShortfallPausePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jrtVault","outputs":[{"internalType":"contract ITranche","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"maxDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"maxWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"maxWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"pricePerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"reduceReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"accessControlManager_","type":"address"}],"name":"setAccessControlManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"},{"internalType":"bool","name":"isDepositEnabled","type":"bool"},{"internalType":"bool","name":"isWithdrawEnabled","type":"bool"}],"name":"setActionStates","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"feeJrt","type":"uint256"},{"internalType":"uint256","name":"feeSrt","type":"uint256"}],"name":"setExitFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"jrtShortfallPausePrice_","type":"uint256"}],"name":"setJrtShortfallPausePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"treasury_","type":"address"}],"name":"setReserveTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ISharesCooldown","name":"sharesCooldown_","type":"address"}],"name":"setSharesCooldown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"twoStepConfigManager_","type":"address"}],"name":"setTwoStepConfigManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesCooldown","outputs":[{"internalType":"contract ISharesCooldown","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"srtVault","outputs":[{"internalType":"contract ITranche","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"strategy","outputs":[{"internalType":"contract IStrategy","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"totalAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAssetsUnlocked","outputs":[{"internalType":"uint256","name":"jrtNav","type":"uint256"},{"internalType":"uint256","name":"srtNav","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStrategyAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"twoStepConfigManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updateAccounting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateBalanceFlow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"baseAssets","type":"uint256"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

    declare storage: StrataCDOV1StorageReader
}

type TSender = TAccount & {
    value?: string | number | bigint
}

type TEventLogOptions<TParams> = {
    fromBlock?: number | Date
    toBlock?: number | Date
    params?: TParams
}

export type TStrataCDOV1Types = {
    Events: {
        DepositsStateChanged: {
            outputParams: { tranche: TAddress, enabled: boolean },
            outputArgs:   [ tranche: TAddress, enabled: boolean ],
        }
        ExitFeesSet: {
            outputParams: { jrt: bigint, srt: bigint },
            outputArgs:   [ jrt: bigint, srt: bigint ],
        }
        Initialized: {
            outputParams: { version: number },
            outputArgs:   [ version: number ],
        }
        JrtShortfallPausePriceSet: {
            outputParams: { pricePerShare: bigint },
            outputArgs:   [ pricePerShare: bigint ],
        }
        NewAccessControlManager: {
            outputParams: { accessControlManager: TAddress },
            outputArgs:   [ accessControlManager: TAddress ],
        }
        NewTwoStepConfigManager: {
            outputParams: { twoStepConfigManager: TAddress },
            outputArgs:   [ twoStepConfigManager: TAddress ],
        }
        OwnershipTransferStarted: {
            outputParams: { previousOwner: TAddress, newOwner: TAddress },
            outputArgs:   [ previousOwner: TAddress, newOwner: TAddress ],
        }
        OwnershipTransferred: {
            outputParams: { previousOwner: TAddress, newOwner: TAddress },
            outputArgs:   [ previousOwner: TAddress, newOwner: TAddress ],
        }
        ReserveDistributed: {
            outputParams: { jrtAmount: bigint, srtAmount: bigint },
            outputArgs:   [ jrtAmount: bigint, srtAmount: bigint ],
        }
        ReserveReduced: {
            outputParams: { token: TAddress, amount: bigint },
            outputArgs:   [ token: TAddress, amount: bigint ],
        }
        SharesCooldownSet: {
            outputParams: { sharesCooldown: TAddress },
            outputArgs:   [ sharesCooldown: TAddress ],
        }
        ShortfallPaused: {
            outputParams: {  },
            outputArgs:   [  ],
        }
        TreasurySet: {
            outputParams: { treasury: TAddress },
            outputArgs:   [ treasury: TAddress ],
        }
        WithdrawalsStateChanged: {
            outputParams: { tranche: TAddress, enabled: boolean },
            outputArgs:   [ tranche: TAddress, enabled: boolean ],
        }
    },
    Methods: {
        COOLDOWN_WORKER_ROLE: {
          method: "COOLDOWN_WORKER_ROLE"
          arguments: [  ]
        }
        PAUSER_ROLE: {
          method: "PAUSER_ROLE"
          arguments: [  ]
        }
        PROPOSER_CONFIG_ROLE: {
          method: "PROPOSER_CONFIG_ROLE"
          arguments: [  ]
        }
        RESERVE_MANAGER_ROLE: {
          method: "RESERVE_MANAGER_ROLE"
          arguments: [  ]
        }
        UPDATER_CDO_APR_ROLE: {
          method: "UPDATER_CDO_APR_ROLE"
          arguments: [  ]
        }
        UPDATER_FEED_ROLE: {
          method: "UPDATER_FEED_ROLE"
          arguments: [  ]
        }
        UPDATER_STRAT_CONFIG_ROLE: {
          method: "UPDATER_STRAT_CONFIG_ROLE"
          arguments: [  ]
        }
        acceptOwnership: {
          method: "acceptOwnership"
          arguments: [  ]
        }
        accounting: {
          method: "accounting"
          arguments: [  ]
        }
        accrueFee: {
          method: "accrueFee"
          arguments: [ tranche: TAddress, assets: bigint ]
        }
        acm: {
          method: "acm"
          arguments: [  ]
        }
        actionsJrt: {
          method: "actionsJrt"
          arguments: [  ]
        }
        actionsSrt: {
          method: "actionsSrt"
          arguments: [  ]
        }
        calculateExitMode: {
          method: "calculateExitMode"
          arguments: [ tranche: TAddress, owner: TAddress ]
        }
        configure: {
          method: "configure"
          arguments: [ accounting_: TAddress, strategy_: TAddress, jrtVault_: TAddress, srtVault_: TAddress ]
        }
        cooldownShares: {
          method: "cooldownShares"
          arguments: [ tranche: TAddress, token: TAddress, shares: bigint, _sender: TAddress, receiver: TAddress, fee: bigint, cooldownSeconds: number ]
        }
        coverage: {
          method: "coverage"
          arguments: [  ]
        }
        deposit: {
          method: "deposit"
          arguments: [ tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint ]
        }
        distributeReserve: {
          method: "distributeReserve"
          arguments: [ jrtAmountIn: bigint, srtAmountIn: bigint ]
        }
        exitFeeJrt: {
          method: "exitFeeJrt"
          arguments: [  ]
        }
        exitFeeSrt: {
          method: "exitFeeSrt"
          arguments: [  ]
        }
        initialize: {
          method: "initialize"
          arguments: [ owner_: TAddress, acm_: TAddress ]
        }
        isJrt: {
          method: "isJrt"
          arguments: [ tranche: TAddress ]
        }
        jrtShortfallPausePrice: {
          method: "jrtShortfallPausePrice"
          arguments: [  ]
        }
        jrtVault: {
          method: "jrtVault"
          arguments: [  ]
        }
        maxDeposit: {
          method: "maxDeposit"
          arguments: [ tranche: TAddress ]
        }
        maxWithdraw: {
          method: "maxWithdraw"
          arguments: [ tranche: TAddress, owner: TAddress ] | [ tranche: TAddress ]
        }
        owner: {
          method: "owner"
          arguments: [  ]
        }
        pendingOwner: {
          method: "pendingOwner"
          arguments: [  ]
        }
        pricePerShare: {
          method: "pricePerShare"
          arguments: [ tranche: TAddress ]
        }
        reduceReserve: {
          method: "reduceReserve"
          arguments: [ token: TAddress, tokenAmount: bigint ]
        }
        renounceOwnership: {
          method: "renounceOwnership"
          arguments: [  ]
        }
        setAccessControlManager: {
          method: "setAccessControlManager"
          arguments: [ accessControlManager_: TAddress ]
        }
        setActionStates: {
          method: "setActionStates"
          arguments: [ tranche: TAddress, isDepositEnabled: boolean, isWithdrawEnabled: boolean ]
        }
        setExitFees: {
          method: "setExitFees"
          arguments: [ feeJrt: bigint, feeSrt: bigint ]
        }
        setJrtShortfallPausePrice: {
          method: "setJrtShortfallPausePrice"
          arguments: [ jrtShortfallPausePrice_: bigint ]
        }
        setReserveTreasury: {
          method: "setReserveTreasury"
          arguments: [ treasury_: TAddress ]
        }
        setSharesCooldown: {
          method: "setSharesCooldown"
          arguments: [ sharesCooldown_: TAddress ]
        }
        setTwoStepConfigManager: {
          method: "setTwoStepConfigManager"
          arguments: [ twoStepConfigManager_: TAddress ]
        }
        sharesCooldown: {
          method: "sharesCooldown"
          arguments: [  ]
        }
        srtVault: {
          method: "srtVault"
          arguments: [  ]
        }
        strategy: {
          method: "strategy"
          arguments: [  ]
        }
        totalAssets: {
          method: "totalAssets"
          arguments: [ tranche: TAddress ]
        }
        totalAssetsUnlocked: {
          method: "totalAssetsUnlocked"
          arguments: [  ]
        }
        totalStrategyAssets: {
          method: "totalStrategyAssets"
          arguments: [  ]
        }
        transferOwnership: {
          method: "transferOwnership"
          arguments: [ newOwner: TAddress ]
        }
        treasury: {
          method: "treasury"
          arguments: [  ]
        }
        twoStepConfigManager: {
          method: "twoStepConfigManager"
          arguments: [  ]
        }
        updateAccounting: {
          method: "updateAccounting"
          arguments: [  ]
        }
        updateBalanceFlow: {
          method: "updateBalanceFlow"
          arguments: [  ]
        }
        withdraw: {
          method: "withdraw"
          arguments: [ tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, _sender: TAddress, receiver: TAddress ]
        }
    }
}



class StrataCDOV1StorageReader extends ContractStorageReaderBase {
    constructor(
        public address: TAddress,
        public client: Web3Client,
        public explorer: IBlockchainExplorer,
    ) {
        super(address, client, explorer);

        this.$createHandler(this.$slots);
    }

    async acm(): Promise<TAddress> {
        return this.$storage.get(['acm', ]);
    }

    async twoStepConfigManager(): Promise<TAddress> {
        return this.$storage.get(['twoStepConfigManager', ]);
    }

    async __gap(): Promise<bigint[48]> {
        return this.$storage.get(['__gap', ]);
    }

    async accounting(): Promise<TAddress> {
        return this.$storage.get(['accounting', ]);
    }

    async strategy(): Promise<TAddress> {
        return this.$storage.get(['strategy', ]);
    }

    async jrtVault(): Promise<TAddress> {
        return this.$storage.get(['jrtVault', ]);
    }

    async srtVault(): Promise<TAddress> {
        return this.$storage.get(['srtVault', ]);
    }

    async treasury(): Promise<TAddress> {
        return this.$storage.get(['treasury', ]);
    }

    async actionsJrt(): Promise<{ isDepositEnabled: boolean, isWithdrawEnabled: boolean }> {
        return this.$storage.get(['actionsJrt', ]);
    }

    async actionsSrt(): Promise<{ isDepositEnabled: boolean, isWithdrawEnabled: boolean }> {
        return this.$storage.get(['actionsSrt', ]);
    }

    async jrtShortfallPausePrice(): Promise<bigint> {
        return this.$storage.get(['jrtShortfallPausePrice', ]);
    }

    async exitFeeJrt(): Promise<bigint> {
        return this.$storage.get(['exitFeeJrt', ]);
    }

    async exitFeeSrt(): Promise<bigint> {
        return this.$storage.get(['exitFeeSrt', ]);
    }

    async sharesCooldown(): Promise<TAddress> {
        return this.$storage.get(['sharesCooldown', ]);
    }

    $slots = [
    {
        "slot": 0,
        "position": 0,
        "name": "acm",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 1,
        "position": 0,
        "name": "twoStepConfigManager",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 2,
        "position": 0,
        "name": "__gap",
        "size": 12288,
        "type": "uint256[48]"
    },
    {
        "slot": 50,
        "position": 0,
        "name": "accounting",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 51,
        "position": 0,
        "name": "strategy",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 52,
        "position": 0,
        "name": "jrtVault",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 53,
        "position": 0,
        "name": "srtVault",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 54,
        "position": 0,
        "name": "treasury",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 55,
        "position": 0,
        "name": "actionsJrt",
        "size": 16,
        "type": "(bool isDepositEnabled, bool isWithdrawEnabled)"
    },
    {
        "slot": 56,
        "position": 0,
        "name": "actionsSrt",
        "size": 16,
        "type": "(bool isDepositEnabled, bool isWithdrawEnabled)"
    },
    {
        "slot": 57,
        "position": 0,
        "name": "jrtShortfallPausePrice",
        "size": 256,
        "type": "uint256"
    },
    {
        "slot": 58,
        "position": 0,
        "name": "exitFeeJrt",
        "size": 256,
        "type": "uint256"
    },
    {
        "slot": 59,
        "position": 0,
        "name": "exitFeeSrt",
        "size": 256,
        "type": "uint256"
    },
    {
        "slot": 60,
        "position": 0,
        "name": "sharesCooldown",
        "size": 160,
        "type": "address"
    }
]

}


interface IStrataCDOV1TxCaller {
    acceptOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    accrueFee (sender: TSender, tranche: TAddress, assets: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    configure (sender: TSender, accounting_: TAddress, strategy_: TAddress, jrtVault_: TAddress, srtVault_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    cooldownShares (sender: TSender, tranche: TAddress, token: TAddress, shares: bigint, _sender: TAddress, receiver: TAddress, fee: bigint, cooldownSeconds: number): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    deposit (sender: TSender, tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    distributeReserve (sender: TSender, jrtAmountIn: bigint, srtAmountIn: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    reduceReserve (sender: TSender, token: TAddress, tokenAmount: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    renounceOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setActionStates (sender: TSender, tranche: TAddress, isDepositEnabled: boolean, isWithdrawEnabled: boolean): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setExitFees (sender: TSender, feeJrt: bigint, feeSrt: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setJrtShortfallPausePrice (sender: TSender, jrtShortfallPausePrice_: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setReserveTreasury (sender: TSender, treasury_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setSharesCooldown (sender: TSender, sharesCooldown_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    updateAccounting (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    updateBalanceFlow (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    withdraw (sender: TSender, tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, _sender: TAddress, receiver: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
}


interface IStrataCDOV1TxData {
    acceptOwnership (sender: TSender, ): Promise<TEth.TxLike>
    accrueFee (sender: TSender, tranche: TAddress, assets: bigint): Promise<TEth.TxLike>
    configure (sender: TSender, accounting_: TAddress, strategy_: TAddress, jrtVault_: TAddress, srtVault_: TAddress): Promise<TEth.TxLike>
    cooldownShares (sender: TSender, tranche: TAddress, token: TAddress, shares: bigint, _sender: TAddress, receiver: TAddress, fee: bigint, cooldownSeconds: number): Promise<TEth.TxLike>
    deposit (sender: TSender, tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint): Promise<TEth.TxLike>
    distributeReserve (sender: TSender, jrtAmountIn: bigint, srtAmountIn: bigint): Promise<TEth.TxLike>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress): Promise<TEth.TxLike>
    reduceReserve (sender: TSender, token: TAddress, tokenAmount: bigint): Promise<TEth.TxLike>
    renounceOwnership (sender: TSender, ): Promise<TEth.TxLike>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TEth.TxLike>
    setActionStates (sender: TSender, tranche: TAddress, isDepositEnabled: boolean, isWithdrawEnabled: boolean): Promise<TEth.TxLike>
    setExitFees (sender: TSender, feeJrt: bigint, feeSrt: bigint): Promise<TEth.TxLike>
    setJrtShortfallPausePrice (sender: TSender, jrtShortfallPausePrice_: bigint): Promise<TEth.TxLike>
    setReserveTreasury (sender: TSender, treasury_: TAddress): Promise<TEth.TxLike>
    setSharesCooldown (sender: TSender, sharesCooldown_: TAddress): Promise<TEth.TxLike>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TEth.TxLike>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<TEth.TxLike>
    updateAccounting (sender: TSender, ): Promise<TEth.TxLike>
    updateBalanceFlow (sender: TSender, ): Promise<TEth.TxLike>
    withdraw (sender: TSender, tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, _sender: TAddress, receiver: TAddress): Promise<TEth.TxLike>
}


type TEvents = TStrataCDOV1Types['Events'];
type TEventParams<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputParams']>;
type TEventArguments<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputArgs']>;
