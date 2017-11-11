import React, {Component} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const CategoryItem = () => {
	return (
		<View style={styles.catContainer}>

		</View>
	)
}

export default class Main extends Component {
	_goToTopList = () => {
		this.props.navigation.navigate('Top');
	}


	render() {
		return (
			<View style={styles.container}>
				<View style={styles.mainContainer}>
					<CategoryItem/>
					<CategoryItem/>
					<CategoryItem/>
					<CategoryItem/>
					<CategoryItem/>
				</View>
			</View>
		)
	}
}

const styles  = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#c2e6f9'
	},
	mainContainer: {
		flex: 1,
		backgroundColor: '#a8dcf6',
		borderColor: '#000',
		borderWidth: 1,
		borderRadius: 8,
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginBottom: 8,
		marginHorizontal: 4
	},
	/////////////CategoryItem
	catContainer: {
		backgroundColor: 'yellow',
		height: 100,
		width: '50%',
		borderWidth: 1
	}
	////////////////////////
});