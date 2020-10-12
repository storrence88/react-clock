export const getTime = (timeRef) => {
  // Create date object and grab hour, minute, and second values
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  let currentSecond = currentTime.getSeconds();
  let timeOfDay;

  // Pad the hour, minute, and second with leading zeros if less than 2 digits
  currentHour = (currentHour < 10 ? '0' : '') + currentHour;
  currentMinute = (currentMinute < 10 ? '0' : '') + currentMinute;
  currentSecond = (currentSecond < 10 ? '0' : '') + currentSecond;

  // Set the meridiem value
  timeOfDay = (currentHour < 12 ? 'AM' : 'PM');

  // Convert the hour to 12-hour format if greater than 12
  currentHour = ( currentHour > 12 ) ? currentHour - 12 : currentHour;

  // Convert an hour of "0" to "12"
  currentHour = ( currentHour == 0 ) ? 12 : currentHour;

  // Build time string
  let timeString = `${currentHour}:${currentMinute}:${currentSecond} ${timeOfDay}`

  // Update the time in the DOM
  timeRef.current.innerHTML = timeString;
}