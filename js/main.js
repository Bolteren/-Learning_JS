//json

//JSON.parse()//Из строки в объект
//JSON.stringify()//из объукта в строку

const post = {
  title: 'My post',
  likesQty: 5
}

globalThis.console.log(post)
const postString = JSON.stringify(post)
globalThis.console.log(postString)
const postStringToJSON = JSON.parse(postString)
globalThis.console.log(postStringToJSON)