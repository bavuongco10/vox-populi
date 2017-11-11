import { StackNavigator } from 'react-navigation';

import Main from '../Screens/Main/Main.screen';
import Top from '../Screens/Top/Top.screen';

const RootNavigator = StackNavigator({
	Main: { screen: Main, navigationOptions: { header: null } },
	Top: { screen: Top, navigationOptions: { header: null } },
});

export default RootNavigator;