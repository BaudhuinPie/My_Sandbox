// Making of data server :

// To connect with database :
const connection = require('./conf');

// To handle datas routing :
const express = require('express');
const sapp = express();

const port = 3000;

// Opening routes :
sapp.get('/api/employees', (req,res)=> {
    console.log(`Voice from void on port ${port} ; connecting to 'employee' dataTable :`)

        connection.query('SELECT * FROM employee', (err, results) => {
                console.log("Querrying at dataTable 'employees'...");
                if(err) {
                    res.status(500).send("An error to retrieve employee datas occured.");
                    console.log("Error around database!");
                    console.log(err);
                } else {
                    res.json({results});
                    console.log("Results returned.")
                }
            }
        )
    }
);

// Go for Listening internet :
sapp.listen( port, err => {
        if (err) {
            console.log("Shrunked listneing ! Error :", err);
            //throw new Error("Loud pain! The server spells around an error");
        }
        console.log("Server Listening on port : ", port, ". If not undefined, the server has got so this error:", err);
    }
);
