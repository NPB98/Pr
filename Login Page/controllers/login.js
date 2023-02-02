const User=require('../models/user');

exports.addUser = (req,res,next)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    if(name==undefined||name.length===0||email==null||email.length===0||password==null||password.length===0){
      return res.status(400).json({err:'Something is missing'});
    }
    User.create({
     name:name,
     email:email,
     password:password
  })
  .then((response)=>{
      return res.status(201).json(response);
  })
  .catch((err)=> {
    return res.status(500).json(err);
  })
 };