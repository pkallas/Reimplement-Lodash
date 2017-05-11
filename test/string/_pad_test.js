import { expect } from 'chai'
import _pad from '../../src/string/_pad'

describe('_pad()', function(){

  it('is a function', function(){
    expect(_pad).to.be.a('function')
  })

  it('returns “I’m unpadded.” when given “I’m unpadded.”', function(){
    const paddedString = _pad("I’m unpadded.")
    expect(paddedString).to.be.equal("I’m unpadded.")
  })

  it('returns “I’m unpadded.” when given “I’m unpadded.” and 0', function(){
    const paddedString = _pad("I’m unpadded.", 0)
    expect(paddedString).to.be.equal("I’m unpadded.")
  })

  it('returns “I’m unpadded.” when given “I’m unpadded.” and 13', function(){
    const paddedString = _pad("I’m unpadded.", 13)
    expect(paddedString).to.be.equal("I’m unpadded.")
  })

  it('returns “Right-padded. ” when given “Right-padded.” and 14', function(){
    const paddedString = _pad("I’m unpadded.", 14) + "NextString"
    expect(paddedString).to.be.equal("I’m unpadded. NextString")
  })

  it('returns “#Bipadded.#” when given “Bipadded.”, 11, and “#”', function(){
    const paddedString = _pad("Bipadded.", 11, "#")
    expect(paddedString).to.be.equal("#Bipadded.#")
  })

  it('returns “#Bipadded.##” when given “Bipadded.”, 12, and “#”', function(){
    const paddedString = _pad("Bipadded.", 12, "#")
    expect(paddedString).to.be.equal("#Bipadded.##")
  })

  it('returns “##Bipadded.##” when given “Bipadded.”, 13, and “#”', function(){
    const paddedString = _pad("Bipadded.", 13, "#")
    expect(paddedString).to.be.equal("##Bipadded.##")
  })

  it('returns “#^Bipadded.#^” when given “Bipadded.”, 13, and “#^”', function(){
    const paddedString = _pad("Bipadded.", 13, "#^")
    expect(paddedString).to.be.equal("#^Bipadded.#^")
  })

  it('returns “#Bipadded.#” when given “Bipadded.”, 11, and “#^”', function(){
    const paddedString = _pad("Bipadded.", 11, "#^")
    expect(paddedString).to.be.equal("#Bipadded.#")
  })

  it(
    'returns “#^Bipadded.#^#” when given “Bipadded.”, 14, and “#^”',
    function() {
      const paddedString = _pad("Bipadded.", 14, "#^")
      expect(paddedString).to.be.equal("#^Bipadded.#^#")
    }
  )

  it('returns “Bipadded.” when given “Bipadded.”, 8.0, and “#^”', function(){
    const paddedString = _pad("Bipadded.", 8.0, "#^")
    expect(paddedString).to.be.equal("Bipadded.")
  })

  it('returns “アドルフ” when given “アドルフ”, 3, and “Германия”', function(){
    const paddedString = _pad("アドルフ", 3, "Германия")
    expect(paddedString).to.be.equal("アドルフ")
  })

  it(
    'returns “ГерアドルフГерм” when given “アドルフ”, 11, and “Германия”',
    function(){
      const paddedString = _pad("アドルフ", 11, "Германия")
      expect(paddedString).to.be.equal("ГерアドルフГерм")
    }
  )

  it('returns undefined when argument 0 is a number', function(){
    const paddedString = _pad(98.6)
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 0 is an array', function(){
    const paddedString = _pad(["This is a string."])
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 1 is negative', function(){
    const paddedString = _pad("This is a string.", -30)
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 1 is not an integer', function(){
    const paddedString = _pad("This is a string.", "25.41")
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 1 is a string', function(){
    const paddedString = _pad("This is a string.", "25")
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 1 is an array', function(){
    const paddedString = _pad("This is a string.", [25])
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 2 is blank', function(){
    const paddedString = _pad("This is a string.", 25, "")
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 2 is a number', function(){
    const paddedString = _pad("This is a string.", 25, 0)
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when argument 2 is an array', function(){
    const paddedString = _pad("This is a string.", 25, ["#@#"])
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when the count of arguments is 0', function(){
    const paddedString = _pad()
    expect(paddedString).to.be.undefined
  })

  it('returns undefined when the count of arguments is 4', function(){
    const paddedString = _pad("String 1!", 20, "#", "extra")
    expect(paddedString).to.be.undefined
  })

})
