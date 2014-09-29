var methodTests = [],
    propertyTests = [];

methodTests.push(
  require('./es5/Array.prototype/filter')
);



module.exports = {
  // a list of tests that run when we encounter a method call
  method: methodTests,

  // a list of tests that run when we encounter a property
  property: propertyTests
};