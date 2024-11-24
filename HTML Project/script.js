const express = require('express'),
        app     =express();

app.use(express.static(__dirname+"/Azad Express"));
app.listen(9075, ()=>{
    console.log('Server running at address: http://localhost:9075');
})