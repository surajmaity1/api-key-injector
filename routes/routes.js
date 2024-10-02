const express = require('express');
const apiRouter = express.Router();
const { fetchApiKey, getEnvironmentKey } = require('../controllers/controllers');

apiRouter.get('/key-generate', fetchApiKey);
apiRouter.get('/env-key', getEnvironmentKey);

module.exports = apiRouter;
