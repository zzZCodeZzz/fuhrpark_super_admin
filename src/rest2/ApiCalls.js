/* eslint-disable prefer-const */
import axios from "axios";
import {OAuth2Data} from "./RestClient";
import RestConfig from './RestConfig';

axios.defaults.baseURL =RestConfig.baseUrl;

export default {

	auth: {
		login: credentials => {
			let bodyFormData = new FormData();
			bodyFormData.append("username", credentials.username);
			bodyFormData.append("password", credentials.password);
			bodyFormData.append("grant_type", "password");

			return axios({
				method: "POST",
				url: "/oauth/token",
				data: bodyFormData,
				auth: {
					username: "fuhrpark.io",
					password: "together-secret"
				},
				config: {headers: {"Content-Type": "application/x-www-form-urlencoded"}}
			}).then(res => res.data);
		},

		refresh: refreshToken => {
			OAuth2Data.setToken(null);
			let bodyFormData = new FormData();
			bodyFormData.append("grant_type", "refresh_token");
			bodyFormData.append("client_id", "fuhrpark.io");
			bodyFormData.append("refresh_token", refreshToken);

			return axios({
				method: "POST",
				url: "/oauth/token",
				data: bodyFormData,
				auth: {
					username: "fuhrpark.io",
					password: "together-secret"
				},
				config: {headers: {"Content-Type": "application/x-www-form-urlencoded"}}
			}).then(res => res.data);
		}

	},

	user: {
		newCompanyAdmin: userForm => axios({
			method: "POST",
			url: `/account/companyAdmin`,
			data: userForm
		}).then((res) => res.data),

		newAdmin: userForm => axios({
			method: "POST",
			url: `/account/admin`,
			data: userForm
		}).then((res) => res.data),

		newAgent: userForm => axios({
			method: "POST",
			url: `/account/agent`,
			data: userForm
		}).then((res) => res.data),

		editPassword: (oldPw, newPw) => axios({
			method: "PUT",
			url: `/account/change/password?oldPw=${oldPw}&newPw=${newPw}`
		}).then((res) => res.data),

		editOwnDetails: userForm => axios({
			method: "PUT",
			url: `/account/editOwn`,
			data: userForm
		}).then((res) => res.data),

		editForeignDetails: (username, userForm) => axios({
			method: "PUT",
			url: `/account/${username}`,
			data: userForm
		}).then((res) => res.data),

		loadByUserName: username => axios({
			method: "GET",
			url: `/account/${username}`
		}).then((res) => res.data),

		loadUsersByCompany: () => axios({
			method: "GET",
			url: `/account/all`
		}).then((res) => res.data),

		deleteUser: username => axios({
			method: "DELETE",
			url: `/account/${username}`
		}).then((res) => res.data)

	},

	fleet: {
		loadAllCars: () => axios({
			method: "GET",
			url: `/fleet/car/all`
		}).then((res) => res.data),

		newCar: carForm => axios({
			method: "POST",
			url: `/fleet/car`,
			data: carForm
		}).then((res) => res.data),

		deleteCar: carId => axios({
			method: "DELETE",
			url: `/fleet/car/${carId}`
		}).then((res) => res.data),

		editCar: (carId, carForm) => axios({
			method: "PUT",
			url: `/fleet/car/${carId}`,
			data: carForm
		}).then((res) => res.data),

		loadCarById: carId => axios({
			method: "GET",
			url: `/fleet/car/${carId}`
		}).then((res) => res.data),

		loadDamagesByCar: carId => axios({
			method: "GET",
			url: `/fleet/damage/byCar/${carId}/all`
		}).then((res) => res.data),

		loadDamagesByUser: username => axios({
			method: "GET",
			url: `/fleet/damage/byUser/${username}/all`
		}).then((res) => res.data),

		loadAllDamages: () => axios({
			method: "GET",
			url: `/fleet/damage/all`
		}).then((res) => res.data),

		newDamage: damageForm => axios({
			method: "POST",
			url: `/fleet/damage`,
			data: damageForm
		}).then((res) => res.data),

		editDamage: (damgeId, damageForm) => axios({
			method: "POST",
			url: `/fleet/damage/${damgeId}`,
			data: damageForm
		}).then((res) => res.data),

		loadDamageById: damgeId => axios({
			method: "GET",
			url: `/fleet/damage/${damgeId}/get`
		}).then((res) => res.data),

		deleteDamage: damageId => axios({
			method: "DELETE",
			url: `/fleet/damage/${damageId}/delete`
		}).then((res) => res.data)
	},

	schedule: {
		newShift: shiftForm => axios({
			method: "POST",
			url: `/schedule/shift/new`,
			data: shiftForm
		}).then((res) => res.data),

		editShift: (shiftId, shiftForm) => axios({
			method: "POST",
			url: `/schedule/shift/${shiftId}/edit`,
			data: shiftForm
		}).then((res) => res.data),

		deleteShift: shiftId => axios({
			method: "DELETE",
			url: `/schedule/shift/${shiftId}/delete`
		}).then((res) => res.data),

		newCarAbsence: carAbseneceForm => axios({
			method: "POST",
			url: `/schedule/carAbsence/new`,
			data: carAbseneceForm
		}).then((res) => res.data),

		editCarAbsence: (absenceId, carAbseneceForm) => axios({
			method: "POST",
			url: `/schedule/carAbsence/${absenceId}/edit`,
			data: carAbseneceForm
		}).then((res) => res.data),

		deleteCarAbsence: absenceId => axios({
			method: "DELETE",
			url: `/schedule/carAbsence/${absenceId}/delete`
		}).then((res) => res.data),

		newUserAbsence: userAbsenceForm => axios({
			method: "POST",
			url: `/schedule/userAbsence/new`,
			data: userAbsenceForm
		}).then((res) => res.data),

		editUserAbsence: (absenceId, userAbsenceForm) => axios({
			method: "POST",
			url: `/schedule/userAbsence/${absenceId}/edit`,
			data: userAbsenceForm
		}).then((res) => res.data),

		deleteUserAbsence: absenceId => axios({
			method: "DELETE",
			url: `/schedule/userAbsence/${absenceId}/delete`
		}).then((res) => res.data),

		loadScheduleBetween: (from, to) => axios({
			method: "GET",
			url: `/schedule/getAllBetween`,
			params: {
				start: from,
				end: to
			}
		}).then((res) => res.data)
	}
};
