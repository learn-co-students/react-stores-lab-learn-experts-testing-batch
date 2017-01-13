const Store = require('./Store');


class CounterStore extends Store {
  increment(){
    var counter = this.state + 1;
    this.setState(counter)
  }

  decrement(){
    var counter = this.state - 1;
    this.setState(counter)
  }
}

module.exports = new CounterStore(0);
