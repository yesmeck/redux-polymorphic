import expect from 'expect';
import { polymorphicReducer } from '../src'
import key from '../src/key';

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initialState = 0;

const mockReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

describe('polymorphicReducer', () => {
  it('create a polymorphic reducer', () => {
    const reducer = polymorphicReducer({
      tom: mockReducer,
      jerry: mockReducer
    })
    const action = { type: INCREMENT, [key]: 'tom' }
    expect(reducer(undefined, action)).toEqual({ tom: 1, jerry: 0 })
  })

  it('handle action without a key', () => {
     const reducer = polymorphicReducer({
      tom: mockReducer,
      jerry: mockReducer
    })
    const action = { type: INCREMENT }
    expect(reducer(undefined, action)).toEqual({ tom: 1, jerry: 1 })
  })
})
