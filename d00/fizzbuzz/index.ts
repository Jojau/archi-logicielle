export const fizzbuzz = (param: number): string => {
  if (!(param % 15))
    return 'FizzBuzz'
  if (!(param % 5))
    return 'Buzz'
  if (!(param % 3))
    return 'Fizz'
  return param.toString()
}
