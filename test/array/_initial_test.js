import { expect } from 'chai'
import _initial from '../../src/array/_initial'

describe('_initial', function(){

  it('is a function', function(){
    expect(_initial).to.be.a('function')
  })

  it('returns an array', function(){
    const theLength = _initial([5,7,2])
    expect(theLength).to.be.a('array')
  })

  it('returns [5,7] when given [5,7,2]', function(){
    const theLength = _initial([5,7,2])
    expect(theLength).to.be.deep.equal([5,7])
  })

})
