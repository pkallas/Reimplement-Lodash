import { expect } from 'chai'
import _tail from '../../src/array/_tail'

describe('_tail', function(){

  it('is a function', function(){
    expect(_tail).to.be.a('function')
  })

  it('returns an array', function(){
    const theLength = _tail([5,7,2])
    expect(theLength).to.be.a('array')
  })

  it('returns [7,2] when given [5,7,2]', function(){
    const theLength = _tail([5,7,2])
    expect(theLength).to.be.deep.equal([7,2])
  })

})
