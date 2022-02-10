const request = require("request");

const geocode = (address, callback) => {
  const url =
    `https://api.mapbox.com/geocoding/v5/mapbox.places/` +
    encodeURIComponent(address) +
    `.json?&access_token=pk.eyJ1IjoiY29kZXdpdGhtaXRlc2giLCJhIjoiY2t5eTkwZjhqMHE5cTJvcDhqeTJraDV0dCJ9.dBC2k7snVYmdRgdYiTiTpQ`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
/** 
https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json&access_token=pk.eyJ1IjoiY29kZXdpdGhtaXRlc2giLCJhIjoiY2t5eTkwZjhqMHE5cTJvcDhqeTJraDV0dCJ9.dBC2k7snVYmdRgdYiTiTpQ
pk.eyJ1IjoiY29kZXdpdGhtaXRlc2giLCJhIjoiY2t5eTkwZjhqMHE5cTJvcDhqeTJraDV0dCJ9.dBC2k7snVYmdRgdYiTiTpQ

https://api.mapbox.com/geocoding/v5/mapbox.places/georgia.json?types=country&access_token=pk.eyJ1IjoiY29kZXdpdGhtaXRlc2giLCJhIjoiY2t5eTkwZjhqMHE5cTJvcDhqeTJraDV0dCJ9.dBC2k7snVYmdRgdYiTiTpQ

*/
