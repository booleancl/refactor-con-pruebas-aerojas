const {
  logicMadness,
  thisIsCrazy
} = require('./02_logical')

describe('Logical and Short-circuit', () => {

  it('returns the last evaluated expression',()=> {
    expect(logicMadness()).toBe(true)
  })

  it('&& operator search for a falsey value and then stops', () => {
    expect(()=>{
      thisIsCrazy()
    }).not.toThrow()
  })
})