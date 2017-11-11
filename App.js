import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import RootNavigation from './src/Navigations/RootNavigation.navigation';

export default class App extends Component {
  render() {
    return (
    	<View style={styles.container}>
				<View style={styles.statusBar}/>
				<RootNavigation/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: { flex: 1},
	statusBar: {
		backgroundColor: "#90d1f3",
		height: Constants.statusBarHeight,
	},
});