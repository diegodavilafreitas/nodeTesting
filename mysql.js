// para traernos el paquete mysql de node
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
conectionUser.end();
