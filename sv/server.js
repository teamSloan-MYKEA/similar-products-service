require('newrelic');

const express = require('express');
const path = require('path');
const cors = require('cors');

const controllers = require('./controllers/controller.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, './../public')));
app.use('/:id', express.static(path.join(__dirname, './../public')));

app.get('/:id/similar/:id', controllers.get);
app.post('/:id/similar/:id', controllers.post);
app.put('/:id/similar/:id', controllers.put);
app.delete('/:id/similar/:id', controllers.delete);

app.listen(port, () => {
  console.log(`Similar-Products-Service is listening at http://localhost:${port}`);
});
