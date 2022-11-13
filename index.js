const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

const apiData = require("./sdata.json");

app.get("/"), (res, req) => {
    res.send("Successfully Connected")};

    app.get("/service"), (res, req) => {
        res.send(apiData);
    }

    app.listen(port, () => {
        console.log(`Still Connected ${port}`);
    });

