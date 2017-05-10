import { expect } from 'chai'
import _mean from '../../src/math/_mean'

describe('_mean()', function(){

  it('is a function', function(){
    expect(_mean).to.be.a('function')
  })

  it('returns a number when the argument is an array of numbers', function(){
    const mean = _mean([1, 8.3, -55])
    expect(mean).to.be.a('number')
  })

  it('returns -14.17 when given [3.49, -46, 0]', function(){
    const mean = _mean([3.49, -46, 0])
    expect(mean).to.be.equal(-14.17)
  })

  it('returns 0 when given [0]', function(){
    const mean = _mean([0])
    expect(mean).to.be.equal(0)
  })

  it('returns between -14.1667 and -14.1666 when given [3.5, -46, 0]', function(){
    const mean = _mean([3.5, -46, 0])
    expect(mean).to.be.within(-14.1667, -14.1666)
  })

  it(
    'returns undefined when any element of the argument is a string',
    function()
  {
    const mean = _mean([9, "something"])
    expect(mean).to.be.undefined
  })

  it('returns undefined when any element of the argument is an array', function(){
    const mean = _mean([9, [3]])
    expect(mean).to.be.undefined
  })

  it('returns undefined when the argument is not an array', function(){
    const mean = _mean("[0, 1, 2]")
    expect(mean).to.be.undefined
  })

  it('returns undefined when the argument is an empty array', function(){
    const mean = _mean([])
    expect(mean).to.be.undefined
  })

})
