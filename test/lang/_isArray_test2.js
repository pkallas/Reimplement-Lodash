import { expect } from 'chai'
import _isArray from '../../src/lang/_isArray2'

describe('_isArray', function(){

  it('is a function', function(){
    expect(_isArray).to.be.a('function')
  })

  it('returns a Boolean', function(){
    const answer = _isArray([5,7,2])
    expect(answer).to.be.a('boolean')
  })

  it('returns true when given [5,7,2]', function(){
    const answer = _isArray([5,7,2])
    expect(answer).to.be.true
  })

  it('returns true when given ["a", [5,7,2]]', function(){
    const answer = _isArray(["a", [5,7,2]])
    expect(answer).to.be.true
  })

  it('returns true when given []', function(){
    const answer = _isArray([])
    expect(answer).to.be.true
  })

})
