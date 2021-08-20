'use strict'

const express = require('express');
const app = express();



const notFoundHandler = require('./error-handlers/404');
const errHandler = require('./error-handlers/500');
const loggerMiddleware = require('./middleware/logger');

const foodRouter = require('./routes/food')
const clothesRouter = require('./routes/clothes')

app.use(express.json());
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello 👋 ')
})

app.use(foodRouter)
app.use(clothesRouter)

app.get('/bad', (req, res, next) => {
    next('error from bad end point');
});

app.use('*', notFoundHandler);
app.use(errHandler);

module.exports = {
    server: app,
    start: PORT => {
        app.listen(PORT, () => {
            console.log(`Server is up on port ${PORT}`)
        })
    }
}