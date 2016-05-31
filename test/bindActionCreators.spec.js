import expect from 'expect'
import { bindActionCreators } from '../src'
import key from '../src/key';
import { increment, decrement } from './helpers/counter'

const spyDispatch = expect.createSpy().andCall((action) => action)

describe('bindActionCreators',  () => {
  it('wraps the action creators with the polymorphic disptch function', () => {
    const boundActionCreators = bindActionCreators({ increment, decrement }, spyDispatch, 'apple')

    expect(Object.keys(boundActionCreators)).toEqual(['increment', 'decrement'])

    const action = increment()

    expect(boundActionCreators.increment()).toEqual({...action, meta: { [key]: 'apple'} })
  })
})
