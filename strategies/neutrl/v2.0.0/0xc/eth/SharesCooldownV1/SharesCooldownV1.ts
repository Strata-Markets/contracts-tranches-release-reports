/**
 *  AUTO-Generated Class: 2026-08-21 10:36
 *  Implementation: https://etherscan.io/address/0x655c80af21FA35d5d94bd8BB32b9e325E38A1E58#code
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

export namespace SharesCooldownV1Errors {
    export interface AccessControlUnauthorizedAccount {
        type: 'AccessControlUnauthorizedAccount'
        params: {
            account: TAddress
            neededRole: TEth.Hex
        }
    }
    export interface ExternalReceiverRequestLimitReached {
        type: 'ExternalReceiverRequestLimitReached'
        params: {
            token: TAddress
            from: TAddress
            to: TAddress
            amount: bigint
        }
    }
    export interface InvalidInitialization {
        type: 'InvalidInitialization'
        params: {
        }
    }
    export interface InvalidTime {
        type: 'InvalidTime'
        params: {
        }
    }
    export interface NotInitializing {
        type: 'NotInitializing'
        params: {
        }
    }
    export interface NothingToFinalize {
        type: 'NothingToFinalize'
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
    export interface ZeroAddress {
        type: 'ZeroAddress'
        params: {
        }
    }
    export type Error = AccessControlUnauthorizedAccount | ExternalReceiverRequestLimitReached | InvalidInitialization | InvalidTime | NotInitializing | NothingToFinalize | OwnableInvalidOwner | OwnableUnauthorizedAccount | ReentrancyGuardReentrantCall | Unauthorized | UnsupportedToken | ZeroAddress
}

export class SharesCooldownV1 extends ContractBase {
    constructor(
        public address: TEth.Address = '0x655c80af21FA35d5d94bd8BB32b9e325E38A1E58',
        public client: Web3Client = di.resolve(EvmWeb3Client, { platform: 'eth' }),
        public explorer: IBlockchainExplorer = di.resolve(Evmscan, { platform: 'eth' }),
    ) {
        super(address, client, explorer)

        this.storage = new SharesCooldownV1StorageReader(this.address, this.client, this.explorer);
    }

    Types: TSharesCooldownV1Types;

    $meta = {
        "class": "./0xc/eth/SharesCooldownV1/SharesCooldownV1.ts"
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

    // 0x7338ddcc
    async acm (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'acm'));
    }

    // 0x47639321
    async activeRequests (vault: TAddress, account: TAddress, input2: bigint): Promise<{ unlockAt: number, shares: bigint, token: TAddress }> {
        return this.$read(this.$getAbiItem('function', 'activeRequests'), vault, account, input2);
    }

        
    // 0xe93119d9
    async balanceOf (vault: TAddress, user: TAddress, at: bigint): Promise<{ pending: bigint, claimable: bigint, nextUnlockAt: bigint, nextUnlockAmount: bigint, totalRequests: bigint }>
    // 0xf7888aec
    async balanceOf (vault: TAddress, user: TAddress): Promise<{ pending: bigint, claimable: bigint, nextUnlockAt: bigint, nextUnlockAmount: bigint, totalRequests: bigint }>
        async balanceOf (...args): Promise<{ pending: bigint, claimable: bigint, nextUnlockAt: bigint, nextUnlockAmount: bigint, totalRequests: bigint }> {
            let abi = this.$getAbiItemOverload('balanceOf', args);
            return this.$read(abi, ...args);
        }

    // 0x1d85eaa5
    async calculateExitParams (vault: TAddress, coveragePpm: number): Promise<{ feePpm: number, sharesLock: number }> {
        return this.$read(this.$getAbiItem('function', 'calculateExitParams'), vault, coveragePpm);
    }

    // 0x2d9d2431
    async cancel (sender: TSender, vault: TAddress, user: TAddress, i: bigint, guard: { shares: bigint }): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'cancel'), sender, vault, user, i, guard);
    }

        
    // 0x5e9d2afe
    async finalize (sender: TSender, vault: TAddress, user: TAddress, at: bigint): Promise<TxWriter>
    // 0xbcdf569b
    async finalize (sender: TSender, vault: TAddress, user: TAddress): Promise<TxWriter>
    // 0xd5ffb7b0
    async finalize (sender: TSender, vault: TAddress, token: TAddress, user: TAddress, at: bigint): Promise<TxWriter>
    // 0xe80b65f8
    async finalize (sender: TSender, vault: TAddress, token: TAddress, user: TAddress): Promise<TxWriter>
        async finalize (sender: TSender, ...args): Promise<TxWriter> {
            let abi = this.$getAbiItemOverload([ 'function finalize(address, address, uint256) returns uint256', 'function finalize(address, address) returns uint256', 'function finalize(address, address, address, uint256) returns uint256', 'function finalize(address, address, address) returns uint256' ], args);
            return this.$write(abi, sender, ...args);
        }

    // 0xdbbfc6be
    async finalizeWithFee (sender: TSender, vault: TAddress, token: TAddress, user: TAddress, i: bigint, guard: { shares: bigint, daysLeft: bigint }): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'finalizeWithFee'), sender, vault, token, user, i, guard);
    }

    // 0xc353b60c
    async finalizeWithTokenOverride (sender: TSender, vault: TAddress, token: TAddress, user: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'finalizeWithTokenOverride'), sender, vault, token, user);
    }

    // 0x485cc955
    async initialize (sender: TSender, owner_: TAddress, acm_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'initialize'), sender, owner_, acm_);
    }

    // 0x8da5cb5b
    async owner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'owner'));
    }

    // 0xe30c3978
    async pendingOwner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'pendingOwner'));
    }

    // 0x715018a6
    async renounceOwnership (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'renounceOwnership'), sender);
    }

    // 0x4aecbb52
    async requestRedeem (sender: TSender, vault: TAddress, token: TAddress, initialFrom: TAddress, to: TAddress, shares: bigint, fee: bigint, cooldownSeconds: number): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'requestRedeem'), sender, vault, token, initialFrom, to, shares, fee, cooldownSeconds);
    }

    // 0x0e32cb86
    async setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setAccessControlManager'), sender, accessControlManager_);
    }

    // 0x593ec077
    async setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setTwoStepConfigManager'), sender, twoStepConfigManager_);
    }

    // 0x1cd670ec
    async setVaultEarlyExitFee (sender: TSender, vault: TAddress, fee: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setVaultEarlyExitFee'), sender, vault, fee);
    }

    // 0x0071f82c
    async setVaultExitBounds (sender: TSender, vault: TAddress, bounds: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setVaultExitBounds'), sender, vault, bounds);
    }

    // 0xf2fde38b
    async transferOwnership (sender: TSender, newOwner: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transferOwnership'), sender, newOwner);
    }

    // 0x2a1590a4
    async twoStepConfigManager (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'twoStepConfigManager'));
    }

    // 0x7c16cc4a
    async vaultEarlyExitFeePerDay (vault: TAddress): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'vaultEarlyExitFeePerDay'), vault);
    }

    // 0x2e44fd50
    async vaultExitBounds (vault: TAddress): Promise<{ p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }> {
        return this.$read(this.$getAbiItem('function', 'vaultExitBounds'), vault);
    }

    $call () {
        return super.$call() as ISharesCooldownV1TxCaller;
    }
    $signed (): TOverrideReturns<ISharesCooldownV1TxCaller, Promise<{ signed: TEth.Hex, error?: Error & { data?: { type: string, params } } }>> {
        return super.$signed() as any;
    }
    $data (): ISharesCooldownV1TxData {
        return super.$data() as ISharesCooldownV1TxData;
    }
    $gas (): TOverrideReturns<ISharesCooldownV1TxCaller, Promise<{ gas?: bigint, price?: bigint, error?: Error & { data?: { type: string, params } } }>> {
        return super.$gas() as any;
    }

    onTransaction <TMethod extends keyof TSharesCooldownV1Types['Methods']> (method: TMethod, options: Parameters<ContractBase['$onTransaction']>[0]): SubjectStream<{
        tx: TEth.Tx
        block: TEth.Block<TEth.Hex>
        calldata: {
            method: TMethod
            arguments: TSharesCooldownV1Types['Methods'][TMethod]['arguments']
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

    onExitFeeAccrued (fn?: (event: TClientEventsStreamData<TEventArguments<'ExitFeeAccrued'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'ExitFeeAccrued'>>> {
        return this.$onLog('ExitFeeAccrued', fn);
    }

    onFinalized (fn?: (event: TClientEventsStreamData<TEventArguments<'Finalized'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'Finalized'>>> {
        return this.$onLog('Finalized', fn);
    }

    onInitialized (fn?: (event: TClientEventsStreamData<TEventArguments<'Initialized'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'Initialized'>>> {
        return this.$onLog('Initialized', fn);
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

    onRequestCanceled (fn?: (event: TClientEventsStreamData<TEventArguments<'RequestCanceled'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'RequestCanceled'>>> {
        return this.$onLog('RequestCanceled', fn);
    }

    onRequestedCooldown (fn?: (event: TClientEventsStreamData<TEventArguments<'RequestedCooldown'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'RequestedCooldown'>>> {
        return this.$onLog('RequestedCooldown', fn);
    }

    onTransferRequested (fn?: (event: TClientEventsStreamData<TEventArguments<'TransferRequested'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'TransferRequested'>>> {
        return this.$onLog('TransferRequested', fn);
    }

    onVaultCooldownBoundsUpdated (fn?: (event: TClientEventsStreamData<TEventArguments<'VaultCooldownBoundsUpdated'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'VaultCooldownBoundsUpdated'>>> {
        return this.$onLog('VaultCooldownBoundsUpdated', fn);
    }

    onVaultCooldownUpdated (fn?: (event: TClientEventsStreamData<TEventArguments<'VaultCooldownUpdated'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'VaultCooldownUpdated'>>> {
        return this.$onLog('VaultCooldownUpdated', fn);
    }

    onVaultEarlyExitFeeSet (fn?: (event: TClientEventsStreamData<TEventArguments<'VaultEarlyExitFeeSet'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'VaultEarlyExitFeeSet'>>> {
        return this.$onLog('VaultEarlyExitFeeSet', fn);
    }

    extractLogsExitFeeAccrued (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'ExitFeeAccrued'>>[] {
        let abi = this.$getAbiItem('event', 'ExitFeeAccrued');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'ExitFeeAccrued'>>[];
    }

    extractLogsFinalized (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'Finalized'>>[] {
        let abi = this.$getAbiItem('event', 'Finalized');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'Finalized'>>[];
    }

    extractLogsInitialized (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'Initialized'>>[] {
        let abi = this.$getAbiItem('event', 'Initialized');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'Initialized'>>[];
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

    extractLogsRequestCanceled (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'RequestCanceled'>>[] {
        let abi = this.$getAbiItem('event', 'RequestCanceled');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'RequestCanceled'>>[];
    }

    extractLogsRequestedCooldown (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'RequestedCooldown'>>[] {
        let abi = this.$getAbiItem('event', 'RequestedCooldown');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'RequestedCooldown'>>[];
    }

    extractLogsTransferRequested (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'TransferRequested'>>[] {
        let abi = this.$getAbiItem('event', 'TransferRequested');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'TransferRequested'>>[];
    }

    extractLogsVaultCooldownBoundsUpdated (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'VaultCooldownBoundsUpdated'>>[] {
        let abi = this.$getAbiItem('event', 'VaultCooldownBoundsUpdated');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'VaultCooldownBoundsUpdated'>>[];
    }

    extractLogsVaultCooldownUpdated (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'VaultCooldownUpdated'>>[] {
        let abi = this.$getAbiItem('event', 'VaultCooldownUpdated');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'VaultCooldownUpdated'>>[];
    }

    extractLogsVaultEarlyExitFeeSet (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'VaultEarlyExitFeeSet'>>[] {
        let abi = this.$getAbiItem('event', 'VaultEarlyExitFeeSet');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'VaultEarlyExitFeeSet'>>[];
    }

    async getPastLogsExitFeeAccrued (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { vault?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'ExitFeeAccrued'>>[]> {
        return await this.$getPastLogsParsed('ExitFeeAccrued', options) as any;
    }

    async getPastLogsFinalized (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { token?: TAddress,user?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'Finalized'>>[]> {
        return await this.$getPastLogsParsed('Finalized', options) as any;
    }

    async getPastLogsInitialized (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'Initialized'>>[]> {
        return await this.$getPastLogsParsed('Initialized', options) as any;
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

    async getPastLogsRequestCanceled (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { vault?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'RequestCanceled'>>[]> {
        return await this.$getPastLogsParsed('RequestCanceled', options) as any;
    }

    async getPastLogsRequestedCooldown (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { vault?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'RequestedCooldown'>>[]> {
        return await this.$getPastLogsParsed('RequestedCooldown', options) as any;
    }

    async getPastLogsTransferRequested (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { token?: TAddress,from?: TAddress,to?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'TransferRequested'>>[]> {
        return await this.$getPastLogsParsed('TransferRequested', options) as any;
    }

    async getPastLogsVaultCooldownBoundsUpdated (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { vault?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'VaultCooldownBoundsUpdated'>>[]> {
        return await this.$getPastLogsParsed('VaultCooldownBoundsUpdated', options) as any;
    }

    async getPastLogsVaultCooldownUpdated (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { vault?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'VaultCooldownUpdated'>>[]> {
        return await this.$getPastLogsParsed('VaultCooldownUpdated', options) as any;
    }

    async getPastLogsVaultEarlyExitFeeSet (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { vault?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'VaultEarlyExitFeeSet'>>[]> {
        return await this.$getPastLogsParsed('VaultEarlyExitFeeSet', options) as any;
    }

    abi: TAbiItem[] = [{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32","name":"neededRole","type":"bytes32"}],"name":"AccessControlUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ExternalReceiverRequestLimitReached","type":"error"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[],"name":"InvalidTime","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"inputs":[],"name":"NothingToFinalize","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"calledContract","type":"address"},{"internalType":"bytes4","name":"sel","type":"bytes4"}],"name":"Unauthorized","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"UnsupportedToken","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"vault","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"sharesFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sharesUser","type":"uint256"}],"name":"ExitFeeAccrued","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC20","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Finalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"accessControlManager","type":"address"}],"name":"NewAccessControlManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"twoStepConfigManager","type":"address"}],"name":"NewTwoStepConfigManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"vault","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"RequestCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"vault","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"initialFrom","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"unlockAt","type":"uint64"}],"name":"RequestedCooldown","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC20","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"unlockAt","type":"uint256"}],"name":"TransferRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"vault","type":"address"},{"components":[{"internalType":"uint32","name":"p0","type":"uint32"},{"internalType":"uint32","name":"p1","type":"uint32"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r0","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r1","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r2","type":"tuple"}],"indexed":false,"internalType":"struct ISharesCooldown.TExitUpperBounds","name":"bounds","type":"tuple"}],"name":"VaultCooldownBoundsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"vault","type":"address"},{"indexed":false,"internalType":"uint256","name":"cooldownSeconds","type":"uint256"}],"name":"VaultCooldownUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"vault","type":"address"},{"indexed":false,"internalType":"uint256","name":"earlyExitFee","type":"uint256"}],"name":"VaultEarlyExitFeeSet","type":"event"},{"inputs":[],"name":"COOLDOWN_WORKER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROPOSER_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RESERVE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_CDO_APR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_FEED_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_STRAT_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acm","outputs":[{"internalType":"contract IAccessControlManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"activeRequests","outputs":[{"internalType":"uint64","name":"unlockAt","type":"uint64"},{"internalType":"uint192","name":"shares","type":"uint192"},{"internalType":"address","name":"token","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"vault","type":"address"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"at","type":"uint256"}],"name":"balanceOf","outputs":[{"components":[{"internalType":"uint256","name":"pending","type":"uint256"},{"internalType":"uint256","name":"claimable","type":"uint256"},{"internalType":"uint256","name":"nextUnlockAt","type":"uint256"},{"internalType":"uint256","name":"nextUnlockAmount","type":"uint256"},{"internalType":"uint256","name":"totalRequests","type":"uint256"}],"internalType":"struct ICooldown.TBalanceState","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"vault","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"balanceOf","outputs":[{"components":[{"internalType":"uint256","name":"pending","type":"uint256"},{"internalType":"uint256","name":"claimable","type":"uint256"},{"internalType":"uint256","name":"nextUnlockAt","type":"uint256"},{"internalType":"uint256","name":"nextUnlockAmount","type":"uint256"},{"internalType":"uint256","name":"totalRequests","type":"uint256"}],"internalType":"struct ICooldown.TBalanceState","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"},{"internalType":"uint32","name":"coveragePpm","type":"uint32"}],"name":"calculateExitParams","outputs":[{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"vault","type":"address"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"},{"components":[{"internalType":"uint192","name":"shares","type":"uint192"}],"internalType":"struct ISharesCooldown.TCancelGuard","name":"guard","type":"tuple"}],"name":"cancel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"vault","type":"address"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"at","type":"uint256"}],"name":"finalize","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"vault","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"finalize","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ITranche","name":"vault","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"at","type":"uint256"}],"name":"finalize","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ITranche","name":"vault","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"finalize","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ITranche","name":"vault","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"},{"components":[{"internalType":"uint192","name":"shares","type":"uint192"},{"internalType":"uint256","name":"daysLeft","type":"uint256"}],"internalType":"struct ISharesCooldown.TFinalizeWithFeeGuard","name":"guard","type":"tuple"}],"name":"finalizeWithFee","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"vault","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"finalizeWithTokenOverride","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"acm_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ITranche","name":"vault","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"initialFrom","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint32","name":"cooldownSeconds","type":"uint32"}],"name":"requestRedeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"accessControlManager_","type":"address"}],"name":"setAccessControlManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"twoStepConfigManager_","type":"address"}],"name":"setTwoStepConfigManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setVaultEarlyExitFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"},{"components":[{"internalType":"uint32","name":"p0","type":"uint32"},{"internalType":"uint32","name":"p1","type":"uint32"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r0","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r1","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r2","type":"tuple"}],"internalType":"struct ISharesCooldown.TExitUpperBounds","name":"bounds","type":"tuple"}],"name":"setVaultExitBounds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"twoStepConfigManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"}],"name":"vaultEarlyExitFeePerDay","outputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"}],"name":"vaultExitBounds","outputs":[{"internalType":"uint32","name":"p0","type":"uint32"},{"internalType":"uint32","name":"p1","type":"uint32"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r0","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r1","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r2","type":"tuple"}],"stateMutability":"view","type":"function"}]

    declare storage: SharesCooldownV1StorageReader
}

type TSender = TAccount & {
    value?: string | number | bigint
}

type TEventLogOptions<TParams> = {
    fromBlock?: number | Date
    toBlock?: number | Date
    params?: TParams
}

export type TSharesCooldownV1Types = {
    Events: {
        ExitFeeAccrued: {
            outputParams: { vault: TAddress, user: TAddress, sharesFee: bigint, sharesUser: bigint },
            outputArgs:   [ vault: TAddress, user: TAddress, sharesFee: bigint, sharesUser: bigint ],
        }
        Finalized: {
            outputParams: { token: TAddress, user: TAddress, amount: bigint },
            outputArgs:   [ token: TAddress, user: TAddress, amount: bigint ],
        }
        Initialized: {
            outputParams: { version: number },
            outputArgs:   [ version: number ],
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
        RequestCanceled: {
            outputParams: { vault: TAddress, user: TAddress, shares: bigint },
            outputArgs:   [ vault: TAddress, user: TAddress, shares: bigint ],
        }
        RequestedCooldown: {
            outputParams: { vault: TAddress, token: TAddress, initialFrom: TAddress, to: TAddress, shares: bigint, unlockAt: number },
            outputArgs:   [ vault: TAddress, token: TAddress, initialFrom: TAddress, to: TAddress, shares: bigint, unlockAt: number ],
        }
        TransferRequested: {
            outputParams: { token: TAddress, from: TAddress, to: TAddress, amount: bigint, unlockAt: bigint },
            outputArgs:   [ token: TAddress, from: TAddress, to: TAddress, amount: bigint, unlockAt: bigint ],
        }
        VaultCooldownBoundsUpdated: {
            outputParams: { vault: TAddress, bounds: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } } },
            outputArgs:   [ vault: TAddress, bounds: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } } ],
        }
        VaultCooldownUpdated: {
            outputParams: { vault: TAddress, cooldownSeconds: bigint },
            outputArgs:   [ vault: TAddress, cooldownSeconds: bigint ],
        }
        VaultEarlyExitFeeSet: {
            outputParams: { vault: TAddress, earlyExitFee: bigint },
            outputArgs:   [ vault: TAddress, earlyExitFee: bigint ],
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
        acm: {
          method: "acm"
          arguments: [  ]
        }
        activeRequests: {
          method: "activeRequests"
          arguments: [ vault: TAddress, account: TAddress, input2: bigint ]
        }
        balanceOf: {
          method: "balanceOf"
          arguments: [ vault: TAddress, user: TAddress, at: bigint ] | [ vault: TAddress, user: TAddress ]
        }
        calculateExitParams: {
          method: "calculateExitParams"
          arguments: [ vault: TAddress, coveragePpm: number ]
        }
        cancel: {
          method: "cancel"
          arguments: [ vault: TAddress, user: TAddress, i: bigint, guard: { shares: bigint } ]
        }
        finalize: {
          method: "finalize"
          arguments: [ vault: TAddress, user: TAddress, at: bigint ] | [ vault: TAddress, user: TAddress ] | [ vault: TAddress, token: TAddress, user: TAddress, at: bigint ] | [ vault: TAddress, token: TAddress, user: TAddress ]
        }
        finalizeWithFee: {
          method: "finalizeWithFee"
          arguments: [ vault: TAddress, token: TAddress, user: TAddress, i: bigint, guard: { shares: bigint, daysLeft: bigint } ]
        }
        finalizeWithTokenOverride: {
          method: "finalizeWithTokenOverride"
          arguments: [ vault: TAddress, token: TAddress, user: TAddress ]
        }
        initialize: {
          method: "initialize"
          arguments: [ owner_: TAddress, acm_: TAddress ]
        }
        owner: {
          method: "owner"
          arguments: [  ]
        }
        pendingOwner: {
          method: "pendingOwner"
          arguments: [  ]
        }
        renounceOwnership: {
          method: "renounceOwnership"
          arguments: [  ]
        }
        requestRedeem: {
          method: "requestRedeem"
          arguments: [ vault: TAddress, token: TAddress, initialFrom: TAddress, to: TAddress, shares: bigint, fee: bigint, cooldownSeconds: number ]
        }
        setAccessControlManager: {
          method: "setAccessControlManager"
          arguments: [ accessControlManager_: TAddress ]
        }
        setTwoStepConfigManager: {
          method: "setTwoStepConfigManager"
          arguments: [ twoStepConfigManager_: TAddress ]
        }
        setVaultEarlyExitFee: {
          method: "setVaultEarlyExitFee"
          arguments: [ vault: TAddress, fee: bigint ]
        }
        setVaultExitBounds: {
          method: "setVaultExitBounds"
          arguments: [ vault: TAddress, bounds: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } } ]
        }
        transferOwnership: {
          method: "transferOwnership"
          arguments: [ newOwner: TAddress ]
        }
        twoStepConfigManager: {
          method: "twoStepConfigManager"
          arguments: [  ]
        }
        vaultEarlyExitFeePerDay: {
          method: "vaultEarlyExitFeePerDay"
          arguments: [ vault: TAddress ]
        }
        vaultExitBounds: {
          method: "vaultExitBounds"
          arguments: [ vault: TAddress ]
        }
    }
}



class SharesCooldownV1StorageReader extends ContractStorageReaderBase {
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

    async activeRequests(key: TAddress): Promise<Record<string | number, { unlockAt: number, shares: bigint, token: TAddress }[]>> {
        return this.$storage.get(['activeRequests', key]);
    }

    async vaultEarlyExitFeePerDay(key: TAddress): Promise<bigint> {
        return this.$storage.get(['vaultEarlyExitFeePerDay', key]);
    }

    async vaultExitBounds(key: TAddress): Promise<{ p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }> {
        return this.$storage.get(['vaultExitBounds', key]);
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
        "name": "activeRequests",
        "size": null,
        "type": "mapping(address => mapping(address => (uint64 unlockAt, uint192 shares, address token)[]))"
    },
    {
        "slot": 51,
        "position": 0,
        "name": "vaultEarlyExitFeePerDay",
        "size": null,
        "type": "mapping(address => uint256)"
    },
    {
        "slot": 52,
        "position": 0,
        "name": "vaultExitBounds",
        "size": null,
        "type": "mapping(address => (uint32 p0, uint32 p1, (uint32 feePpm, uint32 sharesLock) r0, (uint32 feePpm, uint32 sharesLock) r1, (uint32 feePpm, uint32 sharesLock) r2))"
    }
]

}


interface ISharesCooldownV1TxCaller {
    acceptOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    cancel (sender: TSender, vault: TAddress, user: TAddress, i: bigint, guard: { shares: bigint }): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    finalize (sender: TSender, vault: TAddress, user: TAddress, at: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    finalize (sender: TSender, vault: TAddress, user: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    finalize (sender: TSender, vault: TAddress, token: TAddress, user: TAddress, at: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    finalize (sender: TSender, vault: TAddress, token: TAddress, user: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    finalizeWithFee (sender: TSender, vault: TAddress, token: TAddress, user: TAddress, i: bigint, guard: { shares: bigint, daysLeft: bigint }): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    finalizeWithTokenOverride (sender: TSender, vault: TAddress, token: TAddress, user: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    renounceOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    requestRedeem (sender: TSender, vault: TAddress, token: TAddress, initialFrom: TAddress, to: TAddress, shares: bigint, fee: bigint, cooldownSeconds: number): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setVaultEarlyExitFee (sender: TSender, vault: TAddress, fee: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setVaultExitBounds (sender: TSender, vault: TAddress, bounds: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
}


interface ISharesCooldownV1TxData {
    acceptOwnership (sender: TSender, ): Promise<TEth.TxLike>
    cancel (sender: TSender, vault: TAddress, user: TAddress, i: bigint, guard: { shares: bigint }): Promise<TEth.TxLike>
    finalize (sender: TSender, vault: TAddress, user: TAddress, at: bigint): Promise<TEth.TxLike>
    finalize (sender: TSender, vault: TAddress, user: TAddress): Promise<TEth.TxLike>
    finalize (sender: TSender, vault: TAddress, token: TAddress, user: TAddress, at: bigint): Promise<TEth.TxLike>
    finalize (sender: TSender, vault: TAddress, token: TAddress, user: TAddress): Promise<TEth.TxLike>
    finalizeWithFee (sender: TSender, vault: TAddress, token: TAddress, user: TAddress, i: bigint, guard: { shares: bigint, daysLeft: bigint }): Promise<TEth.TxLike>
    finalizeWithTokenOverride (sender: TSender, vault: TAddress, token: TAddress, user: TAddress): Promise<TEth.TxLike>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress): Promise<TEth.TxLike>
    renounceOwnership (sender: TSender, ): Promise<TEth.TxLike>
    requestRedeem (sender: TSender, vault: TAddress, token: TAddress, initialFrom: TAddress, to: TAddress, shares: bigint, fee: bigint, cooldownSeconds: number): Promise<TEth.TxLike>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TEth.TxLike>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TEth.TxLike>
    setVaultEarlyExitFee (sender: TSender, vault: TAddress, fee: bigint): Promise<TEth.TxLike>
    setVaultExitBounds (sender: TSender, vault: TAddress, bounds: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }): Promise<TEth.TxLike>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<TEth.TxLike>
}


type TEvents = TSharesCooldownV1Types['Events'];
type TEventParams<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputParams']>;
type TEventArguments<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputArgs']>;
