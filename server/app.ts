
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as path from 'path';

import setRoutes from './routes';

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongodbURI = 'mongodb://localhost:27017/appdb';

mongoose.Promise = global.Promise;
mongoose.connect(mongodbURI)
  .then(db => {
    console.log('Connected to MongoDB');

    setRoutes(app);

    app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    });

    if (!module.parent) {
      app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}`));
    }
  })
  .catch(err => console.error(err));

export { app };
