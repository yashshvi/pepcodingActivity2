let fs=require('fs');
var path = require('path');
const organise = require('./command/organise');


// let helpobj=require('./command/help');
let orgobj=require('./command/organise');
// let treeobj=require('./command/tree');

let inputarr=process.argv.slice(2); // because in 0,1 position we get node ,path
let filename=inputarr[0];

 if(filename=="tree"){
     console.log(treeobj.fn3());
     console.log(treeobj.pt);
 }else if( filename=="organize"){
     console.log(orgobj.fn2());
     let pf=orgobj.po;
    console.log(pf);
   
//    let con=fs.readdirSync("D:\\pepcodings\\pepactivity2\\listfolder");
//    console.log(con);
  


//    for(let i=0;i<con.length;i++){
//        let tempname=con[i];
//        console.log(tempname);// printing name of file
//     var ext = path.extname(con[i]);
//     console.log(ext);  
//     // if(ext==".png"){
//     //     console.log("hi");
//     //     let source="D:\\pepcoding\\module1\\f1.txt";   // path of source file
//     //     let destination="D:\\pepcoding\\module1\\mydirect"; // path of destination folder
//     //     let lastpart=path.basename(source);  // in process of copying file in the destination folder we actuallu put //(last part of source),then join with destination and our new folder is ready
//     //     console.log(lastpart);
//     //     let despath=path.join(destination,lastpart);
//     //     fs.copyFileSync(source,despath);
//     //     console.log("file copy");

//     // }

//    }

 }