const fs = require('fs');

fs.writeFile("a.txt", "Hello from Node", (err) => {
    if(err) throw err;
    console.log("File has been saved");
});

fs.readFile("./a.txt", "utf8", (err, data) => {
    if(err) throw err;
    console.log(data);
});