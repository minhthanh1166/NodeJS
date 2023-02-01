import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import iniWebRouters from "./router/web";
require('dotenv').config();

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
iniWebRouters(app);

// Port === undefined => port = 8088
let port = process.env.PORT || 8088;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});