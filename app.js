//Dima Kanawati, 2022.

//Load express.
const express = require('express');

//Create the app.
const app = express();

//Listen on the port.
app.listen(3001, () => {
    console.log('The app is listening on the port 3001');
})
app.get('/', (reg, res) => {
    res.send("Hello worlds");
})