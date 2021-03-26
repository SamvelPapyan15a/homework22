//2. Ստեղծել express framework-ով web aplication : Ստեղծել /users route , որին կարող են կատարել GET, POST , PUT և DETELE մեթոդներով request-ներ ։ Բոլորի դեպքում վերադարձնում որպես response ժամը և մեթոդի անունը։

const express = require('express');
const http = require('http');

const app = express();

const router = require('./router');

router(app);

app.listen(3000,(req,res)=>{
    console.log('localhost:3000');
});