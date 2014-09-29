module.exports = {
  run: function (node) {
    if (node.expression.callee.property.name === 'filter') {
      return {
        message: 'The `filter` function does not work in IE8'
      };
    }
  }
};
