let express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let nedb = require("@seald-io/nedb");
// middleware
let database = new nedb({ filename: "database.txt", autoload: true });
app.use(express.static('assets'));

// route
app.get("/create", (req, res) => {
    res.sendFile("make-a-post.html", { root: "assets" });
});

app.post("/post", (req, res) => {
    console.log(req.body);

    let date = new Date();

    let dataToBeAdded = {
        username: req.body.username,
        content: req.body.content,
        date: date.toISOString()
    }

    database.insert(dataToBeAdded,(err, dbData) => {
        if(err){
            console.log("Error inserting data into database:", err);
        } else {
            console.log("Data inserted successfully:", dbData);
        }
    });
    res.redirect("/create");
});

app.get("/all-posts", (req, res) => {
    let query = {};
    database.find(query, (err, dbdata) => {
        console.log(dbdata);
        res.json({post:dbdata});
    });
});

app.listen(1000, () => {
    console.log('Server is running on port 1000');
});