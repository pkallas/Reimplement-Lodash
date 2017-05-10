import { expect } from 'chai'
import _last from '../../src/array/_last'

describe('_last', function(){

  it('is a function', function(){
    expect(_last).to.be.a('function')
  })

  it('returns an element', function(){
    const theLength = _last([5,7,2])
    expect(theLength).to.be.a('number')
  })

  it('returns 2 when given [5,7,2]', function(){
    const theLength = _last([5,7,2])
    expect(theLength).to.be.deep.equal(2)
  })

})
