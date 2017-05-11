import { expect } from 'chai'
import _gt from '../../src/lang/_gt'

describe('_gt', function(){

  it('is a function', function(){
    expect(_gt).to.be.a('function')
  })

  it('returns an Boolean', function(){
    const theLength = _gt(2,7)
    expect(theLength).to.be.a('Boolean')
  })

  it('returns true when given 7,2', function(){
    const theLength = _gt(7,2)
    expect(theLength).to.be.deep.equal(true)
  })

})
