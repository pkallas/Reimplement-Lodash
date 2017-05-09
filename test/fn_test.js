import { expect } from 'chai'
import emptyArray from '../src/fn'

describe('emptyArray', function(){

  it('is a function', function(){
    expect(emptyArray).to.be.a('function')
  })

  it('returns an array', function(){
    const theLength = emptyArray([5,7,2])
    expect(theLength).to.be.a('array')
  })

  it('returns [7,2] when given [5,7,2]', function(){
    const theLength = emptyArray([5,7,2])
    expect(theLength).to.be.deep.equal([7,2])
  })

})
