import { expect } from 'chai'
import _isArray from '../../src/lang/_isArray'

describe('_isArray', function(){

  it('is a function', function(){
    expect(_isArray).to.be.a('function')
  })

  it('returns an Boolean', function(){
    const theLength = _isArray([5,7,2])
    expect(theLength).to.be.a('Boolean')
  })

  it('returns true when given [5,7,2]', function(){
    const theLength = _isArray([5,7,2])
    expect(theLength).to.be.deep.equal(true)
  })

})
