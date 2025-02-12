const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {

  res.send('Hello the app is working')

})

routerApi(app); // Importing the router API function and passing it the app instance


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
