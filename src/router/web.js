import express from "express";

// Express
let router = express.Router();

// 
let iniWebRouters = (app) => {
    router.get('/', (req, res) => {
        return res.send("Hello World123");
    });
    
    return app.use("/", router);
};

module.exports = iniWebRouters;