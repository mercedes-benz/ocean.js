import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { Erc20CreateParams, FreCreationParams, FreOrderParams, PoolCreationParams } from '../@types';
import { ContractConfig } from '../models';
export declare function setContractDefaults(contract: Contract, config: ContractConfig): Contract;
export declare function getFairGasPrice(web3: Web3, config: ContractConfig): Promise<string>;
export declare function getErcCreationParams(ercParams: Erc20CreateParams): any;
export declare function getFreOrderParams(web3: Web3, freParams: FreOrderParams): Promise<any>;
export declare function getFreCreationParams(freParams: FreCreationParams): any;
export declare function getPoolCreationParams(web3: Web3, poolParams: PoolCreationParams): Promise<any>;
export declare function unitsToAmount(web3: Web3, token: string, amount: string, tokenDecimals?: number): Promise<string>;
export declare function amountToUnits(web3: Web3, token: string, amount: string, tokenDecimals?: number): Promise<string>;
/**
 * Estimates the gas used when a function would be executed on chain
 * @param {string} from account that calls the function
 * @param {Function} functionToEstimateGas function that we need to estimate the gas
 * @param {...any[]} args arguments of the function
 * @return {Promise<number>} gas cost of the function
 */
export declare function estimateGas(from: string, functionToEstimateGas: Function, ...args: any[]): Promise<any>;
