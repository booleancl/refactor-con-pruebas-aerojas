/* From MDN:
  Short-circuiting is jargon for conditional evaluation. For example, in the expression a && (b + c), if a is falsy, then the sub-expression (b + c) will not even get evaluated, even if it is in parentheses. 
*/

function logicMadness() {
  // return 3 < 2 || 2 > 1 
  // return 3 > 2 && 2 > 1 
  // return 3 > 2 || 2 < 1 
  // return 3 < 2 && 2 > 1 
}

function thisIsCrazy() {
  // The wierd variable dosent exist at all
  // Fix the example without removing the wierd variable
  // return 3 > 2 && (thisVariableDoesNotExists)
  // return 3 < 2 && (thisVariableDoesNotExists)
  return false || true || thisVariableDoesNotExists
}

module.exports = {
  logicMadness: logicMadness,
  thisIsCrazy: thisIsCrazy
}
