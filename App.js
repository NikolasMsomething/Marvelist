import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Test from './src/components/screens/Test.js';
import TestTwo from './src/components/screens/TestTwo.js';

export default class App extends React.Component {
	render() {
		return <Main />;
	}
}

const MainNavigator = createStackNavigator({
	TestPage: Test,
	Test2Page: TestTwo
});

const Main = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
