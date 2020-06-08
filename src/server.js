const express = require('express');
const hbs = require('hbs');

require('./hbs/helpers');

const app = express();
const port = 8080;

// Express HBS engine
app.use(express.static(`${__dirname}/public`));
hbs.registerPartials(`${__dirname}/views/partials`);

app.set('view engine', 'hbs');

app.get('/', (req, res) => res.render(`${__dirname}/views/home.hbs`, {
  name: 'joalbert gonzález',
}));

app.get('/about', (req, res) => res.render(`${__dirname}/views/about.hbs`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

