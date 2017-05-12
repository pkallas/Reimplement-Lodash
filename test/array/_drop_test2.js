import { expect } from 'chai'
import _drop from '../../src/array/_drop'

describe('_drop', function(){

  it('is a function', function(){
    expect(_drop).to.be.a('function')
  })

  it('returns an array', function(){
    const droppedArray = _drop([5,7,2])
    expect(droppedArray).to.be.a('array')
  })

  it('returns [2] when given [5,7,2], 2', function(){
    const droppedArray = _drop([5,7,2], 2)
    expect(droppedArray).to.be.deep.equal([2])
  })

  it('returns [7, 2] when given [5,7,2]', function(){
    const droppedArray = _drop([5,7,2])
    expect(droppedArray).to.be.deep.equal([7, 2])
  })

  it('returns [] when given [5,7,2], 17', function(){
    const droppedArray = _drop([5,7,2], 17)
    expect(droppedArray).to.be.deep.equal([])
  })

})
