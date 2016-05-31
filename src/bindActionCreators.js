import polymorphicDisptch from './polymorphicDispatch'
import { bindActionCreators as origin } from 'redux';

export default function bindActionCreators(actionCreators, dispatch, as) {
  const warappedDispatch = polymorphicDisptch(dispatch, as)
  return origin(actionCreators, warappedDispatch)
}
