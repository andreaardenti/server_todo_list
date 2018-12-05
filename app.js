var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var todo = require('./node_modules/todolistandreaardenti/index');
app.listen(3001);

app.get('/', function(req, res) {
    res.json({message: 'Benvenuto nel Server ToDo!'})
})

todo.addToDo('Spesa', 'olio, pane', 'andrea');
todo.addToDo('Meccanico', 'olio, pane', 'andrea');
todo.addToDo('Fioraio', 'rose, calendule', 'andrea');

//------------POST------------
//inserisco un nuovo elemento nell'elenco
app.post('/todo', function(req, res) {
    
    var i = req.body.name;
    var j = req.body.description;
    var x = req.body.assignedTo;

    console.log("req.body.name: ", i);
    console.log("req.body.description: ", j);
    console.log("req.body.assignedTo: ", x);

    todo.addToDo(i, j, x);
    
    res.status(201).json({message: 'User inserito!'});
})

//modifica uno stato di un todo
app.put('/todo/:index', function(req,res) {
    //var i = parseInt(req.params.index, req.param.state);
    todo.changeToDoState(parseInt(req.params.index, req.param.state));
    res.json();
})

//mostra tutti i todo o filtrati per utente
app.get('/todo', function(req, res) {
    if (req.query.assignedTo != undefined) {
        return res.json(todo.findToDoByName(req.query.assignedTo))
    } else {
        res.json(todo.showToDo());
    }
})

//mostra tutti gli user
app.get('/users', function(req, res) {
    res.json(todo.showAllUsers());
})

//mostra per stato
app.get('/state', function(req, res) {
    res.json(todo.findToDoByState(req.query.assignedTo));
})

//cancella un todo
app.delete('/delete/:index', function(req, res) {
    let id = parseInt(req.params.id);
    res.json(todo.deleteToDo(id));
})