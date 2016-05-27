import Immutable from 'immutable'

export const ADD = 'ADD'
export const COMPLETE = 'COMPLETE'

const initialState = Immutable.fromJS([])

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD:
      const todo = Immutable.fromJS({ title: action.payload, complete: false })
      return state.push(todo)
    case COMPLETE:
      return state.get(action.payload).set('complete', true)
    default:
      return state
  }
}

export function add(title) {
  return {
    type: ADD,
    payload: title,
  }
}

export function complete(id) {
  return {
    type: COMPLETE,
    payload: id,
  }
}
