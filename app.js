const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//For serving static files.
app.use('/static', express.static('static'));

//set the templete engine as pug
app.set('view engine', 'pug');

//set the view directory
app.set('views', path.join(__dirname, 'views'));

// our pug demo endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', { title: 'Hey Deepak', message: 'Hello there! and thank for providing me more content.' })
})


app.get("/", (req, res) => {
    res.status(200).send("This is home page of my first express app.");
});

app.get("/this", (req, res) => {
    res.status(404).send("This is page is not found.");
});

app.get("/about", (req, res) => {
    res.send("This is about page of my first express app.");
});

app.post("/about", (req, res) => {
    res.send("This is a post request about page of my first express app.");
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});