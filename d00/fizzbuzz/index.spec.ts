import { fizzbuzz } from './index'

describe('FizzBuzz', () => {
  describe('Non multiple', () => {
    it.each([
      [1, '1'],
      [2, '2'],
      [4, '4'],
    ])('should return buzz if %i is given', (param, expectedRes) => {
      expect(fizzbuzz(param)).toEqual(expectedRes)
    })
  })
  describe('Multiple of 3', () => {
    const expectedRes = 'Fizz'
    it.each([
      [3],
      [6],
      [9],
    ])('should return buzz if %i is given', (param) => {
      expect(fizzbuzz(param)).toEqual(expectedRes)
    })
  })
  describe('Multiple of 5', () => {
    const expectedRes = 'Buzz'
    it.each([
      [5],
      [10],
      [20],
    ])('should return buzz if %i is given', (param) => {
      expect(fizzbuzz(param)).toEqual(expectedRes)
    })
  })
  describe('Multiple of 15', () => {
    const expectedRes = 'FizzBuzz'
    it.each([
      [15],
      [30],
      [45],
    ])('should return buzz if %i is given', (param) => {
      expect(fizzbuzz(param)).toEqual(expectedRes)
    })
  })
  describe('Complex', () => {
    it.each([
      [29, '29'],
      [33, 'Fizz'],
      [55, 'Buzz'],
      [150, 'FizzBuzz'],
    ])('should return buzz if %i is given', (param, expectedRes) => {
      expect(fizzbuzz(param)).toEqual(expectedRes)
    })
  })
})
