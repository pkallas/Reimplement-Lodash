import { expect } from 'chai'
import _lt from '../../src/lang/_lt'

describe('_lt', function(){

  it('is a function', function(){
    expect(_lt).to.be.a('function')
  })

  it('returns an Boolean', function(){
    const theLength = _lt(2,7)
    expect(theLength).to.be.a('Boolean')
  })

  it('returns false when given 7,2', function(){
    const theLength = _lt(7,2)
    expect(theLength).to.be.deep.equal(false)
  })

})
