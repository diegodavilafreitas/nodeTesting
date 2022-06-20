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
conectionUser.end();