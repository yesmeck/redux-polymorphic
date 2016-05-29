import expect from 'expect';
import { polymorphicDispatch } from '../src'
import key from '../src/key';
import { INCREMENT, increment } from './helpers/counter'

const spyDispatch = expect.createSpy().andCall((action) => action)

const disptch = polymorphicDispatch(spyDispatch, 'apple')

describe('polymorphicDisptch', () => {
  it('create a polymorphic disptch', () => {
    disptch(increment())

    expect(
      spyDispatch.calls[0].arguments
    ).toEqual([
      { type: INCREMENT, meta: { [key]: 'apple' } }
    ])
  })

  it('handle thunk action', () => {
    const thunkAction = () => {
      return (disptch) => {
        disptch(increment)
      }
    }

    disptch(thunkAction)

    expect(
      spyDispatch.calls[0].arguments
    ).toEqual([
      { type: INCREMENT, meta: { [key]: 'apple' } }
    ])
  })
})
