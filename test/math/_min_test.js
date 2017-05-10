import { expect } from 'chai'
import _min from '../../src/math/_min'

describe('_min()', function(){

  it('is a function', function(){
    expect(_min).to.be.a('function')
  })

  it('returns a number when the argument is an array of numbers', function(){
    const min = _min([1, 8.3, -55])
    expect(min).to.be.a('number')
  })

  it('returns -66 when given [3.02, -66, 0, 5.10]', function(){
    const min = _min([3.02, -66, 0, 5.10])
    expect(min).to.be.equal(-66)
  })

  it('returns 6 when given [6.0]', function(){
    const min = _min([6.0])
    expect(min).to.be.equal(6)
  })

  it(
    'returns undefined when any element of the argument is a string',
    function()
  {
    const min = _min([9, "something"])
    expect(min).to.be.undefined
  })

  it('returns undefined when any element of the argument is an array', function(){
    const min = _min([9, [3]])
    expect(min).to.be.undefined
  })

  it('returns undefined when the argument is not an array', function(){
    const min = _min("[0, 1, 2]")
    expect(min).to.be.undefined
  })

  it('returns undefined when the argument is an empty array', function(){
    const min = _min([])
    expect(min).to.be.undefined
  })

})
