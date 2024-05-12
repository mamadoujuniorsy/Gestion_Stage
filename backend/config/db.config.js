// Initilisation de la base de données
module.exports = {
    url: "mongodb://localhost:27017/Stage_Sup",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
}



