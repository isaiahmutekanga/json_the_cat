const request = require("request");
const userinput = process.argv.slice(2);

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${userinput}`,
    (error, response, body) => {
      if (error !== null) {
        //console.log(error);
        callback(error, null);
        return;
      }

      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(console.log("Sorry breed not found"), null);
      } else callback(null, data[0].description);
    }
  );
};

module.exports = { fetchBreedDescription };
