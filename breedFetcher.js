const request = require("request");
const userinput = process.argv.slice(2);
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${userinput}`,
  (error, response, body) => {
    if (error !== null) {
      console.log(error);
    } else {
      const data = JSON.parse(body);

      if (data[0] === undefined) {
        console.log("Sorry breed not found");
      } else console.log(data[0].description);
    }
  }
);
