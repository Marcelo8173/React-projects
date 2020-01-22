
const { Router } = require('express')
const DevControlle = require('./controller/DevController')
const SearchController = require('./controller/SearchController')

const routes = Router();

routes.get('/devs', DevControlle.index);
routes.post('/devs', DevControlle.store)

routes.get('/search', SearchController.index)
module.exports = routes;
