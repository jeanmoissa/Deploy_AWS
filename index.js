const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'Server is up!' });
});

app.get('/atualizou', (request, response) => {
    return response.json({ message: 'Atualizou mesmo!' });
});

app.get('/teste', (request, response) => {
    return response.json({ name,date });
});

app.listen(3333);
