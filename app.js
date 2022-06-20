/*// para traernos el paquete mysql de node
const mysql = require('mysql');
// Creamos la conexión a la base de datos que queramos
const conectionUser = mysql.createConnection({
    host:'localhost',
    user:'userNode',
    password:'123456789',
    database:'ejemplo1'
});
// Inicias la conexión
conectionUser.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log("La conexión funciona");
    }
})
//Para hacer consultas a la bbdd:
conectionUser.query("SELECT * FROM user", (err, rows)=>{
    if(err){
        throw err;
    }else{
        console.log('los datos de la tabla son estos:');
        console.log(rows)
        var user1 = rows[0];
        console.log(`el usuario se llama ${user1.nombre}`);
        rows.forEach(element => {
            console.log("Nombre: "+element.nombre)
        });
    }
});
// Recuerda cerrar la conexión despues de hacer las querys
conectionUser.end();*/
// Sin EXPRESS
//Con EXPRESS

const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv');

const {insert } = require('./operations');

app.use(express.json());
// Para no exponer los datos de acceso creamos el .env que los contiene.
// Creamos la conexión a la base de datos.
const conection = mysql.createConnection({
    host:process.env.DBHOST,
    user:'userNode',
    password:'123456789',
    database:process.env.DATABASE
});



conection.connect((err)=>{
    if(err){
        throw err
    }else{
        console.log("conexión exitosa");
    }
})

app.get("/",(req,res)=>{
    res.send("Hello World")
});
app.get("/insert",(req,res)=>{
    insert(conection,(result)=>{
        res.json(result);
    })
});

app.listen(3000,()=>{
    console.log("Servidor en ecucha en el puerto 3000....")
})