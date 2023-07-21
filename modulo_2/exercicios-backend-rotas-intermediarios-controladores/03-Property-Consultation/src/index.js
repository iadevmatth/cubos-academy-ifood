const express = require('express');
const { propertyList, getProperty } = require('./controladores/imoveis')
const app = express();

app.get('/property', propertyList);

app.get('/property/:id', getProperty);

app.listen(8000)
