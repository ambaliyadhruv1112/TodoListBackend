import express from 'express';
import controllers from './src/controllers/index.js';
import cors from 'cors';
import config from 'config';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', controllers);

function startServer() {
  return app.listen(config.get('port'), () => {
    console.log(`server running on port ${config.get('port')}`);
  });
}

startServer();
