import { expect } from 'chai'
import _sum from '../../src/math/_sum'

describe('_sum()', function(){

  it('is a function', function(){
    expect(_sum).to.be.a('function')
  })

  it('returns a number when the argument is an array of numbers', function(){
    const sum = _sum([1, 8.3, -55])
    expect(sum).to.be.a('number')
  })

  it('returns -42.51 when given [3.49, -46, 0]', function(){
    const sum = _sum([3.49, -46, 0])
    expect(sum).to.be.equal(-42.51)
  })

  it('returns 0 when given [0]', function(){
    const sum = _sum([0])
    expect(sum).to.be.equal(0)
  })

  it(
    'returns undefined when any element of the argument is a string',
    function()
  {
    const sum = _sum([9, "something"])
    expect(sum).to.be.undefined
  })

  it('returns undefined when any element of the argument is an array', function(){
    const sum = _sum([9, [3]])
    expect(sum).to.be.undefined
  })

  it('returns undefined when the argument is not an array', function(){
    const sum = _sum("[0, 1, 2]")
    expect(sum).to.be.undefined
  })

  it('returns undefined when the argument is an empty array', function(){
    const sum = _sum([])
    expect(sum).to.be.undefined
  })

})
