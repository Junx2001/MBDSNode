const mongoose = require('mongoose');

const dbURI = process.env.DB_URI;
const port = process.env.PORT;

mongoose.set("strictQuery", false);
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
mongoose
	.connect(dbURI, options)
	.then(() => {
        console.log("Connecté à la base MongoDB assignments dans le cloud !");
        console.log("at URI = " + dbURI);
        console.log("vérifiez with http://localhost:"+ port +"/api/assignments que cela fonctionne")
        },
        err => {
          console.log('Erreur de connexion: ', err);
        });

mongoose.Promise = global.Promise;


exports.mongo = mongoose;