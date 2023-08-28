import React, { useEffect } from 'react';
import { Viewer, Ion } from 'cesium';

function CesiumViewer() {
    //Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNTZlNTRjMy01ZjZlLTQ4N2YtOTY0MC0xYTNlYTgwZDFmNmMiLCJpZCI6MTU5NzA4LCJpYXQiOjE2OTE2ODk3MzZ9.4vypb5d5T9LsOWBjiDQh0EByNxdCRLQR92znYSLPKo4';
  useEffect(() => {
    const viewer = new Viewer('cesiumContainer'); 
    return () => {
      viewer.destroy();
    };
  }, []);

  return <div id="cesiumContainer" style={{ width: '100%', height: '100vh' }}></div>;
}

export default CesiumViewer;