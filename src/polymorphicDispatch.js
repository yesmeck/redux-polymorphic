import key from './key'

export default function polymorphicDispatch(dispatch, as) {
  const wrappedDispatch = (action) => {
    let wrappedAction
    if (typeof action === 'function') {
      wrappedAction = (_, getState) => action(wrappedDispatch, getState)
    } else if (typeof action === 'object') {
      wrappedAction = { ...action, [key]: as }
    }
    return dispatch(wrappedAction)
  }

  return wrappedDispatch;
}
