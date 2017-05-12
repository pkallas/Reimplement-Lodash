import { expect } from 'chai'
import _dropRight from '../../src/array/_dropRight2'

describe('_dropRight', function(){

  it('is a function', function(){
    expect(_dropRight).to.be.a('function')
  })

  it('returns an array', function(){
    const droppedArray = _dropRight([5,7,2])
    expect(droppedArray).to.be.a('array')
  })

  it('returns [5] when given [5,7,2], 2', function(){
    const droppedArray = _dropRight([5,7,2], 2)
    expect(droppedArray).to.be.deep.equal([5])
  })

  it('returns [5, 7] when given [5,7,2]', function(){
    const droppedArray = _dropRight([5,7,2])
    expect(droppedArray).to.be.deep.equal([5, 7])
  })

  it('returns [5, 7] when given [5,7,2], 1', function(){
    const droppedArray = _dropRight([5,7,2], 1)
    expect(droppedArray).to.be.deep.equal([5, 7])
  })

  it('returns [5, "hello"] when given [5,"hello",2]', function(){
    const droppedArray = _dropRight([5,"hello",2])
    expect(droppedArray).to.be.deep.equal([5, "hello"])
  })

  it(
    'returns [5, ["hello", "there"]] when given [5,["hello", "there"],2]', function(){
      const droppedArray = _dropRight([5,["hello", "there"],2])
      expect(droppedArray).to.be.deep.equal([5, ["hello", "there"]])
    }
  )

  it('returns [] when given [5,7,2], 17', function(){
    const droppedArray = _dropRight([5,7,2], 17)
    expect(droppedArray).to.be.deep.equal([])
  })

})
