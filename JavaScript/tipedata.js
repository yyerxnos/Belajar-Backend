const currentYear = new Date().getFullYear();
const text = `sekarang adalah tahun ${currentYear}.`;

console.log(text);

const resultt = Number('Radit');
console.log(resultt); //output NaN

const completed = true;
const passed = false; //output: true false

console.log(completed,passed);

const isGreater = 5 > 2;

console.log(isGreater); // output: true (5 lebih besar daripada 2)

const name1 = { first: 'raditya', last: null };
const name2 = { first: 'raditya', last: undefined };

console.log(JSON.stringify(name1)); // output: {"first":"raditya","last"null}
console.log(JSON.stringify(name2)); // output: {"first":"raditya"}

//Mengubah Nilai Antar Tipe Data
const numberr = 123;
const booleann = true;

const strNumberr = String(numberr);
const strBoolean = booleann.toString();

console.log(strNumberr); // output: "123"
console.log(strBoolean); // output: "true"

const strNumberrr = '456';
const strFloat = '59.61';
const boolean = true;

const numFromString = Number(strNumberrr);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);

console.log(numFromString);
console.log(floatFromString);
console.log(numFromBoolean);

const cmm = '20cm';
const pxx = '64px';

const intFromCM = parseInt(cmm);
const intFromPX = parseInt(pxx);

console.log(intFromCM);
console.log(intFromPX);

const cm = '20.55cm';
const px = '64.25px';

const floatFromCM = parseFloat(cm);
const floatFromPX = parseFloat(px);

console.log(floatFromCM);
console.log(floatFromPX);

const number = 123;
const string = 'radit';
const empty = null;

const boolFroamNumber = Boolean(number);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(null);

console.log(boolFroamNumber);
console.log(boolFromString);
console.log(boolFromNull);

const age = 18;
const message = 'Umurku:' + age;

console.log(message);

const strNumber = '100';
const resulttt = strNumber * 2;

console.log(resulttt);

const bool = true;
const result = bool + 1;

console.log(result);