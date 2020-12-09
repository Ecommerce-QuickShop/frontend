var express = require('express'); 
 // var  path = require('path'); 
   var bodyParser = require('body-parser'); 
var cors = require('cors'); 
   
   var mysql = require('mysql');
   
    const port = process.env.PORT || 8080; 
    const host='localhost'; 

    app = express(); 

  
    app.use(bodyParser.json()); 
    app.use(cors());
   
      // Handle form data
app.use(express.urlencoded({extended:false}));
  

const mysqlConnection=mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'tbDeveloper24',
    database:'quickshop',
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

//Products CRUD

// Get all products
app.get('/products',(req,res)=>{
    var selectStatement= 'SELECT * FROM products';
    mysqlConnection.query(selectStatement,(err,rows)=>{
        if(!err){
            res.send(rows);
        }
        else{
            res.status(400).json({msg: 'No products in database'});
        }
    });
});
  //Get one product
  app.get('/products/:id',(req,res)=>{
    var OneProductDetails=`SELECT * FROM products WHERE product_id='${req.params.id}'`;
    
    mysqlConnection.query(OneProductDetails,(err,rows,fields)=>{
        if(!err){
           
           res.send(rows)
        }
        else{
            res.status(400).json({msg: `No product with product_id ${req.params.id}`});
        }
    });
    });
    // Create a product
       app.post('/admin/ProductInventory/AddProduct',(req,res)=>{
           var Product={
            
                 product_name:req.body.product_name,
                 product_description:req.body.product_description,
                 product_category:req.body.product_category,
                 product_units_in_stock:req.body.product_units_in_stock,
                 product_price:req.body.product_price,
                 product_image_mine:req.body.product_image_mine,

           }
          
           var CreateProduct=`INSERT INTO products (product_name,product_description,product_category,product_units_in_stock,product_price,product_image_mine) VALUES
            ('${Product.product_name}','${Product.product_description}','${Product.product_category}','${Product.product_units_in_stock}','${Product.product_price}','${Product.product_image_mine}')`;
            mysqlConnection.query(CreateProduct,(err,result,fields)=>{
                if(!err){
               
                    res.send("Product Created!");
                }
                else{
                    res.status(400).json({msg: 'error with product creation'});
                   
                }
            });

       });
       //Update Product
       app.put('/admin/ProductInventory/UpdateProduct/:id',(req,res)=>{
           var Product={
           
            product_name:req.body.product_name,
            product_description:req.body.product_description,
            product_category:req.body.product_category,
            product_units_in_stock:req.body.product_units_in_stock,
            product_price:req.body.product_price,
            product_image_mine:req.body.product_image_mine,
           }

          
           var UpdateProduct=`UPDATE products SET product_name='${Product.product_name}', product_description='${Product.product_description}', product_category='${Product.product_category}', product_units_in_stock='${Product.product_units_in_stock}', product_price= '${Product.product_price}', product_image_mine='${Product.product_image_mine}'`;
           mysqlConnection.query(UpdateProduct,(err)=>{
            if(!err){
               
                res.send("Product updated");
            }
            else{
                res.status(400).json({msg: 'error with update'});
            }
        });
    });
    

//Delete Product
app.delete('/admin/UserManagement/DeleteProduct/:id',(req,res)=>{

        var deletStatement=`DELETE FROM products WHERE product_id='${req.params.id}'`;
        mysqlConnection.query(deletStatement,(err)=>{
            if(!err){
               
                res.send("Product deleted");
            }
            else{
                res.status(400).json({msg: 'error with delete'});
            }
        });

    });
    

//User CRUD

//Get all Users
app.get('/admin/UserManagement/users',(req,res)=>{
    var selectStatement= 'SELECT * FROM user';
    mysqlConnection.query(selectStatement,(err,rows)=>{
        if(!err){
            res.send(rows);
        }
        else{
            res.status(400).json({msg: 'No users in database'});
        }
    });
});
//Get one user
app.get('/UserProfile/:id',(req,res)=>{
    var OneProductDetails=`SELECT * FROM user WHERE user_id='${req.params.id}'`;
    
    mysqlConnection.query(OneProductDetails,(err,rows,fields)=>{
        if(!err){
           
            res.send(rows);
            
               
            
        }
        else{
            res.status(400).json({msg: `No user with user_id ${req.params.id}`});
        }
    });
    });
    //Register User
    app.post('/register',(req,res)=>{

           var User={
        
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            phone_number:req.body.phone_number,
            username:req.body.username,
            password:req.body.password,
            role:req.body.role,
            avatar_mine:req.body.avatar_mine
            }
        var RegisterUser=`INSERT INTO user (first_name,last_name,email,phone_number,username,password,role,avatar_mine) VALUES
         ('${User.first_name}','${User.last_name}','${User.email}','${User.phone_number}','${User.username}','${User.password}','${User.role}','${User.avatar_mine}')`;
        mysqlConnection.query(RegisterUser,(err,result,fields)=>{
            if(!err){
               
                res.send("User Registered!");
            }
            else{
                res.status(400).json({msg: 'error with register'});
            }
        });
  });

  //Update User
  app.put('/UserProfile/edit/:id',(req,res)=>{

    var User={
         first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        phone_number:req.body.phone_number,
        username:req.body.username,
        password:req.body.password,
        role:req.body.role,
        avatar_mine:req.body.avatar_mine,
    }
     
    var UpdateUser=`UPDATE user SET first_name='${User.first_name}',last_name='${User.last_name}' email='${User.email}', phone_number='${User.phone_number}', username='${User.username}', password= '${User.password}', role='${User.role}',avatar_mine='${User.avatar_mine}'`;
    mysqlConnection.query(UpdateUser,(err)=>{
     if(!err){
        
         res.send("User updated");
     }
     else{
         res.status(400).json({msg: 'error with update'});
     }
 });
});

//Delete User
app.delete('/admin/UserManagement/DeleteUser/:id',(req,res)=>{
        
            var deletStatement=`DELETE FROM user WHERE user_id='${req.params.id}'`;
            mysqlConnection.query(deletStatement,(err)=>{
                if(!err){
                   
                    res.send("user deleted");
                }
                else{
                    res.status(400).json({msg: 'error with delete'});
                }
            });
    
        });
       
       
     

app.listen(port, host,()=>{  
    console.log('Express server is listening on port ' + port);  
});