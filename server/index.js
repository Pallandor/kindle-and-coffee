import express from 'express';
import automationHandler from './automation';
import path from 'path';
import startSelenium from './automation/selenium';

const app = express();
const distPath = path.join(__dirname, '..', 'dist');
const indexFileName = 'index.html';

app.set('port', process.env.PORT || 3000);

startSelenium
  .then(childSeleniumProcess => {
    app.on('close', () => childSeleniumProcess.kill());
    app.get('/getcoffee', automationHandler);

    app.use(express.static(distPath));
    app.get('*', (req, res) => res.sendFile(path.join(distPath, indexFileName)));

    app.listen(app.get('port'), () => {
      console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
    });

  })
  .catch(err => res.status(500).send(`Oops! There was an error: ${err}`));
