const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
 
app.use(serve(__dirname + '/../../asset_do_not_modify'));
app.use(serve(__dirname + '/../../mail_do_not_modify'));
 
app.listen(3003);