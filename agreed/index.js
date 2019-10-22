const express = require('express');
const bodyParser = require('body-parser');
const Agreed = require('agreed-core');
const agreed = new Agreed();
const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type'
  )

  if ('OPTIONS' === req.method) {
    res.send(200)
  } else {
    next()
  }
})

app.use(agreed.middleware({
  path: './agreed/mock.js',
}));

app.use((err, req, res, next) => {
  res.statusCode = 500;
  res.send(`Error is occurred : ${err}`);
});
app.listen(3000);
