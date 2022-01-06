const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Artur')`
const sql_select = 'SELECT * FROM people'




app.get('/', (req,res) =>{
    
    let response = '<h1>Full Cycle</h1> <br><ul>';
    connection.query(sql)
    connection.query(sql_select, function(err, results){
        if(err) throw err;
        console.log('result: ' + results[2])
        //if(results !== undefined){
            let json_result = JSON.parse(JSON.stringify(results))
        
            json_result.forEach(element => {
                console.log(element)
                response += '<li>'
                response += element.name
                response += '</li>'
             });
        //}else response += 'Consulta vazia do banco';
    });
    connection.end();
    response += '</ul>'
    res.send(response)

})

app.listen(port, ()=>{
    console.log('Rodando na porta ' + port)
     
})