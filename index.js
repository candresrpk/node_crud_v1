const express = require('express');
const corse = require('cors');
const routerApi = require('./routes');
const { errorHandler, logErrors, boomErrorHandler, ormErrorHandler } = require('./Middlewares/error.handler');

const app = express();
const port = 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// const whitelist = ['http://localhost:8080'];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }

app.use(corse());

app.get('/', (req, res) => {

  res.send('Hello the app is working')

})

routerApi(app); // Importing the router API function and passing it the app instance
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
