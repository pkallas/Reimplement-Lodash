import { expect } from 'chai'
import _round from '../../src/math/_round'

describe('_round()', function(){

  it('is a function', function(){
    expect(_round).to.be.a('function')
  })

  it('returns a number when the arguments are numbers', function(){
    const rounded = _round(100, 0)
    expect(rounded).to.be.a('number')
  })

  it('returns 5 when given 4.6 and 0', function(){
    const rounded = _round(4.6, 0)
    expect(rounded).to.be.equal(5)
  })

  it('returns 5 when given 5.3', function(){
    const rounded = _round(5.3)
    expect(rounded).to.be.equal(5)
  })

  it('returns 55 when given 54.5', function(){
    const rounded = _round(54.5)
    expect(rounded).to.be.equal(55)
  })

  it('returns 4.6 when given 4.6 and 1', function(){
    const rounded = _round(4.6, 1)
    expect(rounded).to.be.equal(4.6)
  })

  it('returns -4.6 when given -4.6 and 1', function(){
    const rounded = _round(-4.6, 1)
    expect(rounded).to.be.equal(-4.6)
  })

  it('returns 4.6 when given 4.60 and 1', function(){
    const rounded = _round(4.60, 1)
    expect(rounded).to.be.equal(4.6)
  })

  it('returns 4.5 when given 4.51 and 1', function(){
    const rounded = _round(4.51, 1)
    expect(rounded).to.be.equal(4.5)
  })

  it('returns 4.5193 when given 4.51934 and 4', function(){
    const rounded = _round(4.51934, 4)
    expect(rounded).to.be.equal(4.5193)
  })

  it('returns -4.5193 when given -4.51934 and 4', function(){
    const rounded = _round(-4.51934, 4)
    expect(rounded).to.be.equal(-4.5193)
  })

  it('returns -4.5194 when given -4.51936 and 4', function(){
    const rounded = _round(-4.51936, 4)
    expect(rounded).to.be.equal(-4.5194)
  })

  it('returns 0 when given -4.51934 and -4', function(){
    const rounded = _round(-4.51934, -4)
    expect(rounded).to.be.equal(0)
  })

  it('returns -50000 when given -45193.4 and -4', function(){
    const rounded = _round(-45193.4, -4)
    expect(rounded).to.be.equal(-50000)
  })

  it('returns 50000 when given 45193.4 and -4', function(){
    const rounded = _round(45193.4, -4)
    expect(rounded).to.be.equal(50000)
  })

  it('returns undefined when given 5.123 and 1.5', function(){
    const rounded = _round(5.123, 1.5)
    expect(rounded).to.be.undefined
  })

  it('returns undefined when either argument is a string', function(){
    const sum = _round(9, "something")
    expect(sum).to.be.undefined
  })

  it('returns undefined when either argument is an array', function(){
    const sum = _round(9, [3])
    expect(sum).to.be.undefined
  })

  it('returns undefined when the count of arguments is 3', function(){
    const sum = _round(9, 4, 99)
    expect(sum).to.be.undefined
  })

})
