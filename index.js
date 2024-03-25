const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('CICD app');
})



app.listen(6000, ()=>{
    console.log(`Server is running on port ${6000}`);
})