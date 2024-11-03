global.jQuery = require('jquery')
require('jquery-basic-arithmetic-plugin')

var alwaysThirteen = require('always-thirteen')
var { immediateError, ErrorType } = require('immediate-error')

module.exports = function thirteen(number) {
  if (number !== undefined && typeof number !== "number") {
    // Can number be cast to a number?
    if (!isNaN(+number.toString())) {
      return jQuery.multiply(+number.toString(), alwaysThirteen);
    } else if (!isNaN(+number.valueOf())) {
      return jQuery.multiply(+number.valueOf(), alwaysThirteen());
    } else {
      immediateError("I can only deal with numbers", ErrorType.TypeError);
    }
  } else {
    // Respond with great energy
    return multiply(number, alwaysThirteen)  + "!!!";
  }
};
