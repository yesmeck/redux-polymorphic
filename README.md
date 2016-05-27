# Redux Polymorphic

Another attempt to reuse your reduers, inspired from [multireducer](https://github.com/erikras/multireducer)

## Installation

```
npm i --save redux-polymorphic
```

## How It Works

**STEP 1:**

```javascript
import { polymorphicReducer } from 'redux-polymorphic'
// In case you are using Immutable.js, you can:
// import { polymorphicReducer } from 'redux-polymorphic/immutable'
import list from './reduers/list'

const reducer = combineReducers({
  list: polymorphicReducer({
    proposed: list,
    scheduled: list,
    active: list,
    complete: list
  })
})
```

**STEP 2:**
```javascript
import React, { Component, PropTypes } from 'react'
import { bindPolymorphicActionCreators } from 'redux-polymorphic'
import { connect } from 'react-redux'
import { add, remove } from './actions/list'

class TodoListComponent extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired
  }

  render() {
    const { add, list, remove } = this.props
    return (
      <div>
        <button onClick={() => add('New Item')}>Add</button>
        <ul>
          {list.map((item, index) =>
            <li key={index}>
              {item}
              (<button onClick={() => remove(item)}>X</button>)
            </li>)}
        </ul>
      </div>
    )
  }
}

ListComponent = connect(
  (state, { as }) => ({
    list: state.list[as]
  }),
  (dispatch, { as }) => ({
    ...bindPolymorphicActionCreators({ add, remove }, dispatch, as)
  })
)(ListComponent)

export default ListComponent
```

**STEP 3:**

```javascript
render() {
  return (
    <div>
      <h1>Lists</h1>
      <ListComponent as="proposed"/>
      <ListComponent as="scheduled"/>
      <ListComponent as="active"/>
      <ListComponent as="complete"/>
    </div>
  )
}
```

### Manually dispatch

```javascript
import { polymorphicDispatch } from 'redux-polymorphic'
import { add, remove } from './actions/list'

polymorphicDispatch(dispatch, 'tom')(add)
```
