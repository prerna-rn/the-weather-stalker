import { MONTHS, DAYS } from './DateConstants';

const date = new Date();

export function getWeekDays() {
  const dayInAWeek = new Date().getDay();
  const days = DAYS.slice(dayInAWeek, DAYS.length).concat(
    DAYS.slice(0, dayInAWeek)
  );
  return days;
}

export function getDayMonthFromDate() {
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getUTCDate();

  return day + ' ' + month;
}

export function transformDateFormat() {
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const month = date.toLocaleString('en-US', { month: '2-digit' });
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  // Change the order to day, month, year
  const newFormatDate = day.concat('/', month, '/', year.toString(), ' ', time);
  return newFormatDate;
}


export function getUTCDatetime() {
  // Get the current date and time in IST
  const date = new Date();
  const offset = date.getTimezoneOffset();
  const istOffset = -330; // IST offset UTC +5:30 
  const istDate = new Date(date.getTime() + (offset - istOffset)*60*1000);

  const istTime = istDate.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: 'Asia/Kolkata',    
  });

  const day = istDate.toLocaleString('en-US', { day: '2-digit', timeZone: 'Asia/Kolkata' });
  const month = istDate.toLocaleString('en-US', { month: '2-digit', timeZone: 'Asia/Kolkata' });
  const year = istDate.toLocaleString('en-US', { year: 'numeric', timeZone: 'Asia/Kolkata' });

  // Combine the date and time parts into a string
  const istDatetime = `${day}/${month}/${year} ${istTime}`;
  return istDatetime;
}




export function getUTCTime() {
  const utcTime = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZone: 'UTC',
  });

  return utcTime;
}
