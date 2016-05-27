import Immutable from 'immutable'
import key from './key'
import mapValues from './mapValues';

export default function polymorphicReducer(reducers) {
  const reducersMap = new Immutable.Map(reducers)
  const initialState = reducersMap.map(reducer => reducer(undefined, {}))

  return (state = initialState, action) => {
    if (action) {
      const reducerKey = action[key];
      const reducer = reducers[reducerKey];
      if (reducer) {
        return state.set(reducerKey, reducer(state[reducerKey], action))
      } else {
        return reducersMap.map((reducer, key) => reducer(state.get(key), action))
      }
    }
    return state
  }
}
