import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import shortid from 'shortid';
import { Entypo } from '@expo/vector-icons';

const ThreeDots = () => {
	return (
		<Touchable style={{ position: 'absolute', top: 0, right: 0}}>
			<Entypo name="dots-three-vertical" size={32}/>
		</Touchable>
	)
}

export default class Top extends Component {
	state = {
		data: [
			{text: 'TOP 10 V1'},
			{text: 'TOP 10 V2'},
			{text: 'TOP 10 V3'},
			{text: 'TOP 10 V4'},
			{text: 'TOP 10 V5'},
			{text: 'TOP 10 V6'},
			{text: 'TOP 10 V7'},
			{text: 'TOP 10 V8'},
			{text: 'TOP 10 V9'},
			{text: 'TOP 10 V10'},
		]
	}

	_addToList = () => {
		this.setState(
			({ data }) => ({ data: data.concat({ text: `TOP 10 V${shortid.generate()}`}) }),
			this.flatList.scrollToEnd()
			);
	}

	_renderHeader = () => {
		return (
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>VOX POPULI</Text>
				<Text style={styles.headerText}>TOP 10</Text>
				<ThreeDots/>
			</View>
		)
	}

	_renderFooter = () => {
		return (
			<View style={styles.footerContainer}>
				<Touchable
					style={styles.plusContainer}
					onPress={this._addToList} >
					<Text style={styles.plusText}>+</Text>
				</Touchable>
				<Text style={styles.addText}>Add to list</Text>
			</View>
		)
	}

	_renderItem = ({item: { text }, index}) => {
		return (
			<View style={styles.itemContainer}>
				<Text style={styles.itemText}>{`${index + 1}. ${text}`}</Text>
			</View>
		)
	}

	_keyExtractor = (item, index) => index;

	_getRef = ref => this.flatList = ref;

	render() {
		return (
			<View style={styles.container}>
				{this._renderHeader()}
				<FlatList
					ref={this._getRef}
					data={this.state.data}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor}
					showsHorizontalScrollIndicator={false}
				/>
				{this._renderFooter()}
			</View>
		)
	}
}

const styles  = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#c2e6f9',
		paddingHorizontal: 20
	},
	itemContainer: {
		borderBottomWidth: 4,
		paddingBottom: 4,
		marginBottom: 12
	},
	itemText: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	footerContainer: {
		borderWidth: 4,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingVertical: 4,
		paddingHorizontal: 16
	},
	plusContainer: {
		backgroundColor: '#d3d3d3',
		borderWidth: 2,
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	plusText: {
		fontSize: 30,
		fontWeight: 'bold',
	},
	addText: {
		marginLeft: 4,
		fontSize: 24,
		fontWeight: 'bold'
	},
	headerContainer: {
		marginBottom: 28
	},
	headerText: {
		fontWeight: 'bold',
		fontSize: 36,
		textAlign: 'center',
	}
});