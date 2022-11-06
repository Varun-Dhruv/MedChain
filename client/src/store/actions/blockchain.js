import * as actionTypes from "../constants/actionTypes";

export const setPatient = (data) => {
	return {
		type: actionTypes.UPDATE_PATIENT,
		data,
	};
}

export const setDoctor = (data) => {
	return {
		type: actionTypes.UPDATE_DOCTOR,
		data,
	};
}

export const setUser = (data) => {
	return {
		type: actionTypes.UPDATE_USER,
		data,
	};
}
export const setAccount = (data) => {
	return {
		type: actionTypes.UPDATE_ACCOUNT,
		data,
	};
}


