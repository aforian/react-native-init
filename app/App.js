import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { AppContainer } from '~/containers'
import * as reducers from '~/redux'

const appReducer = combineReducers(reducers);
const store = createStore(
    appReducer,
    compose(
        applyMiddleware(thunk),
        // devTools()
    )
)

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}
