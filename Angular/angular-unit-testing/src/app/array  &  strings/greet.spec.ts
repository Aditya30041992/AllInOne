import { greet } from './greet';

describe('greet', () => {
it('should include the name in message', () => {
    expect(greet('Aditya')).toContain('Aditya');

  })
});