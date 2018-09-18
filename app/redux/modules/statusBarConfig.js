const SET_HEADER_STATUS = "SET_HEADER_STATUS"
const SET_BAR_STYLE_DARK = "SET_BAR_STYLE_DARK"

export function setHeaderStatus(status){
	return {
		type: SET_HEADER_STATUS,
		status,
	}
}

export function setBarStyleDark(dark){
	return {
		type: SET_BAR_STYLE_DARK,
		dark,
	}
}

const initialState = {
	isHeaderActive: false,
	barStyleDark: false,
}

export default function statusBarConfig(state = initialState, action) {
	switch(action.type) {
		case SET_HEADER_STATUS:
			return {
				...state,
				isHeaderActive: action.status,
			}
		case SET_BAR_STYLE_DARK:
			return {
				...state,
				barStyleDark: action.dark,
			}
		default:
			return state
	}
}