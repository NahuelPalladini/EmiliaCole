const express = require("express");
const path = require('path');
const app = express();
const PORT = 3030;

app.use(express.static(path.join(__dirname, 'public' )))

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))
app.get('/about', (req,res) => res.sendFile(path.join(__dirname, 'views', 'about.html')))
app.get('/contac', (req,res) => res.sendFile(path.join(__dirname, 'views', 'contac.html')))
app.get('/music', (req,res) => res.sendFile(path.join(__dirname, 'views', 'music.html')))

app.listen(PORT, () => console.log(`Server Running In http://localhost:${PORT}`));