const express = require('express')
const app = express();
const cors = require('cors');
const { urlencoded } = require('express');
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`http://localhost:${port}`))
app.use(cors())
const { users } = require('./models/mock_data')

//parsing JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('/api/', (req, res) => {
    res.status(200);
    res.json({ users });
})

app.get('/api/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let index = users.findIndex(record => record.id == id)
    if (index != -1){
        res.status(200);
        res.json({ "user":users[index] });
    }
    res.status(404);
    res.json("No record found.");
})

app.post('/api/', (req, res) => {
    const data = req.body;
    if (Object.keys(data).length != 0) {
        users.push(data);
        res.status(200);
        res.json({ "status": "Record Added", data });
    } else {
        res.status(404)
        res.json("None Data Received.");
    }
})

app.put('/api/:id', (req, res) => {    
    const data = req.body;
    const id = parseInt(req.params.id);
    let index = users.findIndex(record => record.id == id)
    if (index != -1){
        users[index]=data;
        res.status(200);        
        res.json({ "status": "Record Updated", data });
    } else {
        res.status(404)
        res.json("No data found.  Can't update.");
    }
})

app.delete('/api/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let index = users.findIndex(record => record.id == id)
    if (index != -1){
        let temp = users[index];
        users.splice(index,1);
        res.status(200);
        res.json({ "status": "One Record Deleted", temp });
    } else {
        res.status(404)
        res.json("No record found.");
    }
})

app.delete('/api/', (req, res) => {
    users.splice(0);
    res.status(200);
    res.json({ "status": "All Records Deleted", users });
})