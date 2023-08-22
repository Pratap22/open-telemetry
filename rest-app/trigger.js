const axios = require('axios');

const names = ["Pratap", "Madhav", "Arjun", "Shiva", "Dileep", "Prasar", "Raju", "Sabin", "Gehendra"];

function callApi(name) {
  axios.get(`http://localhost:8080/user/${name}`)
    .then(response => {
      console.log(`Request for ${name} completed successfully`);
    })
    .catch(error => {
      console.error(`Error making request for ${name}: ${error.message}`);
    });
}

let index = 0;

setInterval(() => {
  console.log(`${index}  ${names[index]}`);
  callApi(names[index]);

  if (index === names.length - 1) {
    index = 0;
  } else {
    index++;
  }
}, 10); // Adjust the interval (in milliseconds) as needed