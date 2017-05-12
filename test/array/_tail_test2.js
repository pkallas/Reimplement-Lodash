import { expect } from 'chai'
import _tail from '../../src/array/_tail2'

describe('_tail', function(){

  it('is a function', function(){
    expect(_tail).to.be.a('function')
  })

  it('returns an array', function(){
    const subarray = _tail([5,7,2])
    expect(subarray).to.be.a('array')
  })

  it('returns [7,2] when given [5,7,2]', function(){
    const subarray = _tail([5,7,2])
    expect(subarray).to.be.deep.equal([7,2])
  })

  it('returns [7,["strarray"]] when given [5,7,["strarray"]]', function(){
    const subarray = _tail([5,7,["strarray"]])
    expect(subarray).to.be.deep.equal([7,["strarray"]])
  })

  it('returns [] when given [2]', function(){
    const subarray = _tail([2])
    expect(subarray).to.be.deep.equal([])
  })

  it('returns [] when given []', function(){
    const subarray = _tail([])
    expect(subarray).to.be.deep.equal([])
  })

})
