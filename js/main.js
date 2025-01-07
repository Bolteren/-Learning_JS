//copy Object
//var1
const person = {
  name:'Bob',
  age: 25,
  vlog: {
    vlogToYou: true,
    vlogToDiscord: false
  }
}

const person2 = Object.assign({}, person)//не работает со вложенными объектами
person2.age = 26

globalThis.console.log(person2.age)
globalThis.console.log(person.age)

//var2
//разделение объекта на свойства
//не работает со вложенными объектами
const person3 = { ...person}
person3.name = 'Alice'
person3.vlog.vlogToDiscord = true
globalThis.console.log(person3.vlog.vlogToDiscord)
globalThis.console.log(person.vlog.vlogToDiscord)

//var3
//Через JSON
//Работает со вложениями объектов

const person4 = JSON.parse(JSON.stringify(person))
person4.name = 'Sergay'
person4.vlog.vlogToYou = false
globalThis.console.log(person4.vlog.vlogToYou)
globalThis.console.log(person.vlog.vlogToYou)
