import key from './key'

export default function polymorphicDispatch(disptch, as) {
  return (action) => {
    if (typeof action === 'function') {
      action = (disptch, getState) => {
        action(polymorphicDispatch(disptch, as), getState)
      }
    } else if (typeof action === 'object') {
      action[key] = as
    }
    return disptch(action)
  }
}
