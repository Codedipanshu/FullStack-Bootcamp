import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const peach = new Fruit ({
    name: "Peach",
    rating: 3,
    review: "Good"
});

peach.save();

// const kiwi = new Fruit ({
//     name: "Kiwi",
//     rating: 10,
//     review: "Best"
// });

// const orange = new Fruit ({
//     name: "Orange",
//     rating: 4,
//     review: "Kinda sour"
// });

// const banana = new Fruit ({
//     name: "Banana",
//     rating: 3,
//     review: "Weired"
// });

// Fruit.insertMany([apple, kiwi, orange, banana]);

// const result = await Fruit.find();
// result.forEach(item => {
//     mongoose.connection.close();
//     console.log(item.name);
// });

// const res = await Fruit.deleteOne({name: "Peach"});


// apple.save();

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

const people = new People ({
    name: "ABC",
    age: 20,
    favouriteFruit: peach
});

people.save();