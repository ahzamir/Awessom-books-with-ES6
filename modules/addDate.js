import { DateTime } from './luxon.js';

const manageDate = () => {
  const datePara = document.createElement('p');
  const displayData = document.querySelector('[date-time-display]');
  const getDate = () => {
    const dateDisplay = document.querySelector('.date-display');
    dateDisplay.appendChild(datePara);
    const now = DateTime.now();
    const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    datePara.innerHTML = date;
    displayData.appendChild(datePara);
  };
  setInterval(getDate, 1000);
};
export default manageDate;