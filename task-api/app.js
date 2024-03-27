const express = require('express');
const routes = require('./routes');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// v1 api routes
app.use('/api', routes);

app.use((req, res, next) => {
    // next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
    return res.status(404).json({
        message: "Not found"
    });
});

module.exports = app;