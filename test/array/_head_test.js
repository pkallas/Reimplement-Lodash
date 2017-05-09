import { expect } from 'chai'
import _head from '../../src/array/_head'

describe('_head', function(){

  it('is a function', function(){
    expect(_head).to.be.a('function')
  })

  it('returns a number', function(){
    const theLength = _head([5,7,2])
    expect(theLength).to.be.a('number')
  })

  it('returns 5 when given [5,7,2]', function(){
    const theLength = _head([5,7,2])
    expect(theLength).to.be.deep.equal(5)
  })

})
