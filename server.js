const express = require('express');

var app = express();

app.use(express.static(__dirname + '/client/public'));


//register a handler. When someone visit spesific route we can send a HTML page or jason file

app.get('/', (req, res)=> {
    res.send({
        name : 'Asli',
        hobbies : ['cooking', 'herbal recepies', 'dancing'],
        location: 'Berlin'
    });

});  // iki parametre alır. ilki URL, ikinci Fonskiyon. Fonksiyon da 2 parametre alır. Reuest ve Respond

app.get('/about', (req, res)=>{
    res.send('Bu benim about sayfam olmalı');
});

//Get handlerımız yukarıdaki gibi. Ama çalışması için bir port belirtmemiz lazım. Bu local da olabilir online da. Aşağıdaki app.listen'ı mutlaka belirtiyoruz.

app.listen(3030, ()=>{
    console.log('Server is running on Localhost 3030!')
});