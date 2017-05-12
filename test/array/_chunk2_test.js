import { expect } from 'chai'
import _chunk from '../../src/array/_chunk2'

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

  it('returns [[1,2], [3,4], [5,6]] when given [1,2,3,4,5,6], 2', function(){
    const theLength = _chunk([1,2,3,4,5,6], 2)
    expect(theLength).to.be.deep.equal([[1,2], [3,4], [5,6]])
  })

  it('returns [[1,2, 3], [4,5,6]] when given [1,2,3,4,5,6], 3', function(){
    const theLength = _chunk([1,2,3,4,5,6], 3)
    expect(theLength).to.be.deep.equal([[1,2,3], [4,5,6]])
  })

  it('returns [[1], [2], [3], [4], [5], [6]] when given [1,2,3,4,5,6]', function(){
    const theLength = _chunk([1,2,3,4,5,6])
    expect(theLength).to.be.deep.equal([[1], [2], [3], [4], [5], [6]])
  })

  it('returns [[1,2,3], [4,5,6], [7]] when given [1,2,3,4,5,6,7, 3]', function(){
    const theLength = _chunk([1,2,3,4,5,6,7], 3)
    expect(theLength).to.be.deep.equal([[1,2,3], [4,5,6], [7]])
  })

})
