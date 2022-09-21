import { genSaltSync, hashSync, compareSync } from "bcrypt-nodejs"
import moment from 'moment'

export default {
	DURATION: 30,
	TIME_REGEX: /^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]$/,
	DAYS_ARRAY_REGEX: /^\[((\d{1})(,\d{1})*)?\]$/,
	ZIP_REGEX:/^[1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/,


	encryptPassword(password) {
		const salt = genSaltSync(10)
		return hashSync(password, salt)
	},

	isMatchPassword(bodyPassword, dbPassword) {
		return compareSync(bodyPassword, dbPassword)
	},

	sliceMinutes: (start, end, duration) => {
		let slices = [];
		let count = 0;

		const now = moment();
		start = moment(start);
		end = moment(end);

		while (end > start) {
			if (start.format('YYYY-MM-DD') === now.format('YYYY-MM-DD')) {
				if (start.isAfter(now)) {
					slices.push(start.format('HH:mm'));
				}
			} else {
				slices.push(start.format('HH:mm'));
			}

			start = start.add(duration, 'minutes');
			count++;
		}
		return slices;
	},

	mergeDateTime: (date, time) => {
		const merged = `${moment(date).format('YYYY-MM-DD')}T${time}`

		return merged;
	},
	verifyDate: (timetable, date) => {
			const start = timetable.start
            const end = timetable.end
            const hour = moment(date).format('HH:mm')
            const day = moment(date).day()            
            const verifyDay = timetable.days.includes(day)

			if(hour < start || hour > end || !verifyDay){
                return false
            } else {
				return true
			}
	},

	diffTime: (date) => {
		const time = moment(date).diff(moment(), 'days', true)
		if(time < 1){
			console.log('passou aqui')
			return false
		} else {
			return true
		}
	},
	 isSameOrBefore: (startTime, endTime) => {
		return moment(startTime, 'HH:mm').isSameOrBefore(moment(endTime, 'HH:mm'));
	  }

}