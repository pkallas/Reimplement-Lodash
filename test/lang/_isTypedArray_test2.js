import { expect } from 'chai'
import _isTypedArray from '../../src/lang/_isTypedArray2'

describe('_isTypedArray', function(){

  it('is a function', function(){
    expect(_isTypedArray).to.be.a('function')
  })

  it('returns a Boolean', function(){
    const answer = _isTypedArray([5,7,2])
    expect(answer).to.be.a('boolean')
  })

  it('returns true when given an Int8Array', function(){
    const answer = _isTypedArray(new Int8Array(0))
    expect(answer).to.be.true
  })

  it('returns true when given an Int32Array', function(){
    const answer = _isTypedArray(new Int32Array(0))
    expect(answer).to.be.true
  })

  it('returns false when given an Array', function(){
    const answer = _isTypedArray([1, 2, 3])
    expect(answer).to.be.false
  })

  it('returns false when given a string', function(){
    const answer = _isTypedArray("string")
    expect(answer).to.be.false
  })

})
