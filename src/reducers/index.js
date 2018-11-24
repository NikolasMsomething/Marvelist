import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';
import { characterReducer } from './characterReducer';

//COMBINES REDUCERS
const rootReducer = combineReducers({
	login: loginReducer,
	register: registerReducer,
	character: characterReducer
});

export default rootReducer;
