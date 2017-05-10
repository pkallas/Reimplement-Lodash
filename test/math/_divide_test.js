import { expect } from 'chai'
import _divide from '../../src/math/_divide'

describe('_divide()', function(){

  it('is a function', function(){
    expect(_divide).to.be.a('function')
  })

  it('returns a number when the arguments are numbers', function(){
    const quotient = _divide(4, -7)
    expect(quotient).to.be.a('number')
  })

  it('returns 5 when given 10 and 2', function(){
    const quotient = _divide(10, 2)
    expect(quotient).to.be.equal(5)
  })

  it('returns -5 when given -10 and 2', function(){
    const quotient = _divide(-10, 2)
    expect(quotient).to.be.equal(-5)
  })

  it('returns -2.5 when given -5 and 2', function(){
    const quotient = _divide(-5, 2)
    expect(quotient).to.be.equal(-2.5)
  })

  it('returns 20 when given 50 and 2.5', function(){
    const quotient = _divide(50, 2.5)
    expect(quotient).to.be.equal(20)
  })

  it('returns undefined when either argument is a string', function(){
    const quotient = _divide(9, "something")
    expect(quotient).to.be.undefined
  })

  it('returns undefined when either argument is an array', function(){
    const quotient = _divide(9, [3])
    expect(quotient).to.be.undefined
  })

})
