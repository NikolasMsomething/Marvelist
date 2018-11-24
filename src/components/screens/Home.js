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
				<View
					style={{
						width: 80 + '%',
						height: 100 + '%',
						flexDirection: 'column',
						marginLeft: 10 + '%',
						marginRight: 10 + '%'
					}}
				>
					<Text style={{ fontSize: 30 }}> Search For a Character </Text>
					<TextInput
						ref={this.textInput}
						onChangeText={text => this.setState({ characterName: text })}
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1
						}}
					/>
					<Button
						title="Search"
						onPress={() => {
							this.onPressMarvel(characterName);
						}}
					/>
				</View>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		authToken: state.login.authToken,
		characters: state.character.characters
	};
}

export default connect(mapStateToProps)(Home);
