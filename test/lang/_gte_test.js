import { expect } from 'chai'
import _gte from '../../src/lang/_gte'

describe('_gte', function(){

  it('is a function', function(){
    expect(_gte).to.be.a('function')
  })

  it('returns an Boolean', function(){
    const theLength = _gte(2,7)
    expect(theLength).to.be.a('Boolean')
  })

  it('returns true when given 7,7', function(){
    const theLength = _gte(7,7)
    expect(theLength).to.be.deep.equal(true)
  })

})
