let fs = require("fs");
let path = require("path");
srcPath="D:\\pepcodings\\pepactivity2\\listfolder";
function tree(srcPath) {
    if (srcPath == undefined)
        srcPath = process.cwd();
    // console.log("Tree command", srcPath);
    let content = fs.readdirSync(srcPath);
    console.log(content);
    // └──
    // ├──
    let parentFOlderName = path.basename(srcPath);
    let completePath = "└──" + parentFOlderName;
    // console.log(completePath);
 
    for (let i = 0; i < content.length; i++) {
        completePath = completePath + "\n\t" + "├──"+content[i];
console.log(completePath)
console.log("`````````````````");
    }
    
    console.log(completePath);
}
module.exports = {
    treeFn: tree
}