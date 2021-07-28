let fs=require('fs');
var path = require('path');
let pt="D:\\pepcodings\\pepactivity2\\listfolder";
function f3(){
  var files=fs.readdirSync(pt);
  console.log(files);
  return "f3complete";
}
module.exports={
    fn3:f3,
}