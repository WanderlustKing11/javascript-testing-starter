
import { describe, test, it, expect } from 'vitest';
import { calculateAverage, fizzBuzz, max } from '../src/intro';

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


describe('fizzBuzz', () => {
    it("should return 'FizzBuzz' if n is divisible by both 3 & 5", () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })

    it("should return 'Fizz' if only divisible by 3", () => {
        expect(fizzBuzz(9)).toBe("Fizz");
    })

    it("should return 'Buzz' if only divisible by 5", () => {
        expect(fizzBuzz(10)).toBe("Buzz");
    })

    it("should return a number as a string if not divisible by 3 or 5", () => {
        expect(fizzBuzz(11)).toBe("11");
    })
})



describe('calculateAverage', () => {
    it('should return NaN if given an empty array', () => {
        expect(calculateAverage([])).toBe(NaN);
    })

    it('should calculate the average of an array with only 1 element', () => {
        expect(calculateAverage([1])).toBe(1)
    })

    it('should calculate the average of an array with only 2 elements', () => {
        expect(calculateAverage([2, 4])).toBe(3)
    })

    it('should calculate the average of an array with 3 elements', () => {
        expect(calculateAverage([1, 3, 5])).toBe(3)
    })
})