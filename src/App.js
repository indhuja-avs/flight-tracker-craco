import { Viewer, Ion } from 'cesium';
import { Component, createRef } from 'react';


export class App extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount() {
  Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNTZlNTRjMy01ZjZlLTQ4N2YtOTY0MC0xYTNlYTgwZDFmNmMiLCJpZCI6MTU5NzA4LCJpYXQiOjE2OTE2ODk3MzZ9.4vypb5d5T9LsOWBjiDQh0EByNxdCRLQR92znYSLPKo4';
  this.viewer = new Viewer(this.ref.current);
}

componentWillUnmount() {
  // Clean up and destroy the Viewer instance
  if (this.viewer) {
    this.viewer.destroy();
  }
}

render() {
  return (
    <div ref={this.ref} />
  );
}

}
export default App;
