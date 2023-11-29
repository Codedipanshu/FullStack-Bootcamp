import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello, World!<\h>");
});

app.get("/contact", (req, res) => {
    res.send("Contact me at: dipu@gmail.com");
});

app.get("/about", (req, res) => {
    res.send("Hi, I am Dipanshu Agrawal.");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});