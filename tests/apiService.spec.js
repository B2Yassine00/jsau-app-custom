// apiService.test.js
const { apiService } = require('../src/api/apiService'); // Adjust the import path accordingly

describe('apiService', () => {
  it('adds two numbers correctly', () => {
    const result = apiService.addNumbers(2, 3); // Test the addNumbers method
    expect(result).toBe(5); // Verify the result is correct
  });

  it('adds negative numbers correctly', () => {
    const result = apiService.addNumbers(-2, -3); // Test negative numbers
    expect(result).toBe(-5);
  });

  it('handles zero correctly', () => {
    const result = apiService.addNumbers(0, 3); // Test adding zero
    expect(result).toBe(3);
  });

  it('multiplies two positive numbers correctly', () => {
    const result = apiService.multiplyNumbers(2, 3); // Test multiplication of positive numbers
    expect(result).toBe(6);
  });

  it('multiplies a positive and a negative number correctly', () => {
    const result = apiService.multiplyNumbers(2, -3); // Test multiplication of positive and negative numbers
    expect(result).toBe(-6);
  });

  it('multiplies two negative numbers correctly', () => {
    const result = apiService.multiplyNumbers(-2, -3); // Test multiplication of negative numbers
    expect(result).toBe(6);
  });

  it('handles zero correctly', () => {
    const result = apiService.multiplyNumbers(0, 3); // Test multiplication by zero
    expect(result).toBe(0);
  });
});
