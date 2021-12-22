const {
  isBenefitsAssigned,
  getMessageByHttpStatusCode,
  sendEmail,
  isFalsy,
  getDrink
} = require('./01_conditionals')

describe('Basic conditional blocks', () => {
  it('Assigns benefits to the right people', () => {
    expect(isBenefitsAssigned(600000, 30)).toBe(false)
    expect(isBenefitsAssigned(400000, 50)).toBe(true)
    expect(isBenefitsAssigned(370000, 30)).toBe(true)
    expect(isBenefitsAssigned(430000, 55)).toBe(true)
    expect(isBenefitsAssigned(430000, 30)).toBe(false)
  })

  it('Returns the message based on status code', () => {
    expect(getMessageByHttpStatusCode(200)).toEqual('OK')
    expect(getMessageByHttpStatusCode(201)).toEqual('Created')
    expect(getMessageByHttpStatusCode(301)).toEqual('Moved Permanently')
    expect(getMessageByHttpStatusCode(400)).toEqual('Bad Request')
    expect(getMessageByHttpStatusCode(500)).toEqual('Internal Server Error')
    expect(getMessageByHttpStatusCode(-100)).toEqual('Invalid Code Status')
  })

  it('Throws an exception when no address is given', () => {
    expect(sendEmail('contacto@boolean.cl')).toEqual('Email successfully delivered')
    expect(sendEmail()).toEqual('Email not delivered')
  })

  it('Has many Falsy values',() => {
    expect(isFalsy()).toBeFalsy()
  })

  it('Assigns the propper drink based on age parameter', () => {
    expect(getDrink(16)).toEqual('Jugo')
    expect(getDrink(18)).toEqual('Cerveza')
    expect(getDrink(23)).toEqual('Cerveza')
  })
})
