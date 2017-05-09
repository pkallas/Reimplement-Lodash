# Reimplement-Lodash

Template for any Learners Guild project without a forkable repository requiring the creation, linting, and testing of JavaScript ES2015 functions.

## Installation and Setup

0. These instructions presuppose that npm (https://nodejs.org/en/) is installed.

1. Clone this repository into a local directory.

2. In the local directory, install required dependencies (see package.json) by executing:

    npm i

3. In the local directory, perform the provided tests by executing:

    npm test

4. Install ESLint (http://eslint.org) by executing:

    npm install -gS eslint
    cd
    eslint --init

5. Edit .eslintrc.json in your home directory to customize.

## Usage and Examples

1. Make the project directory (jstest-template) your working directory.

2. Execute “npm test”.

That command executed in the existing directory should output the following:

> jstest-template@0.0.0 test /Users/pool/Documents/Topics/train/lguild/projects/jstest-template
> mocha --compilers js:babel-register test/*.js

  stringLength()
    ✓ is a function
    ✓ returns a number
    ✓ returns 5 when given “hello”
    1) incorrect test: returns 5 when given “hello there”

  3 passing (11ms)
  1 failing

  1) stringLength() incorrect test: returns 5 when given “hello there”:

      AssertionError: expected 11 to equal 5
      + expected - actual

      +5
      -11

npm ERR! Test failed.  See above for more details.
