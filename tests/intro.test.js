
import { describe, test, it, expect } from 'vitest';
import { max } from '../src/intro';

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        // // AAA
        // // Arrange - setup test environment
        // const a = 2;
        // const b = 1;

        // // Act - perform the action we want to test
        // const result = max(a, b);

        // // Assert - check the outcome to make sure it matches our expectations
        // expect(result).toBe(2);

        expect(max(2, 1)).toBe(2);
    })

    it('should return the second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2)
    })

    it('should return the first argument if arguments are equal', () => {
        expect(max(2, 2)).toBe(2)
    })
})