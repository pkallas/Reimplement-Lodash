import { expect } from 'chai'
import _drop from '../../src/array/_drop'

describe('_drop', function(){

  it('is a function', function(){
    expect(_drop).to.be.a('function')
  })

  it('returns a number', function(){
    const theLength = _drop([5,7,2])
    expect(theLength).to.be.a('array')
  })

  it('returns [2] when given [5,7,2], 2', function(){
    const theLength = _drop([5,7,2], 2)
    expect(theLength).to.be.deep.equal([2])
  })

})
