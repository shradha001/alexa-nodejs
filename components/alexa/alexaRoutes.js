'use strict';

const alexaController = require('./alexaController');

module.exports = app => {
  app.post('/alexa/webhook', async (req, res, next) => {
    console.log('************ GOT A MESSAGE HOOK FROM ALEXA **************');
    try {
      const payload = req.body;
      const successResponse = await alexaController.getResponse(payload);
      res.json(successResponse.responseBody);
    } catch (e) {
      res.status(500).send('Error during the request');
    }
  });
};
