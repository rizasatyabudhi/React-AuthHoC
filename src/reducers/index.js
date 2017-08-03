import { combineReducers } from 'redux';
import authenticationReducer from './autehntication';

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
});

export default rootReducer;
