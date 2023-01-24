const express = require("express");
const apiroutes = require('./routes/apiroutes');
const htmlroutes = require('./routes/htmlroutes');

const PORT = process.env.port || 3001;

const app = express();



//Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/api', apiroutes);
app.use('/', htmlroutes);


app.listen(PORT, () => {
  console.log(`App lisenting at http://localhost:${PORT}`);
});
