import { expect } from 'chai'
import _lowerFirst from '../../src/string/_lowerFirst'

describe('_lowerFirst()', function(){

  it('is a function', function(){
    expect(_lowerFirst).to.be.a('function')
  })

  it('returns a string when the argument is a string', function(){
    const decapString = _lowerFirst("This is a string.")
    expect(decapString).to.be.a('string')
  })

  it('returns “this is a string.” when given “This is a string.”', function(){
    const decapString = _lowerFirst("This is a string.")
    expect(decapString).to.be.equal("this is a string.")
  })

  it('returns “2 weeks and counting” when given “2 weeks and counting”', function(){
    const decapString = _lowerFirst("2 weeks and counting")
    expect(decapString).to.be.equal("2 weeks and counting")
  })

  it('returns “uSSR” when given “USSR”', function(){
    const decapString = _lowerFirst("USSR")
    expect(decapString).to.be.equal("uSSR")
  })

  it('returns “javaScript” when given “javaScript”', function(){
    const decapString = _lowerFirst("javaScript")
    expect(decapString).to.be.equal("javaScript")
  })

  it('returns “アドルフ in Германия is 34 years old morgaŭ!” when given “アドルフ in Германия is 34 years old morgaŭ!”', function(){
    const decapString = _lowerFirst("アドルフ in Германия is 34 years old morgaŭ!")
    expect(decapString).to.be.equal("アドルフ in Германия is 34 years old morgaŭ!")
  })

  it('returns undefined when the argument is a number', function(){
    const decapString = _lowerFirst(98.6)
    expect(decapString).to.be.undefined
  })

  it('returns undefined when the argument is an array', function(){
    const decapString = _lowerFirst(["This is a string."])
    expect(decapString).to.be.undefined
  })

  it('returns undefined when the count of arguments is 0', function(){
    const decapString = _lowerFirst()
    expect(decapString).to.be.undefined
  })

  it('returns undefined when the count of arguments is 2', function(){
    const decapString = _lowerFirst("String 1!", "String 2!")
    expect(decapString).to.be.undefined
  })

})
