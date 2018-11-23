import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { asyncGetFromMarvel } from '../../actions/index';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			characterName: ''
		};
	}
	static navigationOptions = {
		title: 'Home'
	};

	onPressMarvel = name => {
		this.props.dispatch(asyncGetFromMarvel(name));
	};

	render() {
		let characterName = this.state.characterName;
		return (
			<View>
				<Text> textInComponent </Text>
				<TextInput
					ref={this.textInput}
					onChangeText={text => this.setState({ characterName: text })}
					style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				/>
				<Button
					title="Search"
					onPress={() => {
						this.onPressMarvel(characterName);
					}}
				/>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		authToken: state.login.authToken
	};
}

export default connect(mapStateToProps)(Home);
