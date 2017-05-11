import { expect } from 'chai'
import _gte from '../../src/lang/_gte2'

describe('_gtee', function() {

  it('is a function', function(){
    expect(_gte).to.be.a('function')
  })

  it('returns a Boolean', function(){
    const answer = _gte(2,7)
    expect(answer).to.be.a('boolean')
  })

  it('returns true when given 7,2', function(){
    const answer = _gte(7,2)
    expect(answer).to.be.true
  })

  it('returns false when given 7,12', function(){
    const answer = _gte(7,12)
    expect(answer).to.be.false
  })

  it('returns true when given 7,7', function(){
    const answer = _gte(7,7)
    expect(answer).to.be.true
  })

  it('returns true when given 7,0', function(){
    const answer = _gte(7,0)
    expect(answer).to.be.true
  })

})
