import { Fragment } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
} from "@react-google-maps/api";
import useMap from "../../hooks/useMap";

function Map(locations) {

  const {markers , center, isLoaded, activeMarker, handleActiveMarker,setActiveMarker} = useMap(locations);
 
  return (
    <Fragment>
      <div>
          {isLoaded ? (
            <GoogleMap
              center={center} 
              zoom={12}
              onClick={() => setActiveMarker(null)}
              mapContainerStyle={{ width: "100%", height: "600px", borderRadius:'25px'}}
            >
              {markers.map(({ id, name, position }) => (
                <MarkerF
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}>
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{name}</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
            </GoogleMap>
          ) : null}
        </div>
    </Fragment>
  );
}

export default Map;
