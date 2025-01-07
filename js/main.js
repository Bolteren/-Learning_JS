//Объекты

const myCity = {
  city: 'Chelabinsk',
  popular: true,
  country: 'RU'
}

//доступ к значениям объекта

console.log(myCity.city);
console.log(myCity.country);
console.log(myCity);
delete myCity.popular;
console.log(myCity);
myCity['popularNew'] = true;
const countryProtectPypol = 'protectPipol';
myCity[countryProtectPypol] = true;
console.log(myCity);

//глобальные объекты
//Window - в браузере
//global - в Node.js
 console.log(window.innerWidth)
 console.log(window.innerHeight)

 //globalThis - универсальный
 console.log(globalThis.innerWidth)
 globalThis.console.log(10)