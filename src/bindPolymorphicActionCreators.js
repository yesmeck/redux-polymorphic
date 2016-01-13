import polymorphicDisptch from './polymorphicDispatch'
import { bindActionCreators } from 'redux';

function bindPolymorphicActionCreators(actionCreators, dispatch, as) {
  const warappedDispatch = polymorphicDisptch(dispatch, as)
  return bindActionCreators(actionCreators, warappedDispatch)
}
