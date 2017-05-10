import { expect } from 'chai'
import _takeRight from '../../src/array/_takeRight'

describe('_takeRight', function(){

  it('is a function', function(){
    expect(_takeRight).to.be.a('function')
  })

  it('returns an array', function(){
    const theLength = _takeRight([5,7,2])
    expect(theLength).to.be.a('array')
  })

  it('returns [2,4] when given [5,7,2,4], 2', function(){
    const theLength = _takeRight([5,7,2,4], 2)
    expect(theLength).to.be.deep.equal([2,4])
  })

})
