const express = require('express');
const server = require('./app');
const mongoose = require('mongoose');

const dbUrl = "mongodb+srv://supriya:qr9OGWREU0DfBK9Q@cluster0.iqwgy.mongodb.net/register?retryWrites=true&w=majority";

mongoose.connect(dbUrl, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(err);
})

server.listen(5000, () => {
    console.log('app started');
});