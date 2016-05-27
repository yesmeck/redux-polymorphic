import expect from 'expect';
import { polymorphicReducer } from '../src/immutable'
import key from '../src/key';
import todo, { ADD, COMPLETE, add, complete } from './helpers/todo'

describe('immutableReducer', () => {
  it('create a polymorphic reducer', () => {
    const reducer = polymorphicReducer({
      meck: todo,
      ava: todo
    })
    const action = {
      type: ADD,
      [key]: 'meck',
      payload: 'Buy milk'
    }

    expect(reducer(undefined, action).toJS()).toEqual({
      meck: [ { title: 'Buy milk', complete: false } ],
      ava: [],
    })
  })

  it('handle action without a key', () => {
     const reducer = polymorphicReducer({
      meck: todo,
      ava: todo
    })
    const action = {
      type: ADD,
      payload: 'Buy milk'
    }

    expect(reducer(undefined, action).toJS()).toEqual({
      meck: [ { title: 'Buy milk', complete: false } ],
      ava: [ { title: 'Buy milk', complete: false } ],
    })
  })
})
