import { expect } from 'chai'
import _take from '../../src/array/_take'

describe('_take', function(){

  it('is a function', function(){
    expect(_take).to.be.a('function')
  })

  it('returns an array', function(){
    const theLength = _take([5,7,2])
    expect(theLength).to.be.a('array')
  })

  it('returns [5,7] when given [5,7,2], 2', function(){
    const theLength = _take([5,7,2], 2)
    expect(theLength).to.be.deep.equal([5,7])
  })

})
