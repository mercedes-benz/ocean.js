import Web3 from 'web3';
export declare function signHash(web3: Web3, message: string, address: string): Promise<{
    v: string;
    r: string;
    s: string;
}>;
