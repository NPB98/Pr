const path=require('path');
const rootDir=require('../util/path');
exports.contactDetails=((req, res, next) => {
    //console.log('contact');
    res.sendFile(path.join(rootDir,'views','contact.html'));
  });

  exports.successForm= ((req,res,next)=>{
    res.send('<h3>Form successfully filled</h3>')
  })