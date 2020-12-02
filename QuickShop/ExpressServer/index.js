var express = require('express'); 
 // var  path = require('path'); 
   var bodyParser = require('body-parser'); 
var cors = require('cors'); 
   
   var mysql = require('mysql');
   
    const port = process.env.PORT || 8080; 
    const host='den1.mysql3.gear.host'; 

    app = express(); 

  
    app.use(bodyParser.json()); 
   // app.use(cors());
   
      // Handle form data
app.use(express.urlencoded({extended:false}));
  

const mysqlConnection=mysql.createConnection({

    host:'den1.mysql3.gear.host',
    user:'quickshop',
    password:'Zq1n9cro_?ap',
    database:'QuickShop',
    insecureAuth:true
 

});

// open the MySQL connection
mysqlConnection.connect((err)=>{

    if(!err){
        console.log('DB connection successful!');
        
        }
    
    else{
        console.log('DB could not connect\n Error: '+ JSON.stringify(err,undefined,2));
    }
});

app.listen(port, host,()=>{  
    console.log('Express server is listening on port ' + port);  
});