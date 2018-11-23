import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { testAction, asyncPostToLogin } from '../../actions/index';
import t from 'tcomb-form-native';
import { Font } from 'expo';

const Form = t.form.Form;

const User = t.struct({
	username: t.String,
	password: t.String
});

//CREATES FORM MODEL USING tcomb

const options = {
	fields: {
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
	}
});

class Login extends Component {
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
	//React navigation provides header

	onPress = () => {
		let value = this.refs.form.getValue();

		if (value) {
			this.props.dispatch(asyncPostToLogin(value.username, value.password));
		}
	};

	render() {
		return (
			<>
				<View style={{ display: 'flex', justifyContent: 'center' }}>
					<View style={styles.spacer} />
					<Text style={styles.signUp}>Sign In</Text>
				</View>
				<View style={styles.container}>
					<Form ref="form" type={User} options={options} />
					<Button
						title="Sign in"
						onPress={e => {
							this.onPress();
							this.props.navigation.navigate('Home');
						}}
					/>
				</View>
			</>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		name: state.register.name
	};
}

export default connect(mapStateToProps)(Login);
