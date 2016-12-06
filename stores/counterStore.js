const Store = require('./Store')

class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
  constructor(){
    super();
    this.state = 0;
  }

  increment(){
    this.state += 1;
  }

  decrement(){
    this.state -= 1;
  }
}

module.exports = new CounterStore();
