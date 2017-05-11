import { expect } from 'chai'
import _padStart from '../../src/string/_padStart'

describe('_padStart()', function(){

  it('is a function', function(){
    expect(_padStart).to.be.a('function')
  })

  it('returns “I’m unpadded.” when given “I’m unpadded.”', function(){
    const paddedString = _padStart("I’m unpadded.")
    expect(paddedString).to.be.equal("I’m unpadded.")
  })

  it('returns “I’m unpadded.” when given “I’m unpadded.” and 0', function(){
    const paddedString = _padStart("I’m unpadded.", 0)
    expect(paddedString).to.be.equal("I’m unpadded.")
  })

  it('returns “I’m unpadded.” when given “I’m unpadded.” and 13', function(){
    const paddedString = _padStart("I’m unpadded.", 13)
    expect(paddedString).to.be.equal("I’m unpadded.")
  })

  it('returns “  Left-padded.” when given “Left-padded.” and 14', function(){
    const paddedString = "preString" + _padStart("Left-padded.", 14)
    expect(paddedString).to.be.equal("preString  Left-padded.")
  })

  it('returns “##padded.##” when given “padded.##”, 11, and “#”', function(){
    const paddedString = _padStart("padded.##", 11, "#")
    expect(paddedString).to.be.equal("##padded.##")
  })

  it('returns “##padded.##” when given “padded.##”, 11, and “###”', function(){
    const paddedString = _padStart("padded.##", 11, "###")
    expect(paddedString).to.be.equal("##padded.##")
  })

  it('returns “#^Padded.” when given “Padded.”, 9.0, and “#^”', function(){
    const paddedString = _padStart("Padded.", 9.0, "#^")
    expect(paddedString).to.be.equal("#^Padded.")
  })

  it('returns “アドルフ” when given “アドルフ”, 3, and “Германия”', function(){
    const paddedString = _padStart("アドルフ", 3, "Германия")
    expect(paddedString).to.be.equal("アドルフ")
  })

  it(
    'returns “%%-لغة فنية” when given “لغة فنية”, 11, and “%%-%%-”',
    function(){
      const paddedString = _padStart("لغة فنية", 11, "%%-%%-")
      expect(paddedString).to.be.equal("%%-لغة فنية")
    }
  )

  it('returns undefined when argument 0 is a number', function(){
    const paddedString = _padStart(98.6)
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 0 is an array', function(){
    const paddedString = _padStart(["This is a string."])
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 1 is negative', function(){
    const paddedString = _padStart("This is a string.", -30)
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 1 is not an integer', function(){
    const paddedString = _padStart("This is a string.", "25.41")
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 1 is a string', function(){
    const paddedString = _padStart("This is a string.", "25")
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 1 is an array', function(){
    const paddedString = _padStart("This is a string.", [25])
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 2 is blank', function(){
    const paddedString = _padStart("This is a string.", 25, "")
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 2 is a number', function(){
    const paddedString = _padStart("This is a string.", 25, 0)
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 2 is an array', function(){
    const paddedString = _padStart("This is a string.", 25, ["#@#"])
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when the count of arguments is 0', function(){
    const paddedString = _padStart()
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when the count of arguments is 4', function(){
    const paddedString = _padStart("String 1!", 20, "#", "extra")
    expect(paddedString).to.be.undefined
  })

})
