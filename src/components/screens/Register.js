import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
	testAction,
	asyncPostToRegister,
	changeName
} from '../../actions/index';
import t from 'tcomb-form-native';
import { Font } from 'expo';

const Form = t.form.Form;

const User = t.struct({
	name: t.String,
	email: t.String,
	username: t.String,
	password: t.String
});

//CREATES FORM MODEL USING tcombo

const options = {
	fields: {
		email: {
			error:
				'Without an email address how are you going to reset your password when you forget it?'
		},
		username: {
			error: 'xxDestroyerxx is a very fitting name for this spot!'
		},
		password: {
			error:
				"Choose something you use on a dozen other sites or something you won't remember"
		}
	},
	stylesheet: formStyles
};

//PASSES OPTIONS TO FORM COMPONENT WITH FIELD ERRORS AND STYLE SHEETS

//t.form styles go into this object
const formStyles = {
	...Form.stylesheet,
	controlLabel: {
		normal: {
			color: 'blue',
			fontSize: 18,
			marginBottom: 7,
			fontWeight: '600'
		},
		error: {
			color: 'red',
			fontSize: 18,
			marginBottom: 7,
			fontWeight: '600'
		}
	}
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		marginTop: 40,
		marginLeft: 10 + '%',
		marginRight: 10 + '%',
		width: 80 + '%'
	},
	spacer: {
		height: 30
	},
	signUp: {
		fontSize: 30,
		textAlign: 'center'
	},
	haveAccount: {
		textAlign: 'center',
		marginTop: 40
	}
});

class Register extends Component {
	constructor() {
		super();

		this.onPress = this.onPress.bind(this);
	}

	static navigationOptions = {
		title: 'Marvelist',
		headerStyle: {
			backgroundColor: '#3E0000'
		},
		headerTitleStyle: {
			alignSelf: 'center',
			textAlign: 'center',
			width: '100%',
			color: '#DAA520',
			marginLeft: -2.5
		}
	};

	//React native navigation options for header ^

	componentDidMount() {
		if (this.props.authToken) {
			console.log('hello');
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.authToken !== prevProps.authToken) {
			this.props.navigation.navigate('login');
		}
	}

	onPress() {
		let value = this.refs.form.getValue();

		if (value) {
			this.props.dispatch(changeName('added'));
			this.props.dispatch(
				asyncPostToRegister(
					value.name,
					value.username,
					value.password,
					value.email
				)
			);
		}
	}

	render() {
		return (
			<>
				<View style={{ display: 'flex', justifyContent: 'center' }}>
					<View style={styles.spacer} />
					<Text style={styles.signUp}>Sign Up</Text>
				</View>
				<View style={styles.container}>
					<Form ref="form" type={User} options={options} />
					<Button
						title="Sign Up"
						onPress={() => {
							return this.onPress();
						}}
					/>
				</View>
				<View>
					<Text
						style={styles.haveAccount}
						onPress={e => this.props.navigation.navigate('Login')}
					>
						Already Have An Account?
					</Text>
				</View>
			</>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		name: state.register.name,
		authToken: state.login.authToken
	};
}

export default connect(mapStateToProps)(Register);
