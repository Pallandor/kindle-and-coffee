import express from 'express';
import path from 'path';

const app = express();

app.set('port', process.env.PORT || 3000);
app.get('*', (req,res) => res.send('Testing server 2.0')); 

app.listen(app.get('port'), () => {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});
