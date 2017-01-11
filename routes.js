var url= require('url')
var fs= require('fs')
function renderHTML(path,res)
{
  fs.readFile(path,null,function(error,data){
    if(error)
    {
      res.writeHead(404);
      res.write('file not found');
    }
    else {
      res.write(data);
    }
    res.end();
  });
}
module.exports={
  requestHandler:function(req,res)
  {
    var path=url.parse(req.url).pathname;
    switch (path) {
      case '/':
        renderHTML('./index.html',res);
        break;
      default:
      res.writeHead(404);
      res.write('not found route');
      res.end();

    }
  }

}
