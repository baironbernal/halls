import { useLoadScript } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const useMap = (locations) => {
    const initialMarkers = [
        {
          id: 1,
          name: "Colombia",
          position: { lat: 4.473972471817378, lng: -73.51971196863701 }
        },
      ];
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDWhb3NnSahO0oYXuIF2_nAY2gORFURCN0'
      });
    
      const [markers, setMarkers] = useState(initialMarkers);
      const [activeMarker, setActiveMarker] = useState(null);
      const [center, setCenter] = useState(initialMarkers[0].position); // Default center
    
      //Every time that locations change, set new values for positions and center map
      useEffect(() => {
        if (!locations['markers']) return;
        setMarkers(locations['markers'])
        setCenter(calculateCenter(locations['markers']));
      
      },[locations['markers']])
      
        //Handle and active marker
      const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      };
    
      //Calculate the center of positions for show in the map every time that interact with selects forms
      const calculateCenter = (positions) => {
        if (positions.length === 0) return center;
          // Return a default center if there are no positions
          
        // Initialize total latitude and longitude
        let totalLat = 0;
        let totalLng = 0;
      
        // Calculate the sum of latitudes and longitudes
        positions.forEach((item) => {
          if (item.position && item.position.lat && item.position.lng) {
            totalLat += item.position.lat;
            totalLng += item.position.lng;
          }
        });
      
        // Calculate the average
        const avgLat = totalLat / positions.length;
        const avgLng = totalLng / positions.length;
      
        return { lat: avgLat, lng: avgLng };
      };
    

  return {markers , center, isLoaded, activeMarker, handleActiveMarker,setActiveMarker};
};

export default useMap;
