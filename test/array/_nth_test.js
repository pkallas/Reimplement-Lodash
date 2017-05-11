import { expect } from 'chai'
import _nth from '../../src/array/_nth'

describe('_nth', function(){

  it('is a function', function(){
    expect(_nth).to.be.a('function')
  })

  it('returns an element', function(){
    const theLength = _nth([5,7,2])
    expect(theLength).to.be.a('number')
  })

  it('returns 2 when given [5,7,2], -1', function(){
    const theLength = _nth([5,7,2], -1)
    expect(theLength).to.be.deep.equal(2)
  })

})
