const express = require("express");

//initializes the app and creates a port
const app = express();
const PORT = process.env.PORT || 3000;

//sets up body parsing, static, and routes' middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


//starts the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
