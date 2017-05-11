import { expect } from 'chai'
import _gt from '../../src/lang/_gt2'

describe('_gt', function(){

  it('is a function', function(){
    expect(_gt).to.be.a('function')
  })

  it('returns a Boolean', function(){
    const theLength = _gt(2,7)
    expect(theLength).to.be.a('boolean')
  })

  it('returns true when given 7,2', function(){
    const theLength = _gt(7,2)
    expect(theLength).to.be.true
  })

  it('returns false when given 7,12', function(){
    const theLength = _gt(7,12)
    expect(theLength).to.be.false
  })

  it('returns false when given 7,7', function(){
    const theLength = _gt(7,7)
    expect(theLength).to.be.false
  })

  it('returns true when given 7,0', function(){
    const theLength = _gt(7,0)
    expect(theLength).to.be.true
  })

})
