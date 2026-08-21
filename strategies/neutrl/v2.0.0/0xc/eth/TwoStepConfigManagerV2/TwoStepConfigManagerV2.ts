/**
 *  AUTO-Generated Class: 2026-08-21 10:36
 *  Implementation: https://etherscan.io/address/0x658B16ceec3bbbdB05A91eBd73F297d064e931c9#code
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

export namespace TwoStepConfigManagerV2Errors {
    export interface AccessControlUnauthorizedAccount {
        type: 'AccessControlUnauthorizedAccount'
        params: {
            account: TAddress
            neededRole: TEth.Hex
        }
    }
    export interface InvalidInitialization {
        type: 'InvalidInitialization'
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
    export interface ZeroAddress {
        type: 'ZeroAddress'
        params: {
        }
    }
    export type Error = AccessControlUnauthorizedAccount | InvalidInitialization | NotInitializing | OwnableInvalidOwner | OwnableUnauthorizedAccount | ReentrancyGuardReentrantCall | Unauthorized | ZeroAddress
}

export class TwoStepConfigManagerV2 extends ContractBase {
    constructor(
        public address: TEth.Address = '0x658B16ceec3bbbdB05A91eBd73F297d064e931c9',
        public client: Web3Client = di.resolve(EvmWeb3Client, { platform: 'eth' }),
        public explorer: IBlockchainExplorer = di.resolve(Evmscan, { platform: 'eth' }),
    ) {
        super(address, client, explorer)

        this.storage = new TwoStepConfigManagerV2StorageReader(this.address, this.client, this.explorer);
    }

    Types: TTwoStepConfigManagerV2Types;

    $meta = {
        "class": "./0xc/eth/TwoStepConfigManagerV2/TwoStepConfigManagerV2.ts"
    }

    async $constructor (deployer: TSender, _cdo: TAddress): Promise<TxWriter> {
        throw new Error('Not implemented. Typing purpose. Use the ContractDeployer class to deploy the contract');
    }

    // 0x737b332d
    async COOLDOWN_WORKER_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'COOLDOWN_WORKER_ROLE'));
    }

    // 0x4125ff90
    async MAX_DELAY (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'MAX_DELAY'));
    }

    // 0x9f81aed7
    async MIN_DELAY (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'MIN_DELAY'));
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

    // 0xb59a5b20
    async cancelExitFeeChange (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'cancelExitFeeChange'), sender);
    }

    // 0x506dbcdc
    async cancelExitModeBoundsChange (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'cancelExitModeBoundsChange'), sender);
    }

    // 0x387a7237
    async cdo (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'cdo'));
    }

    // 0x1ea99108
    async executeExitFeeChange (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'executeExitFeeChange'), sender);
    }

    // 0x279dad82
    async executeExitModeBoundsChange (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'executeExitModeBoundsChange'), sender);
    }

    // 0x8129fc1c
    async initialize (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'initialize'), sender);
    }

    // 0x8da5cb5b
    async owner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'owner'));
    }

    // 0x25f48638
    async pendingExitFeeChange (): Promise<{ feeJrt: bigint, feeSrt: bigint, executeAfter: number }> {
        return this.$read(this.$getAbiItem('function', 'pendingExitFeeChange'));
    }

    // 0x226b7c82
    async pendingExitModeBoundsJrt (): Promise<{ bounds: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, executeAfter: number }> {
        return this.$read(this.$getAbiItem('function', 'pendingExitModeBoundsJrt'));
    }

    // 0xaf5eef28
    async pendingExitModeBoundsSrt (): Promise<{ bounds: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, executeAfter: number }> {
        return this.$read(this.$getAbiItem('function', 'pendingExitModeBoundsSrt'));
    }

    // 0xe30c3978
    async pendingOwner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'pendingOwner'));
    }

    // 0x715018a6
    async renounceOwnership (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'renounceOwnership'), sender);
    }

    // 0x2ee65f29
    async scheduleExitFeeChange (sender: TSender, feeJrt: bigint, feeSrt: bigint, delay: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'scheduleExitFeeChange'), sender, feeJrt, feeSrt, delay);
    }

    // 0x7b8c1d8a
    async scheduleExitModeBoundsChange (sender: TSender, boundsJrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, boundsSrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, delay: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'scheduleExitModeBoundsChange'), sender, boundsJrt, boundsSrt, delay);
    }

    // 0x0e32cb86
    async setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setAccessControlManager'), sender, accessControlManager_);
    }

    // 0x593ec077
    async setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setTwoStepConfigManager'), sender, twoStepConfigManager_);
    }

    // 0x34a4338a
    async setValuationKeeper (sender: TSender, valuationKeeper_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setValuationKeeper'), sender, valuationKeeper_);
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
        return super.$call() as ITwoStepConfigManagerV2TxCaller;
    }
    $signed (): TOverrideReturns<ITwoStepConfigManagerV2TxCaller, Promise<{ signed: TEth.Hex, error?: Error & { data?: { type: string, params } } }>> {
        return super.$signed() as any;
    }
    $data (): ITwoStepConfigManagerV2TxData {
        return super.$data() as ITwoStepConfigManagerV2TxData;
    }
    $gas (): TOverrideReturns<ITwoStepConfigManagerV2TxCaller, Promise<{ gas?: bigint, price?: bigint, error?: Error & { data?: { type: string, params } } }>> {
        return super.$gas() as any;
    }

    onTransaction <TMethod extends keyof TTwoStepConfigManagerV2Types['Methods']> (method: TMethod, options: Parameters<ContractBase['$onTransaction']>[0]): SubjectStream<{
        tx: TEth.Tx
        block: TEth.Block<TEth.Hex>
        calldata: {
            method: TMethod
            arguments: TTwoStepConfigManagerV2Types['Methods'][TMethod]['arguments']
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

    onExitFeeChangeCancelled (fn?: (event: TClientEventsStreamData<TEventArguments<'ExitFeeChangeCancelled'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'ExitFeeChangeCancelled'>>> {
        return this.$onLog('ExitFeeChangeCancelled', fn);
    }

    onExitFeeChangeExecuted (fn?: (event: TClientEventsStreamData<TEventArguments<'ExitFeeChangeExecuted'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'ExitFeeChangeExecuted'>>> {
        return this.$onLog('ExitFeeChangeExecuted', fn);
    }

    onExitFeeChangeScheduled (fn?: (event: TClientEventsStreamData<TEventArguments<'ExitFeeChangeScheduled'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'ExitFeeChangeScheduled'>>> {
        return this.$onLog('ExitFeeChangeScheduled', fn);
    }

    onExitModeBoundsChangeCancelled (fn?: (event: TClientEventsStreamData<TEventArguments<'ExitModeBoundsChangeCancelled'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'ExitModeBoundsChangeCancelled'>>> {
        return this.$onLog('ExitModeBoundsChangeCancelled', fn);
    }

    onExitModeBoundsChangeExecuted (fn?: (event: TClientEventsStreamData<TEventArguments<'ExitModeBoundsChangeExecuted'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'ExitModeBoundsChangeExecuted'>>> {
        return this.$onLog('ExitModeBoundsChangeExecuted', fn);
    }

    onExitModeBoundsChangeScheduled (fn?: (event: TClientEventsStreamData<TEventArguments<'ExitModeBoundsChangeScheduled'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'ExitModeBoundsChangeScheduled'>>> {
        return this.$onLog('ExitModeBoundsChangeScheduled', fn);
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

    extractLogsExitFeeChangeCancelled (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'ExitFeeChangeCancelled'>>[] {
        let abi = this.$getAbiItem('event', 'ExitFeeChangeCancelled');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'ExitFeeChangeCancelled'>>[];
    }

    extractLogsExitFeeChangeExecuted (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'ExitFeeChangeExecuted'>>[] {
        let abi = this.$getAbiItem('event', 'ExitFeeChangeExecuted');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'ExitFeeChangeExecuted'>>[];
    }

    extractLogsExitFeeChangeScheduled (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'ExitFeeChangeScheduled'>>[] {
        let abi = this.$getAbiItem('event', 'ExitFeeChangeScheduled');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'ExitFeeChangeScheduled'>>[];
    }

    extractLogsExitModeBoundsChangeCancelled (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'ExitModeBoundsChangeCancelled'>>[] {
        let abi = this.$getAbiItem('event', 'ExitModeBoundsChangeCancelled');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'ExitModeBoundsChangeCancelled'>>[];
    }

    extractLogsExitModeBoundsChangeExecuted (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'ExitModeBoundsChangeExecuted'>>[] {
        let abi = this.$getAbiItem('event', 'ExitModeBoundsChangeExecuted');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'ExitModeBoundsChangeExecuted'>>[];
    }

    extractLogsExitModeBoundsChangeScheduled (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'ExitModeBoundsChangeScheduled'>>[] {
        let abi = this.$getAbiItem('event', 'ExitModeBoundsChangeScheduled');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'ExitModeBoundsChangeScheduled'>>[];
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

    async getPastLogsExitFeeChangeCancelled (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'ExitFeeChangeCancelled'>>[]> {
        return await this.$getPastLogsParsed('ExitFeeChangeCancelled', options) as any;
    }

    async getPastLogsExitFeeChangeExecuted (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'ExitFeeChangeExecuted'>>[]> {
        return await this.$getPastLogsParsed('ExitFeeChangeExecuted', options) as any;
    }

    async getPastLogsExitFeeChangeScheduled (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'ExitFeeChangeScheduled'>>[]> {
        return await this.$getPastLogsParsed('ExitFeeChangeScheduled', options) as any;
    }

    async getPastLogsExitModeBoundsChangeCancelled (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'ExitModeBoundsChangeCancelled'>>[]> {
        return await this.$getPastLogsParsed('ExitModeBoundsChangeCancelled', options) as any;
    }

    async getPastLogsExitModeBoundsChangeExecuted (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'ExitModeBoundsChangeExecuted'>>[]> {
        return await this.$getPastLogsParsed('ExitModeBoundsChangeExecuted', options) as any;
    }

    async getPastLogsExitModeBoundsChangeScheduled (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'ExitModeBoundsChangeScheduled'>>[]> {
        return await this.$getPastLogsParsed('ExitModeBoundsChangeScheduled', options) as any;
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

    abi: TAbiItem[] = [{"inputs":[{"internalType":"contract IStrataCDOFull","name":"_cdo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32","name":"neededRole","type":"bytes32"}],"name":"AccessControlUnauthorizedAccount","type":"error"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"calledContract","type":"address"},{"internalType":"bytes4","name":"sel","type":"bytes4"}],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"anonymous":false,"inputs":[],"name":"ExitFeeChangeCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"feeJrt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeSrt","type":"uint256"}],"name":"ExitFeeChangeExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"feeJrt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeSrt","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"executeAfter","type":"uint64"}],"name":"ExitFeeChangeScheduled","type":"event"},{"anonymous":false,"inputs":[],"name":"ExitModeBoundsChangeCancelled","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint32","name":"p0","type":"uint32"},{"internalType":"uint32","name":"p1","type":"uint32"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r0","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r1","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r2","type":"tuple"}],"indexed":false,"internalType":"struct ISharesCooldown.TExitUpperBounds","name":"boundsJrt","type":"tuple"},{"components":[{"internalType":"uint32","name":"p0","type":"uint32"},{"internalType":"uint32","name":"p1","type":"uint32"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r0","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r1","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r2","type":"tuple"}],"indexed":false,"internalType":"struct ISharesCooldown.TExitUpperBounds","name":"boundsSrt","type":"tuple"}],"name":"ExitModeBoundsChangeExecuted","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint32","name":"p0","type":"uint32"},{"internalType":"uint32","name":"p1","type":"uint32"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r0","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r1","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r2","type":"tuple"}],"indexed":false,"internalType":"struct ISharesCooldown.TExitUpperBounds","name":"boundsJrt","type":"tuple"},{"components":[{"internalType":"uint32","name":"p0","type":"uint32"},{"internalType":"uint32","name":"p1","type":"uint32"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r0","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r1","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r2","type":"tuple"}],"indexed":false,"internalType":"struct ISharesCooldown.TExitUpperBounds","name":"boundsSrt","type":"tuple"},{"indexed":false,"internalType":"uint64","name":"executeAfter","type":"uint64"}],"name":"ExitModeBoundsChangeScheduled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"accessControlManager","type":"address"}],"name":"NewAccessControlManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"twoStepConfigManager","type":"address"}],"name":"NewTwoStepConfigManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"valuationKeeper","type":"address"}],"name":"NewValuationKeeper","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"COOLDOWN_WORKER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROPOSER_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RESERVE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_CDO_APR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_FEED_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_STRAT_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acm","outputs":[{"internalType":"contract IAccessControlManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cancelExitFeeChange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cancelExitModeBoundsChange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cdo","outputs":[{"internalType":"contract IStrataCDOFull","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"executeExitFeeChange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"executeExitModeBoundsChange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingExitFeeChange","outputs":[{"internalType":"uint256","name":"feeJrt","type":"uint256"},{"internalType":"uint256","name":"feeSrt","type":"uint256"},{"internalType":"uint64","name":"executeAfter","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingExitModeBoundsJrt","outputs":[{"components":[{"internalType":"uint32","name":"p0","type":"uint32"},{"internalType":"uint32","name":"p1","type":"uint32"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r0","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r1","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r2","type":"tuple"}],"internalType":"struct ISharesCooldown.TExitUpperBounds","name":"bounds","type":"tuple"},{"internalType":"uint64","name":"executeAfter","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingExitModeBoundsSrt","outputs":[{"components":[{"internalType":"uint32","name":"p0","type":"uint32"},{"internalType":"uint32","name":"p1","type":"uint32"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r0","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r1","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r2","type":"tuple"}],"internalType":"struct ISharesCooldown.TExitUpperBounds","name":"bounds","type":"tuple"},{"internalType":"uint64","name":"executeAfter","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"feeJrt","type":"uint256"},{"internalType":"uint256","name":"feeSrt","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"scheduleExitFeeChange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint32","name":"p0","type":"uint32"},{"internalType":"uint32","name":"p1","type":"uint32"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r0","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r1","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r2","type":"tuple"}],"internalType":"struct ISharesCooldown.TExitUpperBounds","name":"boundsJrt","type":"tuple"},{"components":[{"internalType":"uint32","name":"p0","type":"uint32"},{"internalType":"uint32","name":"p1","type":"uint32"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r0","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r1","type":"tuple"},{"components":[{"internalType":"uint32","name":"feePpm","type":"uint32"},{"internalType":"uint32","name":"sharesLock","type":"uint32"}],"internalType":"struct ISharesCooldown.TExitParams","name":"r2","type":"tuple"}],"internalType":"struct ISharesCooldown.TExitUpperBounds","name":"boundsSrt","type":"tuple"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"scheduleExitModeBoundsChange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"accessControlManager_","type":"address"}],"name":"setAccessControlManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"twoStepConfigManager_","type":"address"}],"name":"setTwoStepConfigManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"valuationKeeper_","type":"address"}],"name":"setValuationKeeper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"twoStepConfigManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"valuationKeeper","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

    declare storage: TwoStepConfigManagerV2StorageReader
}

type TSender = TAccount & {
    value?: string | number | bigint
}

type TEventLogOptions<TParams> = {
    fromBlock?: number | Date
    toBlock?: number | Date
    params?: TParams
}

export type TTwoStepConfigManagerV2Types = {
    Events: {
        ExitFeeChangeCancelled: {
            outputParams: {  },
            outputArgs:   [  ],
        }
        ExitFeeChangeExecuted: {
            outputParams: { feeJrt: bigint, feeSrt: bigint },
            outputArgs:   [ feeJrt: bigint, feeSrt: bigint ],
        }
        ExitFeeChangeScheduled: {
            outputParams: { feeJrt: bigint, feeSrt: bigint, executeAfter: number },
            outputArgs:   [ feeJrt: bigint, feeSrt: bigint, executeAfter: number ],
        }
        ExitModeBoundsChangeCancelled: {
            outputParams: {  },
            outputArgs:   [  ],
        }
        ExitModeBoundsChangeExecuted: {
            outputParams: { boundsJrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, boundsSrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } } },
            outputArgs:   [ boundsJrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, boundsSrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } } ],
        }
        ExitModeBoundsChangeScheduled: {
            outputParams: { boundsJrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, boundsSrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, executeAfter: number },
            outputArgs:   [ boundsJrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, boundsSrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, executeAfter: number ],
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
    },
    Methods: {
        COOLDOWN_WORKER_ROLE: {
          method: "COOLDOWN_WORKER_ROLE"
          arguments: [  ]
        }
        MAX_DELAY: {
          method: "MAX_DELAY"
          arguments: [  ]
        }
        MIN_DELAY: {
          method: "MIN_DELAY"
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
        cancelExitFeeChange: {
          method: "cancelExitFeeChange"
          arguments: [  ]
        }
        cancelExitModeBoundsChange: {
          method: "cancelExitModeBoundsChange"
          arguments: [  ]
        }
        cdo: {
          method: "cdo"
          arguments: [  ]
        }
        executeExitFeeChange: {
          method: "executeExitFeeChange"
          arguments: [  ]
        }
        executeExitModeBoundsChange: {
          method: "executeExitModeBoundsChange"
          arguments: [  ]
        }
        initialize: {
          method: "initialize"
          arguments: [  ]
        }
        owner: {
          method: "owner"
          arguments: [  ]
        }
        pendingExitFeeChange: {
          method: "pendingExitFeeChange"
          arguments: [  ]
        }
        pendingExitModeBoundsJrt: {
          method: "pendingExitModeBoundsJrt"
          arguments: [  ]
        }
        pendingExitModeBoundsSrt: {
          method: "pendingExitModeBoundsSrt"
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
        scheduleExitFeeChange: {
          method: "scheduleExitFeeChange"
          arguments: [ feeJrt: bigint, feeSrt: bigint, delay: bigint ]
        }
        scheduleExitModeBoundsChange: {
          method: "scheduleExitModeBoundsChange"
          arguments: [ boundsJrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, boundsSrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, delay: bigint ]
        }
        setAccessControlManager: {
          method: "setAccessControlManager"
          arguments: [ accessControlManager_: TAddress ]
        }
        setTwoStepConfigManager: {
          method: "setTwoStepConfigManager"
          arguments: [ twoStepConfigManager_: TAddress ]
        }
        setValuationKeeper: {
          method: "setValuationKeeper"
          arguments: [ valuationKeeper_: TAddress ]
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



class TwoStepConfigManagerV2StorageReader extends ContractStorageReaderBase {
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

    async pendingExitFeeChange(): Promise<{ feeJrt: bigint, feeSrt: bigint, executeAfter: number }> {
        return this.$storage.get(['pendingExitFeeChange', ]);
    }

    async pendingExitModeBoundsJrt(): Promise<{ bounds: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, executeAfter: number }> {
        return this.$storage.get(['pendingExitModeBoundsJrt', ]);
    }

    async pendingExitModeBoundsSrt(): Promise<{ bounds: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, executeAfter: number }> {
        return this.$storage.get(['pendingExitModeBoundsSrt', ]);
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
        "name": "pendingExitFeeChange",
        "size": 576,
        "type": "(uint256 feeJrt, uint256 feeSrt, uint64 executeAfter)"
    },
    {
        "slot": 53,
        "position": 0,
        "name": "pendingExitModeBoundsJrt",
        "size": 320,
        "type": "((uint32 p0, uint32 p1, (uint32 feePpm, uint32 sharesLock) r0, (uint32 feePpm, uint32 sharesLock) r1, (uint32 feePpm, uint32 sharesLock) r2) bounds, uint64 executeAfter)"
    },
    {
        "slot": 55,
        "position": 0,
        "name": "pendingExitModeBoundsSrt",
        "size": 320,
        "type": "((uint32 p0, uint32 p1, (uint32 feePpm, uint32 sharesLock) r0, (uint32 feePpm, uint32 sharesLock) r1, (uint32 feePpm, uint32 sharesLock) r2) bounds, uint64 executeAfter)"
    }
]

}


interface ITwoStepConfigManagerV2TxCaller {
    acceptOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    cancelExitFeeChange (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    cancelExitModeBoundsChange (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    executeExitFeeChange (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    executeExitModeBoundsChange (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    initialize (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    renounceOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    scheduleExitFeeChange (sender: TSender, feeJrt: bigint, feeSrt: bigint, delay: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    scheduleExitModeBoundsChange (sender: TSender, boundsJrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, boundsSrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, delay: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setValuationKeeper (sender: TSender, valuationKeeper_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
}


interface ITwoStepConfigManagerV2TxData {
    acceptOwnership (sender: TSender, ): Promise<TEth.TxLike>
    cancelExitFeeChange (sender: TSender, ): Promise<TEth.TxLike>
    cancelExitModeBoundsChange (sender: TSender, ): Promise<TEth.TxLike>
    executeExitFeeChange (sender: TSender, ): Promise<TEth.TxLike>
    executeExitModeBoundsChange (sender: TSender, ): Promise<TEth.TxLike>
    initialize (sender: TSender, ): Promise<TEth.TxLike>
    renounceOwnership (sender: TSender, ): Promise<TEth.TxLike>
    scheduleExitFeeChange (sender: TSender, feeJrt: bigint, feeSrt: bigint, delay: bigint): Promise<TEth.TxLike>
    scheduleExitModeBoundsChange (sender: TSender, boundsJrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, boundsSrt: { p0: number, p1: number, r0: { feePpm: number, sharesLock: number }, r1: { feePpm: number, sharesLock: number }, r2: { feePpm: number, sharesLock: number } }, delay: bigint): Promise<TEth.TxLike>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TEth.TxLike>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TEth.TxLike>
    setValuationKeeper (sender: TSender, valuationKeeper_: TAddress): Promise<TEth.TxLike>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<TEth.TxLike>
}


type TEvents = TTwoStepConfigManagerV2Types['Events'];
type TEventParams<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputParams']>;
type TEventArguments<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputArgs']>;
