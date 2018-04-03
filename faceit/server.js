const express = require('express');
const app = express();



app.get('/tasks', function(req, res) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');


    res.json([
            {
                completed: true,
                title: 'Test task',
                description: 'Test Description'
            },

            {
                completed: true,
                title: 'Test task',
                description: 'Test Description'
            },
            {
                completed: false,
                title: 'Test task',
                description: 'Test Description'
            },
            {
                completed: true,
                title: 'Test task',
                description: 'Test Description'
            },
            {
                completed: false,
                title: 'Test task',
                description: 'Test Description'
            },
            {
                completed: false,
                title: 'Test task',
                description: 'Test Description'
            },
            {
                completed: true,
                title: 'Test task',
                description: 'Test Description'
            },
            {
                completed: true,
                title: 'Test task',
                description: 'Test Description'
            },
            {
                completed: true,
                title: 'Test task',
                description: 'Test Description'
            },
            {
                completed: true,
                title: 'Test task',
                description: 'Test Description'
            }
        ]);


    res.send(JSON.stringify(res));



});

app.listen(3000, 'localhost');