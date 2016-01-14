import key from './key'

export default function polymorphicDispatch(disptch, as) {
  const wrappedDispatch = (action) => {
    if (typeof action === 'function') {
      action = (_, getState) => action(wrappedDispatch, getState)
    } else if (typeof action === 'object') {
      action[key] = as
    }
    return disptch(action)
  }

  return wrappedDispatch;
}
