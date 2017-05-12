import { expect } from 'chai'
import _initial from '../../src/array/_initial2'

describe('_initial', function(){

  it('is a function', function(){
    expect(_initial).to.be.a('function')
  })

  it('returns an array', function(){
    const element = _initial([5,7,2])
    expect(element).to.be.a('array')
  })

  it('returns [5,7] when given [5,7,2]', function(){
    const element = _initial([5,7,2])
    expect(element).to.be.deep.equal([5,7])
  })

  it('returns [] when given [5]', function(){
    const element = _initial([5])
    expect(element).to.be.deep.equal([])
  })

  it('returns [] when given []', function(){
    const element = _initial([])
    expect(element).to.be.deep.equal([])
  })

})
