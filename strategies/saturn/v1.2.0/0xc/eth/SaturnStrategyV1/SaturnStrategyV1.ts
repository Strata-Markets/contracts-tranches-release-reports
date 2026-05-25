/**
 *  AUTO-Generated Class: 2026-05-25 13:41
 *  Implementation: https://etherscan.io/address/0x9686e327a6f50aca2a1bea4219e04dc4449dc286#code
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

export namespace SaturnStrategyV1Errors {
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
    export type Error = AccessControlUnauthorizedAccount | AlreadyConfigured | DepositCapReached | DepositsDisabled | InvalidCaller | InvalidConfigCooldown | InvalidInitialization | InvalidTranche | MinSharesViolation | NotInitializing | OwnableInvalidOwner | OwnableUnauthorizedAccount | ReentrancyGuardReentrantCall | SafeERC20FailedOperation | Unauthorized | UnsupportedToken | WithdrawalCapReached | WithdrawalsDisabled | ZeroAddress | ZeroAmount
}

export class SaturnStrategyV1 extends ContractBase {
    constructor(
        public address: TEth.Address = '0x9686e327a6f50aca2a1bea4219e04dc4449dc286',
        public client: Web3Client = di.resolve(EvmWeb3Client, { platform: 'eth' }),
        public explorer: IBlockchainExplorer = di.resolve(Evmscan, { platform: 'eth' }),
    ) {
        super(address, client, explorer)

        this.storage = new SaturnStrategyV1StorageReader(this.address, this.client, this.explorer);
    }

    Types: TSaturnStrategyV1Types;

    $meta = {
        "class": "./0xc/eth/SaturnStrategyV1/SaturnStrategyV1.ts"
    }

    async $constructor (deployer: TSender, sUSDat_: TAddress): Promise<TxWriter> {
        throw new Error('Not implemented. Typing purpose. Use the ContractDeployer class to deploy the contract');
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

    // 0xf2eacd30
    async USDat (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'USDat'));
    }

    // 0x79ba5097
    async acceptOwnership (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'acceptOwnership'), sender);
    }

    // 0x7338ddcc
    async acm (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'acm'));
    }

    // 0x387a7237
    async cdo (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'cdo'));
    }

    // 0x9447d016
    async convertToAssets (token: TAddress, tokenAmount: bigint, rounding: number): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'convertToAssets'), token, tokenAmount, rounding);
    }

    // 0x3fe26fee
    async convertToTokens (token: TAddress, baseAssets: bigint, rounding: number): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'convertToTokens'), token, baseAssets, rounding);
    }

    // 0xa3ed9cd0
    async deposit (sender: TSender, input0: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, owner: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'deposit'), sender, input0, token, tokenAmount, baseAssets, owner);
    }

    // 0x205db62f
    async depositFeeBps (tokenIn: TAddress): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'depositFeeBps'), tokenIn);
    }

    // 0xca4c111f
    async ensureRedeemable (caller: TAddress, input1: TAddress, baseAssets: bigint): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'ensureRedeemable'), caller, input1, baseAssets);
    }

    // 0x3922b602
    async erc20Cooldown (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'erc20Cooldown'));
    }

    // 0x6b1c5dba
    async getCDOAddress (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'getCDOAddress'));
    }

    // 0xd3c7c2c7
    async getSupportedTokens (): Promise<TAddress[]> {
        return this.$read(this.$getAbiItem('function', 'getSupportedTokens'));
    }

    // 0x1459457a
    async initialize (sender: TSender, owner_: TAddress, acm_: TAddress, cdo_: TAddress, erc20Cooldown_: TAddress, unstakeCooldown_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'initialize'), sender, owner_, acm_, cdo_, erc20Cooldown_, unstakeCooldown_);
    }

    // 0x8da5cb5b
    async owner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'owner'));
    }

    // 0xe30c3978
    async pendingOwner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'pendingOwner'));
    }

    // 0x6fb93754
    async reduceReserve (sender: TSender, token: TAddress, tokenAmount: bigint, receiver: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'reduceReserve'), sender, token, tokenAmount, receiver);
    }

    // 0x715018a6
    async renounceOwnership (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'renounceOwnership'), sender);
    }

    // 0x77f6d48d
    async sUSDat (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'sUSDat'));
    }

    // 0xfa3552e9
    async sUSDatCooldownJrt (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'sUSDatCooldownJrt'));
    }

    // 0x10aa60df
    async sUSDatCooldownSrt (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'sUSDatCooldownSrt'));
    }

    // 0x0e32cb86
    async setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setAccessControlManager'), sender, accessControlManager_);
    }

    // 0xcd123d41
    async setCooldowns (sender: TSender, sUSDatCooldownJrt_: bigint, sUSDatCooldownSrt_: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setCooldowns'), sender, sUSDatCooldownJrt_, sUSDatCooldownSrt_);
    }

    // 0x593ec077
    async setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setTwoStepConfigManager'), sender, twoStepConfigManager_);
    }

        
    // 0x01e1d114
    async totalAssets (): Promise<bigint>
    // 0x923f82f3
    async totalAssets (input0: bigint, input1: bigint): Promise<bigint>
        async totalAssets (...args): Promise<bigint> {
            let abi = this.$getAbiItemOverload('totalAssets', args);
            return this.$read(abi, ...args);
        }

    // 0xf2fde38b
    async transferOwnership (sender: TSender, newOwner: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transferOwnership'), sender, newOwner);
    }

    // 0x2a1590a4
    async twoStepConfigManager (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'twoStepConfigManager'));
    }

    // 0x7eefd5ae
    async unstakeCooldown (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'unstakeCooldown'));
    }

        
    // 0x1e9d4f8f
    async withdraw (sender: TSender, tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, _sender: TAddress, receiver: TAddress, shouldSkipCooldown: boolean): Promise<TxWriter>
    // 0x390425b0
    async withdraw (sender: TSender, tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, _sender: TAddress, receiver: TAddress): Promise<TxWriter>
        async withdraw (sender: TSender, ...args): Promise<TxWriter> {
            let abi = this.$getAbiItemOverload([ 'function withdraw(address, address, uint256, uint256, address, address, bool) returns uint256', 'function withdraw(address, address, uint256, uint256, address, address) returns uint256' ], args);
            return this.$write(abi, sender, ...args);
        }

    $call () {
        return super.$call() as ISaturnStrategyV1TxCaller;
    }
    $signed (): TOverrideReturns<ISaturnStrategyV1TxCaller, Promise<{ signed: TEth.Hex, error?: Error & { data?: { type: string, params } } }>> {
        return super.$signed() as any;
    }
    $data (): ISaturnStrategyV1TxData {
        return super.$data() as ISaturnStrategyV1TxData;
    }
    $gas (): TOverrideReturns<ISaturnStrategyV1TxCaller, Promise<{ gas?: bigint, price?: bigint, error?: Error & { data?: { type: string, params } } }>> {
        return super.$gas() as any;
    }

    onTransaction <TMethod extends keyof TSaturnStrategyV1Types['Methods']> (method: TMethod, options: Parameters<ContractBase['$onTransaction']>[0]): SubjectStream<{
        tx: TEth.Tx
        block: TEth.Block<TEth.Hex>
        calldata: {
            method: TMethod
            arguments: TSaturnStrategyV1Types['Methods'][TMethod]['arguments']
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

    onCooldownsChanged (fn?: (event: TClientEventsStreamData<TEventArguments<'CooldownsChanged'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'CooldownsChanged'>>> {
        return this.$onLog('CooldownsChanged', fn);
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

    extractLogsCooldownsChanged (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'CooldownsChanged'>>[] {
        let abi = this.$getAbiItem('event', 'CooldownsChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'CooldownsChanged'>>[];
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

    async getPastLogsCooldownsChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'CooldownsChanged'>>[]> {
        return await this.$getPastLogsParsed('CooldownsChanged', options) as any;
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

    abi: TAbiItem[] = [{"inputs":[{"internalType":"contract IsUSDat","name":"sUSDat_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32","name":"neededRole","type":"bytes32"}],"name":"AccessControlUnauthorizedAccount","type":"error"},{"inputs":[],"name":"AlreadyConfigured","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"DepositCapReached","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"DepositsDisabled","type":"error"},{"inputs":[{"internalType":"address","name":"caller","type":"address"}],"name":"InvalidCaller","type":"error"},{"inputs":[],"name":"InvalidConfigCooldown","type":"error"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"InvalidTranche","type":"error"},{"inputs":[],"name":"MinSharesViolation","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"calledContract","type":"address"},{"internalType":"bytes4","name":"sel","type":"bytes4"}],"name":"Unauthorized","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"UnsupportedToken","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"WithdrawalCapReached","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"WithdrawalsDisabled","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"inputs":[],"name":"ZeroAmount","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"jrt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"srt","type":"uint256"}],"name":"CooldownsChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"accessControlManager","type":"address"}],"name":"NewAccessControlManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"twoStepConfigManager","type":"address"}],"name":"NewTwoStepConfigManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"COOLDOWN_WORKER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROPOSER_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RESERVE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_CDO_APR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_FEED_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_STRAT_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDat","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acm","outputs":[{"internalType":"contract IAccessControlManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cdo","outputs":[{"internalType":"contract IStrataCDO","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"enum Math.Rounding","name":"rounding","type":"uint8"}],"name":"convertToAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"baseAssets","type":"uint256"},{"internalType":"enum Math.Rounding","name":"rounding","type":"uint8"}],"name":"convertToTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"baseAssets","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"}],"name":"depositFeeBps","outputs":[{"internalType":"uint256","name":"feeBps","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"caller","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"baseAssets","type":"uint256"}],"name":"ensureRedeemable","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20Cooldown","outputs":[{"internalType":"contract IERC20Cooldown","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCDOAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSupportedTokens","outputs":[{"internalType":"contract IERC20[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"acm_","type":"address"},{"internalType":"contract IStrataCDO","name":"cdo_","type":"address"},{"internalType":"contract IERC20Cooldown","name":"erc20Cooldown_","type":"address"},{"internalType":"contract IUnstakeCooldown","name":"unstakeCooldown_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"reduceReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sUSDat","outputs":[{"internalType":"contract IsUSDat","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sUSDatCooldownJrt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sUSDatCooldownSrt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"accessControlManager_","type":"address"}],"name":"setAccessControlManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"sUSDatCooldownJrt_","type":"uint256"},{"internalType":"uint256","name":"sUSDatCooldownSrt_","type":"uint256"}],"name":"setCooldowns","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"twoStepConfigManager_","type":"address"}],"name":"setTwoStepConfigManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAssets","outputs":[{"internalType":"uint256","name":"baseAssets","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalAssets","outputs":[{"internalType":"uint256","name":"baseAssets","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"twoStepConfigManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unstakeCooldown","outputs":[{"internalType":"contract IUnstakeCooldown","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"baseAssets","type":"uint256"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"bool","name":"shouldSkipCooldown","type":"bool"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"baseAssets","type":"uint256"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]

    declare storage: SaturnStrategyV1StorageReader
}

type TSender = TAccount & {
    value?: string | number | bigint
}

type TEventLogOptions<TParams> = {
    fromBlock?: number | Date
    toBlock?: number | Date
    params?: TParams
}

export type TSaturnStrategyV1Types = {
    Events: {
        CooldownsChanged: {
            outputParams: { jrt: bigint, srt: bigint },
            outputArgs:   [ jrt: bigint, srt: bigint ],
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
        USDat: {
          method: "USDat"
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
        cdo: {
          method: "cdo"
          arguments: [  ]
        }
        convertToAssets: {
          method: "convertToAssets"
          arguments: [ token: TAddress, tokenAmount: bigint, rounding: number ]
        }
        convertToTokens: {
          method: "convertToTokens"
          arguments: [ token: TAddress, baseAssets: bigint, rounding: number ]
        }
        deposit: {
          method: "deposit"
          arguments: [ input0: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, owner: TAddress ]
        }
        depositFeeBps: {
          method: "depositFeeBps"
          arguments: [ tokenIn: TAddress ]
        }
        ensureRedeemable: {
          method: "ensureRedeemable"
          arguments: [ caller: TAddress, input1: TAddress, baseAssets: bigint ]
        }
        erc20Cooldown: {
          method: "erc20Cooldown"
          arguments: [  ]
        }
        getCDOAddress: {
          method: "getCDOAddress"
          arguments: [  ]
        }
        getSupportedTokens: {
          method: "getSupportedTokens"
          arguments: [  ]
        }
        initialize: {
          method: "initialize"
          arguments: [ owner_: TAddress, acm_: TAddress, cdo_: TAddress, erc20Cooldown_: TAddress, unstakeCooldown_: TAddress ]
        }
        owner: {
          method: "owner"
          arguments: [  ]
        }
        pendingOwner: {
          method: "pendingOwner"
          arguments: [  ]
        }
        reduceReserve: {
          method: "reduceReserve"
          arguments: [ token: TAddress, tokenAmount: bigint, receiver: TAddress ]
        }
        renounceOwnership: {
          method: "renounceOwnership"
          arguments: [  ]
        }
        sUSDat: {
          method: "sUSDat"
          arguments: [  ]
        }
        sUSDatCooldownJrt: {
          method: "sUSDatCooldownJrt"
          arguments: [  ]
        }
        sUSDatCooldownSrt: {
          method: "sUSDatCooldownSrt"
          arguments: [  ]
        }
        setAccessControlManager: {
          method: "setAccessControlManager"
          arguments: [ accessControlManager_: TAddress ]
        }
        setCooldowns: {
          method: "setCooldowns"
          arguments: [ sUSDatCooldownJrt_: bigint, sUSDatCooldownSrt_: bigint ]
        }
        setTwoStepConfigManager: {
          method: "setTwoStepConfigManager"
          arguments: [ twoStepConfigManager_: TAddress ]
        }
        totalAssets: {
          method: "totalAssets"
          arguments: [  ] | [ input0: bigint, input1: bigint ]
        }
        transferOwnership: {
          method: "transferOwnership"
          arguments: [ newOwner: TAddress ]
        }
        twoStepConfigManager: {
          method: "twoStepConfigManager"
          arguments: [  ]
        }
        unstakeCooldown: {
          method: "unstakeCooldown"
          arguments: [  ]
        }
        withdraw: {
          method: "withdraw"
          arguments: [ tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, _sender: TAddress, receiver: TAddress, shouldSkipCooldown: boolean ] | [ tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, _sender: TAddress, receiver: TAddress ]
        }
    }
}



class SaturnStrategyV1StorageReader extends ContractStorageReaderBase {
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

    async __gap$(): Promise<bigint[48]> {
        return this.$storage.get(['__gap$', ]);
    }

    async cdo(): Promise<TAddress> {
        return this.$storage.get(['cdo', ]);
    }

    async __gap(): Promise<bigint[49]> {
        return this.$storage.get(['__gap', ]);
    }

    async erc20Cooldown(): Promise<TAddress> {
        return this.$storage.get(['erc20Cooldown', ]);
    }

    async unstakeCooldown(): Promise<TAddress> {
        return this.$storage.get(['unstakeCooldown', ]);
    }

    async sUSDatCooldownJrt(): Promise<bigint> {
        return this.$storage.get(['sUSDatCooldownJrt', ]);
    }

    async sUSDatCooldownSrt(): Promise<bigint> {
        return this.$storage.get(['sUSDatCooldownSrt', ]);
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
        "name": "__gap$",
        "size": 12288,
        "type": "uint256[48]"
    },
    {
        "slot": 50,
        "position": 0,
        "name": "cdo",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 51,
        "position": 0,
        "name": "__gap",
        "size": 12544,
        "type": "uint256[49]"
    },
    {
        "slot": 100,
        "position": 0,
        "name": "erc20Cooldown",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 101,
        "position": 0,
        "name": "unstakeCooldown",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 102,
        "position": 0,
        "name": "sUSDatCooldownJrt",
        "size": 256,
        "type": "uint256"
    },
    {
        "slot": 103,
        "position": 0,
        "name": "sUSDatCooldownSrt",
        "size": 256,
        "type": "uint256"
    }
]

}


interface ISaturnStrategyV1TxCaller {
    acceptOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    deposit (sender: TSender, input0: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, owner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress, cdo_: TAddress, erc20Cooldown_: TAddress, unstakeCooldown_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    reduceReserve (sender: TSender, token: TAddress, tokenAmount: bigint, receiver: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    renounceOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setCooldowns (sender: TSender, sUSDatCooldownJrt_: bigint, sUSDatCooldownSrt_: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    withdraw (sender: TSender, tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, _sender: TAddress, receiver: TAddress, shouldSkipCooldown: boolean): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    withdraw (sender: TSender, tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, _sender: TAddress, receiver: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
}


interface ISaturnStrategyV1TxData {
    acceptOwnership (sender: TSender, ): Promise<TEth.TxLike>
    deposit (sender: TSender, input0: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, owner: TAddress): Promise<TEth.TxLike>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress, cdo_: TAddress, erc20Cooldown_: TAddress, unstakeCooldown_: TAddress): Promise<TEth.TxLike>
    reduceReserve (sender: TSender, token: TAddress, tokenAmount: bigint, receiver: TAddress): Promise<TEth.TxLike>
    renounceOwnership (sender: TSender, ): Promise<TEth.TxLike>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TEth.TxLike>
    setCooldowns (sender: TSender, sUSDatCooldownJrt_: bigint, sUSDatCooldownSrt_: bigint): Promise<TEth.TxLike>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TEth.TxLike>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<TEth.TxLike>
    withdraw (sender: TSender, tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, _sender: TAddress, receiver: TAddress, shouldSkipCooldown: boolean): Promise<TEth.TxLike>
    withdraw (sender: TSender, tranche: TAddress, token: TAddress, tokenAmount: bigint, baseAssets: bigint, _sender: TAddress, receiver: TAddress): Promise<TEth.TxLike>
}


type TEvents = TSaturnStrategyV1Types['Events'];
type TEventParams<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputParams']>;
type TEventArguments<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputArgs']>;
