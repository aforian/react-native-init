import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, StyleSheet, Animated } from 'react-native'

import { colors, styles, dimensions } from '~/styles/Styles'
import Icon from 'react-native-vector-icons/Ionicons'

const { viewportWidth } = dimensions
const AnimatedIcon = Animated.createAnimatedComponent(Icon)

export default class LoadingPage extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			rotation: new Animated.Value(0),
		}
	}
	componentDidMount () {
		this.interval = setInterval(() => {
			Animated.sequence([
				Animated.timing(this.state.rotation, {toValue: 0, duration: 0}),
				Animated.timing(this.state.rotation, {toValue: 1, duration: 700}),
			]).start()
		}, 1200);
	}
	componentWillUnMount () {
		window.clearInterval(this.$interval);
	}
	getTransfrom () {
		return {
			transform: [
				{
					rotateY: this.state.rotation.interpolate({
						inputRange: [0, 1],
						outputRange: ['0deg', '360deg'],
					})
				}
			]
		}
	}
	render () {
		return (
			<View style={myStyles.container}>
				<Animated.Image
					style={[myStyles.images, this.getTransfrom()]}
					source={require('~/images/app_icon.png')}
				/>
{/* 				<Text style={myStyles.text}>MICKET</Text> */}
				<Image
					style={myStyles.imagesText}
					source={require('~/images/app_text.png')}
				/>
			</View>
		)
	}
}


const myStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.main,
	},
	images: {
		resizeMode: "contain",
		height: 100,
		// tintColor: "#fff",
	},
	imagesText: {
		width: viewportWidth *0.6,
		resizeMode: "contain",
	},
	text: {
		fontSize: 18,
		marginTop: 10,
		color: colors.white
	},
	icon: {
		color: colors.white,
	}
});
