// && 연산자-false가 하나라도 존재하면 false
// ||연산자-true가 하나라도 존재하면 true

let boolean = true;
let boolean1 = false;

console.log(boolean && boolean1);
console.log(boolean || boolean1);

let age = 21;
let beverage = age > 20 ? 'beer' : 'juice';
console.log(beverage);

let isMember = true;
let discount = isMember ? '15%':'10%';
console.log(isMember);

age = 23;
let identity = age > 20 ? '성인': (age <= 13 ? '어린이':'청소년');
console.log(identity);

let firstName = 'lee'
let lastName = 'seungAh'

console.log(firstName+' '+lastName);

