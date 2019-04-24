import { getCurrancy } from './getCurrancy';

describe('getCurrancy', () => {
it('should return the supported currancy', () => {
    const result = getCurrancy();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR')

  });
});