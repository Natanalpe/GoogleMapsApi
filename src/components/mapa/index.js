import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import "./style.css"
function Map() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCVzJvrg7g4OAhuWmIIzPfix3aYZr_pelc"
      })

    return (
        <div className="container">
            <div className="map">
            {
                isLoaded ? (
                    <GoogleMap
                    mapContainerStyle={{width: '100%', height: '100%'}}
                    center={{
                        lat: -27.590824,
                        lng: -48.551262
                    }}
                    zoom={15}
                    >
                    </GoogleMap>
                ) : <></>
            }
            </div>
        </div>
    )
}

export default Map;