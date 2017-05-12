import { expect } from 'chai'
import _last from '../../src/array/_last2'

describe('_last', function(){

  it('is a function', function(){
    expect(_last).to.be.a('function')
  })

  it('returns 2 when given [5,7,2]', function(){
    const element = _last([5,7,2])
    expect(element).to.be.equal(2)
  })

  it('returns "something" when given [5,7,2,"something"]', function(){
    const element = _last([5,7,2,"something"])
    expect(element).to.be.equal("something")
  })

  it('returns 5 when given [5]', function(){
    const element = _last([5])
    expect(element).to.be.equal(5)
  })

  it('returns undefined when given []', function(){
    const element = _last([])
    expect(element).to.be.undefined
  })

})
