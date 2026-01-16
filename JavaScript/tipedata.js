const currentYear = new Date().getFullYear();
const text = `sekarang adalah tahun ${currentYear}.`;

console.log(text);

const result = Number('Radit');
console.log(result); //output NaN

const completed = true;
const passed = false; //output: true false

console.log(completed,passed);

const isGreater = 5 > 2;

console.log(isGreater); // output: true (5 lebih besar daripada 2)

const name1 = { first: 'raditya', last: null };
const name2 = { first: 'raditya', last: undefined };

console.log(JSON.stringify(name1)); // output: {"first":"raditya","last"null}
console.log(JSON.stringify(name2)); // output: {"first":"raditya"}