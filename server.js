const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/flink-dashboard'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/DigitalDesignPractice0/index.html'));
});


app.listen(process.env.PORT || 8080);