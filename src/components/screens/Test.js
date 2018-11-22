import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Test extends Component {
	static navigationOptions = {
		title: 'Home'
	};

	render() {
		return (
			<View>
				<Text> textInComponent </Text>
				<Button
					title="Press"
					onPress={e => this.props.navigation.navigate('Register')}
				/>
			</View>
		);
	}
}
