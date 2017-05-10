import { expect } from 'chai'
import _reverse from '../../src/array/_reverse'

describe('_reverse', function(){

  it('is a function', function(){
    expect(_reverse).to.be.a('function')
  })

  it('returns an array', function(){
    const theLength = _reverse([5,7,2])
    expect(theLength).to.be.a('array')
  })

  it('returns [2,7,5] when given [5,7,2]', function(){
    const theLength = _reverse([5,7,2])
    expect(theLength).to.be.deep.equal([2,7,5])
  })

})
