import { expect } from 'chai'
import _chunk from '../../src/array/_chunk'

describe('_chunk', function(){

  it('is a function', function(){
    expect(_chunk).to.be.a('function')
  })

  it('returns an array', function(){
    const theLength = _chunk([5,7,2])
    expect(theLength).to.be.a('array')
  })

  it('returns [[5,7], [2]] when given [5,7,2], 2', function(){
    const theLength = _chunk([5,7,2], 2)
    expect(theLength).to.be.deep.equal([[5,7], [2]])
  })

})
