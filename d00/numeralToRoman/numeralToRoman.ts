const numToRoman = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'LX',
  50: 'L',
}

export const numeralToRoman = (n: number): string => {
  let res = ''
  Object.keys(numToRoman).reverse().forEach((key) => {
    const number = +key
    while (n >= number) {
      res += numToRoman[key]
      n -= number
    }
  })
  return res
}
