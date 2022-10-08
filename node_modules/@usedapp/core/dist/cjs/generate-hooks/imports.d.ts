export declare const commonImports = "\nimport { Falsy, Params, QueryParams, TransactionOptions, useCall, useContractFunction } from '@usedapp/core'\nimport { Contract, utils } from 'ethers'\n";
export interface ImportsOptions {
    typesDir: string;
    outDir: string;
    contractName: string;
}
export declare const imports: ({ typesDir, outDir, contractName }: ImportsOptions) => string;
//# sourceMappingURL=imports.d.ts.map