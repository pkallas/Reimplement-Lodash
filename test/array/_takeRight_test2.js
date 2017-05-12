import { expect } from 'chai'
import _takeRight from '../../src/array/_takeRight2'

describe('_takeRight', function(){

  it('is a function', function(){
    expect(_takeRight).to.be.a('function')
  })

  it('returns an array', function(){
    const subarray = _takeRight([5,7,2])
    expect(subarray).to.be.a('array')
  })

  it('returns [7,2] when given [5,7,2], 2', function(){
    const subarray = _takeRight([5,7,2], 2)
    expect(subarray).to.be.deep.equal([7,2])
  })

  it('returns [5,7,2] when given [5,7,2], 10', function(){
    const subarray = _takeRight([5,7,2], 10)
    expect(subarray).to.be.deep.equal([5,7,2])
  })

  it('returns [2] when given [5,7,2]', function(){
    const subarray = _takeRight([5,7,2])
    expect(subarray).to.be.deep.equal([2])
  })

  it('returns [2] when given ["thing",7,2]', function(){
    const subarray = _takeRight(["thing",7,2])
    expect(subarray).to.be.deep.equal([2])
  })

  it('returns [] when given [], 10', function(){
    const subarray = _takeRight([], 10)
    expect(subarray).to.be.deep.equal([])
  })

  it(
    'returns [[2,3,"deepstring"],9,"a"] when given ["string",[2,3,"deepstring"],9,"a"], 3', function(){
    const subarray = _takeRight(["string",[2,3,"deepstring"],9,"a"], 3)
    expect(subarray).to.be.deep.equal([[2,3,"deepstring"],9,"a"])
  })

})
