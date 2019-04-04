const dotenv = require('dotenv').config({path:'./.env'});
const express = require('express');
const port = process.env.PORT || 8000 ;
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const cors =require('cors')
var mongoose = require('mongoose');
var request = require('request');

const app = express();

app.use(cors());
app.use(logger('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/url',(req,res)=>{

    request('http://integration.noviretrack.com/ws3/rest/controller/services/%7Bmethod:%22ref_CurrentStatusDataSendWF%22,username:%22kelvin_int%22,password:%22password%22%7D/%7BvehicleNo:%22%22%7D', function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML for the Google homepage.
    return res.send(body);   
    });

})


const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server listening on port : ${port}.`)
})