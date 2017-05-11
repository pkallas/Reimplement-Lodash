import { expect } from 'chai'
import _castArray from '../../src/lang/_castArray2'

describe('_castArray', function(){

  it('is a function', function(){
    expect(_castArray).to.be.a('function')
  })

  it('returns an Array', function(){
    const theLength = _castArray([5,7,2])
    expect(theLength).to.be.a('Array')
  })

  it('returns [abc] when given "abc"', function(){
    const theLength = _castArray("abc")
    expect(theLength).to.be.deep.equal(["abc"])
  })

  it('returns [abc] when given ["abc"]', function(){
    const theLength = _castArray(["abc"])
    expect(theLength).to.be.deep.equal(["abc"])
  })

  it('returns [] when given []', function(){
    const theLength = _castArray([])
    expect(theLength).to.be.deep.equal([])
  })

  it('returns [""] when given ""', function(){
    const theLength = _castArray("")
    expect(theLength).to.be.deep.equal([""])
  })

})
