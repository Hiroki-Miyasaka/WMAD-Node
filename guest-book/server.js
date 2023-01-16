import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.set('view engine', 'ejs');
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/home', (req, res) => {
    res.render('home');
})

const notes = [
    {
        note: 'Hiroki'
    }
];

app.get('/leave', (req, res) => {
    res.render('leave');
})

app.post('/leave', (req, res) => {
    const {note} = req.body;

    const newNote = {
        note: note
    }

    notes.push(newNote);
    res.render('read',{notes});
})

app.get('/read', (req, res) => {
    res.render('read', {notes});
})


app.listen(5001, () =>{
    console.log('Server started on port 5001');
})