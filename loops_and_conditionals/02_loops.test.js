const {
  replaceVowels,
  isPalindrome
} = require('./02_loops')

describe('Loops', () => {
  it('Replace using a for loop', () => {
    expect(replaceVowels('Boolean', 'X')).toEqual('BXXlXXn')
  })

  it('Cheks if a word is palindrome', () => {
    expect(isPalindrome('NaN')).toBe(true)
    expect(isPalindrome('Radar')).toBe(true)
    expect(isPalindrome('Reconocer')).toBe(true)
    expect(isPalindrome('Boolean')).toBe(false)
  })
})