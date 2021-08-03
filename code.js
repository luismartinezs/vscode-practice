/**
 * 1. Rename variable `num` to `digit` in `code.js`, only for one function
 * 2. Move to radixSort function. Add a comment to the beginning of the block, and another one at the end
 * 3. Go to line 27 and write a comment, then in line 13
 * 4. Wrap the bottom comment into comment lines
 * 5. console log the variable 'bucket' in a line under it along with the line number and the variable name
 */

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

// Nulla voluptate voluptate adipisicing et laborum nulla proident quis do ut nulla dolor. Nulla non excepteur aliquip ut ullamco consectetur ut tempor mollit tempor cupidatat sint et. Laborum cupidatat consectetur mollit ullamco adipisicing ea irure aliqua eiusmod et nisi aliqua minim. Fugiat qui laboris est voluptate est exercitation nulla eu qui do excepteur. Qui commodo eu ex in fugiat excepteur ullamco. Dolor laborum esse excepteur id labore amet ad qui quis qui dolore irure veniam. Id labore eiusmod ea minim elit esse non irure esse ipsum ex fugiat.
