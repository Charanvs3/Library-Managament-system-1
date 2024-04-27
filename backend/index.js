const express = require('express');

const app = express();

require('./startup/db')();
require('./startup/prod')(app);
require('./startup/routes')(app);

const port = process.env.PORT || 4000;
// app.listen(port, () => winston.info(`Listening on port ${port}...`));
app.listen(port, () => console.log(`Listening on port ${port}...`));
// const port = config.get("PORT") || 5000;
// app.listen(port, () => winston.info(`Listening on port ${port}...`));
