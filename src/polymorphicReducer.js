import key from './key'

export default function polymorphicReducer(reducer, ...names) {
  const initialState = names.reduce((acc, name) => ({
    ...acc,
    [name]: reducer(undefined, {})
  }), {})

  return (state = initialState, action) => {
    if (action) {
      const name = action[key];
      if (name) {
        return {
          ...state,
          [name]: reducer(state[name], action)
        }
      }
    }
    return state;
  }
}
