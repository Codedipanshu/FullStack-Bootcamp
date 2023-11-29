import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/wikiDB");

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articleSchema);

app.route("/articles")
    .get(async (req, res) => {
        const data = await Article.find();
        res.send(data);
    })
    .post(async (req, res) => {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        newArticle.save();
        res.send("Successfully added a new article.");
    })
    .delete(async (req, res) => {
        await Article.deleteMany();
        res.send("Successfully deleted all articles.");
    });

app.route("/articles/:articleTitle")
    .get(async (req, res) => {
        const data = await Article.findOne({ title: req.params.articleTitle });
        if (data) {
            res.send(data);
        } else {
            res.send("No article found.");
        }
    })
    .put(async (req, res) => {
        const data = await Article.replaceOne({ title: req.params.articleTitle }, {
            title: req.body.title,
            content: req.body.content
        });
        if (data) {
            res.send("Succesfully updated data.");
        } else {
            res.send("No article found.");
        }
    })
    .patch(async (req, res) => {
        const data = await Article.updateOne({ title: req.params.articleTitle }, {
            title: req.body.title,
            content: req.body.content
        });
        if (data) {
            res.send("Succesfully updated data.");
        } else {
            res.send("No article found.");
        }
    })
    .delete(async (req, res) => {
        const data = await Article.deleteOne({ title: req.params.articleTitle });
        if (data.deletedCount == 1) {
            res.send("Succesfully deleted data.");
        } else {
            res.send("No article found.");
        }
    });

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});