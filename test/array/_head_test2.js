import { expect } from 'chai'
import _head from '../../src/array/_head2'

describe('_head', function(){

  it('is a function', function(){
    expect(_head).to.be.a('function')
  })

  it('returns 5 when given [5,7,2]', function(){
    const element = _head([5,7,2])
    expect(element).to.be.equal(5)
  })

  it('returns "mystring" when given ["mystring", "is not", 42]', function(){
    const element = _head(["mystring", "is not", 42])
    expect(element).to.be.equal("mystring")
  })

  it('returns [] when given [[], "mystring", "is not", 42]', function(){
    const element = _head([[], "mystring", "is not", 42])
    expect(element).to.be.deep.equal([])
  })

  it('returns undefined when given []', function(){
    const element = _head([])
    expect(element).to.be.undefined
  })

})
