import data from '../data/map.json';

const MapService = {
  filterByCityAndCategory: async ({ city, category }) => {

    var info = [];
    var locations = [];
  
    if (city && category) {
      info = data.drops.filter((drop) => drop.city === city && drop.category === category)
        .map((drop) => {
          locations.push(
              {id: drop.name, name: drop.name, position: drop.geocode[0]?.results[0]?.geometry?.location || null}
          );
          return {
            name: drop.name,
            hours: drop.hours,
            address: drop.address,
          }
        });
    } 
    else if(city){
      info = data.drops.filter((drop) => drop.city === city)
        .map((drop) => {
          locations.push(
              {id: drop.name, name: drop.name, position: drop.geocode[0]?.results[0]?.geometry?.location || null}
          );
          return {
            name: drop.name,
            hours: drop.hours,
            address: drop.address,
          }
        });
    }
    else {
      info = data.drops
        .map((drop) => {
          locations.push(
              {id: drop.name, name: drop.name, position: drop.geocode[0]?.results[0]?.geometry?.location || null}
          );
          return {
            name: drop.name,
            hours: drop.hours,
            address: drop.address,
          }
        });
      }
    return {
      info: info, locations: locations
    }
  },
};

export default MapService;
