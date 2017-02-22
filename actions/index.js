'use strict';

const counterStore = require('../stores/counterStore');

function increment() {
  counterStore.increment();
}

function decrement(e) {
  counterStore.decrement();
}

module.exports = {
  increment,
  decrement
};
