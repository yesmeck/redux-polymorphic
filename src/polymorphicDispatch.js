import key from './key'

export default function polymorphicDispatch(disptch, as) {
  return (action) => {
    if (typeof action === 'function') {
      action = (_, getState) => {
        action(polymorphicDispatch(dispatch, as), getState)
      }
    } else if (typeof action === 'object') {
      action[key] = as
    }
    return disptch(action)
  }
}
