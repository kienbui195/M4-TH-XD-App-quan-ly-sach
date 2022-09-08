const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const webRouter = require('./routers/web.router')
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', webRouter);

app.listen(port, 'localhost',()=>{
    console.log(`running at http://localhost:${port}`);
})