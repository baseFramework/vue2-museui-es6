var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var AV = require('leanengine');
var path = require('path');
var meta = require('./package.json');
var init = require('./conf/init'); //init AV

process.on('uncaughtException', function(err) {
  (app.get('logger') || console).error('Uncaught exception:\n', err.stack);
});

app.set('name', meta.name);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set('version', meta.version);
app.set('port', process.env.PORT || 5001);
app.set('views', path.join(__dirname, 'dist', 'html'));
app.use(express.static(__dirname + '/dist'));
app.set('logger', console);
app.enable('trust proxy');

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
});

app.get('/', function(req, res) {
  res.send('hello');
  //res.render('index');
});

app.get('/api/list', function(req, res) {
  if (req.query && req.query.start && req.query.size && req.query.object){
    var obj = req.query.object
    var query = new AV.Query(obj); //生物列表数据
    var response = {};
    query.addDescending('data_id');
    query.skip(req.query.start);
    query.limit(req.query.size);
    query.find({
      success: function(results) { //查询数据回调成功
        // results is an array of AV.Object.
        response.code = '200';
        response.data = {};
        response.data.results = results;
        // console.log(results.length);
        response.msg = 'success';
        res.send(response);
      },

      error: function(error) { //查询数据回调失败
        response.code = '100';
        response.msg = 'query error';
        res.send(response);
      }
    });
  }else{
    res.send({
      "code": "10000",
      "msg": "参数异常",
      "data": {}
    });
  }
});


app.get('/api/detail', function(req, res) {
  if (req.query && req.query.objId && req.query.object ){
    var obj = req.query.object;
    var objId =  req.query.objId
    var query = new AV.Query(obj); //生物列表数据
    var response = {};
    query.get(objId,{
      success: function(results) { //查询数据回调成功
        // results is an array of AV.Object.
        response.code = '200';
        response.data = {};
        response.data.results = results;
        console.log(results.length);
        response.msg = 'success';
        res.send(response);
      },

      error: function(error) { //查询数据回调失败
        response.code = '100';
        response.msg = 'query error';
        res.send(response);
      }
    })
  }else{
    res.send({
      "code": "10000",
      "msg": "参数异常",
      "data": {}
    });
  }
});

if (require.main === module) {
  app.listen(app.get('port'), function() {
    console.log('[%s] Express server listening on port %d',
      app.get('env').toUpperCase(), app.get('port'));
  });
}
