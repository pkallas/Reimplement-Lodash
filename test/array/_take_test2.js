import { expect } from 'chai'
import _take from '../../src/array/_take2'

describe('_take', function(){

  it('is a function', function(){
    expect(_take).to.be.a('function')
  })

  it('returns an array', function(){
    const subarray = _take([5,7,2])
    expect(subarray).to.be.a('array')
  })

  it('returns [5,7] when given [5,7,2], 2', function(){
    const subarray = _take([5,7,2], 2)
    expect(subarray).to.be.deep.equal([5,7])
  })

  it('returns [5,7,2] when given [5,7,2], 10', function(){
    const subarray = _take([5,7,2], 10)
    expect(subarray).to.be.deep.equal([5,7,2])
  })

  it('returns [5] when given [5,7,2]', function(){
    const subarray = _take([5,7,2])
    expect(subarray).to.be.deep.equal([5])
  })

  it('returns ["thing"] when given ["thing",7,2]', function(){
    const subarray = _take(["thing",7,2])
    expect(subarray).to.be.deep.equal(["thing"])
  })

  it('returns [] when given [], 10', function(){
    const subarray = _take([], 10)
    expect(subarray).to.be.deep.equal([])
  })

  it(
    'returns ["string",[2,3,"deepstring"],9] when given ["string",[2,3,"deepstring"],9,"a"], 3', function(){
    const subarray = _take(["string",[2,3,"deepstring"],9,"a"], 3)
    expect(subarray).to.be.deep.equal(["string",[2,3,"deepstring"],9])
  })

})
