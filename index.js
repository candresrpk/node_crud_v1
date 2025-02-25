const express = require('express');
const routerApi = require('./routes');
const { errorHandler, logErrors } = require('./Middlewares/error.handler');

const app = express();
const port = 3000;

// Middleware for parsing JSON requests
app.use(express.json());


app.get('/', (req, res) => {

  res.send('Hello the app is working')

})

routerApi(app); // Importing the router API function and passing it the app instance
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
