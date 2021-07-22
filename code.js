function getDigit (num, pos) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10
}

function digitCount (num) {
  if (num === 0) {
    return 1
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits (arr) {
  return arr.reduce((count, num) => {
    return Math.max(count, digitCount(num))
  }, 0)
}

function makeBucket (count) {
  return Array.from({ length: 10 }, () => [])
}

function radixSort (numbers) {
  const maxDigits = mostDigits(numbers)

  for (let k = 0; k < maxDigits; k++) {
    const bucket = makeBucket(10)
    for (let i = 0; i < numbers.length; i++) {
      const digit = getDigit(numbers[i], k)
      bucket[digit].push(numbers[i])
    }
    numbers = [].concat(...bucket)
  }

  return numbers
}

export { getDigit, digitCount, mostDigits, radixSort }
