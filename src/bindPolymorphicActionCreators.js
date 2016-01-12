function bindPolymorphicActionCreators(actionCreators, dispatch, as) {
  const polymorphicDisptch = (originalDispatch) => {
    return (action) => ({ ...action, key: as })
  }

  return mapValues(actionCreators, (actionCreator) => {
    return (..args) => {
      let action = actionCreator(..args)

      if (typeof action === 'function') {
        action = (disptch, getState) => {
          action(polymorphicDisptch(dispatch), getState)
        }
      }
      polymorphicDisptch(dispatch)(action)
    }
  })
}
