let fs=require('fs');
var path = require('path');
let pt="D:\\pepcodings\\pepactivity2\\listfolder";
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
function pathfun(spath,dpath){
    let source=path.join(pt,spath);  
    let destination= path.join(dpath); 
    let lastpart=path.basename(source);  
      let despath=path.join(destination,lastpart);
    fs.copyFileSync(source,despath);
}
function f2(){
  

    let folderToBeOrganize = "D:\\pepcodings\\pepactivity2\\listfolder"; 
    let con=fs.readdirSync(folderToBeOrganize);
    let organizedDir = path.join(folderToBeOrganize,"Organized");
    fs.mkdirSync(organizedDir);
    // console.log(con);
    for(let i=0;i<con.length;i++){
        let tempname=con[i];
        // console.log(tempname);// printing name of file
     var ext = path.extname(con[i]);
        if(ext==".mp3"|| ext==".mkv"| ext==".mp4"){
            let organizeaudio=path.join(organizedDir,"video");
            if(!fs.existsSync(organizeaudio)){
                    fs.mkdirSync(organizeaudio);
                }
                pathfun(tempname,organizeaudio);
                    
        }
        else if(ext==".zip" || ext== ".7z" || ext== "rar"|| ext== "tar" || ext== "gz"|| ext== "ar"|| ext== "iso"|| 
        ext== "xz"){
            let archives=path.join(organizedDir,"archives");
            if(!fs.existsSync(archives)){
            fs.mkdirSync(archives);
            }
            pathfun(tempname,archives);
                   
        }
        else if(ext==".docx"||ext==".doc"|| ext== ".pdf" || ext== ".xlsx"|| ext== ".xls"||ext==".odt"||
        ext== ".ods"|| ext==".odp"||ext==".odg"|| ext==".odf"|| ext==".txt"|| ext== ".ps"|| ext==".tex"){
            let documents=path.join(organizedDir,"document");
            if(!fs.existsSync( documents)){
            fs.mkdirSync(documents);
            }
            pathfun(tempname,documents);
        }else{
            let others=path.join(organizedDir,"help");
            if(!fs.existsSync( others)){
            fs.mkdirSync(others);
        }
        pathfun(tempname,others);
        }
    }

    // console.log("organise command executed");
   
    return "f2complete";
}
module.exports={
    fn2:f2,
    po:pt
}



// function call
// let source=path.join(pt,tempname);  
                    // // console.log("1",source);
                    // let destination= path.join(organizeaudio); // tempname bhi kar rahi thi // path of destination folder
                    // //  console.log("2",destination);
                    // let lastpart=path.basename(source);  // in process of copying file in the destination folder we actuallu put //(last part of source),then join with destination and our new folder is ready
                    
                    // let despath=path.join(destination,lastpart);
                    // // console.log("3",despath);
                    // fs.copyFileSync(source,despath);
                    
                    // // console.log("file copy");