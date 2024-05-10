import { Component } from 'react';

class ClassComponent extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log('Mounted');
    this.setState({ count: Number(localStorage.getItem('count')) });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('old props', prevProps);
    console.log('new props', this.props);

    console.log('old state', prevState);
    console.log('new state', this.state);
  }

  componentWillUnmount() {
    console.log('Unmounted');
    localStorage.setItem('count', this.state.count);
  }

  render() {
    return (
      <div>
        Class Component {this.state.count}{' '}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Change
        </button>
      </div>
    );
  }
}

export default ClassComponent;
