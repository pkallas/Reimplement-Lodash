import { expect } from 'chai'
import stringLength from '../src/fn'

describe('stringLength()', function(){

  it('is a function', function(){
    expect(stringLength).to.be.a('function')
  })

  it('returns a number', function(){
    const theLength = stringLength("this is a string")
    expect(theLength).to.be.a('number')
  })

  it('returns 5 when given “hello”', function(){
    const theLength = stringLength("hello")
    expect(theLength).to.be.equal(5)
  })

  it('incorrect test: returns 5 when given “hello there”', function(){
    const theLength = stringLength("hello there")
    expect(theLength).to.be.equal(5)
  })

})
