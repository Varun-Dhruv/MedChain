import * as actionTypes from '../constants/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
	patient: null,
	doctor: null,
	user: null,
	account:null,
}

const patientValue = (state, action) => {
	return updateObject(state, { patient: action.data })
}

const doctorValue = (state, action) => {
	return updateObject(state, { doctor: action.data })
}

const userValue = (state, action) => {
	return updateObject(state, { user: action.data })
}
const accountValue = (state, action) => {
	return updateObject(state, { account: action.data })
}

const blockchainReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_PATIENT:
			return patientValue(state, action)
		case actionTypes.UPDATE_DOCTOR:
			return doctorValue(state, action)
		case actionTypes.UPDATE_USER:
			return userValue(state, action)
		case actionTypes.UPDATE_ACCOUNT:
			return accountValue(state, action)
		default:
			return state
	}
}

export default blockchainReducer