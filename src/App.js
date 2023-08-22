import { Viewer, Ion } from 'cesium';
import { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentViewer: null,
    };
  }

componentDidMount() {
  Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNTZlNTRjMy01ZjZlLTQ4N2YtOTY0MC0xYTNlYTgwZDFmNmMiLCJpZCI6MTU5NzA4LCJpYXQiOjE2OTE2ODk3MzZ9.4vypb5d5T9LsOWBjiDQh0EByNxdCRLQR92znYSLPKo4';
  const viewer = new Viewer("cesiumContainer");
  }

render() {
  return (
        <div id="cesiumContainer" ></div>
  )
}
}

export default App;
