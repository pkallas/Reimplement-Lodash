import { expect } from 'chai'
import _subtract from '../../src/math/_subtract'

describe('_subtract()', function(){

  it('is a function', function(){
    expect(_subtract).to.be.a('function')
  })

  it('returns a number when the arguments are numbers', function(){
    const difference = _subtract(4, -7)
    expect(difference).to.be.a('number')
  })

  it('returns 13 when given 9 and -4', function(){
    const difference = _subtract(9, -4)
    expect(difference).to.be.equal(13)
  })

  it('returns 4.9 when given 0.9 and -4', function(){
    const difference = _subtract(0.9, -4)
    expect(difference).to.be.equal(4.9)
  })

  it('returns 4.7 when given 4.7 and 0', function(){
    const difference = _subtract(4.7, 0)
    expect(difference).to.be.equal(4.7)
  })

  it('returns undefined when either argument is a string', function(){
    const difference = _subtract(9, "something")
    expect(difference).to.be.undefined
  })

  it('returns undefined when either argument is an array', function(){
    const difference = _subtract(9, [3])
    expect(difference).to.be.undefined
  })

  it('returns undefined when the count of arguments is 1', function(){
    const difference = _subtract(9)
    expect(difference).to.be.undefined
  })

  it('returns undefined when the count of arguments is 3', function(){
    const difference = _subtract(9, 4, 99)
    expect(difference).to.be.undefined
  })

})
