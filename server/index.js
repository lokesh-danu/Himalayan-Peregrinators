const express = require('express');
const app = express();
const Port = 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.listen(Port, () => {
    console.log(`app running at Port : ${Port}`);
  })