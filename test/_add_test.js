import { expect } from 'chai'
import _add from '../src/_add'

describe('_add()', function(){

  it('is a function', function(){
    expect(_add).to.be.a('function')
  })

  it('returns a number when the arguments are numbers', function(){
    const sum = _add(4, -7)
    expect(sum).to.be.a('number')
  })

  it('returns 5 when given 9 and -4', function(){
    const sum = _add(9, -4)
    expect(sum).to.be.equal(5)
  })

  it('returns undefined when either argument is a string', function(){
    const sum = _add(9, "something")
    expect(sum).to.be.undefined
  })

  it('returns undefined when either argument is an array', function(){
    const sum = _add(9, [3])
    expect(sum).to.be.undefined
  })

})
