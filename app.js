const express = require("express");
const path = require("path");
const app = express();
const fs = require('fs');
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving static files.
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug'); //set the templete engine as pug
app.set('views', path.join(__dirname, 'views')); //set the view directory

//ENDPOINTS
app.get('/', (req, res) => {
    const con = ('This is the best content for learn pug templete engine');
    const params = {'title':'Pug is the best templete engine', 'content': con}
    res.status(200).render('index.pug', params);
});

app.post('/', (req,res) => {
    name = req.body.name
    email = req.body.email
    password = req.body.password
    confirm = req.body.confirm
    message = req.body.message
    more = req.body.more
    
    let outputToWrite = `The name of student is ${name}, email-id and password is ${email}, ${password}, ${confirm} and message from student is ${message}. More about student: ${more}.`
    fs.writeFileSync('output.txt', outputToWrite);
    const params = {'message':'Your form has been submitted successfully!'}
    res.status(200).render('index.pug', params);
})

//START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});