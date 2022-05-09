export const manageDate = (datePara) => {
	const date = new Date();
	const myDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
	let dayOfWeek = date.getDay();
	let dayOfMonth = date.getDate();
	let year = date.getFullYear();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let innerHTMLP = `${myDay[dayOfWeek]} Apr ${dayOfMonth}, ${year} ${hour}:${minutes}`;
	datePara.innerHTML = innerHTMLP;
	dateDisplay.appendChild(datePara);
}
manageDate(datePara);
