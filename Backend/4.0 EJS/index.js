import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

const d = new Date();
var day = d.getDay();
var week;
var objective;
if (day == 0) {
    week = "weekend";
    objective = "have fun";
} else {
    week = "weekday";
    objective = "work hard";
}

app.get('/', (req, res) => {
    res.render("index.ejs", {
        week: week,
        objective: objective
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});