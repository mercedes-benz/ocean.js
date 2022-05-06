import { Contract } from 'web3-eth-contract';
import { TransactionReceipt } from 'web3-core';
import Web3 from 'web3';
import { Config, ContractConfig } from '../models';
/**
 * Estimate gas cost for approval function
 * @param {String} account
 * @param {String} tokenAddress
 * @param {String} spender
 * @param {String} amount
 * @param {String} force
 * @param {Contract} contractInstance optional contract instance
 * @return {Promise<number>}
 */
export declare function estApprove(web3: Web3, account: string, tokenAddress: string, spender: string, amount: string, contractInstance?: Contract): Promise<number>;
/**
 * Approve spender to spent amount tokens
 * @param {String} account
 * @param {String} tokenAddress
 * @param {String} spender
 * @param {String} amount  (always expressed as wei)
 * @param {boolean} force  if true, will overwrite any previous allowence. Else, will check if allowence is enough and will not send a transaction if it's not needed
 * @param {number} tokenDecimals optional number of decimals of the token
 * @param {Config} config  configuration that provide values for web3 transaction gasFeeMultiplier, transactionBlockTimeout, transactionConfirmationBlocks, transactionPollingTimeout
 */
export declare function approve(web3: Web3, account: string, tokenAddress: string, spender: string, amount: string, force?: boolean, tokenDecimals?: number, config?: ContractConfig): Promise<TransactionReceipt | string>;
/**
 * Get Allowance for any erc20
 * @param {Web3} web3
 * @param {String } tokenAdress
 * @param {String} account
 * @param {String} spender
 * @param {number} tokenDecimals optional number of decimals of the token
 * @param {Config} config  configuration that provide values for web3 transaction gasFeeMultiplier, transactionBlockTimeout, transactionConfirmationBlocks, transactionPollingTimeout
 */
export declare function allowance(web3: Web3, tokenAddress: string, account: string, spender: string, tokenDecimals?: number, config?: ContractConfig): Promise<string>;
/**
 * Get balance for any erc20
 * @param {Web3} web3
 * @param {String} tokenAdress
 * @param {String} owner
 * @param {String} spender
 * @param {number} tokenDecimals optional number of decimals of the token
 * @param {Config} config  configuration that provide values for web3 transaction gasFeeMultiplier, transactionBlockTimeout, transactionConfirmationBlocks, transactionPollingTimeout
 */
export declare function balance(web3: Web3, tokenAddress: string, account: string, tokenDecimals?: number, config?: Config): Promise<string>;
