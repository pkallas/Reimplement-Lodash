import { expect } from 'chai'
import _multiply from '../../src/math/_multiply'

describe('_multiply()', function(){

  it('is a function', function(){
    expect(_multiply).to.be.a('function')
  })

  it('returns a number when the arguments are numbers', function(){
    const product = _multiply(4, -7)
    expect(product).to.be.a('number')
  })

  it('returns -36 when given 9 and -4', function(){
    const product = _multiply(9, -4)
    expect(product).to.be.equal(-36)
  })

  it('returns -3.6 when given 0.9 and -4', function(){
    const product = _multiply(0.9, -4)
    expect(product).to.be.equal(-3.6)
  })

  it('returns undefined when either argument is a string', function(){
    const product = _multiply(9, "something")
    expect(product).to.be.undefined
  })

  it('returns undefined when either argument is an array', function(){
    const product = _multiply(9, [3])
    expect(product).to.be.undefined
  })

  it('returns undefined when the count of arguments is 1', function(){
    const product = _multiply(9)
    expect(product).to.be.undefined
  })

  it('returns undefined when the count of arguments is 3', function(){
    const product = _multiply(9, 4, 99)
    expect(product).to.be.undefined
  })

})
