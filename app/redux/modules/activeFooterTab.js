// import { setBarStyleDark } from './statusBarConfig'

const SET_FOOTER_TAB = 'SET_FOOTER_TAB';

export function setFooterTab(tab) {
    return {
        type: SET_FOOTER_TAB,
        tab,
    }
}

function getCurrentRouteName(navigationState) {
    if( !navigationState ) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

export function onTabChange(prevState, currentState) {
    return function (dispatch) {
        const currentScreen = getCurrentRouteName(currentState);
        const prevScreen = getCurrentRouteName(prevState);

        if (prevScreen !== currentScreen) {
            dispatch(setFooterTab(currentScreen))

            // console.log(currentScreen)

            const sbLightScreen = ['ThemePage','CheckoutPage'];

            // if( sbLightScreen.includes(currentScreen) ){
            //   dispatch(setBarStyleDark(false))
            // } else {
            //   dispatch(setBarStyleDark(true))
            // }
        }

    }
}

const initialState = 'HomeScreen';

export default function activeFooterTab(state = initialState, action) {
    switch (action.type) {
        case SET_FOOTER_TAB:
            return action.tab
        default:
            return state;
    }
}