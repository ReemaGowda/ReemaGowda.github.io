const express = require('express')
const app = express()
const port = 3000

var http = require('http');
var fs = require('fs');
var path = require('path')

// app.get('index.html', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.use( express.static(path.join(__dirname, 'public')));

fs.readFile('/Users/reemagowda/Desktop/Portfolio/index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(port);
});

