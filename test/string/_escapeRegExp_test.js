import { expect } from 'chai'
import _escapeRegExp from '../../src/string/_escapeRegExp'

describe('_escapeRegExp()', function(){

  it('is a function', function(){
    expect(_escapeRegExp).to.be.a('function')
  })

  it('returns a string when the argument is a string', function(){
    const escapedString = _escapeRegExp("This is a string.")
    expect(escapedString).to.be.a('string')
  })

  it('returns “This is a string\\.” when given “This is a string.”', function(){
    const escapedString = _escapeRegExp("This is a string.")
    expect(escapedString).to.be.equal("This is a string\\.")
  })

  it('returns “do\\(array\\[0\\]\\)” when given “do(array[0])”', function(){
    const escapedString = _escapeRegExp("do(array[0])")
    expect(escapedString).to.be.equal("do\\(array\\[0\\]\\)")
  })

  it('returns undefined when the count of arguments is 0', function(){
    const escapedString = _escapeRegExp()
    expect(escapedString).to.be.undefined
  })

  it('returns undefined when the count of arguments is 2', function(){
    const escapedString = _escapeRegExp("String 1!", "String 2!")
    expect(escapedString).to.be.undefined
  })

  it('returns undefined when the argument is a number', function(){
    const escapedString = _escapeRegExp(98.6)
    expect(escapedString).to.be.undefined
  })

  it('returns undefined when the argument is an array', function(){
    const escapedString = _escapeRegExp(["This is a string."])
    expect(escapedString).to.be.undefined
  })

})
