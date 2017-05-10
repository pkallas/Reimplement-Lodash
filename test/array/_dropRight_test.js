import { expect } from 'chai'
import _dropRight from '../../src/array/_dropRight'

describe('_dropRight', function(){

  it('is a function', function(){
    expect(_dropRight).to.be.a('function')
  })

  it('returns a number', function(){
    const theLength = _dropRight([5,7,2])
    expect(theLength).to.be.a('array')
  })

  it('returns [5] when given [5,7,2], 2', function(){
    const theLength = _dropRight([5,7,2], 2)
    expect(theLength).to.be.deep.equal([5])
  })

})
