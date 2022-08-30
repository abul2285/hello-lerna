import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello JS!!' };
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <style jsx>{`
          h1 {
            color: red;
          }
        `}</style>
      </div>
    );
  }
}
export default HelloWorld;
