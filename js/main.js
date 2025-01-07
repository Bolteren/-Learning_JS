const objectA = {
  a: 10,
  b: true
};

const coppyOfA = objectA;
coppyOfA.c = 'abc';
objectA.a = 20;
console.log('text = ' + objectA.c + ' - a = ' + objectA.a);