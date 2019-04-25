
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// const axios = require('axios')

//     .then(({ title, type }) => {
//       axios.get(`http://www.omdbapi.com/?t=${title}&type=${type}&apikey=trilogy`)
//         .then(({ data }) => console.log(data))
//         .catch(e => console.log(e))
//     })
//     .catch(e => console.log(e))

const axios = require('axios');
const inquirer = require('inquirer')

// // Make a request 
// axios.get(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`)
// .then(({ data }) => console.log(data))
// .catch(e => console.log(e))

function concert-this() = _ => {


inquirer.prompt([
    {
      type: 'input',
      venue: 'name',
      message: 'What artist are you looking for?'
    },
  ])
    .then(({ name, type }) => {
      axios.get(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`)
        .then(({ data }) => console.log(data))
        .catch(e => console.log(e))
    })
    .catch(e => console.log(e))

}