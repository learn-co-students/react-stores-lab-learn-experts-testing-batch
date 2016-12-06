const React = require('react');

const counterStore = require('../stores/counterStore');
const actions = require('../actions/index');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement(e){
    e.preventDefault();
    actions.decrement();
    this.setState({counter: counterStore.getState()});
  }

  handleIncrement(e){
    e.preventDefault();
    actions.increment();
    this.setState({counter: counterStore.getState()});
  }

  componentDidMount () {
    this.removeListener = counterStore.addListener((counter) => {
      this.setState({counter});
    });
  }
  componentWillUnmount () {
    this.removeListener();
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrement}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
