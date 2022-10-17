const express = require("express");
const app = express();
const winston = require("winston");

require('./startup/logging');
require('./startup/config')();
require('./startup/validation')();
require('./startup/database')(); 
require('./startup/routes')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
