let pt="D:\\pepcodings\\pepactivity2\\listfolder";
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
function f2(){
  

    console.log("organise command executed");
   
    return "f2complete";
}
module.exports={
    fn2:f2,
    po:pt
}