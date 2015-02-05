module.exports = {
  run: function (node) {
    if (node.expression.callee.property.name === 'map') {
      return {
        message: 'The `map` function does not work in IE8'
      };
    }
  }
};
