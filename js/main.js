// Условные конструкции
const age = 22;
age <= 17 && console.log("Вам меньшу 18 лет. Доступ закрыт.");
age > 17 && console.log("Вам больше 17 лет. Доступ открыт");

console.log("Тернарный оператор и");
let x = true;
let y = false;
y &&= x;
console.log(`Правда и ложь Оператор &&= ${y}`);
let c = false;
let d = true;
c &&= d;
console.log(`Ложь и правда Оператор &&= ${c}`);
let a = true;
let b = true;
a &&= b;
console.log(`истина и истина Оператор &&= ${a}`);
let e = false;
let f = false;
e &&= f;
console.log(`Ложь и ложь оператор &&= ${e}`);

console.log("Тернарный оператор или");

let x1 = true;
let y1 = false;
y1 ||= x1;
console.log(`Правдо или ложь = ${y1}`);

let a1 = true;
let b1 = true;
a1 ||= b1;
console.log(`Правда или правда = ${a1}`);

let c1 = false;
let d1 = true;
c1 ||= d1;
console.log(`Ложь или правда = ${c1}`);

let e1 = false;
let f1 = false;
e1 ||= f1;
console.log(`Ложь или ложь = ${e1}`);