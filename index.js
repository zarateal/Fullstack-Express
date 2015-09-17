var express = require('express');
var app = express();

//app.use(express.static('public'));//middelware

//middleware generico para todas los request
// app.use(function (req, res, next) {
//   console.log('Llego una peticion a las:', Date.now());
//   next();
// });

app.get('/', function (req, res) {
  res.send('String retornado en respuesta al pedido a nuestro server en "/" ');
});

app.get('/data', function (req, res) {
  res.send('return data');
});

app.get('/data', function (req, res) {
  res.send('String retornado en respuesta al pedido a nuestro server en / ');
});

app.get('/', function(req, res) {
    res.sendfile('./views/index.html');
});

// app.get('/about', function (req, res) {
//     res.sendfile('./views/about.html');
// });

//
// app.use('/article', function (req, res) {
//   console.log('segundo');
//   next();
// });

// app.get('/article', function (req, res) {
//     res.sendfile('./views/article.html');
// });

// app.post('/article', function (req, res) {
//     res.sendfile('./views/article.html');
// });

// //middleware example
// app.use('/user/:id', function (req, res, next) {
//   console.log('Request Type:', req.method);
//   next();
// });

// //middleware series
// app.use('/user/:id', function(req, res, next) {
//   console.log('Request URL:', req.originalUrl);
//   next();
// }, function (req, res, next) {
//   console.log('Request Type:', req.method);
//   next();
// });

// app.get('/user/:id', function (req, res, next) {
//   res.send('USER');
// });

// //caso que no funciona segundo middleware
// app.get('/user/:id', function (req, res, next) {
//   console.log('ID:', req.params.id);
//   next();
// }, function (req, res, next) {
//   res.send('User Info');
//   //next(); no se ejecuta porque no hay next();
// });


// // handler for /user/:id which prints the user id
// app.get('/user/:id', function (req, res, next) {
//   res.end(req.params.id);
// });

// app.get('/user/:id', function (req, res, next) {
//   //no me ejecuto porque ya me definieron
// });

app.listen(3000, function(){
	console.log("Escuchando peticiones en el puerto 3000");
});