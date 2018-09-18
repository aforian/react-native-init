import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import { styles, colors, dimensions } from '~/styles'

class HomeContainer extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: "探索",
        headerTitleStyle: styles.colorMain,
        headerStyle: styles.bgWhite,
        headerBackTitle: null,
        headerLeft: null,
        headerRight:
            <TouchableOpacity onPress={() => navigation.navigate('LoadingScreen')}>
                <Icon
                    name="md-funnel"
                    size={30}
                    color={colors.main}
                    style={styles.headerRightIcon, styles.headerRight}/>
            </TouchableOpacity>,
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
                    HomeContainer
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
    HomeScreen: {
        screen: connect(mapStateToProps)(HomeContainer),
    },
},{
    mode: 'modal',
    headerMode: 'screen',
    initialRouteName: 'HomeScreen',
});