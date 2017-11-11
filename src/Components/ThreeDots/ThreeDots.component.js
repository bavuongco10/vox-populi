import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { Entypo } from '@expo/vector-icons';

const ThreeDots = () => {
	return (
		<Touchable style={{ position: 'absolute', top: 8, right: 0}}>
			<Entypo name="dots-three-vertical" size={32}/>
		</Touchable>
	)
}

export default ThreeDots;