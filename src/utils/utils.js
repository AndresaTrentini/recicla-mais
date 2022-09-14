import { genSaltSync, hashSync, compareSync } from "bcrypt-nodejs"
import moment from 'moment'

export default {
	DURATION: 30,

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
	}

}