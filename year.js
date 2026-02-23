/*function isLeapYear(year) {
  const reminder = year % 4;
  if (reminder === 0) {
    console.log("Your year is a leap year", year);
  } else {
    console.log("Your year is not a leap year", year);
  }
}

isLeapYear(1933);
isLeapYear(1966);
isLeapYear(1299);*/

function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}
const isMyYearLeapYear = isLeapYear(1833);
console.log("my year", isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1966);
console.log("her year", isHerYearLeapYear);
