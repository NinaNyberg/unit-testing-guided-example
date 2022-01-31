const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(2, 3);
    expect(result).toBe(6);
  });

  test('should multiply a negavite and a positive integer correctly', () => {
    const result = multiply(-2, 3);
    expect(result).toBe(-6);
  });

  test('should return a 0 when one of the numbers is 0', () => {
    const result = multiply(2, 0);
    expect(result).toBe(0);
  });
});
