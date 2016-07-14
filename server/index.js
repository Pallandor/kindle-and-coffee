import express from 'express';
import automationMiddleware from './automation';

const app = express();

app.set('port', process.env.PORT || 3000);
app.get('*', automationMiddleware); 

app.listen(app.get('port'), () => {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});
