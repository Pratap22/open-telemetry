require('./meter');
const { metrics } = require('@opentelemetry/api');

const meter = metrics.getMeter('express-server');
let counter = meter.createCounter(
  'learn-with-pratap',
  {
    description: 'The number of requests per name the server got',
  }
);

const express = require('express');
const app = express();
app.get('/user/:name', (req, res) => {
  const data = {
    'route': '/user/:name',
    'name' : req.params.name
  }
  counter.add(1, data);
  console.log({data})
  res.send("Hello " + req.params.name);
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is up and running');
});
