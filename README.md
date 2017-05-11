# Reimplement-Lodash

Reimplementation of some methods of the Lodash JavaScript utility library in ES2015.

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

## Methods included in repository

0. array
  _chunk.js
  _drop.js
  _dropRight.js
  _head.js
  _initial.js
  _last.js
  _nth.js
  _reverse.js
  _tail.js
  _take.js
  _takeRight.js
1. lang
  _castArray.js
  _gt.js
  _gte.js
  _isArray.js
  _isTypedArray.js
  _lt.js
  _lte.js
2. math
  _add.js
  _ceil.js
  _divide.js
  _floor.js
  _max.js
  _mean.js
  _min.js
  _multiply.js
  _round.js
  _subtract.js
  _sum.js
3. string
  _capitalize.js
  _endsWith.js
  _escape.js
  _escapeRegExp.js
  _lowerFirst.js
  _pad.js
  _padEnd.js
  _padStart.js

## Usage and Examples

0. Make the project directory your working directory.

1. Execute “npm test”.

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
