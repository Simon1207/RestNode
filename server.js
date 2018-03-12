//Instancio Express
var express =require('express'),
    app=express();
    port=process.env.PORT || 3000;
    mongoose=require('mongoose');
    Task=require('./api/models/todoListModel'),
    bodyParser=require('body-parser');

//creando conexion para Mongoose
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

//configuro body-parser para las peticiones http
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//llamo a todoListRoutes
var routes=require('./api/routes/todoListRoutes');//importo ruta
routes(app);//registro la ruta


app.listen(port);
console.log("Node JS iniciado en el puerto: "+port);