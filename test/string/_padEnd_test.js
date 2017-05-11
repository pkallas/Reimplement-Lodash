import { expect } from 'chai'
import _padEnd from '../../src/string/_padEnd'

describe('_padEnd()', function(){

  it('is a function', function(){
    expect(_padEnd).to.be.a('function')
  })

  it('returns “I’m unpadded.” when given “I’m unpadded.”', function(){
    const paddedString = _padEnd("I’m unpadded.")
    expect(paddedString).to.be.equal("I’m unpadded.")
  })

  it('returns “I’m unpadded.” when given “I’m unpadded.” and 0', function(){
    const paddedString = _padEnd("I’m unpadded.", 0)
    expect(paddedString).to.be.equal("I’m unpadded.")
  })

  it('returns “I’m unpadded.” when given “I’m unpadded.” and 13', function(){
    const paddedString = _padEnd("I’m unpadded.", 13)
    expect(paddedString).to.be.equal("I’m unpadded.")
  })

  it('returns “Right-padded. ” when given “Right-padded.” and 14', function(){
    const paddedString = _padEnd("I’m unpadded.", 14) + "NextString"
    expect(paddedString).to.be.equal("I’m unpadded. NextString")
  })

  it('returns “##padded.##” when given “##padded.”, 11, and “#”', function(){
    const paddedString = _padEnd("##padded.", 11, "#")
    expect(paddedString).to.be.equal("##padded.##")
  })

  it('returns “##padded.##” when given “##padded.”, 11, and “###”', function(){
    const paddedString = _padEnd("##padded.", 11, "###")
    expect(paddedString).to.be.equal("##padded.##")
  })

  it('returns “Padded.#^” when given “Padded.”, 9.0, and “#^”', function(){
    const paddedString = _padEnd("Padded.", 9.0, "#^")
    expect(paddedString).to.be.equal("Padded.#^")
  })

  it('returns “アドルフ” when given “アドルフ”, 3, and “Германия”', function(){
    const paddedString = _padEnd("アドルフ", 3, "Германия")
    expect(paddedString).to.be.equal("アドルフ")
  })

  it(
    'returns “لغة فنية%%-” when given “لغة فنية”, 11, and “%%-%%-”',
    function(){
      const paddedString = _padEnd("لغة فنية", 11, "%%-%%-")
      expect(paddedString).to.be.equal("لغة فنية%%-")
    }
  )

  it('returns undefined when argument 0 is a number', function(){
    const paddedString = _padEnd(98.6)
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 0 is an array', function(){
    const paddedString = _padEnd(["This is a string."])
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 1 is negative', function(){
    const paddedString = _padEnd("This is a string.", -30)
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 1 is not an integer', function(){
    const paddedString = _padEnd("This is a string.", "25.41")
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 1 is a string', function(){
    const paddedString = _padEnd("This is a string.", "25")
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 1 is an array', function(){
    const paddedString = _padEnd("This is a string.", [25])
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 2 is blank', function(){
    const paddedString = _padEnd("This is a string.", 25, "")
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 2 is a number', function(){
    const paddedString = _padEnd("This is a string.", 25, 0)
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 2 is an array', function(){
    const paddedString = _padEnd("This is a string.", 25, ["#@#"])
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when the count of arguments is 0', function(){
    const paddedString = _padEnd()
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when the count of arguments is 4', function(){
    const paddedString = _padEnd("String 1!", 20, "#", "extra")
    expect(paddedString).to.be.undefined
  })

})
