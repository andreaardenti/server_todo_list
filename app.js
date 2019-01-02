var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var todo = require('./node_modules/todolistandreaardenti/index');
app.listen(3001);

app.get('/', function(req, res) {
    res.json({message: 'Benvenuto nel Server ToDo!'})
});

todo.addToDo('Spesa', 'olio, pane', 'andrea');
todo.addToDo('Meccanico', 'olio, pane', 'andrea');
<<<<<<< HEAD
todo.addToDo('Fioraio', 'rose, calendule', 'piero');

//-------------------------------------POST-------------------------------------
=======
todo.addToDo('Fioraio', 'rose, calendule', 'andrea');

//------------POST------------
>>>>>>> 17646ec055b914a4f4ee941975cdac02f71f6184
//inserisco un nuovo elemento nell'elenco
app.post('/addTodo', function(req, res) {

    todo.addToDo(req.body.name, req.body.description, req.body.assignedTo);

    res.status(201).json({"message": todo.showToDo()});

});

//-------------------------------------PUT-------------------------------------
//modifica uno stato di un todo
app.put('/change', function(req,res) {
    todo.changeToDoState(req.body.id, req.body.completed);
    res.status(201).json({"status": todo.findToDoByState(req.body.completed)});
});

//-------------------------------------GET-------------------------------------
//mostra tutti i todo o filtrati per utente
app.get('/todo', function(req, res) {
    if (req.query.assignedTo != undefined) {
        return res.json(todo.findToDoByName(req.query.assignedTo))
    } else {
        res.json(todo.showToDo());
    }
});

//mostra tutti gli user
app.get('/users', function(req, res) {
    res.json(todo.showAllUsers());
});

//mostra per stato
app.get('/state', function(req, res) {
    res.json(todo.findToDoByState(req.query.assignedTo));
<<<<<<< HEAD
});
=======
})
>>>>>>> 17646ec055b914a4f4ee941975cdac02f71f6184

//-------------------------------------DELETE-------------------------------------
//cancella un todo
<<<<<<< HEAD
app.delete('/delete/:id', function(req, res) {
    id = parseInt(req.params.id);
    if (todo.deleteToDo(id)) {
        return res.status(200).json({message: "element with id: " + id + " deleted!"});
    }
    else {
        return res.status(404).json({message: "sorry, item already deleted!"});
    }
});
=======
app.delete('/delete/:index', function(req, res) {
    let id = parseInt(req.params.id);
    res.json(todo.deleteToDo(id));
})
>>>>>>> 17646ec055b914a4f4ee941975cdac02f71f6184
