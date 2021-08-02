let fs=require('fs');
var path = require('path');
let pt="D:\\pepcodings\\pepactivity2\\listfolder";
function f3(){
  if (pt== undefined){
          pt= process.cwd();}
  var content=fs.readdirSync(pt);
  // console.log(files);
  let parentFOlderName = path.basename(pt);
      let completePath = "└──" + parentFOlderName;
      // console.log(completePath);
      for (let i = 0; i < content.length; i++) {
        completePath = completePath + "\n\t" + "├──"+content[i];
    }
    console.log(completePath)
  return "f3complete";
}
module.exports={
    fn3:f3,
}




// let fs = require("fs");
// let path = require("path");
// // let srcPath="D:\\pepcodings\\pepactivity2\\listfolder";
// function tree(srcPath) {
//     if (srcPath == undefined)
//         srcPath = process.cwd();
//     // console.log("Tree command", srcPath);
//     let content = fs.readdirSync(srcPath);
//     console.log(content);
//     // └──
//     // ├──
//     let parentFOlderName = path.basename(srcPath);
//     let completePath = "└──" + parentFOlderName;
//     // console.log(completePath);
 
//     for (let i = 0; i < content.length; i++) {
//         completePath = completePath + "\n\t" + "├──"+content[i];
// console.log(completePath)
// console.log("`````````````````");
//     }
    
//     console.log(completePath);
// }
// module.exports={
//       fn3:f3,
//   }