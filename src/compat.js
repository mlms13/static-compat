var esprima = require('esprima'),
    walk    = require('esprima-walk');

module.exports.check = function (jsString) {
  // given a string of javascript, parse to AST
  var ast = esprima.parse(jsString),
      errors = [];

  // traverse AST
  walk(ast, function (node) {
    if (node.type === 'ExpressionStatement') {
      if (node.expression.callee && node.expression.callee.property.name === 'filter') {
        errors.push('The `filter` function does not work in IE8');
      }
    }
  });

  return {
    errors: errors
  };
};
