const path=require('path');
//const express=require('express');
//const app=express();
const rootDir=require('../util/path');
//app.use(express.static(path.join(__dirname,'public')));
exports.get404Page=((req,res,next)=>{
    //console.log('404');
        res.sendFile(path.join(rootDir,'views','404.html'));
    });
    
