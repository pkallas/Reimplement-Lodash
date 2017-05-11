import { expect } from 'chai'
import _capitalize from '../../src/string/_capitalize'

describe('_capitalize()', function(){

  it('is a function', function(){
    expect(_capitalize).to.be.a('function')
  })

  it('returns a string when the argument is a string', function(){
    const capString = _capitalize("This is a string.")
    expect(capString).to.be.a('string')
  })

  it('returns “This is a string.” when given “This is a string.”', function(){
    const capString = _capitalize("This is a string.")
    expect(capString).to.be.equal("This is a string.")
  })

  it('returns “2 weeks and counting” when given “2 weeks and counting”', function(){
    const capString = _capitalize("2 weeks and counting")
    expect(capString).to.be.equal("2 weeks and counting")
  })

  it('returns “Ussr” when given “USSR”', function(){
    const capString = _capitalize("USSR")
    expect(capString).to.be.equal("Ussr")
  })

  it('returns “Javascript” when given “javaScript”', function(){
    const capString = _capitalize("javaScript")
    expect(capString).to.be.equal("Javascript")
  })

  it('returns “アドルフ in германия is 34 years old morgaŭ!” when given “アドルフ in Германия is 34 years old morgaŭ!”', function(){
    const capString = _capitalize("アドルフ in Германия is 34 years old morgaŭ!")
    expect(capString).to.be.equal("アドルフ in германия is 34 years old morgaŭ!")
  })

  it('returns undefined when the argument is a number', function(){
    const capString = _capitalize(98.6)
    expect(capString).to.be.undefined
  })

  it('returns undefined when the argument is an array', function(){
    const capString = _capitalize(["This is a string."])
    expect(capString).to.be.undefined
  })

  it('returns undefined when the count of arguments is 0', function(){
    const capString = _capitalize()
    expect(capString).to.be.undefined
  })

  it('returns undefined when the count of arguments is 2', function(){
    const capString = _capitalize("String 1!", "String 2!")
    expect(capString).to.be.undefined
  })

})
