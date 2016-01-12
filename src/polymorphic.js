export defualt function polymorphic(reducer, ...names) {
  return names.reduce((acc, (name) => {
    (state, action) => {
      if (action.key !== name) {
        return state;
      }
      return reducer(state[name], action);
    }
  }), {})
}
