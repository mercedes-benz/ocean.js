import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { Erc20CreateParams, FreCreationParams, FreOrderParams, PoolCreationParams } from '../@types';
import { ContractConfig } from '../models';
export declare function setContractDefaults(contract: Contract, config: ContractConfig): Contract;
export declare function getFairGasPrice(web3: Web3, config: ContractConfig): Promise<string>;
export declare function getErcCreationParams(ercParams: Erc20CreateParams): any;
export declare function getFreOrderParams(freParams: FreOrderParams): any;
export declare function getFreCreationParams(freParams: FreCreationParams): any;
export declare function getPoolCreationParams(web3: Web3, poolParams: PoolCreationParams): Promise<any>;
export declare function unitsToAmount(web3: Web3, token: string, amount: string, tokenDecimals?: number): Promise<string>;
export declare function amountToUnits(web3: Web3, token: string, amount: string, tokenDecimals?: number): Promise<string>;