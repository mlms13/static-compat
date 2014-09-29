var esprima = require('esprima'),
    walk    = require('esprima-walk'),
    tests   = require('./tests');

module.exports.check = function (jsString) {
  // given a string of javascript, parse to AST
  var ast = esprima.parse(jsString),
      errors = [];

  // traverse AST
  walk.walkAddParent(ast, function (node) {
    if (node.expression && node.expression.type === 'CallExpression') {
      tests.method.forEach(function (test) {
        var result = test.run(node);

        if (result) {
          errors.push(result);
        }
      });
    }
  });

  return {
    errors: errors
  };
};
