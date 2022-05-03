require('dotenv').config()
var express = require("express")
var app = express()
var cors = require("cors")
const MongoClient = require('mongodb').MongoClient;
let petsCollection;
let accountsCollection;

let http = require('http').createServer(app);
let io = require('socket.io')(http);

// Database Connection

const uri = "mongodb+srv://"+process.env.MONGO_USER+":"+process.env.MONGO_PASSWORD+"@cluster0.kymgv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" // replace it with the url you get from mongo atlas
const client = new MongoClient(uri,{ useNewUrlParser: true })


app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

const createPets = (collectionName) => {
    client.connect((err,db) => {
        petsCollection = client.db().collection(collectionName);
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
}
const createAccount = (collectionName) => {
    client.connect((err,db) => {
        accountsCollection = client.db().collection(collectionName);
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(2);
        }
    })
}

const insertProjects = (project,callback) => {
    petsCollection.insert(project,callback);
}

const getProjects = (callback) => {
    petsCollection.find({}).toArray(callback);
}
const insertAccounts = (account,callback) => {
    accounts.Collection.insert(account,callback);
}
const getAccounts = (callback) => {
    accountsCollection.find({}).toArray(callback);
}


app.get('/api/projects',(req,res) => {
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})
app.get('/api/accounts',(req,res) => {
    getAccounts((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})

app.post('/api/projects',(req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    })
})
app.post('/api/accounts',(req,res) => {
    console.log("New Account added", req.body)
    var newAccount = req.body;
    insertAccounts(newAccount,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Account Successfully added", data: result})
        }
    })
})
app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){

    var firstNumber = parseInt(req.params.firstNumber) 
  
    var secondNumber = parseInt(req.params.secondNumber)
  
    var result = firstNumber + secondNumber || null
  
    if(result == null) {
  
      res.json({result: result, statusCode: 400}).status(400)
  
    }
  
    else { res.json({result: result, statusCode: 200}).status(200) } 
  
  })
  
  io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    setInterval(()=>{
      socket.emit('number', new Date().toLocaleTimeString());
    }, 1000);
  
  });

var port = process.env.port || 3000;

http.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
    createPets("pets")
    createAccount("accounts")
  });
