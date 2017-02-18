const React = require('react');
const counterStore = require('../stores/counterStore');
const actions = require('../actions');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // Your implementation here.
      counter: counterStore.getState()
    };
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.handleDecrementClick = this.handleDecrementClick.bind(this);
  }
  componentDidMount () {
    // Your implementation here.
    this.removeListener = counterStore.addListener(counter => {
      this.setState({counter});
    });
    // this.setState(counterStore.getState());
  }

  componentWillUnmount () {
    // Your implementation here.
    this.removeListener();
  }

  handleIncrementClick(ev) {
    ev.preventDefault();
    actions.increment();
  }

  handleDecrementClick(ev) {
    ev.preventDefault();
    actions.decrement();
  }

  shouldComponentUpdate(state) {
    this.setState();
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrementClick}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrementClick}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
