import { Object } from 'tcomb';
import { SAVE_AUTH } from '../actions/index';
const initialState = {
	authToken: 'undefined',
	name: 'nick'
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_AUTH: {
			return Object.assign({}, state, {
				authToken: action.value
			});
		}
		case 'CHANGE_NICK': {
			return Object.assign({}, state, {
				name: state.name + action.value
			});
		}
		default:
			return state;
	}
};
