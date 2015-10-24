'use strict';

const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');
const app = express();

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined) {
  app.use(serveStatic(
    path.resolve(__dirname, '..', 'src'),
    {
      setHeaders: setHeaders
    }
  ));
}

if (process.env.NODE_ENV === 'production') {
  app.use(serveStatic(
    path.resolve(__dirname, '..', 'dist')
  ));
}

app.listen(process.env.PORT || 8080);

function setHeaders(res, path) {
  /* Far future cache headers for jspm files */
  if (path.indexOf('jspm_packages') > -1)
    res.setHeader('Cache-Control', 'public, max-age=86400000');
}
