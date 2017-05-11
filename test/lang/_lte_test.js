import { expect } from 'chai'
import _lte from '../../src/lang/_lte'

describe('_lte', function(){

  it('is a function', function(){
    expect(_lte).to.be.a('function')
  })

  it('returns an Boolean', function(){
    const theLength = _lte(2,7)
    expect(theLength).to.be.a('Boolean')
  })

  it('returns true when given 7,7', function(){
    const theLength = _lte(7,7)
    expect(theLength).to.be.deep.equal(true)
  })

})
