/**
 *  AUTO-Generated Class: 2026-08-21 10:36
 *  Implementation: https://etherscan.io/address/0xeB97f3084d3817C9e64250B6D43cEF28E9dEa057#code
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

export namespace AccountingV1Errors {
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
    export interface InvalidNavSplit {
        type: 'InvalidNavSplit'
        params: {
            navT1: bigint
            jrtAssets: bigint
            srtAssets: bigint
            reserveAssets: bigint
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
    export interface PRBMath_MulDiv18_Overflow {
        type: 'PRBMath_MulDiv18_Overflow'
        params: {
            x: bigint
            y: bigint
        }
    }
    export interface PRBMath_UD60x18_Exp2_InputTooBig {
        type: 'PRBMath_UD60x18_Exp2_InputTooBig'
        params: {
            x: bigint
        }
    }
    export interface PRBMath_UD60x18_Log_InputTooSmall {
        type: 'PRBMath_UD60x18_Log_InputTooSmall'
        params: {
            x: bigint
        }
    }
    export interface ReentrancyGuardReentrantCall {
        type: 'ReentrancyGuardReentrantCall'
        params: {
        }
    }
    export interface ReserveTooLow {
        type: 'ReserveTooLow'
        params: {
            reserveNav: bigint
            requestedNav: bigint
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
    export type Error = AccessControlUnauthorizedAccount | AlreadyConfigured | DepositCapReached | DepositsDisabled | InvalidCaller | InvalidConfigCooldown | InvalidInitialization | InvalidNavSplit | InvalidTranche | MinSharesViolation | NotInitializing | OwnableInvalidOwner | OwnableUnauthorizedAccount | PRBMath_MulDiv18_Overflow | PRBMath_UD60x18_Exp2_InputTooBig | PRBMath_UD60x18_Log_InputTooSmall | ReentrancyGuardReentrantCall | ReserveTooLow | Unauthorized | UnsupportedToken | WithdrawalCapReached | WithdrawalsDisabled | ZeroAddress | ZeroAmount
}

export class AccountingV1 extends ContractBase {
    constructor(
        public address: TEth.Address = '0xeB97f3084d3817C9e64250B6D43cEF28E9dEa057',
        public client: Web3Client = di.resolve(EvmWeb3Client, { platform: 'eth' }),
        public explorer: IBlockchainExplorer = di.resolve(Evmscan, { platform: 'eth' }),
    ) {
        super(address, client, explorer)

        
    }

    Types: TAccountingV1Types;

    $meta = {
        "class": "./0xc/eth/AccountingV1/AccountingV1.ts"
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

    // 0x80099504
    async accrueFee (sender: TSender, isJrt: boolean, amount: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'accrueFee'), sender, isJrt, amount);
    }

    // 0x7338ddcc
    async acm (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'acm'));
    }

    // 0x053931b5
    async aprBase (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'aprBase'));
    }

    // 0x41642c9e
    async aprPairFeed (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'aprPairFeed'));
    }

    // 0x5ed45943
    async aprSrt (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'aprSrt'));
    }

    // 0x06d8e7a0
    async aprTarget (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'aprTarget'));
    }

    // 0xb12524ad
    async calculateNAVSplit (navT0: bigint, jrtNavT0: bigint, srtNavT0: bigint, reserveNavT0: bigint, navT1: bigint): Promise<{ jrtNavT1: bigint, srtNavT1: bigint, reserveNavT1: bigint }> {
        return this.$read(this.$getAbiItem('function', 'calculateNAVSplit'), navT0, jrtNavT0, srtNavT0, reserveNavT0, navT1);
    }

    // 0x387a7237
    async cdo (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'cdo'));
    }

    // 0x56bf4bc1
    async feeJrtRetentionBps (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'feeJrtRetentionBps'));
    }

    // 0x93774293
    async feeSrtRetentionBps (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'feeSrtRetentionBps'));
    }

    // 0x6b1c5dba
    async getCDOAddress (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'getCDOAddress'));
    }

    // 0x379e145e
    async indexTimestamp (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'indexTimestamp'));
    }

    // 0xf8c8765e
    async initialize (sender: TSender, owner_: TAddress, acm_: TAddress, cdo_: TAddress, aprPairFeed_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'initialize'), sender, owner_, acm_, cdo_, aprPairFeed_);
    }

    // 0x9e1ef4a7
    async jrtNav (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'jrtNav'));
    }

    // 0x798ed8ca
    async maxDeposit (isJrt: boolean): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'maxDeposit'), isJrt);
    }

        
    // 0x74c2aeab
    async maxWithdraw (isJrt: boolean, ownerIsSharesCooldown: boolean): Promise<bigint>
    // 0x94f749ae
    async maxWithdraw (isJrt: boolean): Promise<bigint>
        async maxWithdraw (...args): Promise<bigint> {
            let abi = this.$getAbiItemOverload('maxWithdraw', args);
            return this.$read(abi, ...args);
        }

    // 0x75fa55f1
    async minimumJrtSrtRatio (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'minimumJrtSrtRatio'));
    }

    // 0x025163fe
    async minimumJrtSrtRatioBuffer (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'minimumJrtSrtRatioBuffer'));
    }

    // 0xc1590cd7
    async nav (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'nav'));
    }

    // 0x81cb657e
    async onAprChanged (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'onAprChanged'), sender);
    }

    // 0x8da5cb5b
    async owner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'owner'));
    }

    // 0xe30c3978
    async pendingOwner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'pendingOwner'));
    }

    // 0x0fdc442f
    async reduceReserve (sender: TSender, amount: bigint, jrtAmountIn: bigint, srtAmountIn: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'reduceReserve'), sender, amount, jrtAmountIn, srtAmountIn);
    }

    // 0x715018a6
    async renounceOwnership (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'renounceOwnership'), sender);
    }

    // 0x38925449
    async reserveBps (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'reserveBps'));
    }

    // 0xf9411446
    async reserveNav (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'reserveNav'));
    }

    // 0x6319665e
    async riskK (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'riskK'));
    }

    // 0xeda83644
    async riskX (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'riskX'));
    }

    // 0x1fc9857a
    async riskY (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'riskY'));
    }

    // 0x0e32cb86
    async setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setAccessControlManager'), sender, accessControlManager_);
    }

    // 0xbd748176
    async setAprPairFeed (sender: TSender, aprPairFeed_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setAprPairFeed'), sender, aprPairFeed_);
    }

    // 0xb3f56b10
    async setFeeRetentionBps (sender: TSender, jrtRetentionBps: bigint, srtRetentionBps: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setFeeRetentionBps'), sender, jrtRetentionBps, srtRetentionBps);
    }

    // 0x384c80a7
    async setMinimumJrtSrtRatio (sender: TSender, ratio: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setMinimumJrtSrtRatio'), sender, ratio);
    }

    // 0xb54678e6
    async setMinimumJrtSrtRatioBuffer (sender: TSender, ratio: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setMinimumJrtSrtRatioBuffer'), sender, ratio);
    }

    // 0xe9308c25
    async setReserveBps (sender: TSender, bps: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setReserveBps'), sender, bps);
    }

    // 0x29b39158
    async setRiskParameters (sender: TSender, riskX_: bigint, riskY_: bigint, riskK_: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setRiskParameters'), sender, riskX_, riskY_, riskK_);
    }

    // 0x593ec077
    async setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setTwoStepConfigManager'), sender, twoStepConfigManager_);
    }

    // 0x9f351c87
    async srtNav (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'srtNav'));
    }

    // 0x07da4147
    async srtTargetIndex (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'srtTargetIndex'));
    }

    // 0x94605857
    async totalAssets (navT1: bigint): Promise<{ jrtNavT1: bigint, srtNavT1: bigint, reserveNavT1: bigint }> {
        return this.$read(this.$getAbiItem('function', 'totalAssets'), navT1);
    }

    // 0xe50d4e72
    async totalAssetsT0 (): Promise<{ jrtNavT0: bigint, srtNavT0: bigint, reserveNavT0: bigint }> {
        return this.$read(this.$getAbiItem('function', 'totalAssetsT0'));
    }

    // 0x4c68df67
    async totalReserve (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'totalReserve'));
    }

    // 0xf2fde38b
    async transferOwnership (sender: TSender, newOwner: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transferOwnership'), sender, newOwner);
    }

    // 0x2a1590a4
    async twoStepConfigManager (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'twoStepConfigManager'));
    }

    // 0x3bc35c21
    async updateAccounting (sender: TSender, navT1: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'updateAccounting'), sender, navT1);
    }

    // 0x3a3ef88f
    async updateBalanceFlow (sender: TSender, jrtAssetsIn: bigint, jrtAssetsOut: bigint, srtAssetsIn: bigint, srtAssetsOut: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'updateBalanceFlow'), sender, jrtAssetsIn, jrtAssetsOut, srtAssetsIn, srtAssetsOut);
    }

    $call () {
        return super.$call() as IAccountingV1TxCaller;
    }
    $signed (): TOverrideReturns<IAccountingV1TxCaller, Promise<{ signed: TEth.Hex, error?: Error & { data?: { type: string, params } } }>> {
        return super.$signed() as any;
    }
    $data (): IAccountingV1TxData {
        return super.$data() as IAccountingV1TxData;
    }
    $gas (): TOverrideReturns<IAccountingV1TxCaller, Promise<{ gas?: bigint, price?: bigint, error?: Error & { data?: { type: string, params } } }>> {
        return super.$gas() as any;
    }

    onTransaction <TMethod extends keyof TAccountingV1Types['Methods']> (method: TMethod, options: Parameters<ContractBase['$onTransaction']>[0]): SubjectStream<{
        tx: TEth.Tx
        block: TEth.Block<TEth.Hex>
        calldata: {
            method: TMethod
            arguments: TAccountingV1Types['Methods'][TMethod]['arguments']
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

    onAprDataChangedViaPush (fn?: (event: TClientEventsStreamData<TEventArguments<'AprDataChangedViaPush'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'AprDataChangedViaPush'>>> {
        return this.$onLog('AprDataChangedViaPush', fn);
    }

    onAprPairFeedChanged (fn?: (event: TClientEventsStreamData<TEventArguments<'AprPairFeedChanged'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'AprPairFeedChanged'>>> {
        return this.$onLog('AprPairFeedChanged', fn);
    }

    onFeeAccrued (fn?: (event: TClientEventsStreamData<TEventArguments<'FeeAccrued'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'FeeAccrued'>>> {
        return this.$onLog('FeeAccrued', fn);
    }

    onFeeRetentionChanged (fn?: (event: TClientEventsStreamData<TEventArguments<'FeeRetentionChanged'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'FeeRetentionChanged'>>> {
        return this.$onLog('FeeRetentionChanged', fn);
    }

    onInitialized (fn?: (event: TClientEventsStreamData<TEventArguments<'Initialized'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'Initialized'>>> {
        return this.$onLog('Initialized', fn);
    }

    onMinimumJrtSrtRatioBufferChanged (fn?: (event: TClientEventsStreamData<TEventArguments<'MinimumJrtSrtRatioBufferChanged'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'MinimumJrtSrtRatioBufferChanged'>>> {
        return this.$onLog('MinimumJrtSrtRatioBufferChanged', fn);
    }

    onMinimumJrtSrtRatioChanged (fn?: (event: TClientEventsStreamData<TEventArguments<'MinimumJrtSrtRatioChanged'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'MinimumJrtSrtRatioChanged'>>> {
        return this.$onLog('MinimumJrtSrtRatioChanged', fn);
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

    onReservePercentageChanged (fn?: (event: TClientEventsStreamData<TEventArguments<'ReservePercentageChanged'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'ReservePercentageChanged'>>> {
        return this.$onLog('ReservePercentageChanged', fn);
    }

    onRiskParametersChanged (fn?: (event: TClientEventsStreamData<TEventArguments<'RiskParametersChanged'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'RiskParametersChanged'>>> {
        return this.$onLog('RiskParametersChanged', fn);
    }

    extractLogsAprDataChangedViaPush (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'AprDataChangedViaPush'>>[] {
        let abi = this.$getAbiItem('event', 'AprDataChangedViaPush');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'AprDataChangedViaPush'>>[];
    }

    extractLogsAprPairFeedChanged (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'AprPairFeedChanged'>>[] {
        let abi = this.$getAbiItem('event', 'AprPairFeedChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'AprPairFeedChanged'>>[];
    }

    extractLogsFeeAccrued (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'FeeAccrued'>>[] {
        let abi = this.$getAbiItem('event', 'FeeAccrued');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'FeeAccrued'>>[];
    }

    extractLogsFeeRetentionChanged (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'FeeRetentionChanged'>>[] {
        let abi = this.$getAbiItem('event', 'FeeRetentionChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'FeeRetentionChanged'>>[];
    }

    extractLogsInitialized (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'Initialized'>>[] {
        let abi = this.$getAbiItem('event', 'Initialized');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'Initialized'>>[];
    }

    extractLogsMinimumJrtSrtRatioBufferChanged (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'MinimumJrtSrtRatioBufferChanged'>>[] {
        let abi = this.$getAbiItem('event', 'MinimumJrtSrtRatioBufferChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'MinimumJrtSrtRatioBufferChanged'>>[];
    }

    extractLogsMinimumJrtSrtRatioChanged (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'MinimumJrtSrtRatioChanged'>>[] {
        let abi = this.$getAbiItem('event', 'MinimumJrtSrtRatioChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'MinimumJrtSrtRatioChanged'>>[];
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

    extractLogsReservePercentageChanged (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'ReservePercentageChanged'>>[] {
        let abi = this.$getAbiItem('event', 'ReservePercentageChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'ReservePercentageChanged'>>[];
    }

    extractLogsRiskParametersChanged (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'RiskParametersChanged'>>[] {
        let abi = this.$getAbiItem('event', 'RiskParametersChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'RiskParametersChanged'>>[];
    }

    async getPastLogsAprDataChangedViaPush (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'AprDataChangedViaPush'>>[]> {
        return await this.$getPastLogsParsed('AprDataChangedViaPush', options) as any;
    }

    async getPastLogsAprPairFeedChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'AprPairFeedChanged'>>[]> {
        return await this.$getPastLogsParsed('AprPairFeedChanged', options) as any;
    }

    async getPastLogsFeeAccrued (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'FeeAccrued'>>[]> {
        return await this.$getPastLogsParsed('FeeAccrued', options) as any;
    }

    async getPastLogsFeeRetentionChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'FeeRetentionChanged'>>[]> {
        return await this.$getPastLogsParsed('FeeRetentionChanged', options) as any;
    }

    async getPastLogsInitialized (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'Initialized'>>[]> {
        return await this.$getPastLogsParsed('Initialized', options) as any;
    }

    async getPastLogsMinimumJrtSrtRatioBufferChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'MinimumJrtSrtRatioBufferChanged'>>[]> {
        return await this.$getPastLogsParsed('MinimumJrtSrtRatioBufferChanged', options) as any;
    }

    async getPastLogsMinimumJrtSrtRatioChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'MinimumJrtSrtRatioChanged'>>[]> {
        return await this.$getPastLogsParsed('MinimumJrtSrtRatioChanged', options) as any;
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

    async getPastLogsReservePercentageChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'ReservePercentageChanged'>>[]> {
        return await this.$getPastLogsParsed('ReservePercentageChanged', options) as any;
    }

    async getPastLogsRiskParametersChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'RiskParametersChanged'>>[]> {
        return await this.$getPastLogsParsed('RiskParametersChanged', options) as any;
    }

    abi: TAbiItem[] = [{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32","name":"neededRole","type":"bytes32"}],"name":"AccessControlUnauthorizedAccount","type":"error"},{"inputs":[],"name":"AlreadyConfigured","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"DepositCapReached","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"DepositsDisabled","type":"error"},{"inputs":[{"internalType":"address","name":"caller","type":"address"}],"name":"InvalidCaller","type":"error"},{"inputs":[],"name":"InvalidConfigCooldown","type":"error"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[{"internalType":"uint256","name":"navT1","type":"uint256"},{"internalType":"uint256","name":"jrtAssets","type":"uint256"},{"internalType":"uint256","name":"srtAssets","type":"uint256"},{"internalType":"uint256","name":"reserveAssets","type":"uint256"}],"name":"InvalidNavSplit","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"InvalidTranche","type":"error"},{"inputs":[],"name":"MinSharesViolation","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"PRBMath_MulDiv18_Overflow","type":"error"},{"inputs":[{"internalType":"UD60x18","name":"x","type":"uint256"}],"name":"PRBMath_UD60x18_Exp2_InputTooBig","type":"error"},{"inputs":[{"internalType":"UD60x18","name":"x","type":"uint256"}],"name":"PRBMath_UD60x18_Log_InputTooSmall","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"uint256","name":"reserveNav","type":"uint256"},{"internalType":"uint256","name":"requestedNav","type":"uint256"}],"name":"ReserveTooLow","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"calledContract","type":"address"},{"internalType":"bytes4","name":"sel","type":"bytes4"}],"name":"Unauthorized","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"UnsupportedToken","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"WithdrawalCapReached","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"WithdrawalsDisabled","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"inputs":[],"name":"ZeroAmount","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"UD60x18","name":"aprTarget","type":"uint256"},{"indexed":false,"internalType":"UD60x18","name":"aprBase","type":"uint256"}],"name":"AprDataChangedViaPush","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"aprPairFeed","type":"address"}],"name":"AprPairFeedChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isJrt","type":"bool"},{"indexed":false,"internalType":"uint256","name":"amountToReserve","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountToTranche","type":"uint256"}],"name":"FeeAccrued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"feeJrtRetention","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeSrtRetention","type":"uint256"}],"name":"FeeRetentionChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"MinimumJrtSrtRatioBufferChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"MinimumJrtSrtRatioChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"accessControlManager","type":"address"}],"name":"NewAccessControlManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"twoStepConfigManager","type":"address"}],"name":"NewTwoStepConfigManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reserveBps","type":"uint256"}],"name":"ReservePercentageChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"UD60x18","name":"x","type":"uint256"},{"indexed":false,"internalType":"UD60x18","name":"y","type":"uint256"},{"indexed":false,"internalType":"UD60x18","name":"k","type":"uint256"}],"name":"RiskParametersChanged","type":"event"},{"inputs":[],"name":"COOLDOWN_WORKER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROPOSER_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RESERVE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_CDO_APR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_FEED_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_STRAT_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"isJrt","type":"bool"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"accrueFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acm","outputs":[{"internalType":"contract IAccessControlManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aprBase","outputs":[{"internalType":"UD60x18","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aprPairFeed","outputs":[{"internalType":"contract IAprPairFeed","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aprSrt","outputs":[{"internalType":"UD60x18","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aprTarget","outputs":[{"internalType":"UD60x18","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"navT0","type":"uint256"},{"internalType":"uint256","name":"jrtNavT0","type":"uint256"},{"internalType":"uint256","name":"srtNavT0","type":"uint256"},{"internalType":"uint256","name":"reserveNavT0","type":"uint256"},{"internalType":"uint256","name":"navT1","type":"uint256"}],"name":"calculateNAVSplit","outputs":[{"internalType":"uint256","name":"jrtNavT1","type":"uint256"},{"internalType":"uint256","name":"srtNavT1","type":"uint256"},{"internalType":"uint256","name":"reserveNavT1","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cdo","outputs":[{"internalType":"contract IStrataCDO","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeJrtRetentionBps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeSrtRetentionBps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCDOAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"indexTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"acm_","type":"address"},{"internalType":"contract IStrataCDO","name":"cdo_","type":"address"},{"internalType":"contract IAprPairFeed","name":"aprPairFeed_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"jrtNav","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"isJrt","type":"bool"}],"name":"maxDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"isJrt","type":"bool"},{"internalType":"bool","name":"ownerIsSharesCooldown","type":"bool"}],"name":"maxWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"isJrt","type":"bool"}],"name":"maxWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumJrtSrtRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumJrtSrtRatioBuffer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nav","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onAprChanged","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"jrtAmountIn","type":"uint256"},{"internalType":"uint256","name":"srtAmountIn","type":"uint256"}],"name":"reduceReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveBps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reserveNav","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"riskK","outputs":[{"internalType":"UD60x18","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"riskX","outputs":[{"internalType":"UD60x18","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"riskY","outputs":[{"internalType":"UD60x18","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"accessControlManager_","type":"address"}],"name":"setAccessControlManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IAprPairFeed","name":"aprPairFeed_","type":"address"}],"name":"setAprPairFeed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"jrtRetentionBps","type":"uint256"},{"internalType":"uint256","name":"srtRetentionBps","type":"uint256"}],"name":"setFeeRetentionBps","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setMinimumJrtSrtRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setMinimumJrtSrtRatioBuffer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bps","type":"uint256"}],"name":"setReserveBps","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"UD60x18","name":"riskX_","type":"uint256"},{"internalType":"UD60x18","name":"riskY_","type":"uint256"},{"internalType":"UD60x18","name":"riskK_","type":"uint256"}],"name":"setRiskParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"twoStepConfigManager_","type":"address"}],"name":"setTwoStepConfigManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"srtNav","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"srtTargetIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"navT1","type":"uint256"}],"name":"totalAssets","outputs":[{"internalType":"uint256","name":"jrtNavT1","type":"uint256"},{"internalType":"uint256","name":"srtNavT1","type":"uint256"},{"internalType":"uint256","name":"reserveNavT1","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAssetsT0","outputs":[{"internalType":"uint256","name":"jrtNavT0","type":"uint256"},{"internalType":"uint256","name":"srtNavT0","type":"uint256"},{"internalType":"uint256","name":"reserveNavT0","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"twoStepConfigManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"navT1","type":"uint256"}],"name":"updateAccounting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"jrtAssetsIn","type":"uint256"},{"internalType":"uint256","name":"jrtAssetsOut","type":"uint256"},{"internalType":"uint256","name":"srtAssetsIn","type":"uint256"},{"internalType":"uint256","name":"srtAssetsOut","type":"uint256"}],"name":"updateBalanceFlow","outputs":[],"stateMutability":"nonpayable","type":"function"}]

    
}

type TSender = TAccount & {
    value?: string | number | bigint
}

type TEventLogOptions<TParams> = {
    fromBlock?: number | Date
    toBlock?: number | Date
    params?: TParams
}

export type TAccountingV1Types = {
    Events: {
        AprDataChangedViaPush: {
            outputParams: { aprTarget: bigint, aprBase: bigint },
            outputArgs:   [ aprTarget: bigint, aprBase: bigint ],
        }
        AprPairFeedChanged: {
            outputParams: { aprPairFeed: TAddress },
            outputArgs:   [ aprPairFeed: TAddress ],
        }
        FeeAccrued: {
            outputParams: { isJrt: boolean, amountToReserve: bigint, amountToTranche: bigint },
            outputArgs:   [ isJrt: boolean, amountToReserve: bigint, amountToTranche: bigint ],
        }
        FeeRetentionChanged: {
            outputParams: { feeJrtRetention: bigint, feeSrtRetention: bigint },
            outputArgs:   [ feeJrtRetention: bigint, feeSrtRetention: bigint ],
        }
        Initialized: {
            outputParams: { version: number },
            outputArgs:   [ version: number ],
        }
        MinimumJrtSrtRatioBufferChanged: {
            outputParams: { ratio: bigint },
            outputArgs:   [ ratio: bigint ],
        }
        MinimumJrtSrtRatioChanged: {
            outputParams: { ratio: bigint },
            outputArgs:   [ ratio: bigint ],
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
        ReservePercentageChanged: {
            outputParams: { reserveBps: bigint },
            outputArgs:   [ reserveBps: bigint ],
        }
        RiskParametersChanged: {
            outputParams: { x: bigint, y: bigint, k: bigint },
            outputArgs:   [ x: bigint, y: bigint, k: bigint ],
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
        accrueFee: {
          method: "accrueFee"
          arguments: [ isJrt: boolean, amount: bigint ]
        }
        acm: {
          method: "acm"
          arguments: [  ]
        }
        aprBase: {
          method: "aprBase"
          arguments: [  ]
        }
        aprPairFeed: {
          method: "aprPairFeed"
          arguments: [  ]
        }
        aprSrt: {
          method: "aprSrt"
          arguments: [  ]
        }
        aprTarget: {
          method: "aprTarget"
          arguments: [  ]
        }
        calculateNAVSplit: {
          method: "calculateNAVSplit"
          arguments: [ navT0: bigint, jrtNavT0: bigint, srtNavT0: bigint, reserveNavT0: bigint, navT1: bigint ]
        }
        cdo: {
          method: "cdo"
          arguments: [  ]
        }
        feeJrtRetentionBps: {
          method: "feeJrtRetentionBps"
          arguments: [  ]
        }
        feeSrtRetentionBps: {
          method: "feeSrtRetentionBps"
          arguments: [  ]
        }
        getCDOAddress: {
          method: "getCDOAddress"
          arguments: [  ]
        }
        indexTimestamp: {
          method: "indexTimestamp"
          arguments: [  ]
        }
        initialize: {
          method: "initialize"
          arguments: [ owner_: TAddress, acm_: TAddress, cdo_: TAddress, aprPairFeed_: TAddress ]
        }
        jrtNav: {
          method: "jrtNav"
          arguments: [  ]
        }
        maxDeposit: {
          method: "maxDeposit"
          arguments: [ isJrt: boolean ]
        }
        maxWithdraw: {
          method: "maxWithdraw"
          arguments: [ isJrt: boolean, ownerIsSharesCooldown: boolean ] | [ isJrt: boolean ]
        }
        minimumJrtSrtRatio: {
          method: "minimumJrtSrtRatio"
          arguments: [  ]
        }
        minimumJrtSrtRatioBuffer: {
          method: "minimumJrtSrtRatioBuffer"
          arguments: [  ]
        }
        nav: {
          method: "nav"
          arguments: [  ]
        }
        onAprChanged: {
          method: "onAprChanged"
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
        reduceReserve: {
          method: "reduceReserve"
          arguments: [ amount: bigint, jrtAmountIn: bigint, srtAmountIn: bigint ]
        }
        renounceOwnership: {
          method: "renounceOwnership"
          arguments: [  ]
        }
        reserveBps: {
          method: "reserveBps"
          arguments: [  ]
        }
        reserveNav: {
          method: "reserveNav"
          arguments: [  ]
        }
        riskK: {
          method: "riskK"
          arguments: [  ]
        }
        riskX: {
          method: "riskX"
          arguments: [  ]
        }
        riskY: {
          method: "riskY"
          arguments: [  ]
        }
        setAccessControlManager: {
          method: "setAccessControlManager"
          arguments: [ accessControlManager_: TAddress ]
        }
        setAprPairFeed: {
          method: "setAprPairFeed"
          arguments: [ aprPairFeed_: TAddress ]
        }
        setFeeRetentionBps: {
          method: "setFeeRetentionBps"
          arguments: [ jrtRetentionBps: bigint, srtRetentionBps: bigint ]
        }
        setMinimumJrtSrtRatio: {
          method: "setMinimumJrtSrtRatio"
          arguments: [ ratio: bigint ]
        }
        setMinimumJrtSrtRatioBuffer: {
          method: "setMinimumJrtSrtRatioBuffer"
          arguments: [ ratio: bigint ]
        }
        setReserveBps: {
          method: "setReserveBps"
          arguments: [ bps: bigint ]
        }
        setRiskParameters: {
          method: "setRiskParameters"
          arguments: [ riskX_: bigint, riskY_: bigint, riskK_: bigint ]
        }
        setTwoStepConfigManager: {
          method: "setTwoStepConfigManager"
          arguments: [ twoStepConfigManager_: TAddress ]
        }
        srtNav: {
          method: "srtNav"
          arguments: [  ]
        }
        srtTargetIndex: {
          method: "srtTargetIndex"
          arguments: [  ]
        }
        totalAssets: {
          method: "totalAssets"
          arguments: [ navT1: bigint ]
        }
        totalAssetsT0: {
          method: "totalAssetsT0"
          arguments: [  ]
        }
        totalReserve: {
          method: "totalReserve"
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
        updateAccounting: {
          method: "updateAccounting"
          arguments: [ navT1: bigint ]
        }
        updateBalanceFlow: {
          method: "updateBalanceFlow"
          arguments: [ jrtAssetsIn: bigint, jrtAssetsOut: bigint, srtAssetsIn: bigint, srtAssetsOut: bigint ]
        }
    }
}



interface IAccountingV1TxCaller {
    acceptOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    accrueFee (sender: TSender, isJrt: boolean, amount: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress, cdo_: TAddress, aprPairFeed_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    onAprChanged (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    reduceReserve (sender: TSender, amount: bigint, jrtAmountIn: bigint, srtAmountIn: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    renounceOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setAprPairFeed (sender: TSender, aprPairFeed_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setFeeRetentionBps (sender: TSender, jrtRetentionBps: bigint, srtRetentionBps: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setMinimumJrtSrtRatio (sender: TSender, ratio: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setMinimumJrtSrtRatioBuffer (sender: TSender, ratio: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setReserveBps (sender: TSender, bps: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setRiskParameters (sender: TSender, riskX_: bigint, riskY_: bigint, riskK_: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    updateAccounting (sender: TSender, navT1: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    updateBalanceFlow (sender: TSender, jrtAssetsIn: bigint, jrtAssetsOut: bigint, srtAssetsIn: bigint, srtAssetsOut: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
}


interface IAccountingV1TxData {
    acceptOwnership (sender: TSender, ): Promise<TEth.TxLike>
    accrueFee (sender: TSender, isJrt: boolean, amount: bigint): Promise<TEth.TxLike>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress, cdo_: TAddress, aprPairFeed_: TAddress): Promise<TEth.TxLike>
    onAprChanged (sender: TSender, ): Promise<TEth.TxLike>
    reduceReserve (sender: TSender, amount: bigint, jrtAmountIn: bigint, srtAmountIn: bigint): Promise<TEth.TxLike>
    renounceOwnership (sender: TSender, ): Promise<TEth.TxLike>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TEth.TxLike>
    setAprPairFeed (sender: TSender, aprPairFeed_: TAddress): Promise<TEth.TxLike>
    setFeeRetentionBps (sender: TSender, jrtRetentionBps: bigint, srtRetentionBps: bigint): Promise<TEth.TxLike>
    setMinimumJrtSrtRatio (sender: TSender, ratio: bigint): Promise<TEth.TxLike>
    setMinimumJrtSrtRatioBuffer (sender: TSender, ratio: bigint): Promise<TEth.TxLike>
    setReserveBps (sender: TSender, bps: bigint): Promise<TEth.TxLike>
    setRiskParameters (sender: TSender, riskX_: bigint, riskY_: bigint, riskK_: bigint): Promise<TEth.TxLike>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TEth.TxLike>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<TEth.TxLike>
    updateAccounting (sender: TSender, navT1: bigint): Promise<TEth.TxLike>
    updateBalanceFlow (sender: TSender, jrtAssetsIn: bigint, jrtAssetsOut: bigint, srtAssetsIn: bigint, srtAssetsOut: bigint): Promise<TEth.TxLike>
}


type TEvents = TAccountingV1Types['Events'];
type TEventParams<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputParams']>;
type TEventArguments<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputArgs']>;
