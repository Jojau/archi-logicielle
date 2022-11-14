import { numeralToRoman } from './numeralToRoman'

describe('Numeral to roman', () => {
  describe('Main cases', () => {
    describe('Basic', () => {
      it.each([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
      ])('should return %s when %i is given', (expectedRes, number) => {
        expect(numeralToRoman(number)).toEqual(expectedRes)
      })
    })
    describe('Complex', () => {
      it.each([
        ['II', 2],
        ['III', 3],
        ['VI', 6],
        ['XI', 11],
        ['XV', 15],
      ])('should return %s when %i is given', (expectedRes, number) => {
        expect(numeralToRoman(number)).toEqual(expectedRes)
      })
    })
  })
  describe('Edge cases', () => {
    describe('Basic', () => {
      it.each([
        ['IV', 4],
        ['IX', 9],
        ['LX', 40],
      ])('should return %s when %i is given', (expectedRes, number) => {
        expect(numeralToRoman(number)).toEqual(expectedRes)
      })
    })
    describe('Complex', () => {
      it.each([
        ['XIV', 14],
        ['XIX', 19],
        ['XXXIX', 39],
        ['LXIX', 49],
      ])('should return %s when %i is given', (expectedRes, number) => {
        expect(numeralToRoman(number)).toEqual(expectedRes)
      })
    })
  })
})
