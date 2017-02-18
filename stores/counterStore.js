const Store = require('./Store');

class CounterStore extends Store {
  constructor () {
    super(0);
  }
  // Your implementation here.
  // Hint: extend the Store class!
  increment() {
    const newCount = this.getState() + 1;
    this.setState(newCount)
  }

  decrement() {
    const newCount = this.getState() - 1;
    this.setState(newCount)
  }
}

module.exports = new CounterStore();
