import { TEST } from '../actions/index';

const initialState = {
	name: 'Nikolas'
};

export const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case TEST: {
			return Object.assign({}, state, {
				name: action.value
			});
		}
		default:
			return state;
	}
};
