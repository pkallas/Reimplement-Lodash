import { expect } from 'chai'
import _escape from '../../src/string/_escape'

describe('_escape()', function(){

  it('is a function', function(){
    expect(_escape).to.be.a('function')
  })

  it('returns a string when the argument is a string', function(){
    const escapedString = _escape("This is a string.")
    expect(escapedString).to.be.a('string')
  })

  it('returns “This is a string.” when given “This is a string.”', function(){
    const escapedString = _escape("This is a string.")
    expect(escapedString).to.be.equal("This is a string.")
  })

  it(
    'returns “&quot;Smart &amp; Final&quot;” when given “"Smart & Final"”', function(){
      const escapedString = _escape('"Smart & Final"')
      expect(escapedString).to.be.equal("&quot;Smart &amp; Final&quot;")
    }
  )

  it('returns “It&apos;s &lt;arg&gt;” when given “"It\'s <arg>"”', function(){
    const escapedString = _escape("It's <arg>")
    expect(escapedString).to.be.equal("It&apos;s &lt;arg&gt;")
  })

  it('returns “&quot;アドルフ&quot;” when given “"アドルフ"”', function(){
    const escapedString = _escape('"アドルフ"')
    expect(escapedString).to.be.equal("&quot;アドルフ&quot;")
  })

  it('returns “” when given “”', function(){
    const escapedString = _escape("")
    expect(escapedString).to.be.equal("")
  })

  it('returns undefined when the count of arguments is 0', function(){
    const escapedString = _escape()
    expect(escapedString).to.be.undefined
  })

  it('returns undefined when the count of arguments is 2', function(){
    const escapedString = _escape("String 1!", "String 2!")
    expect(escapedString).to.be.undefined
  })

  it('returns undefined when the argument is a number', function(){
    const escapedString = _escape(98.6)
    expect(escapedString).to.be.undefined
  })

  it('returns undefined when the argument is an array', function(){
    const escapedString = _escape(["This is a string."])
    expect(escapedString).to.be.undefined
  })

})
