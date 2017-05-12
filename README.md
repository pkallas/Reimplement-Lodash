# Reimplement-Lodash

Reimplementation of some methods of the Lodash JavaScript utility library in ES2015.

This project employs a mixture of ES2015’s permitted syntaxes for the
definition of functions. The specifications do not require stylistic
uniformity.

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

```
array
  _chunk3.js
  _drop2.js
  _dropRight2.js
  _head2.js
  _initial2.js
  _last2.js
  _nth2.js
  _reverse2.js
  _tail2.js
  _take2.js
  _takeRight2.js
lang
  _castArray2.js
  _gt2.js
  _gte2.js
  _isArray2.js
  _isTypedArray2.js
  _lt2.js
  _lte2.js
math
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
string
  _capitalize.js
  _endsWith.js
  _escape.js
  _escapeRegExp.js
  _lowerFirst.js
  _pad.js
  _padEnd.js
  _padStart.js
  _repeat.js
```

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
