const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port =8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+ '/public/index.html'));
});

app.listen(port,()=>{
    console.log(`Server is running on port localhost:${port}`);
});
