/* 
Links de utilidad:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

function raiseSalary(hours, extraHours, factor) {
  return hours + extraHours * factor
}
function cylinderVolume(radious,height) {
  return (Math.PI * radious) ** 2 * height 
  // Math.PI * height * radious ** 2
}

module.exports = {
  raiseSalary: raiseSalary,
  cylinderVolume: cylinderVolume
}
