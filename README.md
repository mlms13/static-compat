# Compatibilityify (or, Compatibilibuddy?)

## The Why

When supporting old browsers, we often run into third-party libraries that aren't as thorough in their browser support as we'd like to be. This tool reads JavaScript input and checks against a list of features that are known not to work in certain browsers. It returns errors, warnings, and suggested fixes when scripts attempt to do things that will make our supported browsers sad.

## The How

A JavaScript input file is parsed by [Esprima](http://esprima.org/). Then, we traverse the AST produced by Esprima and normalize variable types, so that we can run the appropriate "Support Tests" against each item in the syntax tree.

## The Anatomy of a Support Test

Each support test requires its own set of browser support data.

### Support Data

...

## Testing the Tests

Support tests are worthless if they are inaccurate. The dynamic nature of JavaScript types mean that edge cases are everywhere, and complete unit tests are critical.

Thorough tests exist to protect against both false positives and false negatives. If you encounter an edge case that isn't currently being tested against, please add a failing test, even if you don't have the code to fix the test.