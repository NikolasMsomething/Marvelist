import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Test from './src/components/screens/Test.js';
import TestTwo from './src/components/screens/TestTwo.js';
import Register from './src/components/screens/Register.js';
import Login from './src/components/screens/Login';
import { Provider } from 'react-redux';
import store from './src/store';

export default class App extends React.Component {
	componentDidMount() {}

	render() {
		return (
			<Provider store={store}>
				<Main />
			</Provider>
		);
	}
}

//CreateStack Navigation for effective screen switching

const MainNavigator = createStackNavigator({
	Register: Register,
	Login: Login,
	TestPage: Test,
	Test2Page: TestTwo
});

//Creates Main component with navigators

const Main = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
