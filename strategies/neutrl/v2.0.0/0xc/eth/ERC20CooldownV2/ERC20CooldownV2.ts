/**
 *  AUTO-Generated Class: 2026-08-21 10:36
 *  Implementation: https://etherscan.io/address/0x5715a7c5aDF96185F76E52F2a647D1904BF53f19#code
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

export namespace ERC20CooldownV2Errors {
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
    export interface SafeERC20FailedOperation {
        type: 'SafeERC20FailedOperation'
        params: {
            token: TAddress
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
    export type Error = AccessControlUnauthorizedAccount | ExternalReceiverRequestLimitReached | InvalidInitialization | InvalidTime | NotInitializing | NothingToFinalize | OwnableInvalidOwner | OwnableUnauthorizedAccount | ReentrancyGuardReentrantCall | SafeERC20FailedOperation | Unauthorized | UnsupportedToken | ZeroAddress
}

export class ERC20CooldownV2 extends ContractBase {
    constructor(
        public address: TEth.Address = '0x5715a7c5aDF96185F76E52F2a647D1904BF53f19',
        public client: Web3Client = di.resolve(EvmWeb3Client, { platform: 'eth' }),
        public explorer: IBlockchainExplorer = di.resolve(Evmscan, { platform: 'eth' }),
    ) {
        super(address, client, explorer)

        this.storage = new ERC20CooldownV2StorageReader(this.address, this.client, this.explorer);
    }

    Types: TERC20CooldownV2Types;

    $meta = {
        "class": "./0xc/eth/ERC20CooldownV2/ERC20CooldownV2.ts"
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
    async activeRequests (token: TAddress, account: TAddress, input2: bigint): Promise<{ unlockAt: number, amount: bigint }> {
        return this.$read(this.$getAbiItem('function', 'activeRequests'), token, account, input2);
    }

        
    // 0xe93119d9
    async balanceOf (token: TAddress, user: TAddress, at: bigint): Promise<{ pending: bigint, claimable: bigint, nextUnlockAt: bigint, nextUnlockAmount: bigint, totalRequests: bigint }>
    // 0xf7888aec
    async balanceOf (token: TAddress, user: TAddress): Promise<{ pending: bigint, claimable: bigint, nextUnlockAt: bigint, nextUnlockAmount: bigint, totalRequests: bigint }>
        async balanceOf (...args): Promise<{ pending: bigint, claimable: bigint, nextUnlockAt: bigint, nextUnlockAmount: bigint, totalRequests: bigint }> {
            let abi = this.$getAbiItemOverload('balanceOf', args);
            return this.$read(abi, ...args);
        }

    // 0x29662bbf
    async cooldownDisabled (token: TAddress): Promise<boolean> {
        return this.$read(this.$getAbiItem('function', 'cooldownDisabled'), token);
    }

        
    // 0x5e9d2afe
    async finalize (sender: TSender, token: TAddress, user: TAddress, at: bigint): Promise<TxWriter>
    // 0xbcdf569b
    async finalize (sender: TSender, token: TAddress, user: TAddress): Promise<TxWriter>
        async finalize (sender: TSender, ...args): Promise<TxWriter> {
            let abi = this.$getAbiItemOverload([ 'function finalize(address, address, uint256) returns uint256', 'function finalize(address, address) returns uint256' ], args);
            return this.$write(abi, sender, ...args);
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

    // 0x0e32cb86
    async setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setAccessControlManager'), sender, accessControlManager_);
    }

    // 0x16d0bf83
    async setCooldownDisabled (sender: TSender, token: TAddress, isCooldownDisabled: boolean): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setCooldownDisabled'), sender, token, isCooldownDisabled);
    }

    // 0x593ec077
    async setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setTwoStepConfigManager'), sender, twoStepConfigManager_);
    }

    // 0x34a4338a
    async setValuationKeeper (sender: TSender, valuationKeeper_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setValuationKeeper'), sender, valuationKeeper_);
    }

    // 0x903fa446
    async transfer (sender: TSender, token: TAddress, initialFrom: TAddress, to: TAddress, amount: bigint, cooldownSeconds: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transfer'), sender, token, initialFrom, to, amount, cooldownSeconds);
    }

    // 0xf2fde38b
    async transferOwnership (sender: TSender, newOwner: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transferOwnership'), sender, newOwner);
    }

    // 0x2a1590a4
    async twoStepConfigManager (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'twoStepConfigManager'));
    }

    // 0x27549e30
    async valuationKeeper (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'valuationKeeper'));
    }

    $call () {
        return super.$call() as IERC20CooldownV2TxCaller;
    }
    $signed (): TOverrideReturns<IERC20CooldownV2TxCaller, Promise<{ signed: TEth.Hex, error?: Error & { data?: { type: string, params } } }>> {
        return super.$signed() as any;
    }
    $data (): IERC20CooldownV2TxData {
        return super.$data() as IERC20CooldownV2TxData;
    }
    $gas (): TOverrideReturns<IERC20CooldownV2TxCaller, Promise<{ gas?: bigint, price?: bigint, error?: Error & { data?: { type: string, params } } }>> {
        return super.$gas() as any;
    }

    onTransaction <TMethod extends keyof TERC20CooldownV2Types['Methods']> (method: TMethod, options: Parameters<ContractBase['$onTransaction']>[0]): SubjectStream<{
        tx: TEth.Tx
        block: TEth.Block<TEth.Hex>
        calldata: {
            method: TMethod
            arguments: TERC20CooldownV2Types['Methods'][TMethod]['arguments']
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

    onNewValuationKeeper (fn?: (event: TClientEventsStreamData<TEventArguments<'NewValuationKeeper'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'NewValuationKeeper'>>> {
        return this.$onLog('NewValuationKeeper', fn);
    }

    onOwnershipTransferStarted (fn?: (event: TClientEventsStreamData<TEventArguments<'OwnershipTransferStarted'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'OwnershipTransferStarted'>>> {
        return this.$onLog('OwnershipTransferStarted', fn);
    }

    onOwnershipTransferred (fn?: (event: TClientEventsStreamData<TEventArguments<'OwnershipTransferred'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'OwnershipTransferred'>>> {
        return this.$onLog('OwnershipTransferred', fn);
    }

    onTransferRequested (fn?: (event: TClientEventsStreamData<TEventArguments<'TransferRequested'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'TransferRequested'>>> {
        return this.$onLog('TransferRequested', fn);
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

    extractLogsNewValuationKeeper (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'NewValuationKeeper'>>[] {
        let abi = this.$getAbiItem('event', 'NewValuationKeeper');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'NewValuationKeeper'>>[];
    }

    extractLogsOwnershipTransferStarted (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'OwnershipTransferStarted'>>[] {
        let abi = this.$getAbiItem('event', 'OwnershipTransferStarted');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'OwnershipTransferStarted'>>[];
    }

    extractLogsOwnershipTransferred (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'OwnershipTransferred'>>[] {
        let abi = this.$getAbiItem('event', 'OwnershipTransferred');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'OwnershipTransferred'>>[];
    }

    extractLogsTransferRequested (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'TransferRequested'>>[] {
        let abi = this.$getAbiItem('event', 'TransferRequested');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'TransferRequested'>>[];
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

    async getPastLogsNewValuationKeeper (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'NewValuationKeeper'>>[]> {
        return await this.$getPastLogsParsed('NewValuationKeeper', options) as any;
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

    async getPastLogsTransferRequested (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { token?: TAddress,from?: TAddress,to?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'TransferRequested'>>[]> {
        return await this.$getPastLogsParsed('TransferRequested', options) as any;
    }

    abi: TAbiItem[] = [{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32","name":"neededRole","type":"bytes32"}],"name":"AccessControlUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ExternalReceiverRequestLimitReached","type":"error"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[],"name":"InvalidTime","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"inputs":[],"name":"NothingToFinalize","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"calledContract","type":"address"},{"internalType":"bytes4","name":"sel","type":"bytes4"}],"name":"Unauthorized","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"UnsupportedToken","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC20","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Finalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"accessControlManager","type":"address"}],"name":"NewAccessControlManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"twoStepConfigManager","type":"address"}],"name":"NewTwoStepConfigManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"valuationKeeper","type":"address"}],"name":"NewValuationKeeper","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC20","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"unlockAt","type":"uint256"}],"name":"TransferRequested","type":"event"},{"inputs":[],"name":"COOLDOWN_WORKER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROPOSER_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RESERVE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_CDO_APR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_FEED_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_STRAT_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acm","outputs":[{"internalType":"contract IAccessControlManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"activeRequests","outputs":[{"internalType":"uint64","name":"unlockAt","type":"uint64"},{"internalType":"uint192","name":"amount","type":"uint192"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"at","type":"uint256"}],"name":"balanceOf","outputs":[{"components":[{"internalType":"uint256","name":"pending","type":"uint256"},{"internalType":"uint256","name":"claimable","type":"uint256"},{"internalType":"uint256","name":"nextUnlockAt","type":"uint256"},{"internalType":"uint256","name":"nextUnlockAmount","type":"uint256"},{"internalType":"uint256","name":"totalRequests","type":"uint256"}],"internalType":"struct ICooldown.TBalanceState","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"balanceOf","outputs":[{"components":[{"internalType":"uint256","name":"pending","type":"uint256"},{"internalType":"uint256","name":"claimable","type":"uint256"},{"internalType":"uint256","name":"nextUnlockAt","type":"uint256"},{"internalType":"uint256","name":"nextUnlockAmount","type":"uint256"},{"internalType":"uint256","name":"totalRequests","type":"uint256"}],"internalType":"struct ICooldown.TBalanceState","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"cooldownDisabled","outputs":[{"internalType":"bool","name":"isCooldownDisabled","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"at","type":"uint256"}],"name":"finalize","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"finalize","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"acm_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"accessControlManager_","type":"address"}],"name":"setAccessControlManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"bool","name":"isCooldownDisabled","type":"bool"}],"name":"setCooldownDisabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"twoStepConfigManager_","type":"address"}],"name":"setTwoStepConfigManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"valuationKeeper_","type":"address"}],"name":"setValuationKeeper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"initialFrom","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"cooldownSeconds","type":"uint256"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"twoStepConfigManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"valuationKeeper","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

    declare storage: ERC20CooldownV2StorageReader
}

type TSender = TAccount & {
    value?: string | number | bigint
}

type TEventLogOptions<TParams> = {
    fromBlock?: number | Date
    toBlock?: number | Date
    params?: TParams
}

export type TERC20CooldownV2Types = {
    Events: {
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
        NewValuationKeeper: {
            outputParams: { valuationKeeper: TAddress },
            outputArgs:   [ valuationKeeper: TAddress ],
        }
        OwnershipTransferStarted: {
            outputParams: { previousOwner: TAddress, newOwner: TAddress },
            outputArgs:   [ previousOwner: TAddress, newOwner: TAddress ],
        }
        OwnershipTransferred: {
            outputParams: { previousOwner: TAddress, newOwner: TAddress },
            outputArgs:   [ previousOwner: TAddress, newOwner: TAddress ],
        }
        TransferRequested: {
            outputParams: { token: TAddress, from: TAddress, to: TAddress, amount: bigint, unlockAt: bigint },
            outputArgs:   [ token: TAddress, from: TAddress, to: TAddress, amount: bigint, unlockAt: bigint ],
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
          arguments: [ token: TAddress, account: TAddress, input2: bigint ]
        }
        balanceOf: {
          method: "balanceOf"
          arguments: [ token: TAddress, user: TAddress, at: bigint ] | [ token: TAddress, user: TAddress ]
        }
        cooldownDisabled: {
          method: "cooldownDisabled"
          arguments: [ token: TAddress ]
        }
        finalize: {
          method: "finalize"
          arguments: [ token: TAddress, user: TAddress, at: bigint ] | [ token: TAddress, user: TAddress ]
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
        setAccessControlManager: {
          method: "setAccessControlManager"
          arguments: [ accessControlManager_: TAddress ]
        }
        setCooldownDisabled: {
          method: "setCooldownDisabled"
          arguments: [ token: TAddress, isCooldownDisabled: boolean ]
        }
        setTwoStepConfigManager: {
          method: "setTwoStepConfigManager"
          arguments: [ twoStepConfigManager_: TAddress ]
        }
        setValuationKeeper: {
          method: "setValuationKeeper"
          arguments: [ valuationKeeper_: TAddress ]
        }
        transfer: {
          method: "transfer"
          arguments: [ token: TAddress, initialFrom: TAddress, to: TAddress, amount: bigint, cooldownSeconds: bigint ]
        }
        transferOwnership: {
          method: "transferOwnership"
          arguments: [ newOwner: TAddress ]
        }
        twoStepConfigManager: {
          method: "twoStepConfigManager"
          arguments: [  ]
        }
        valuationKeeper: {
          method: "valuationKeeper"
          arguments: [  ]
        }
    }
}



class ERC20CooldownV2StorageReader extends ContractStorageReaderBase {
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

    async valuationKeeper(): Promise<TAddress> {
        return this.$storage.get(['valuationKeeper', ]);
    }

    async __gap(): Promise<bigint[47]> {
        return this.$storage.get(['__gap', ]);
    }

    async activeRequests(key: TAddress): Promise<Record<string | number, { unlockAt: number, amount: bigint }[]>> {
        return this.$storage.get(['activeRequests', key]);
    }

    async cooldownDisabled(key: TAddress): Promise<boolean> {
        return this.$storage.get(['cooldownDisabled', key]);
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
        "name": "valuationKeeper",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 3,
        "position": 0,
        "name": "__gap",
        "size": 12032,
        "type": "uint256[47]"
    },
    {
        "slot": 50,
        "position": 0,
        "name": "activeRequests",
        "size": null,
        "type": "mapping(address => mapping(address => (uint64 unlockAt, uint192 amount)[]))"
    },
    {
        "slot": 51,
        "position": 0,
        "name": "cooldownDisabled",
        "size": null,
        "type": "mapping(address => bool)"
    }
]

}


interface IERC20CooldownV2TxCaller {
    acceptOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    finalize (sender: TSender, token: TAddress, user: TAddress, at: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    finalize (sender: TSender, token: TAddress, user: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    renounceOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setCooldownDisabled (sender: TSender, token: TAddress, isCooldownDisabled: boolean): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setValuationKeeper (sender: TSender, valuationKeeper_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    transfer (sender: TSender, token: TAddress, initialFrom: TAddress, to: TAddress, amount: bigint, cooldownSeconds: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
}


interface IERC20CooldownV2TxData {
    acceptOwnership (sender: TSender, ): Promise<TEth.TxLike>
    finalize (sender: TSender, token: TAddress, user: TAddress, at: bigint): Promise<TEth.TxLike>
    finalize (sender: TSender, token: TAddress, user: TAddress): Promise<TEth.TxLike>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress): Promise<TEth.TxLike>
    renounceOwnership (sender: TSender, ): Promise<TEth.TxLike>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TEth.TxLike>
    setCooldownDisabled (sender: TSender, token: TAddress, isCooldownDisabled: boolean): Promise<TEth.TxLike>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TEth.TxLike>
    setValuationKeeper (sender: TSender, valuationKeeper_: TAddress): Promise<TEth.TxLike>
    transfer (sender: TSender, token: TAddress, initialFrom: TAddress, to: TAddress, amount: bigint, cooldownSeconds: bigint): Promise<TEth.TxLike>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<TEth.TxLike>
}


type TEvents = TERC20CooldownV2Types['Events'];
type TEventParams<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputParams']>;
type TEventArguments<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputArgs']>;
