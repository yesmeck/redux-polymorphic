import expect from 'expect';
import { polymorphicReducer } from '../src'
import key from '../src/key';
import counter, { INCREMENT, DECREMENT, increment, decrement } from './helpers/counter'

describe('plainReducer', () => {
  it('create a polymorphic reducer', () => {
    const reducer = polymorphicReducer({
      apple: counter,
      orange: counter
    })
    const action = { type: INCREMENT, [key]: 'apple' }
    expect(reducer(undefined, action)).toEqual({ apple: 1, orange: 0 })
  })

  it('handle action without a key', () => {
     const reducer = polymorphicReducer({
      apple: counter,
      orange: counter
    })
    const action = { type: INCREMENT }
    expect(reducer(undefined, action)).toEqual({ apple: 1, orange: 1 })
  })
})
