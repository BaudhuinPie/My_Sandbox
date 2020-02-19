// Making of DataCenter :

//To Connect with database:
const connectdb = require('./conf');

//To handle datas routing:
const express=require('express');
const sapp= express();

const port = 8000;

//to Treat middleware:
sapp.use('/api/superheroes/neow', express.json());

//Opening routes: `hero_db`.`my_hero`
sapp.get('/api/superheroes', (req,res)=> {
        console.log(`Voice from ${req.hostname} on port ${port} ; connecting to 'hero_db.my_hero' dataTable.`)
        connectdb.query('SELECT * FROM `hero_db`.`my_hero`', (err,result)=> {
                console.log("Querrying at data Table 'my_hero'...")
                if(err) {
                    res.status(500).send("An error to retrieve my_hero datas occured.");
                    console.log("Error around database!");
                }else{
                    res.json({result});
                    console.log(".json sent ! Results returned.")
                }
            }
        )
    }
)
sapp.post('/api/superheroes/neow', (req, res)=> {
        console.log(`Voice from void on port ${port} ; connecting to 'hero_db.my_hero' dataTable.`)
        const adname = req.params.naming;
        console.log(`To add ${adname} at dataTable 'my_hero'...`);
        // connectdb.query(`INSERT INTO hero_db.my_hero ('name') VALUES ('${adname}')`, (err,result)=> {
        //         if (err) {
        //             res.status(500).send("An error to add new name at my_hero datas occured.");
        //             console.log("Error around database!");
        //         }else {
        //             console.log(`Adding on the go at dataTable...`);
        //             res.json({result});
        //             console.log(".json sent ! Results returned.")
        //         }
        //     }
        // )
    }   
)

sapp.put('/api/superheroes/:ID/:naming', (req, res)=> {
    console.log(`Voice from void on port ${port} ; connecting to 'hero_db.my_hero' dataTable.`)
    const IDtoChange = req.params.ID;
    const adname = req.params.naming;
    console.log(`To update ${IDtoChange} at dataTable 'my_hero'...`);
    connectdb.query(`UPDATE hero_db.my_hero SET 'name'=${adname} WHERE 'id'= ${IDtoChange}')`, (err,result)=> {
            if (err) {
                res.status(500).send("An error to update the base at my_hero datas occured.");
                console.log("Error around database!");
            }else {
                console.log(`Updating dataTable on the go...`);
            }
        }
    )
}   
)

//Connecting internet :
sapp.listen( port, err => {
    if (err) {
        console.log("Shrunked listneing ! Error :", err);
        //throw new Error("Loud pain! The server spells around an error");
    }
    console.log("Server Listening on port : ", port, ". If not undefined, the server has got so this error:", err);
}
);
