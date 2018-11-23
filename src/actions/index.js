import { API_BASE_URL } from '../../config';
import { normalizeResponseErrors } from './utils';

export const TEST = 'TEST';
export const testAction = value => {
	return {
		type: TEST,
		value
	};
};

export const asyncPostToRegister = (
	name,
	username,
	password,
	email
) => dispatch => {
	return fetch(`${API_BASE_URL}/api/users`, {
		method: 'POST', // or 'PUT',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: name,
			email: email,
			username: username,
			password: password
		}) // body data type must match "Content-Type" header
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => {
			return res.json();
		})

		.then(res => {
			return dispatch(asyncPostToLogin(username, password));
		})

		.catch(error => {
			let err = error.message || error.error.details[0].message;

			alert(err);
		});
};

export const asyncPostToLogin = (username, password) => dispatch => {
	return fetch(`${API_BASE_URL}/api/login`, {
		method: 'POST', // or 'PUT',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: username,
			password: password
		}) // body data type must match "Content-Type" header
	})
		.then(res => {
			return res.json();
		})
		.then(res => {
			let authToken = res.jwtToken;
			dispatch(saveAuthToStore(authToken));
		})
		.catch(err => {
			console.log(err);
		});
};

export const asyncGetFromMarvel = name => async dispatch => {
	try {
		let response = await fetch(`${API_BASE_URL}/api/marvel?character=${name}`, {
			method: 'GET',
			mode: 'cors'
		});
		let jsoned = await response.json();
		console.log(jsoned);
	} catch (error) {
		console.log(error);
	}
};

export const changeName = value => {
	return {
		type: 'CHANGE_NICK',
		value
	};
};

export const SAVE_AUTH = 'SAVE_AUTH';
export const saveAuthToStore = value => {
	return {
		type: SAVE_AUTH,
		value
	};
};

export const getMarvelApi = value => async dispatch => {
	let response = await fetch();
};
