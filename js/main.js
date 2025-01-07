//методы
const myCity = {
  city: 'Chelabinsk',
  cityGreeting: function (){//можно без указания типа function
    globalThis.console.log('Greating!')
  }
}

myCity.cityGreeting()