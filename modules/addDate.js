import { DateTime } from './luxon.js';

const manageDate = (datePara) => {
	const dateDisplay = document.querySelector('.date-display');
	const datePara = document.createElement('p')
	const displayData = document.querySelector('[date-time-display]');
	const getDate = () => {
		dateDisplay.appendChild(datePara);
		const now = DateTime.now();
		const date = now.toLocaleString(DATETIME_MED_WITH_SECONDS);
		datePara.innerHTML = date;
		displayData.appendChild(datePara);
	};
	setInterval(getDate, 1000);
};
export default manageDate;