const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.dev.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const compiler = webpack(config);
const middleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  silent: true,
  stats: 'errors-only',
});
const fs = middleware.fileSystem;

app.use(middleware);
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('build'))
app.get('*', function(req, res) {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) res.sendStatus(404);
     else res.send(file.toString());
  });
});

app.listen(process.env.PORT || 8080, (err) => {
    if(err) console.log(`error: ${err}`);
    else console.log('Server listening');
});
