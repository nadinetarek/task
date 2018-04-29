
var express=require('express');
var http=require('http');
const app=express();
var mysql= require('mysql');
var bodyParser = require("body-parser");
var conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Nadine-94',
    database:'employeesDB'
})
conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // var createTable="create table employees (employeeID INT AUTO_INCREMENT PRIMARY KEY,firstName varchar(255),lastName varchar(255),rating int)";
    // conn.query(createTable,function(err,result){
    //  if(err)
    //     console.log("unable to create table")
    // //  console.log("TABLE CREATED")
    // });

    // var createTable1="create table attendance (id INT AUTO_INCREMENT PRIMARY KEY,fromDate datetime,toDate datetime,offDays int,sickLeaves int,workingHours int,employeeID int,FOREIGN KEY (employeeID) REFERENCES employees(employeeID))";
    // conn.query(createTable1,function(err,result){
    //  if(err)
    //     console.log("unable to create table",err)
    //  console.log("TABLE CREATED")
    // });

    // var addEmployee="insert into employees (firstName,lastName) VALUES ('Nadine','Tarek')"
    //     conn.query(addEmployee,function(err,result){
    //  if(err)
    //     console.log("unable to add employee",err)
    //  else
    //     console.log("employee Added")
    // });

    app.get('/employees',function(req,res){
    var selectEmployees="select * from employees";
        conn.query(selectEmployees,function(err,result){
     if(err)
        console.log("unable to add employee",err)
     else{
        console.log("employee Added")
        
       // document.getElementById("listOfEmployees").value=json.stringify(result)
        console.log("employee displayed")
     }
       
    });
  });
});
  app.post('/addEmployees', function (req, res) {
    connection.query('INSERT INTO employees ', req.body, 
        function (err, result) {
            if (err) throw err;
       res.send(req.body);
        }
    );
});
    app.post('/editEmployees', function (req, res) {
        connection.query('UPDATE employees SET ?', req.body, 
            function (err, result) {
                if (err) throw err;
        
                console.log('body: ' + JSON.stringify(req.body));
                res.send(req.body);
            }
        );
        app.post('/deleteEmployees', function (req, res) {
            connection.query('DELETE FROM employees WHERE ', req.body, 
                function (err, result) {
                    if (err) throw err;
                    res.send(req.body);
                }
            ); 
        });
    
});

app.get('/', (req, res) => {
    res.sendFile('html/view.html', {root: __dirname })
})

function login(){
    console.log("heree")
}
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.set('view engine', 'html');
app.listen(3000,()=>console.log("listening "));
