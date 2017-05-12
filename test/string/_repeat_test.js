import { expect } from 'chai'
import _repeat from '../../src/string/_repeat'

describe('_repeat()', function(){

  it('is a function', function(){
    expect(_repeat).to.be.a('function')
  })

  it('returns “I’m unrepeated.” when given “I’m unrepeated.”', function(){
    const repeatedString = _repeat("I’m unrepeated.")
    expect(repeatedString).to.be.equal("I’m unrepeated.")
  })

  it('returns “I’m unrepeated.” when given “I’m unrepeated.” and 0', function(){
    const repeatedString = _repeat("I’m unrepeated.", 0)
    expect(repeatedString).to.be.equal("I’m unrepeated.")
  })

  it('returns “I.I.I.” when given “I.” and 3', function(){
    const repeatedString = _repeat("I.", 3)
    expect(repeatedString).to.be.equal("I.I.I.")
  })

  it('returns “” when given “”', function(){
    const repeatedString = _repeat("")
    expect(repeatedString).to.be.equal("")
  })

  it('returns “” when given nothing', function(){
    const repeatedString = _repeat()
    expect(repeatedString).to.be.equal("")
  })

  it('returns “アドルフアドルフ” when given “アドルフ” and 2', function(){
    const repeatedString = _repeat("アドルフ", 2)
    expect(repeatedString).to.be.equal("アドルフアドルフ")
  })

  it('returns undefined when argument 0 is a number', function(){
    const repeatedString = _repeat(98.6)
    expect(repeatedString).to.be.undefined
  })

  it('returns undefined when argument 0 is an array', function(){
    const repeatedString = _repeat(["This is a string."])
    expect(repeatedString).to.be.undefined
  })

  it('returns undefined when argument 1 is negative', function(){
    const repeatedString = _repeat("This is a string.", -30)
    expect(repeatedString).to.be.undefined
  })

  it('returns undefined when argument 1 is not an integer', function(){
    const repeatedString = _repeat("This is a string.", "25.41")
    expect(repeatedString).to.be.undefined
  })

  it('returns undefined when argument 1 is a string', function(){
    const repeatedString = _repeat("This is a string.", "25")
    expect(repeatedString).to.be.undefined
  })

  it('returns undefined when argument 1 is an array', function(){
    const repeatedString = _repeat("This is a string.", [25])
    expect(repeatedString).to.be.undefined
  })

  it('returns undefined when the count of arguments is 3', function(){
    const repeatedString = _repeat("String 1!", 20, "#")
    expect(repeatedString).to.be.undefined
  })

})
