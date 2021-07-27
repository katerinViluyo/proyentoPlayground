
const express = require('express');
const app = express();
const path = require('path') ;
const port = 3030;




//levanto servidor despues de nodemon y despues de instalar express
app.listen(port,()=> console.log(`servidor corriendo en http://localhost:${port}`))