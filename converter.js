function ConvertToFeet(inches) {
  const feet = inches / 12;
  return feet;
}

const dadainches = 144;
const dadaFeet = ConvertToFeet(dadainches);
console.log(dadaFeet);

const nanainches = 197;
const nanaFeet = ConvertToFeet(nanainches);
console.log(" nanar height", nanaFeet);

// km = mile*1.67
function milesToKm(miles) {
  const km = miles * 1.67;
  return km;
}
