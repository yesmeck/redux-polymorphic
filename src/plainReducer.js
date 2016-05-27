import key from './key'
import mapValues from './mapValues';

export default function polymorphicReducer(reducers) {
  const initialState = mapValues(reducers, reducer => reducer(undefined, {}))

  return (state = initialState, action) => {
    if (action) {
      const reducerKey = action[key];
      const reducer = reducers[reducerKey];
      if (reducer) {
        return {
          ...state,
          [reducerKey]: reducer(state[reducerKey], action)
        }
      } else {
        return mapValues(reducers, (reducer, key) => reducer(state[key], action))
      }
    }
    return state;
  }
}
