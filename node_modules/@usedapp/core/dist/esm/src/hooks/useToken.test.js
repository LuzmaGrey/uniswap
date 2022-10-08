import { useToken } from '..';
import { expect } from 'chai';
import { renderDAppHook, deployMockToken, MOCK_TOKEN_INITIAL_BALANCE, setupTestingConfig, } from '../testing';
describe('useToken', async () => {
    let token;
    let config;
    let network1;
    beforeEach(async () => {
        ;
        ({ config, network1 } = await setupTestingConfig());
        token = await deployMockToken(network1.deployer);
    });
    it('returns correct token constants', async () => {
        const { result, waitForCurrent } = await renderDAppHook(() => useToken(token.address), {
            config,
        });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        const res = {
            name: 'MOCKToken',
            symbol: 'MOCK',
            decimals: 18,
            totalSupply: MOCK_TOKEN_INITIAL_BALANCE,
        };
        expect(JSON.parse(JSON.stringify(result.current))).to.deep.equal(JSON.parse(JSON.stringify(res)));
    });
    it('should not throw error when token address is Falsy', async () => {
        const { result } = await renderDAppHook(() => useToken(null), {
            config,
        });
        expect(result.error).to.be.undefined;
        expect(result.current).to.be.undefined;
    });
});
//# sourceMappingURL=useToken.test.js.map