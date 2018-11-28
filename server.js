const express = require('express');

var app = express();
const port = process.env.PORT || 3030;

app.use(express.static(__dirname + '/public'));


//register a handler. When someone visit spesific route we can send a HTML page or jason file

app.get('/data', (req, res)=> {
    res.send({
        name : 'Asli',
        hobbies : ['cooking', 'herbal recepies', 'dancing'],
        location: 'Berlin'
    });

});  

app.get('/about', (req, res)=>{
    res.send('Bu benim about sayfam olmalı');
});


app.listen(port, ()=>{
    console.log('Server is running on :', port)
});