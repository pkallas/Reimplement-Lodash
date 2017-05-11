import { expect } from 'chai'
import _isTypedArray from '../../src/lang/_isTypedArray'

describe('_isTypedArray', function(){

  it('is a function', function(){
    expect(_isTypedArray).to.be.a('function')
  })

  it('returns an Boolean', function(){
    const theLength = _isTypedArray([5,7,2])
    expect(theLength).to.be.a('Boolean')
  })

  it('returns true when given Int8Array', function(){
    const theLength = _isTypedArray(Int8Array)
    expect(theLength).to.be.deep.equal(true)
  })

})
