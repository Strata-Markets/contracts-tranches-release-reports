/**
 *  AUTO-Generated Class: 2026-08-21 10:36
 *  Implementation: https://etherscan.io/address/0xC71B908fA50Ce773C248e3632E46c7192807e767#code
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

export namespace TrancheJrtV1Errors {
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
    export interface ECDSAInvalidSignature {
        type: 'ECDSAInvalidSignature'
        params: {
        }
    }
    export interface ECDSAInvalidSignatureLength {
        type: 'ECDSAInvalidSignatureLength'
        params: {
            length: bigint
        }
    }
    export interface ECDSAInvalidSignatureS {
        type: 'ECDSAInvalidSignatureS'
        params: {
            s: TEth.Hex
        }
    }
    export interface ERC20InsufficientAllowance {
        type: 'ERC20InsufficientAllowance'
        params: {
            spender: TAddress
            allowance: bigint
            needed: bigint
        }
    }
    export interface ERC20InsufficientBalance {
        type: 'ERC20InsufficientBalance'
        params: {
            sender: TAddress
            balance: bigint
            needed: bigint
        }
    }
    export interface ERC20InvalidApprover {
        type: 'ERC20InvalidApprover'
        params: {
            approver: TAddress
        }
    }
    export interface ERC20InvalidReceiver {
        type: 'ERC20InvalidReceiver'
        params: {
            receiver: TAddress
        }
    }
    export interface ERC20InvalidSender {
        type: 'ERC20InvalidSender'
        params: {
            sender: TAddress
        }
    }
    export interface ERC20InvalidSpender {
        type: 'ERC20InvalidSpender'
        params: {
            spender: TAddress
        }
    }
    export interface ERC2612ExpiredSignature {
        type: 'ERC2612ExpiredSignature'
        params: {
            deadline: bigint
        }
    }
    export interface ERC2612InvalidSigner {
        type: 'ERC2612InvalidSigner'
        params: {
            signer: TAddress
            owner: TAddress
        }
    }
    export interface ERC4626ExceededMaxDeposit {
        type: 'ERC4626ExceededMaxDeposit'
        params: {
            receiver: TAddress
            assets: bigint
            max: bigint
        }
    }
    export interface ERC4626ExceededMaxMint {
        type: 'ERC4626ExceededMaxMint'
        params: {
            receiver: TAddress
            shares: bigint
            max: bigint
        }
    }
    export interface ERC4626ExceededMaxRedeem {
        type: 'ERC4626ExceededMaxRedeem'
        params: {
            owner: TAddress
            shares: bigint
            max: bigint
        }
    }
    export interface ERC4626ExceededMaxWithdraw {
        type: 'ERC4626ExceededMaxWithdraw'
        params: {
            owner: TAddress
            assets: bigint
            max: bigint
        }
    }
    export interface InvalidAccountNonce {
        type: 'InvalidAccountNonce'
        params: {
            account: TAddress
            currentNonce: bigint
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
    export interface RedemptionParamsMismatch {
        type: 'RedemptionParamsMismatch'
        params: {
            requested: { exitMode: number, exitFee: bigint, cooldownSeconds: number }
            current: { exitMode: number, exitFee: bigint, cooldownSeconds: number }
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
    export type Error = AccessControlUnauthorizedAccount | AlreadyConfigured | DepositCapReached | DepositsDisabled | ECDSAInvalidSignature | ECDSAInvalidSignatureLength | ECDSAInvalidSignatureS | ERC20InsufficientAllowance | ERC20InsufficientBalance | ERC20InvalidApprover | ERC20InvalidReceiver | ERC20InvalidSender | ERC20InvalidSpender | ERC2612ExpiredSignature | ERC2612InvalidSigner | ERC4626ExceededMaxDeposit | ERC4626ExceededMaxMint | ERC4626ExceededMaxRedeem | ERC4626ExceededMaxWithdraw | InvalidAccountNonce | InvalidCaller | InvalidConfigCooldown | InvalidInitialization | InvalidTranche | MinSharesViolation | NotInitializing | OwnableInvalidOwner | OwnableUnauthorizedAccount | RedemptionParamsMismatch | ReentrancyGuardReentrantCall | SafeERC20FailedOperation | Unauthorized | UnsupportedToken | WithdrawalCapReached | WithdrawalsDisabled | ZeroAddress | ZeroAmount
}

export class TrancheJrtV1 extends ContractBase {
    constructor(
        public address: TEth.Address = '0xC71B908fA50Ce773C248e3632E46c7192807e767',
        public client: Web3Client = di.resolve(EvmWeb3Client, { platform: 'eth' }),
        public explorer: IBlockchainExplorer = di.resolve(Evmscan, { platform: 'eth' }),
    ) {
        super(address, client, explorer)

        this.storage = new TrancheJrtV1StorageReader(this.address, this.client, this.explorer);
    }

    Types: TTrancheJrtV1Types;

    $meta = {
        "class": "./0xc/eth/TrancheJrtV1/TrancheJrtV1.ts"
    }

    // 0x737b332d
    async COOLDOWN_WORKER_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'COOLDOWN_WORKER_ROLE'));
    }

    // 0x3644e515
    async DOMAIN_SEPARATOR (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'DOMAIN_SEPARATOR'));
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

    // 0xdd62ed3e
    async allowance (owner: TAddress, spender: TAddress): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'allowance'), owner, spender);
    }

    // 0x095ea7b3
    async approve (sender: TSender, spender: TAddress, value: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'approve'), sender, spender, value);
    }

    // 0x38d52e0f
    async asset (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'asset'));
    }

    // 0x70a08231
    async balanceOf (account: TAddress): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'balanceOf'), account);
    }

    // 0xc4309815
    async burnSharesAsFee (sender: TSender, shares: bigint, owner: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'burnSharesAsFee'), sender, shares, owner);
    }

    // 0x387a7237
    async cdo (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'cdo'));
    }

    // 0x3e0b1a23
    async configure (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'configure'), sender);
    }

    // 0x07a2d13a
    async convertToAssets (shares: bigint): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'convertToAssets'), shares);
    }

    // 0xc6e6f592
    async convertToShares (assets: bigint): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'convertToShares'), assets);
    }

    // 0x313ce567
    async decimals (): Promise<number> {
        return this.$read(this.$getAbiItem('function', 'decimals'));
    }

        
    // 0x6e553f65
    async deposit (sender: TSender, tokenAssets: bigint, receiver: TAddress): Promise<TxWriter>
    // 0xf45346dc
    async deposit (sender: TSender, token: TAddress, tokenAmount: bigint, receiver: TAddress): Promise<TxWriter>
        async deposit (sender: TSender, ...args): Promise<TxWriter> {
            let abi = this.$getAbiItemOverload([ 'function deposit(uint256, address) returns uint256', 'function deposit(address, uint256, address) returns uint256' ], args);
            return this.$write(abi, sender, ...args);
        }

    // 0x84b0196e
    async eip712Domain (): Promise<{ fields: TEth.Hex, name: string, version: string, chainId: bigint, verifyingContract: TAddress, salt: TEth.Hex, extensions: bigint[] }> {
        return this.$read(this.$getAbiItem('function', 'eip712Domain'));
    }

    // 0x6b1c5dba
    async getCDOAddress (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'getCDOAddress'));
    }

    // 0x0c5b2ab3
    async initialize (sender: TSender, owner_: TAddress, acm_: TAddress, name: string, symbol: string, baseAsset: TAddress, cdo_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'initialize'), sender, owner_, acm_, name, symbol, baseAsset, cdo_);
    }

        
    // 0x402d267d
    async maxDeposit (input0: TAddress): Promise<bigint>
    // 0x76016870
    async maxDeposit (token: TAddress, owner: TAddress): Promise<bigint>
        async maxDeposit (...args): Promise<bigint> {
            let abi = this.$getAbiItemOverload('maxDeposit', args);
            return this.$read(abi, ...args);
        }

    // 0xc63d75b6
    async maxMint (input0: TAddress): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'maxMint'), input0);
    }

    // 0xd905777e
    async maxRedeem (owner: TAddress): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'maxRedeem'), owner);
    }

        
    // 0x8c22e9b0
    async maxWithdraw (token: TAddress, owner: TAddress): Promise<bigint>
    // 0xce96cb77
    async maxWithdraw (owner: TAddress): Promise<bigint>
        async maxWithdraw (...args): Promise<bigint> {
            let abi = this.$getAbiItemOverload('maxWithdraw', args);
            return this.$read(abi, ...args);
        }

        
    // 0x0d4d1513
    async mint (sender: TSender, token: TAddress, shares: bigint, receiver: TAddress): Promise<TxWriter>
    // 0x94bf804d
    async mint (sender: TSender, shares: bigint, receiver: TAddress): Promise<TxWriter>
        async mint (sender: TSender, ...args): Promise<TxWriter> {
            let abi = this.$getAbiItemOverload([ 'function mint(address, uint256, address) returns uint256', 'function mint(uint256, address) returns uint256' ], args);
            return this.$write(abi, sender, ...args);
        }

    // 0x06fdde03
    async name (): Promise<string> {
        return this.$read(this.$getAbiItem('function', 'name'));
    }

    // 0x7ecebe00
    async nonces (owner: TAddress): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'nonces'), owner);
    }

    // 0x8da5cb5b
    async owner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'owner'));
    }

    // 0xe30c3978
    async pendingOwner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'pendingOwner'));
    }

    // 0xd505accf
    async permit (sender: TSender, owner: TAddress, spender: TAddress, value: bigint, deadline: bigint, v: number, r: TEth.Hex, s: TEth.Hex): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'permit'), sender, owner, spender, value, deadline, v, r, s);
    }

        
    // 0xb8f82b26
    async previewDeposit (token: TAddress, tokenAmount: bigint): Promise<bigint>
    // 0xef8b30f7
    async previewDeposit (assets: bigint): Promise<bigint>
        async previewDeposit (...args): Promise<bigint> {
            let abi = this.$getAbiItemOverload('previewDeposit', args);
            return this.$read(abi, ...args);
        }

        
    // 0xb3d7f6b9
    async previewMint (shares: bigint): Promise<bigint>
    // 0xd1f810a5
    async previewMint (token: TAddress, shares: bigint): Promise<bigint>
        async previewMint (...args): Promise<bigint> {
            let abi = this.$getAbiItemOverload('previewMint', args);
            return this.$read(abi, ...args);
        }

        
    // 0x4cdad506
    async previewRedeem (sharesGross: bigint): Promise<bigint>
    // 0xcbe52ae3
    async previewRedeem (token: TAddress, shares: bigint): Promise<bigint>
        async previewRedeem (...args): Promise<bigint> {
            let abi = this.$getAbiItemOverload('previewRedeem', args);
            return this.$read(abi, ...args);
        }

        
    // 0x0a28a477
    async previewWithdraw (assetsNet: bigint): Promise<bigint>
    // 0xbbc6f1dc
    async previewWithdraw (token: TAddress, tokenAmount: bigint): Promise<bigint>
        async previewWithdraw (...args): Promise<bigint> {
            let abi = this.$getAbiItemOverload('previewWithdraw', args);
            return this.$read(abi, ...args);
        }

    // 0x21d2a89d
    async quoteRedeem (sharesGross: bigint, fee: bigint): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'quoteRedeem'), sharesGross, fee);
    }

    // 0x0f4d3eaf
    async quoteWithdraw (assetsNet: bigint, fee: bigint): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'quoteWithdraw'), assetsNet, fee);
    }

        
    // 0x0c9a3678
    async redeem (sender: TSender, token: TAddress, shares: bigint, receiver: TAddress, owner: TAddress, params: { exitMode: number, exitFee: bigint, cooldownSeconds: number }): Promise<TxWriter>
    // 0xba087652
    async redeem (sender: TSender, shares: bigint, receiver: TAddress, owner: TAddress): Promise<TxWriter>
    // 0xfea53be1
    async redeem (sender: TSender, token: TAddress, shares: bigint, receiver: TAddress, owner: TAddress): Promise<TxWriter>
        async redeem (sender: TSender, ...args): Promise<TxWriter> {
            let abi = this.$getAbiItemOverload([ 'function redeem(address, uint256, address, address, tuple) returns uint256', 'function redeem(uint256, address, address) returns uint256', 'function redeem(address, uint256, address, address) returns uint256' ], args);
            return this.$write(abi, sender, ...args);
        }

    // 0x715018a6
    async renounceOwnership (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'renounceOwnership'), sender);
    }

    // 0x0e32cb86
    async setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setAccessControlManager'), sender, accessControlManager_);
    }

    // 0x593ec077
    async setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setTwoStepConfigManager'), sender, twoStepConfigManager_);
    }

    // 0x95d89b41
    async symbol (): Promise<string> {
        return this.$read(this.$getAbiItem('function', 'symbol'));
    }

    // 0x01e1d114
    async totalAssets (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'totalAssets'));
    }

    // 0x18160ddd
    async totalSupply (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'totalSupply'));
    }

    // 0xa9059cbb
    async transfer (sender: TSender, to: TAddress, value: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transfer'), sender, to, value);
    }

    // 0x23b872dd
    async transferFrom (sender: TSender, from: TAddress, to: TAddress, value: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transferFrom'), sender, from, to, value);
    }

    // 0xf2fde38b
    async transferOwnership (sender: TSender, newOwner: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transferOwnership'), sender, newOwner);
    }

    // 0x2a1590a4
    async twoStepConfigManager (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'twoStepConfigManager'));
    }

        
    // 0xb1f2efc8
    async withdraw (sender: TSender, token: TAddress, tokenAmount: bigint, receiver: TAddress, owner: TAddress, params: { exitMode: number, exitFee: bigint, cooldownSeconds: number }): Promise<TxWriter>
    // 0xb460af94
    async withdraw (sender: TSender, assets: bigint, receiver: TAddress, owner: TAddress): Promise<TxWriter>
    // 0xdfcd412e
    async withdraw (sender: TSender, token: TAddress, tokenAmount: bigint, receiver: TAddress, owner: TAddress): Promise<TxWriter>
        async withdraw (sender: TSender, ...args): Promise<TxWriter> {
            let abi = this.$getAbiItemOverload([ 'function withdraw(address, uint256, address, address, tuple) returns uint256', 'function withdraw(uint256, address, address) returns uint256', 'function withdraw(address, uint256, address, address) returns uint256' ], args);
            return this.$write(abi, sender, ...args);
        }

    $call () {
        return super.$call() as ITrancheJrtV1TxCaller;
    }
    $signed (): TOverrideReturns<ITrancheJrtV1TxCaller, Promise<{ signed: TEth.Hex, error?: Error & { data?: { type: string, params } } }>> {
        return super.$signed() as any;
    }
    $data (): ITrancheJrtV1TxData {
        return super.$data() as ITrancheJrtV1TxData;
    }
    $gas (): TOverrideReturns<ITrancheJrtV1TxCaller, Promise<{ gas?: bigint, price?: bigint, error?: Error & { data?: { type: string, params } } }>> {
        return super.$gas() as any;
    }

    onTransaction <TMethod extends keyof TTrancheJrtV1Types['Methods']> (method: TMethod, options: Parameters<ContractBase['$onTransaction']>[0]): SubjectStream<{
        tx: TEth.Tx
        block: TEth.Block<TEth.Hex>
        calldata: {
            method: TMethod
            arguments: TTrancheJrtV1Types['Methods'][TMethod]['arguments']
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

    onApproval (fn?: (event: TClientEventsStreamData<TEventArguments<'Approval'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'Approval'>>> {
        return this.$onLog('Approval', fn);
    }

    onDeposit (fn?: (event: TClientEventsStreamData<TEventArguments<'Deposit'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'Deposit'>>> {
        return this.$onLog('Deposit', fn);
    }

    onEIP712DomainChanged (fn?: (event: TClientEventsStreamData<TEventArguments<'EIP712DomainChanged'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'EIP712DomainChanged'>>> {
        return this.$onLog('EIP712DomainChanged', fn);
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

    onOnExit (fn?: (event: TClientEventsStreamData<TEventArguments<'OnExit'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'OnExit'>>> {
        return this.$onLog('OnExit', fn);
    }

    onOnMetaDeposit (fn?: (event: TClientEventsStreamData<TEventArguments<'OnMetaDeposit'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'OnMetaDeposit'>>> {
        return this.$onLog('OnMetaDeposit', fn);
    }

    onOnMetaWithdraw (fn?: (event: TClientEventsStreamData<TEventArguments<'OnMetaWithdraw'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'OnMetaWithdraw'>>> {
        return this.$onLog('OnMetaWithdraw', fn);
    }

    onOwnershipTransferStarted (fn?: (event: TClientEventsStreamData<TEventArguments<'OwnershipTransferStarted'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'OwnershipTransferStarted'>>> {
        return this.$onLog('OwnershipTransferStarted', fn);
    }

    onOwnershipTransferred (fn?: (event: TClientEventsStreamData<TEventArguments<'OwnershipTransferred'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'OwnershipTransferred'>>> {
        return this.$onLog('OwnershipTransferred', fn);
    }

    onTransfer (fn?: (event: TClientEventsStreamData<TEventArguments<'Transfer'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'Transfer'>>> {
        return this.$onLog('Transfer', fn);
    }

    onWithdraw (fn?: (event: TClientEventsStreamData<TEventArguments<'Withdraw'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'Withdraw'>>> {
        return this.$onLog('Withdraw', fn);
    }

    extractLogsApproval (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'Approval'>>[] {
        let abi = this.$getAbiItem('event', 'Approval');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'Approval'>>[];
    }

    extractLogsDeposit (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'Deposit'>>[] {
        let abi = this.$getAbiItem('event', 'Deposit');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'Deposit'>>[];
    }

    extractLogsEIP712DomainChanged (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'EIP712DomainChanged'>>[] {
        let abi = this.$getAbiItem('event', 'EIP712DomainChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'EIP712DomainChanged'>>[];
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

    extractLogsOnExit (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'OnExit'>>[] {
        let abi = this.$getAbiItem('event', 'OnExit');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'OnExit'>>[];
    }

    extractLogsOnMetaDeposit (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'OnMetaDeposit'>>[] {
        let abi = this.$getAbiItem('event', 'OnMetaDeposit');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'OnMetaDeposit'>>[];
    }

    extractLogsOnMetaWithdraw (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'OnMetaWithdraw'>>[] {
        let abi = this.$getAbiItem('event', 'OnMetaWithdraw');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'OnMetaWithdraw'>>[];
    }

    extractLogsOwnershipTransferStarted (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'OwnershipTransferStarted'>>[] {
        let abi = this.$getAbiItem('event', 'OwnershipTransferStarted');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'OwnershipTransferStarted'>>[];
    }

    extractLogsOwnershipTransferred (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'OwnershipTransferred'>>[] {
        let abi = this.$getAbiItem('event', 'OwnershipTransferred');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'OwnershipTransferred'>>[];
    }

    extractLogsTransfer (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'Transfer'>>[] {
        let abi = this.$getAbiItem('event', 'Transfer');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'Transfer'>>[];
    }

    extractLogsWithdraw (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'Withdraw'>>[] {
        let abi = this.$getAbiItem('event', 'Withdraw');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'Withdraw'>>[];
    }

    async getPastLogsApproval (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { owner?: TAddress,spender?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'Approval'>>[]> {
        return await this.$getPastLogsParsed('Approval', options) as any;
    }

    async getPastLogsDeposit (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { sender?: TAddress,owner?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'Deposit'>>[]> {
        return await this.$getPastLogsParsed('Deposit', options) as any;
    }

    async getPastLogsEIP712DomainChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'EIP712DomainChanged'>>[]> {
        return await this.$getPastLogsParsed('EIP712DomainChanged', options) as any;
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

    async getPastLogsOnExit (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { owner?: TAddress,token?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'OnExit'>>[]> {
        return await this.$getPastLogsParsed('OnExit', options) as any;
    }

    async getPastLogsOnMetaDeposit (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { owner?: TAddress,token?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'OnMetaDeposit'>>[]> {
        return await this.$getPastLogsParsed('OnMetaDeposit', options) as any;
    }

    async getPastLogsOnMetaWithdraw (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { receiver?: TAddress,token?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'OnMetaWithdraw'>>[]> {
        return await this.$getPastLogsParsed('OnMetaWithdraw', options) as any;
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

    async getPastLogsTransfer (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { from?: TAddress,to?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'Transfer'>>[]> {
        return await this.$getPastLogsParsed('Transfer', options) as any;
    }

    async getPastLogsWithdraw (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { sender?: TAddress,receiver?: TAddress,owner?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'Withdraw'>>[]> {
        return await this.$getPastLogsParsed('Withdraw', options) as any;
    }

    abi: TAbiItem[] = [{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32","name":"neededRole","type":"bytes32"}],"name":"AccessControlUnauthorizedAccount","type":"error"},{"inputs":[],"name":"AlreadyConfigured","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"DepositCapReached","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"DepositsDisabled","type":"error"},{"inputs":[],"name":"ECDSAInvalidSignature","type":"error"},{"inputs":[{"internalType":"uint256","name":"length","type":"uint256"}],"name":"ECDSAInvalidSignatureLength","type":"error"},{"inputs":[{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"ECDSAInvalidSignatureS","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"ERC2612ExpiredSignature","type":"error"},{"inputs":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC2612InvalidSigner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"assets","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"}],"name":"ERC4626ExceededMaxDeposit","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"}],"name":"ERC4626ExceededMaxMint","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"}],"name":"ERC4626ExceededMaxRedeem","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"assets","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"}],"name":"ERC4626ExceededMaxWithdraw","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"currentNonce","type":"uint256"}],"name":"InvalidAccountNonce","type":"error"},{"inputs":[{"internalType":"address","name":"caller","type":"address"}],"name":"InvalidCaller","type":"error"},{"inputs":[],"name":"InvalidConfigCooldown","type":"error"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"InvalidTranche","type":"error"},{"inputs":[],"name":"MinSharesViolation","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"components":[{"internalType":"enum IStrataCDO.TExitMode","name":"exitMode","type":"uint8"},{"internalType":"uint256","name":"exitFee","type":"uint256"},{"internalType":"uint32","name":"cooldownSeconds","type":"uint32"}],"internalType":"struct ITranche.TRedemptionParams","name":"requested","type":"tuple"},{"components":[{"internalType":"enum IStrataCDO.TExitMode","name":"exitMode","type":"uint8"},{"internalType":"uint256","name":"exitFee","type":"uint256"},{"internalType":"uint32","name":"cooldownSeconds","type":"uint32"}],"internalType":"struct ITranche.TRedemptionParams","name":"current","type":"tuple"}],"name":"RedemptionParamsMismatch","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"calledContract","type":"address"},{"internalType":"bytes4","name":"sel","type":"bytes4"}],"name":"Unauthorized","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"UnsupportedToken","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"WithdrawalCapReached","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"WithdrawalsDisabled","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"inputs":[],"name":"ZeroAmount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"assets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"accessControlManager","type":"address"}],"name":"NewAccessControlManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"twoStepConfigManager","type":"address"}],"name":"NewTwoStepConfigManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAssets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"enum IStrataCDO.TExitMode","name":"exitMode","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"exitFee","type":"uint256"},{"indexed":false,"internalType":"uint32","name":"cooldownSeconds","type":"uint32"}],"name":"OnExit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAssets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"OnMetaDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAssets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"OnMetaWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"assets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"COOLDOWN_WORKER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROPOSER_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RESERVE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_CDO_APR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_FEED_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_STRAT_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acm","outputs":[{"internalType":"contract IAccessControlManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"asset","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"burnSharesAsFee","outputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cdo","outputs":[{"internalType":"contract IStrataCDO","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"configure","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"convertToAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"convertToShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenAssets","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCDOAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"acm_","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"contract IERC20","name":"baseAsset","type":"address"},{"internalType":"contract IStrataCDO","name":"cdo_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maxDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"maxDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maxMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"maxRedeem","outputs":[{"internalType":"uint256","name":"sharesGross","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"maxWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"maxWithdraw","outputs":[{"internalType":"uint256","name":"assetsNet","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"previewDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"previewDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"sharesGross","type":"uint256"}],"name":"previewRedeem","outputs":[{"internalType":"uint256","name":"assetsNet","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assetsNet","type":"uint256"}],"name":"previewWithdraw","outputs":[{"internalType":"uint256","name":"sharesGross","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"previewWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"sharesGross","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"quoteRedeem","outputs":[{"internalType":"uint256","name":"assetsNet","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assetsNet","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"quoteWithdraw","outputs":[{"internalType":"uint256","name":"sharesGross","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"},{"components":[{"internalType":"enum IStrataCDO.TExitMode","name":"exitMode","type":"uint8"},{"internalType":"uint256","name":"exitFee","type":"uint256"},{"internalType":"uint32","name":"cooldownSeconds","type":"uint32"}],"internalType":"struct ITranche.TRedemptionParams","name":"params","type":"tuple"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"accessControlManager_","type":"address"}],"name":"setAccessControlManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"twoStepConfigManager_","type":"address"}],"name":"setTwoStepConfigManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"twoStepConfigManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"},{"components":[{"internalType":"enum IStrataCDO.TExitMode","name":"exitMode","type":"uint8"},{"internalType":"uint256","name":"exitFee","type":"uint256"},{"internalType":"uint32","name":"cooldownSeconds","type":"uint32"}],"internalType":"struct ITranche.TRedemptionParams","name":"params","type":"tuple"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]

    declare storage: TrancheJrtV1StorageReader
}

type TSender = TAccount & {
    value?: string | number | bigint
}

type TEventLogOptions<TParams> = {
    fromBlock?: number | Date
    toBlock?: number | Date
    params?: TParams
}

export type TTrancheJrtV1Types = {
    Events: {
        Approval: {
            outputParams: { owner: TAddress, spender: TAddress, value: bigint },
            outputArgs:   [ owner: TAddress, spender: TAddress, value: bigint ],
        }
        Deposit: {
            outputParams: { _sender: TAddress, owner: TAddress, assets: bigint, shares: bigint },
            outputArgs:   [ _sender: TAddress, owner: TAddress, assets: bigint, shares: bigint ],
        }
        EIP712DomainChanged: {
            outputParams: {  },
            outputArgs:   [  ],
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
        OnExit: {
            outputParams: { owner: TAddress, token: TAddress, tokenAssets: bigint, shares: bigint, exitMode: number, exitFee: bigint, cooldownSeconds: number },
            outputArgs:   [ owner: TAddress, token: TAddress, tokenAssets: bigint, shares: bigint, exitMode: number, exitFee: bigint, cooldownSeconds: number ],
        }
        OnMetaDeposit: {
            outputParams: { owner: TAddress, token: TAddress, tokenAssets: bigint, shares: bigint },
            outputArgs:   [ owner: TAddress, token: TAddress, tokenAssets: bigint, shares: bigint ],
        }
        OnMetaWithdraw: {
            outputParams: { receiver: TAddress, token: TAddress, tokenAssets: bigint, shares: bigint },
            outputArgs:   [ receiver: TAddress, token: TAddress, tokenAssets: bigint, shares: bigint ],
        }
        OwnershipTransferStarted: {
            outputParams: { previousOwner: TAddress, newOwner: TAddress },
            outputArgs:   [ previousOwner: TAddress, newOwner: TAddress ],
        }
        OwnershipTransferred: {
            outputParams: { previousOwner: TAddress, newOwner: TAddress },
            outputArgs:   [ previousOwner: TAddress, newOwner: TAddress ],
        }
        Transfer: {
            outputParams: { from: TAddress, to: TAddress, value: bigint },
            outputArgs:   [ from: TAddress, to: TAddress, value: bigint ],
        }
        Withdraw: {
            outputParams: { _sender: TAddress, receiver: TAddress, owner: TAddress, assets: bigint, shares: bigint },
            outputArgs:   [ _sender: TAddress, receiver: TAddress, owner: TAddress, assets: bigint, shares: bigint ],
        }
    },
    Methods: {
        COOLDOWN_WORKER_ROLE: {
          method: "COOLDOWN_WORKER_ROLE"
          arguments: [  ]
        }
        DOMAIN_SEPARATOR: {
          method: "DOMAIN_SEPARATOR"
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
        allowance: {
          method: "allowance"
          arguments: [ owner: TAddress, spender: TAddress ]
        }
        approve: {
          method: "approve"
          arguments: [ spender: TAddress, value: bigint ]
        }
        asset: {
          method: "asset"
          arguments: [  ]
        }
        balanceOf: {
          method: "balanceOf"
          arguments: [ account: TAddress ]
        }
        burnSharesAsFee: {
          method: "burnSharesAsFee"
          arguments: [ shares: bigint, owner: TAddress ]
        }
        cdo: {
          method: "cdo"
          arguments: [  ]
        }
        configure: {
          method: "configure"
          arguments: [  ]
        }
        convertToAssets: {
          method: "convertToAssets"
          arguments: [ shares: bigint ]
        }
        convertToShares: {
          method: "convertToShares"
          arguments: [ assets: bigint ]
        }
        decimals: {
          method: "decimals"
          arguments: [  ]
        }
        deposit: {
          method: "deposit"
          arguments: [ tokenAssets: bigint, receiver: TAddress ] | [ token: TAddress, tokenAmount: bigint, receiver: TAddress ]
        }
        eip712Domain: {
          method: "eip712Domain"
          arguments: [  ]
        }
        getCDOAddress: {
          method: "getCDOAddress"
          arguments: [  ]
        }
        initialize: {
          method: "initialize"
          arguments: [ owner_: TAddress, acm_: TAddress, name: string, symbol: string, baseAsset: TAddress, cdo_: TAddress ]
        }
        maxDeposit: {
          method: "maxDeposit"
          arguments: [ input0: TAddress ] | [ token: TAddress, owner: TAddress ]
        }
        maxMint: {
          method: "maxMint"
          arguments: [ input0: TAddress ]
        }
        maxRedeem: {
          method: "maxRedeem"
          arguments: [ owner: TAddress ]
        }
        maxWithdraw: {
          method: "maxWithdraw"
          arguments: [ token: TAddress, owner: TAddress ] | [ owner: TAddress ]
        }
        mint: {
          method: "mint"
          arguments: [ token: TAddress, shares: bigint, receiver: TAddress ] | [ shares: bigint, receiver: TAddress ]
        }
        name: {
          method: "name"
          arguments: [  ]
        }
        nonces: {
          method: "nonces"
          arguments: [ owner: TAddress ]
        }
        owner: {
          method: "owner"
          arguments: [  ]
        }
        pendingOwner: {
          method: "pendingOwner"
          arguments: [  ]
        }
        permit: {
          method: "permit"
          arguments: [ owner: TAddress, spender: TAddress, value: bigint, deadline: bigint, v: number, r: TEth.Hex, s: TEth.Hex ]
        }
        previewDeposit: {
          method: "previewDeposit"
          arguments: [ token: TAddress, tokenAmount: bigint ] | [ assets: bigint ]
        }
        previewMint: {
          method: "previewMint"
          arguments: [ shares: bigint ] | [ token: TAddress, shares: bigint ]
        }
        previewRedeem: {
          method: "previewRedeem"
          arguments: [ sharesGross: bigint ] | [ token: TAddress, shares: bigint ]
        }
        previewWithdraw: {
          method: "previewWithdraw"
          arguments: [ assetsNet: bigint ] | [ token: TAddress, tokenAmount: bigint ]
        }
        quoteRedeem: {
          method: "quoteRedeem"
          arguments: [ sharesGross: bigint, fee: bigint ]
        }
        quoteWithdraw: {
          method: "quoteWithdraw"
          arguments: [ assetsNet: bigint, fee: bigint ]
        }
        redeem: {
          method: "redeem"
          arguments: [ token: TAddress, shares: bigint, receiver: TAddress, owner: TAddress, params: { exitMode: number, exitFee: bigint, cooldownSeconds: number } ] | [ shares: bigint, receiver: TAddress, owner: TAddress ] | [ token: TAddress, shares: bigint, receiver: TAddress, owner: TAddress ]
        }
        renounceOwnership: {
          method: "renounceOwnership"
          arguments: [  ]
        }
        setAccessControlManager: {
          method: "setAccessControlManager"
          arguments: [ accessControlManager_: TAddress ]
        }
        setTwoStepConfigManager: {
          method: "setTwoStepConfigManager"
          arguments: [ twoStepConfigManager_: TAddress ]
        }
        symbol: {
          method: "symbol"
          arguments: [  ]
        }
        totalAssets: {
          method: "totalAssets"
          arguments: [  ]
        }
        totalSupply: {
          method: "totalSupply"
          arguments: [  ]
        }
        transfer: {
          method: "transfer"
          arguments: [ to: TAddress, value: bigint ]
        }
        transferFrom: {
          method: "transferFrom"
          arguments: [ from: TAddress, to: TAddress, value: bigint ]
        }
        transferOwnership: {
          method: "transferOwnership"
          arguments: [ newOwner: TAddress ]
        }
        twoStepConfigManager: {
          method: "twoStepConfigManager"
          arguments: [  ]
        }
        withdraw: {
          method: "withdraw"
          arguments: [ token: TAddress, tokenAmount: bigint, receiver: TAddress, owner: TAddress, params: { exitMode: number, exitFee: bigint, cooldownSeconds: number } ] | [ assets: bigint, receiver: TAddress, owner: TAddress ] | [ token: TAddress, tokenAmount: bigint, receiver: TAddress, owner: TAddress ]
        }
    }
}



class TrancheJrtV1StorageReader extends ContractStorageReaderBase {
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
    }
]

}


interface ITrancheJrtV1TxCaller {
    acceptOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    approve (sender: TSender, spender: TAddress, value: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    burnSharesAsFee (sender: TSender, shares: bigint, owner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    configure (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    deposit (sender: TSender, tokenAssets: bigint, receiver: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    deposit (sender: TSender, token: TAddress, tokenAmount: bigint, receiver: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress, name: string, symbol: string, baseAsset: TAddress, cdo_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    mint (sender: TSender, token: TAddress, shares: bigint, receiver: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    mint (sender: TSender, shares: bigint, receiver: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    permit (sender: TSender, owner: TAddress, spender: TAddress, value: bigint, deadline: bigint, v: number, r: TEth.Hex, s: TEth.Hex): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    redeem (sender: TSender, token: TAddress, shares: bigint, receiver: TAddress, owner: TAddress, params: { exitMode: number, exitFee: bigint, cooldownSeconds: number }): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    redeem (sender: TSender, shares: bigint, receiver: TAddress, owner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    redeem (sender: TSender, token: TAddress, shares: bigint, receiver: TAddress, owner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    renounceOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    transfer (sender: TSender, to: TAddress, value: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    transferFrom (sender: TSender, from: TAddress, to: TAddress, value: bigint): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    withdraw (sender: TSender, token: TAddress, tokenAmount: bigint, receiver: TAddress, owner: TAddress, params: { exitMode: number, exitFee: bigint, cooldownSeconds: number }): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    withdraw (sender: TSender, assets: bigint, receiver: TAddress, owner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    withdraw (sender: TSender, token: TAddress, tokenAmount: bigint, receiver: TAddress, owner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
}


interface ITrancheJrtV1TxData {
    acceptOwnership (sender: TSender, ): Promise<TEth.TxLike>
    approve (sender: TSender, spender: TAddress, value: bigint): Promise<TEth.TxLike>
    burnSharesAsFee (sender: TSender, shares: bigint, owner: TAddress): Promise<TEth.TxLike>
    configure (sender: TSender, ): Promise<TEth.TxLike>
    deposit (sender: TSender, tokenAssets: bigint, receiver: TAddress): Promise<TEth.TxLike>
    deposit (sender: TSender, token: TAddress, tokenAmount: bigint, receiver: TAddress): Promise<TEth.TxLike>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress, name: string, symbol: string, baseAsset: TAddress, cdo_: TAddress): Promise<TEth.TxLike>
    mint (sender: TSender, token: TAddress, shares: bigint, receiver: TAddress): Promise<TEth.TxLike>
    mint (sender: TSender, shares: bigint, receiver: TAddress): Promise<TEth.TxLike>
    permit (sender: TSender, owner: TAddress, spender: TAddress, value: bigint, deadline: bigint, v: number, r: TEth.Hex, s: TEth.Hex): Promise<TEth.TxLike>
    redeem (sender: TSender, token: TAddress, shares: bigint, receiver: TAddress, owner: TAddress, params: { exitMode: number, exitFee: bigint, cooldownSeconds: number }): Promise<TEth.TxLike>
    redeem (sender: TSender, shares: bigint, receiver: TAddress, owner: TAddress): Promise<TEth.TxLike>
    redeem (sender: TSender, token: TAddress, shares: bigint, receiver: TAddress, owner: TAddress): Promise<TEth.TxLike>
    renounceOwnership (sender: TSender, ): Promise<TEth.TxLike>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TEth.TxLike>
    setTwoStepConfigManager (sender: TSender, twoStepConfigManager_: TAddress): Promise<TEth.TxLike>
    transfer (sender: TSender, to: TAddress, value: bigint): Promise<TEth.TxLike>
    transferFrom (sender: TSender, from: TAddress, to: TAddress, value: bigint): Promise<TEth.TxLike>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<TEth.TxLike>
    withdraw (sender: TSender, token: TAddress, tokenAmount: bigint, receiver: TAddress, owner: TAddress, params: { exitMode: number, exitFee: bigint, cooldownSeconds: number }): Promise<TEth.TxLike>
    withdraw (sender: TSender, assets: bigint, receiver: TAddress, owner: TAddress): Promise<TEth.TxLike>
    withdraw (sender: TSender, token: TAddress, tokenAmount: bigint, receiver: TAddress, owner: TAddress): Promise<TEth.TxLike>
}


type TEvents = TTrancheJrtV1Types['Events'];
type TEventParams<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputParams']>;
type TEventArguments<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputArgs']>;
