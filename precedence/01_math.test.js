const {
  raiseSalary,
  cylinderVolume
} = require('./01_math')

describe('Operators precedence', () => {
  it('Parentesis are the max precedence', () => {
    expect(raiseSalary(3,4,5)).toEqual(35)
  })

  it('Unnecessary grouping', () => {
    expect(cylinderVolume(2,2).toFixed(2)).toEqual('25.13')
  })
})