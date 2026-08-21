/**
 *  AUTO-Generated Class: 2026-08-21 10:36
 *  Implementation: https://etherscan.io/address/0xcAd8b0541b68Fe4EF07f4e87Aa33bb6d96bAaBC5#code
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

export namespace AprPairFeedV2Errors {
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
    export interface OutOfOrderUpdate {
        type: 'OutOfOrderUpdate'
        params: {
            aprTarget: number
            aprBase: number
            timestamp: number
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
    export interface StaleUpdate {
        type: 'StaleUpdate'
        params: {
            aprTarget: number
            aprBase: number
            timestamp: number
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
    export type Error = AccessControlUnauthorizedAccount | InvalidInitialization | NotInitializing | OutOfOrderUpdate | OwnableInvalidOwner | OwnableUnauthorizedAccount | ReentrancyGuardReentrantCall | StaleUpdate | Unauthorized | ZeroAddress
}

export class AprPairFeedV2 extends ContractBase {
    constructor(
        public address: TEth.Address = '0xcAd8b0541b68Fe4EF07f4e87Aa33bb6d96bAaBC5',
        public client: Web3Client = di.resolve(EvmWeb3Client, { platform: 'eth' }),
        public explorer: IBlockchainExplorer = di.resolve(Evmscan, { platform: 'eth' }),
    ) {
        super(address, client, explorer)

        this.storage = new AprPairFeedV2StorageReader(this.address, this.client, this.explorer);
    }

    Types: TAprPairFeedV2Types;

    $meta = {
        "class": "./0xc/eth/AprPairFeedV2/AprPairFeedV2.ts"
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

    // 0x313ce567
    async decimals (): Promise<number> {
        return this.$read(this.$getAbiItem('function', 'decimals'));
    }

    // 0x7284e416
    async description (): Promise<string> {
        return this.$read(this.$getAbiItem('function', 'description'));
    }

    // 0xf921e65c
    async getRoundData (roundId: number): Promise<{ aprTarget: number, aprBase: number, updatedAt: number, answeredInRound: number }> {
        return this.$read(this.$getAbiItem('function', 'getRoundData'), roundId);
    }

    // 0x6cfa2a82
    async initialize (sender: TSender, owner_: TAddress, acm_: TAddress, provider_: TAddress, roundStaleAfter_: bigint, description_: string): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'initialize'), sender, owner_, acm_, provider_, roundStaleAfter_, description_);
    }

    // 0x668a0f02
    async latestRound (): Promise<{ aprTarget: number, aprBase: number, updatedAt: number, answeredInRound: number }> {
        return this.$read(this.$getAbiItem('function', 'latestRound'));
    }

    // 0xfeaf968c
    async latestRoundData (): Promise<{ aprTarget: number, aprBase: number, updatedAt: number, answeredInRound: number }> {
        return this.$read(this.$getAbiItem('function', 'latestRoundData'));
    }

    // 0x11a8f413
    async latestRoundId (): Promise<number> {
        return this.$read(this.$getAbiItem('function', 'latestRoundId'));
    }

    // 0x8da5cb5b
    async owner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'owner'));
    }

    // 0xe30c3978
    async pendingOwner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'pendingOwner'));
    }

    // 0x085d4883
    async provider (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'provider'));
    }

    // 0x715018a6
    async renounceOwnership (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'renounceOwnership'), sender);
    }

    // 0x7bc65b6e
    async roundStaleAfter (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'roundStaleAfter'));
    }

    // 0x2ede662f
    async rounds (roundIdx: bigint): Promise<{ aprTarget: number, aprBase: number, updatedAt: number, answeredInRound: number }> {
        return this.$read(this.$getAbiItem('function', 'rounds'), roundIdx);
    }

    // 0xfde34130
    async roundsCap (): Promise<number> {
        return this.$read(this.$getAbiItem('function', 'roundsCap'));
    }

    // 0x0e32cb86
    async setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setAccessControlManager'), sender, accessControlManager_);
    }

    // 0xcfd8d6c0
    async setProvider (sender: TSender, provider_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setProvider'), sender, provider_);
    }

    // 0xfad7206a
    async setRoundStaleAfter (sender: TSender, roundStaleAfter_: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setRoundStaleAfter'), sender, roundStaleAfter_);
    }

    // 0x593ec077
    async setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setTwoStepConfigManager'), sender, twoStepConfigManager_);
    }

    // 0x34a4338a
    async setValuationKeeper (sender: TSender, valuationKeeper_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setValuationKeeper'), sender, valuationKeeper_);
    }

    // 0xcc6f82ea
    async sourcePref (): Promise<number> {
        return this.$read(this.$getAbiItem('function', 'sourcePref'));
    }

    // 0xf2fde38b
    async transferOwnership (sender: TSender, newOwner: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transferOwnership'), sender, newOwner);
    }

    // 0x2a1590a4
    async twoStepConfigManager (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'twoStepConfigManager'));
    }

        
    // 0x21e541dd
    async updateRoundData (sender: TSender, ): Promise<TxWriter>
    // 0x2317705f
    async updateRoundData (sender: TSender, aprTarget: number, aprBase: number, timestamp: number): Promise<TxWriter>
        async updateRoundData (sender: TSender, ...args): Promise<TxWriter> {
            let abi = this.$getAbiItemOverload([ 'function updateRoundData()', 'function updateRoundData(int64, int64, uint64)' ], args);
            return this.$write(abi, sender, ...args);
        }

    // 0x27549e30
    async valuationKeeper (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'valuationKeeper'));
    }

    $call () {
        return super.$call() as IAprPairFeedV2TxCaller;
    }
    $signed (): TOverrideReturns<IAprPairFeedV2TxCaller, Promise<{ signed: TEth.Hex, error?: Error & { data?: { type: string, params } } }>> {
        return super.$signed() as any;
    }
    $data (): IAprPairFeedV2TxData {
        return super.$data() as IAprPairFeedV2TxData;
    }
    $gas (): TOverrideReturns<IAprPairFeedV2TxCaller, Promise<{ gas?: bigint, price?: bigint, error?: Error & { data?: { type: string, params } } }>> {
        return super.$gas() as any;
    }

    onTransaction <TMethod extends keyof TAprPairFeedV2Types['Methods']> (method: TMethod, options: Parameters<ContractBase['$onTransaction']>[0]): SubjectStream<{
        tx: TEth.Tx
        block: TEth.Block<TEth.Hex>
        calldata: {
            method: TMethod
            arguments: TAprPairFeedV2Types['Methods'][TMethod]['arguments']
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

    onAnswerUpdated (fn?: (event: TClientEventsStreamData<TEventArguments<'AnswerUpdated'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'AnswerUpdated'>>> {
        return this.$onLog('AnswerUpdated', fn);
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

    onProviderSet (fn?: (event: TClientEventsStreamData<TEventArguments<'ProviderSet'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'ProviderSet'>>> {
        return this.$onLog('ProviderSet', fn);
    }

    onSourcePrefChanged (fn?: (event: TClientEventsStreamData<TEventArguments<'SourcePrefChanged'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'SourcePrefChanged'>>> {
        return this.$onLog('SourcePrefChanged', fn);
    }

    onStalePeriodSet (fn?: (event: TClientEventsStreamData<TEventArguments<'StalePeriodSet'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'StalePeriodSet'>>> {
        return this.$onLog('StalePeriodSet', fn);
    }

    extractLogsAnswerUpdated (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'AnswerUpdated'>>[] {
        let abi = this.$getAbiItem('event', 'AnswerUpdated');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'AnswerUpdated'>>[];
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

    extractLogsProviderSet (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'ProviderSet'>>[] {
        let abi = this.$getAbiItem('event', 'ProviderSet');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'ProviderSet'>>[];
    }

    extractLogsSourcePrefChanged (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'SourcePrefChanged'>>[] {
        let abi = this.$getAbiItem('event', 'SourcePrefChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'SourcePrefChanged'>>[];
    }

    extractLogsStalePeriodSet (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'StalePeriodSet'>>[] {
        let abi = this.$getAbiItem('event', 'StalePeriodSet');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'StalePeriodSet'>>[];
    }

    async getPastLogsAnswerUpdated (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'AnswerUpdated'>>[]> {
        return await this.$getPastLogsParsed('AnswerUpdated', options) as any;
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

    async getPastLogsProviderSet (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'ProviderSet'>>[]> {
        return await this.$getPastLogsParsed('ProviderSet', options) as any;
    }

    async getPastLogsSourcePrefChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'SourcePrefChanged'>>[]> {
        return await this.$getPastLogsParsed('SourcePrefChanged', options) as any;
    }

    async getPastLogsStalePeriodSet (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'StalePeriodSet'>>[]> {
        return await this.$getPastLogsParsed('StalePeriodSet', options) as any;
    }

    abi: TAbiItem[] = [{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32","name":"neededRole","type":"bytes32"}],"name":"AccessControlUnauthorizedAccount","type":"error"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"inputs":[{"internalType":"int64","name":"aprTarget","type":"int64"},{"internalType":"int64","name":"aprBase","type":"int64"},{"internalType":"uint64","name":"timestamp","type":"uint64"}],"name":"OutOfOrderUpdate","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"int64","name":"aprTarget","type":"int64"},{"internalType":"int64","name":"aprBase","type":"int64"},{"internalType":"uint64","name":"timestamp","type":"uint64"}],"name":"StaleUpdate","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"calledContract","type":"address"},{"internalType":"bytes4","name":"sel","type":"bytes4"}],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"int64","name":"aprTarget","type":"int64"},{"indexed":false,"internalType":"int64","name":"aprBase","type":"int64"},{"indexed":false,"internalType":"uint64","name":"roundId","type":"uint64"},{"indexed":false,"internalType":"uint64","name":"updatedAt","type":"uint64"}],"name":"AnswerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"accessControlManager","type":"address"}],"name":"NewAccessControlManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"twoStepConfigManager","type":"address"}],"name":"NewTwoStepConfigManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"valuationKeeper","type":"address"}],"name":"NewValuationKeeper","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newProvider","type":"address"}],"name":"ProviderSet","type":"event"},{"anonymous":false,"inputs":[],"name":"SourcePrefChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"stalePeriod","type":"uint256"}],"name":"StalePeriodSet","type":"event"},{"inputs":[],"name":"COOLDOWN_WORKER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROPOSER_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RESERVE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_CDO_APR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_FEED_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_STRAT_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acm","outputs":[{"internalType":"contract IAccessControlManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"roundId","type":"uint64"}],"name":"getRoundData","outputs":[{"components":[{"internalType":"int64","name":"aprTarget","type":"int64"},{"internalType":"int64","name":"aprBase","type":"int64"},{"internalType":"uint64","name":"updatedAt","type":"uint64"},{"internalType":"uint64","name":"answeredInRound","type":"uint64"}],"internalType":"struct IAprPairFeed.TRound","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"acm_","type":"address"},{"internalType":"contract IStrategyAprPairProvider","name":"provider_","type":"address"},{"internalType":"uint256","name":"roundStaleAfter_","type":"uint256"},{"internalType":"string","name":"description_","type":"string"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"latestRound","outputs":[{"internalType":"int64","name":"aprTarget","type":"int64"},{"internalType":"int64","name":"aprBase","type":"int64"},{"internalType":"uint64","name":"updatedAt","type":"uint64"},{"internalType":"uint64","name":"answeredInRound","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"components":[{"internalType":"int64","name":"aprTarget","type":"int64"},{"internalType":"int64","name":"aprBase","type":"int64"},{"internalType":"uint64","name":"updatedAt","type":"uint64"},{"internalType":"uint64","name":"answeredInRound","type":"uint64"}],"internalType":"struct IAprPairFeed.TRound","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundId","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"provider","outputs":[{"internalType":"contract IStrategyAprPairProvider","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"roundStaleAfter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"roundIdx","type":"uint80"}],"name":"rounds","outputs":[{"internalType":"int64","name":"aprTarget","type":"int64"},{"internalType":"int64","name":"aprBase","type":"int64"},{"internalType":"uint64","name":"updatedAt","type":"uint64"},{"internalType":"uint64","name":"answeredInRound","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"roundsCap","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"accessControlManager_","type":"address"}],"name":"setAccessControlManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IStrategyAprPairProvider","name":"provider_","type":"address"}],"name":"setProvider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"roundStaleAfter_","type":"uint256"}],"name":"setRoundStaleAfter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"twoStepConfigManager_","type":"address"}],"name":"setTwoStepConfigManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"valuationKeeper_","type":"address"}],"name":"setValuationKeeper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sourcePref","outputs":[{"internalType":"enum AprPairFeed.ESourcePref","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"twoStepConfigManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updateRoundData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int64","name":"aprTarget","type":"int64"},{"internalType":"int64","name":"aprBase","type":"int64"},{"internalType":"uint64","name":"timestamp","type":"uint64"}],"name":"updateRoundData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"valuationKeeper","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

    declare storage: AprPairFeedV2StorageReader
}

type TSender = TAccount & {
    value?: string | number | bigint
}

type TEventLogOptions<TParams> = {
    fromBlock?: number | Date
    toBlock?: number | Date
    params?: TParams
}

export type TAprPairFeedV2Types = {
    Events: {
        AnswerUpdated: {
            outputParams: { aprTarget: number, aprBase: number, roundId: number, updatedAt: number },
            outputArgs:   [ aprTarget: number, aprBase: number, roundId: number, updatedAt: number ],
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
        ProviderSet: {
            outputParams: { newProvider: TAddress },
            outputArgs:   [ newProvider: TAddress ],
        }
        SourcePrefChanged: {
            outputParams: {  },
            outputArgs:   [  ],
        }
        StalePeriodSet: {
            outputParams: { stalePeriod: bigint },
            outputArgs:   [ stalePeriod: bigint ],
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
        decimals: {
          method: "decimals"
          arguments: [  ]
        }
        description: {
          method: "description"
          arguments: [  ]
        }
        getRoundData: {
          method: "getRoundData"
          arguments: [ roundId: number ]
        }
        initialize: {
          method: "initialize"
          arguments: [ owner_: TAddress, acm_: TAddress, provider_: TAddress, roundStaleAfter_: bigint, description_: string ]
        }
        latestRound: {
          method: "latestRound"
          arguments: [  ]
        }
        latestRoundData: {
          method: "latestRoundData"
          arguments: [  ]
        }
        latestRoundId: {
          method: "latestRoundId"
          arguments: [  ]
        }
        owner: {
          method: "owner"
          arguments: [  ]
        }
        pendingOwner: {
          method: "pendingOwner"
          arguments: [  ]
        }
        provider: {
          method: "provider"
          arguments: [  ]
        }
        renounceOwnership: {
          method: "renounceOwnership"
          arguments: [  ]
        }
        roundStaleAfter: {
          method: "roundStaleAfter"
          arguments: [  ]
        }
        rounds: {
          method: "rounds"
          arguments: [ roundIdx: bigint ]
        }
        roundsCap: {
          method: "roundsCap"
          arguments: [  ]
        }
        setAccessControlManager: {
          method: "setAccessControlManager"
          arguments: [ accessControlManager_: TAddress ]
        }
        setProvider: {
          method: "setProvider"
          arguments: [ provider_: TAddress ]
        }
        setRoundStaleAfter: {
          method: "setRoundStaleAfter"
          arguments: [ roundStaleAfter_: bigint ]
        }
        setTwoStepConfigManager: {
          method: "setTwoStepConfigManager"
          arguments: [ twoStepConfigManager_: TAddress ]
        }
        setValuationKeeper: {
          method: "setValuationKeeper"
          arguments: [ valuationKeeper_: TAddress ]
        }
        sourcePref: {
          method: "sourcePref"
          arguments: [  ]
        }
        transferOwnership: {
          method: "transferOwnership"
          arguments: [ newOwner: TAddress ]
        }
        twoStepConfigManager: {
          method: "twoStepConfigManager"
          arguments: [  ]
        }
        updateRoundData: {
          method: "updateRoundData"
          arguments: [  ] | [ aprTarget: number, aprBase: number, timestamp: number ]
        }
        valuationKeeper: {
          method: "valuationKeeper"
          arguments: [  ]
        }
    }
}



class AprPairFeedV2StorageReader extends ContractStorageReaderBase {
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

    async description(): Promise<string> {
        return this.$storage.get(['description', ]);
    }

    async latestRoundId(): Promise<number> {
        return this.$storage.get(['latestRoundId', ]);
    }

    async latestRound(): Promise<{ aprTarget: number, aprBase: number, updatedAt: number, answeredInRound: number }> {
        return this.$storage.get(['latestRound', ]);
    }

    async rounds(key: bigint): Promise<{ aprTarget: number, aprBase: number, updatedAt: number, answeredInRound: number }> {
        return this.$storage.get(['rounds', key]);
    }

    async roundStaleAfter(): Promise<bigint> {
        return this.$storage.get(['roundStaleAfter', ]);
    }

    async provider(): Promise<TAddress> {
        return this.$storage.get(['provider', ]);
    }

    async sourcePref(): Promise<number> {
        return this.$storage.get(['sourcePref', ]);
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
        "name": "description",
        "size": null,
        "type": "string"
    },
    {
        "slot": 51,
        "position": 0,
        "name": "latestRoundId",
        "size": 64,
        "type": "uint64"
    },
    {
        "slot": 52,
        "position": 0,
        "name": "latestRound",
        "size": 256,
        "type": "(int64 aprTarget, int64 aprBase, uint64 updatedAt, uint64 answeredInRound)"
    },
    {
        "slot": 53,
        "position": 0,
        "name": "rounds",
        "size": null,
        "type": "mapping(uint80 => (int64 aprTarget, int64 aprBase, uint64 updatedAt, uint64 answeredInRound))"
    },
    {
        "slot": 54,
        "position": 0,
        "name": "roundStaleAfter",
        "size": 256,
        "type": "uint256"
    },
    {
        "slot": 55,
        "position": 0,
        "name": "provider",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 55,
        "position": 160,
        "name": "sourcePref",
        "size": 8,
        "type": "enum"
    }
]

}


interface IAprPairFeedV2TxCaller {
    acceptOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress, provider_: TAddress, roundStaleAfter_: bigint, description_: string): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    renounceOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setProvider (sender: TSender, provider_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setRoundStaleAfter (sender: TSender, roundStaleAfter_: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setValuationKeeper (sender: TSender, valuationKeeper_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    updateRoundData (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    updateRoundData (sender: TSender, aprTarget: number, aprBase: number, timestamp: number): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
}


interface IAprPairFeedV2TxData {
    acceptOwnership (sender: TSender, ): Promise<TEth.TxLike>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress, provider_: TAddress, roundStaleAfter_: bigint, description_: string): Promise<TEth.TxLike>
    renounceOwnership (sender: TSender, ): Promise<TEth.TxLike>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TEth.TxLike>
    setProvider (sender: TSender, provider_: TAddress): Promise<TEth.TxLike>
    setRoundStaleAfter (sender: TSender, roundStaleAfter_: bigint): Promise<TEth.TxLike>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TEth.TxLike>
    setValuationKeeper (sender: TSender, valuationKeeper_: TAddress): Promise<TEth.TxLike>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<TEth.TxLike>
    updateRoundData (sender: TSender, ): Promise<TEth.TxLike>
    updateRoundData (sender: TSender, aprTarget: number, aprBase: number, timestamp: number): Promise<TEth.TxLike>
}


type TEvents = TAprPairFeedV2Types['Events'];
type TEventParams<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputParams']>;
type TEventArguments<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputArgs']>;
