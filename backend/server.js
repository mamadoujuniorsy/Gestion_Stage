const  express = require("express");
const app = express();
const port = 4001;
const dbConfig = require("./config/db.config.js");
const mongoose = require("mongoose");

app.get('/', (req, res) => {
    res.send('Bienvenue sur la page d\'accueil !');
});

app.get('/login', (req, res) => {
    res.send('Page de connexion');
});

app.get('/register', (req, res) => {
    res.send('Page d\'inscription');
});

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!");
}).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});

app.listen(port , () => {
    console.log(`Server is running on port: ${port}`);
})