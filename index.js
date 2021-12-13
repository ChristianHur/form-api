const express = require('express')
const app = express();
const cors = require('cors');
const { urlencoded } = require('express');
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`http://localhost:${port}`))
app.use(cors())

//parsing JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.post('/api/', (req, res) => {
    const data = req.body;
    if (Object.keys(data).length != 0) {
        res.status(200);
        res.json({ "status": "Record Added", data });
    } else {
        res.status(404)
        res.json("None Data Received.");
    }
})

app.put('/api/:id', (req, res) => {
    const data = req.body;
    if (Object.keys(data).length != 0) {
        res.status(200);
        res.json({ "status": "Record Updated", data });
    } else {
        res.status(404)
        res.json("None Data Received.");
    }
})

app.delete('/api/:id', (req, res) => {
    const id = req.params.id;
    if (id.length != 0) {
        res.status(200);
        res.json({ "status": "One Record Deleted", data });
    } else {
        res.status(404)
        res.json("No record found.");
    }
})

app.delete('/api/', (req, res) => {
    res.status(200);
    res.json({ "status": "All Records Deleted", data });
})
