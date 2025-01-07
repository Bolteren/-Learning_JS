//function

let a = 5
let b = 3

function sum (a, b) {
  const c = a + b
  console.log(c)
}

sum(a, b)
a = 8
b = 12
sum(a, b)

function myFn (d, e){
  let f
  d++
  console.log('\n\n\n')
  console.log(d)
  f = d + e
  return f
}

console.log(myFn(22, 5))

//console.dir(myFn)