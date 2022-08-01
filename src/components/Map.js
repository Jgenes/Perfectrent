import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '100%',
    position:'absolute',
    marginTop: '292px',
}

const center = {
    lat: -6.776012,
    lng: 39.178326
  };
  
  function MyGoogleMap() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAYsAtwrRB14d2_LB_lqUrYEmdMpV8HeTk"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          mapTypeId='roadmap'
          zoom={10}

        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
  export default React.memo(MyGoogleMap)
