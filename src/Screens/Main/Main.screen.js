import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import VectorIcon from '@expo/vector-icons';

import ThreeDots from '../../Components/ThreeDots/ThreeDots.component';

const CategoryItem = ({ goToCategory, label, style, touchableStyle, iconType, name, size }) => {
	const Icon = VectorIcon[iconType];
	return (
		<View style={[styles.catContainer, style]} >
			<Text style={styles.catLabel}>{label}</Text>
			{ Icon
				 && <Touchable style={[styles.catMainItemContainer, touchableStyle]} onPress={goToCategory}>
					<Icon name={name} size={size}/>
				</Touchable>
			}
		</View>
	)
}

export default class Main extends Component {
	_goToTopList = () => {
		this.props.navigation.navigate('Top');
	}

	_renderHeader = () => {
		return (
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>VOX POPULI</Text>
				<ThreeDots/>
			</View>
		)
	}


	render() {
		return (
			<View style={styles.container}>
				{this._renderHeader()}
				<View style={styles.mainContainer}>
					<CategoryItem
						style={styles.cat1Container}
						label="TOP"
						iconType="MaterialCommunityIcons"
						name="dice-d10"
						size={90}
						goToCategory={this._goToTopList}/>
					<CategoryItem
						style={styles.cat2Container}
						label="Title 2"
						iconType="MaterialCommunityIcons"
						name="sword-cross"
						size={90}
					/>
					<CategoryItem
						style={styles.cat3Container}
						label="Title 3"
						iconType="MaterialCommunityIcons"
						name="calendar-multiple-check"
						size={90}
					/>
					<CategoryItem
						style={styles.cat4Container}
						label="Title 4"
						iconType="MaterialCommunityIcons"
						name="chart-line"
						size={90}
					/>
					<CategoryItem
						style={styles.cat5Container}
						label="Title 5"
						iconType="MaterialCommunityIcons"
						name="format-list-numbers"
						size={90}
						touchableStyle={styles.touchable5}
					/>
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
		marginHorizontal: 4,
		paddingVertical: 24,
		paddingHorizontal: 12
	},
	/////////////CategoryItem
	catContainer: {
		alignItems: 'center',
		paddingHorizontal: 8,
		paddingVertical: 12,
		width: '50%'
	},
	catMainItemContainer: {
		marginTop: 4,
		backgroundColor: 'yellow',
		height: 100,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	catLabel: {
		fontSize: 20,
		color: '#fff'
	},
	////////////////////////

	headerContainer: {
		marginBottom: 28,
	},
	headerText: {
		marginTop: 12,
		fontWeight: 'bold',
		fontSize: 50,
		textAlign: 'center',
	},
	cat1Container: {
		borderRightWidth: 8,
		borderBottomWidth: 8,
	},
	cat2Container: {
		borderLeftWidth: 8,
		borderBottomWidth: 8
	},
	cat3Container: {
		borderWidth: 8,

	},
	cat4Container: {
		borderWidth: 8,

	},
	cat5Container: {
		borderTopWidth: 8,
		width: '100%'
	},
	touchable5: {
		width: '50%'
	}
});