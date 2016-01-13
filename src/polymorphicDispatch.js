import key from './key'

export default function polymorphicDisptch(disptch, as) {
  return (action) => {
    if (typeof action === 'function') {
      action = (_, getState) => {
        action(polymorphicDisptch(dispatch, as), getState)
      }
    } else if (typeof action === 'object') {
      action[key] = as
    }
    return disptch(action)
  }
}
