//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import bodyParser from 'body-parser';
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var responsePath;
function logger(req, res, next) {
    var password = req.body.password;
    if (password === "ILoveProgramming") {
        responsePath = __dirname + "/public/secret.html";
    } else {
        responsePath = __dirname + "/public/index.html";
    }
    next();
}

app.use(logger);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (res, req) => {
    req.sendFile(responsePath);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});

