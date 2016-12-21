const path = require('path')
const express = require('express')
var pg = require('pg');

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })
    app.get('/db', function (request, response) {
      pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('SELECT * FROM test_table', function(err, result) {
          done();
        response.json({result:result.rows});
        });
      });
    });

    return app
  }
}
