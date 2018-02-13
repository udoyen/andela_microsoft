/***********************************************************
Returns the text entered by a user in lower case if count is odd
and upper case is lenght of text is even.
************************************************************/

angular.module('app').factory('formattingFactory', [
  formattingFactory
]);



function formattingFactory() {
  function format(text) {
    this.text = text;
    if ((text.trim().length % 2) === 0) {
      return text.toUpperCase();
    } else {
      return text.toLowerCase();
    }
  }

  return {
    format: format
  }

}
