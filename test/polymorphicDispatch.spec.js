import expect from 'expect';
import polymorphicDispatch from '../src/polymorphicDispatch'
import key from '../src/key';

const INCREMENT = 'INCREMENT'

const spyDispatch = expect.createSpy().andCall((action) => action)

const disptch = polymorphicDispatch(spyDispatch, 'tom')


describe('polymorphicDisptch', () => {
  it('create a polymorphic disptch', () => {
    const action = { type: INCREMENT }

    disptch(action)

    expect(
      spyDispatch.calls[0].arguments
    ).toEqual([
      { type: INCREMENT, [key]: 'tom' }
    ])
  })

  it('handle thunk action', () => {
    const thunkAction = () => {
      return (disptch) => {
        disptch({ type: INCREMENT })
      }
    }

    disptch(thunkAction)

    expect(
      spyDispatch.calls[0].arguments
    ).toEqual([
      { type: INCREMENT, [key]: 'tom' }
    ])
  })
})
