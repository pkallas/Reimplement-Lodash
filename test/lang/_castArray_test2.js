import { expect } from 'chai'
import _castArray from '../../src/lang/_castArray2'

describe('_castArray', function(){

  it('is a function', function(){
    expect(_castArray).to.be.a('function')
  })

  it('returns an Array', function(){
    const castArray = _castArray([5,7,2])
    expect(castArray).to.be.a('Array')
  })

  it('returns [abc] when given "abc"', function(){
    const castArray = _castArray("abc")
    expect(castArray).to.be.deep.equal(["abc"])
  })

  it('returns [abc] when given ["abc"]', function(){
    const castArray = _castArray(["abc"])
    expect(castArray).to.be.deep.equal(["abc"])
  })

  it('returns [] when given []', function(){
    const castArray = _castArray([])
    expect(castArray).to.be.deep.equal([])
  })

  it('returns [""] when given ""', function(){
    const castArray = _castArray("")
    expect(castArray).to.be.deep.equal([""])
  })

})
