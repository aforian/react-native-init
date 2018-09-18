import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import { styles, colors, dimensions } from '~/styles'


class SettingsContainer extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: "設定",
        headerTitleStyle: styles.colorMain,
        headerStyle: styles.bgWhite,
    });
    static propTypes = {

    }
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    render () {
        const { activeFooterTab } = this.props;
        return (
            <View style={styles.container}>
                <Text>
                    SettingsContainer
                </Text>
                <Text>
                    { activeFooterTab }
                </Text>
            </View>
        )
    }
}

const myStyles = StyleSheet.create({

});

function mapStateToProps({activeFooterTab}) {
    return {
        activeFooterTab,
    }
}

export default createStackNavigator({
    SettingsScreen: {
        screen: connect(mapStateToProps)(SettingsContainer),
    },
},{
    mode: 'modal',
    headerMode: 'screen',
    initialRouteName: 'SettingsScreen',
});