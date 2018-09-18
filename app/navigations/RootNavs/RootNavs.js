import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { styles } from '~/styles';
import TabNavs from '../TabNavs/TabNavs';
import { LoadingScreen } from '~/screens';

const RootNavs = createStackNavigator({
    TabNavs: {
        screen: TabNavs,
        navigationOptions: {
            header: null,
        },
    },
    LoadingScreen: {
        screen: LoadingScreen,
    },
},{
    mode: 'modal',
    headerMode: 'screen',
    initialRouteName: 'TabNavs',
    navigationOptions: {
        // headerStyle: styles.navigationStyle,
    }
});

export default RootNavs;