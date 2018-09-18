import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

export const colors = {
    main: "#3078bf",
    red: "#ffaaa0",
    white: "#ffffff",
    light: "#eeeeee",
    black: "#333",
    grey: "#bbb",
    sup: "#80bfff",
    textNormal: "#444",
    textSub: "#777",
    textActive: "#18f",
    border: "#aaa",
    success: "#54cb24",
    successSup: "#55e542",
    star: "#fff600",
    heart: "#ff1e1e",
};

export const fontSizes = {
    h1: 32,
    h2: 20,
    h3: 18,
    p: 16,
    sup: 14,

    headerTitle: 24,
};

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const { width, height } = Dimensions.get('window');

export const dimensions = {
    viewportWidth: width,
    viewportHeight: height,
    statusBarHeight: STATUSBAR_HEIGHT,
    appBarHeight: APPBAR_HEIGHT,
};

export const styles = StyleSheet.create({
    //快速填色
    colorMain: {
        color: colors.main,
    },
    colorWhite: {
        color: colors.white,
    },
    colorGrey: {
        color: colors.grey,
    },
    colorTextMain: {
        color: colors.textNormal,
    },
    colorHeart: {
        color: colors.heart,
    },
    bgMain: {
        backgroundColor: colors.main,
    },
    bgSup: {
        backgroundColor: colors.sup,
    },
    bgWhite: {
        backgroundColor: colors.white,
    },
    bgLight: {
        backgroundColor: colors.light,
    },
    bgGrey: {
        backgroundColor: colors.grey,
    },
    // 快速樣式
    h1: {
        fontSize: fontSizes.h1,
        color: colors.textMain,
    },
    h2: {
        fontSize: 20,
    },
        fontBold: {
        fontWeight: "bold",
    },

    //導覽列
    navigationStyle: {
        zIndex: 10,
        backgroundColor: colors.white,
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        height: 60,
    },
    tabBarIcon: {
        marginTop: 5,
    },
    headerLeft: {
        paddingLeft: 20,
    },
    headerRight: {
        paddingRight: 20,
    },
    //頁首
    headerTitle: {
        fontSize: fontSizes.headerTitle,
        color: colors.white,
    },

    //組件
    navIcon: {
        width: 44,
        height: 44,
        paddingVertical: 10,
        paddingHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
    },

    view: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageFullCover: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    shadowNormal: {
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 2,
        shadowOpacity: 0.5,
        // overflow: "hidden",
    },

    //購票選擇
    seatNavIcon: {
        minWidth: 44,
        backgroundColor: colors.white,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
});