import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles, colors } from '~/styles';

// import { HomeContainer, SettingsContainer } from '~/containers';

import HomeContainer from '~/containers/HomeContainer/HomeContainer'
import SettingsContainer from '~/containers/SettingsContainer/SettingsContainer'


const TabNavs = createBottomTabNavigator({
    Home: {
        screen: HomeContainer,
        navigationOptions: {
            tabBarLabel: "探索節目",
            tabBarIcon: (({tintColor}) => (
                <Icon name="md-compass" size={20} color={tintColor} style={styles.tabBarIcon}/>
            )),
        }
    },
    SettingsContainer: {
        screen: SettingsContainer,
        navigationOptions: {
            tabBarLabel: '帳戶資訊',
            tabBarIcon: (({tintColor}) => (
                <Icon name="md-person" size={24} color={tintColor} style={styles.tabBarIcon}/>
            )),
        }
    },
},{
    initialRouteName: 'Home',
    headerMode: 'screen',
    tabBarOptions: {
        activeTintColor: colors.main,
    }
});

export default TabNavs;