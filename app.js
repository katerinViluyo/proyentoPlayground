//paso1
const express = require('express');
const app = express();
const path = require('path') ;
const port = 3030;

//paso3 para usar public
app.use(express.static('public'));

//paso4
app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'view','home.html')));
app.get('/ofertas',(req,res) => res.sendFile(path.join(__dirname, 'view','ofertas.html')));
app.get('/tiendasOfi',(req,res) => res.sendFile(path.join(__dirname, 'view','tiendasOfi.html')));
app.get('/vender',(req,res) => res.sendFile(path.join(__dirname, 'view','vender.html')));
app.get('/ayuda',(req,res) => res.sendFile(path.join(__dirname, 'view','ayuda.html')));

app.get('/creaTuCuenta',(req,res) => res.sendFile(path.join(__dirname, 'view','creaTuCuenta.html')));
app.get('/ingresa',(req,res) => res.sendFile(path.join(__dirname, 'view','ingresa.html')));
app.get('/misCompras',(req,res) => res.sendFile(path.join(__dirname, 'view','misCompras.html')));






//paso 2levanto servidor despues de nodemon y despues de instalar express
app.listen(port,()=> console.log(`servidor corriendo en http://localhost:${port}`))