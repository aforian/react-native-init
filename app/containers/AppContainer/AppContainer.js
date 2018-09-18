import React from 'react'
import PropTypes from 'prop-types'
import { View,
    Text,
    StyleSheet,
    StatusBar,
    Platform,
    TouchableOpacity,
    AsyncStorage,
    Alert } from 'react-native';
import { connect } from 'react-redux'

import { RootNavs, TabNavs } from '~/navigations'
import { colors, dimensions, styles } from '~/styles'
import { onTabChange } from '~/redux/modules/activeFooterTab'

const { statusBarHeight, appBarHeight, viewportWidth } = dimensions;

class AppContainer extends React.Component {
    static propTypes = {

    }
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render () {
        const { dispatch } = this.props;
        return (
            <View style={[styles.view, styles.bgWhite]}>
                <View style={styles.view}>
                    <RootNavs
                        onNavigationStateChange={(prevState, currentState) =>
                            dispatch(onTabChange(prevState, currentState))} />
                </View>
            </View>
        )
    }
}

const myStyles = StyleSheet.create({

})

function mapStateToProps ({ activeFooterTab }) {
    return {
        activeFooterTab,
    }
}

export default connect(
    mapStateToProps
)(AppContainer)

// export default AppContainer;