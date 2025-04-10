export const formatDateMessage = (date: Date) => {
  let hours = date.getHours();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;

  const minutes = String(date.getMinutes()).padStart(2, "0");

  const day = date.getDate();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[date.getMonth()];

  return `${hours}:${minutes}${ampm} - ${monthName} ${day}`;
};
