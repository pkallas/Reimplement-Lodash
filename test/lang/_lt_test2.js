import { expect } from 'chai'
import _lt from '../../src/lang/_lt2'

describe('_lt', function(){

  it('is a function', function(){
    expect(_lt).to.be.a('function')
  })

  it('returns an Boolean', function(){
    const answer = _lt(2,7)
    expect(answer).to.be.a('boolean')
  })

  it('returns false when given 7,2', function(){
    const answer = _lt(7,2)
    expect(answer).to.be.false
  })

  it('returns true when given 7,12', function(){
    const answer = _lt(7,12)
    expect(answer).to.be.true
  })

  it('returns false when given 2,2', function(){
    const answer = _lt(2,2)
    expect(answer).to.be.false
  })

})
