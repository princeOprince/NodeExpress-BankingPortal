const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

app.set('views', path.join(__dirname, src, views));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render(index, { title: 'Index' });
});

app.listen(3000, () => {
    console.log('PS Project Running on port 3000!');
})