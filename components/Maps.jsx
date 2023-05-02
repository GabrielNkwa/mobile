import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Circle } from '@react-google-maps/api';
import Script from "next/script";

const containerStyle = {
  width: '100%',
  height: '400px',
  padding: '10px',
  border: '10px'
};

const center = {
  lat:  9.0778, 
  lng: 8.6775
};

const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  
  zIndex: 1,
  
}

const onLoad = circle => {
  console.log('Circle onLoad circle: ', circle)
}

const onUnmount = circle => {
  console.log('Circle onUnmount circle: ', circle)
}


class MapContainer extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyC6tiM660V4IlPHuFcdgv7XGz-06TxWlGg"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <>
          <Script>
  <GoogleMap
    id="circle"
    
    zoom={7}
    center={center}
  >
    <Circle
      // optional
      onLoad={onLoad}
      // optional
      onUnmount={onUnmount}
      // required
      center={center}
      // required
      options={options}
    />
  </GoogleMap>
</Script>
          </>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default MapContainer;