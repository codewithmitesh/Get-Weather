const request = require("request");

const forecast = (cityname, callback) => {
    const url =
        "http://api.weatherstack.com/current?access_key=ffe7b715deeb016590b4620cf9edb348&query=" +
        cityname;

    request({
            url: url,
            json: true,
        },
        (error, response) => {
            if (error) {
                callback("Unable to connect to weather service", undefined);
            } else if (response.body.error) {
                callback("Unable to connect to location", undefined);
            } else {
                callback(undefined, response.body.current.temperature + " °C " + response.body.current.weather_descriptions[0]  );
            }
        }
    );
};

module.exports = forecast;