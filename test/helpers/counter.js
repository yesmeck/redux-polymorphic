export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const initialState = 0

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export function increment() {
  return { type: INCREMENT }
}

export function decrement() {
  return { type: DECREMENT }
}
