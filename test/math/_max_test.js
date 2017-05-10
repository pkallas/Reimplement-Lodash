import { expect } from 'chai'
import _max from '../../src/math/_max'

describe('_max()', function(){

  it('is a function', function(){
    expect(_max).to.be.a('function')
  })

  it('returns a number when the argument is an array of numbers', function(){
    const max = _max([1, 8.3, -55])
    expect(max).to.be.a('number')
  })

  it('returns 5.1 when given [3.02, -66, 0, 5.10]', function(){
    const max = _max([3.02, -66, 0, 5.10])
    expect(max).to.be.equal(5.1)
  })

  it(
    'returns undefined when any element of the argument is a string',
    function()
  {
    const max = _max([9, "something"])
    expect(max).to.be.undefined
  })

  it('returns undefined when any elebment of the argument is an array', function(){
    const max = _max([9, [3]])
    expect(max).to.be.undefined
  })

  it('returns undefined when the argument is not an array', function(){
    const max = _max("[0, 1, 2]")
    expect(max).to.be.undefined
  })

  it('returns undefined when the argument is an empty array', function(){
    const max = _max([])
    expect(max).to.be.undefined
  })

})
