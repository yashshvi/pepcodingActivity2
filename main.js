let fs=require('fs');
var path = require('path');
const organise = require('./command/organise');


let helpobj=require('./command/help');
let orgobj=require('./command/organise');
let treeobj=require('./command/tree');

let inputarr=process.argv.slice(2); // because in 0,1 position we get node ,path
let filename=inputarr[0];

 if(filename=="tree"){
     console.log(treeobj.fn3());
    
 }else if( filename=="organize"){
     console.log(orgobj.fn2());
     let pf=orgobj.po;

 }else if(filename=="help"){
console.log(helpobj.fn1());
 }