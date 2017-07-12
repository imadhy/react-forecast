import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

  const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: props.lat, lng: props.lon }}
    >
    </GoogleMap>
  ));

export default GettingStartedGoogleMap;
