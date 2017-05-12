import { expect } from 'chai'
import _nth from '../../src/array/_nth2'

describe('_nth', function(){

  it('is a function', function(){
    expect(_nth).to.be.a('function')
  })

  it('returns 2 when given [5,7,2], -1', function(){
    const element = _nth([5,7,2], -1)
    expect(element).to.be.equal(2)
  })

  it('returns 7 when given [5,7,2], 1', function(){
    const element = _nth([5,7,2], 1)
    expect(element).to.be.equal(7)
  })

  it('returns [7, "seven"] when given [5,[7, "seven"],2], 1', function(){
    const element = _nth([5,[7, "seven"],2], 1)
    expect(element).to.be.deep.equal([7, "seven"])
  })

  it('returns "yes" when given ["yes","no","maybe"]', function(){
    const element = _nth(["yes","no","maybe"])
    expect(element).to.be.equal("yes")
  })

  it('returns undefined when given ["yes","no","maybe"], 3', function(){
    const element = _nth(["yes","no","maybe"], 3)
    expect(element).to.be.undefined
  })

  it('returns undefined when given ["yes","no","maybe"], -4', function(){
    const element = _nth(["yes","no","maybe"], -4)
    expect(element).to.be.undefined
  })

})
