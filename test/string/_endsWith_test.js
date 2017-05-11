import { expect } from 'chai'
import _endsWith from '../../src/string/_endsWith'

describe('_endsWith()', function(){

  it('is a function', function(){
    expect(_endsWith).to.be.a('function')
  })

  it('returns a boolean when given “Hello”, “ll”, and 4', function(){
    const answer = _endsWith("Hello", "ll", 4)
    expect(answer).to.be.a('boolean')
  })

  it('returns true when given “Hello”, “ll”, and 4', function(){
    const answer = _endsWith("Hello", "ll", 4)
    expect(answer).to.be.true
  })

  it('returns false when given “Hello”, “ll”, and 3', function(){
    const answer = _endsWith("Hello", "ll", 3)
    expect(answer).to.be.false
  })

  it('returns false when given “Hello” and “ll”', function(){
    const answer = _endsWith("Hello", "ll")
    expect(answer).to.be.false
  })

  it('returns true when given “Hello” and “lo”', function(){
    const answer = _endsWith("Hello", "lo")
    expect(answer).to.be.true
  })

  it('returns true when given “Hello” and “o”', function(){
    const answer = _endsWith("Hello", "o")
    expect(answer).to.be.true
  })

  it('returns true when given “Hello” and “Hello”', function(){
    const answer = _endsWith("Hello", "Hello")
    expect(answer).to.be.true
  })

  it(
    'returns true when given “アドルフ in Германия is 34 years old morgaŭ!”, “Гер”, and 11', function(){
      const answer = _endsWith("アドルフ in Германия is 34 years old morgaŭ!", "Гер", 11)
      expect(answer).to.be.true
  })

  it('returns undefined when argument 0 is a number', function(){
    const answer = _endsWith(98.6, "lookforme")
    expect(answer).to.be.undefined
  })

  it('returns undefined when argument 1 is an array', function(){
    const answer = _endsWith("This is a string.", ["string."])
    expect(answer).to.be.undefined
  })

  it('returns undefined when the count of arguments is 1', function(){
    const answer = _endsWith("some string")
    expect(answer).to.be.undefined
  })

  it('returns undefined when the count of arguments is 4', function(){
    const answer = _endsWith("String 1!", "ing", 6, 0)
    expect(answer).to.be.undefined
  })

})
