const express = require('express');
const app = express();
const Port = 5000;
const emailRoute= require('./routes/email');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/api/email',emailRoute);

app.listen(Port, () => {
    console.log(`app running at Port : ${Port}`);
})