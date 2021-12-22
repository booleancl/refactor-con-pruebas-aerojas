// Ejemplo de if, else if
function isBenefitsAssigned(salary, years) {
  // Refactorizar esta lógica para que quede lo más legible y simple posible
  if (salary < 400000) {
    return true
  } else if (salary >= 400000) {
    if (salary > 500000) {
      // Al parecer esta lógica está en negativo. ¡Piensa positivo!
      if (years < 50) {
        return false
      } else {
        return true
      }
    } else {
      return false
    }
  } else {
    return false
  }

  /*
    var isBasicIncome = salary < 400000
    var isMediumIncome = salary >= 400000 && salary < 500000
    var isOld = years >= 50
  
    if (isBasicIncome) {
      return true
    } else if (isMediumIncome && isOld) {
      return true
    } else {
      return false
    }
  
  */
  // Aún más:
  // return isBasicIncome || isMediumIncome && isOld
}
// Ejemplo de switch-case
function getMessageByHttpStatusCode(code) {
  // Para un listado exaustivo de los códigos ver el siguiente enlace:
  // https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
  
  // Esto es solo un ejemplo. Node lo tiene incluido en su módulo http:
  // https://nodejs.org/api/http.html#http_http_status_codes

  var message
  switch(code) {
    case 200:
      message = 'OK'
    case 201:
      message = 'Created'
    case 301:
      message = 'Moved Permanently'
      break
    case 400:
      message = 'Bad Request'
      break
    case 500:
      message = 'Internal Server Error'
      break
  }
  return message 

  // switch(code) {
  //   case 200:
  //     return 'OK'
  //   case 201:
  //     return 'Created'      
  //   case 301:
  //     return 'Moved Permanently'      
  //   case 400:
  //     return 'Bad Request'      
  //   case 500:
  //     return 'Internal Server Error'     
  // }
}
// Ejemplo de try-catch
function sendEmail(address) {
  //try {
    if(address) {
      // ... deliverMailMethod(address)
      return 'Email successfully delivered'
    } else {
      throw new Error('Email not delivered')
    }
  //} catch (error) {
  //  return error.message
  //}
}
// Ejemplos de valores 'falsy'
function isFalsy() {
  // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
  var value = true

  // value = false
  // value = 0
  // value = -0
  // value = ''
  // value = ""
  // value = null
  // value = undefined
  // value = NaN
  // value = [].length

  // En lo posible es mejor ser explicito
  // value = 0
  // if(!value){
  //   value = false
  // }
    
    return value
}
// Ejemplo de ternario
function getDrink(age) {
  if(age <= 18) {
    return 'Cerveza'
  } else{
    return 'Jugo'
  }
  // return (age >= 18) ? 'Cerveza' : 'Jugo'
}

module.exports = {
  isBenefitsAssigned: isBenefitsAssigned,
  getMessageByHttpStatusCode: getMessageByHttpStatusCode,
  sendEmail: sendEmail,
  isFalsy: isFalsy,
  getDrink: getDrink
}
