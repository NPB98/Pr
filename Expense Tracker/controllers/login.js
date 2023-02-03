const User=require('../models/user');

const addUser = async(req,res,next)=>{
  try{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    if(name==undefined||name.length===0||email==null||email.length===0||password==null||password.length===0){
      return res.status(400).json({err:'Something is missing'});
    }
    const response=await User.create({
     name:name,
     email:email,
     password:password
  })
  if(response){
      return res.status(201).json(response);
  }
}
  catch(err) {
    return res.status(500).json({err:"User Already Exists"});
  }
 };

 const loginUser=async(req,res,next)=>{
  try{
  const email=req.body.email;
  const passWord=req.body.password;
  const user=await User.findAll({where:{email}})
    if(user.length>0){
      if(user[0].password===passWord){
        res.status(200).json({success:true, message:"User logged in successfully"});
      }
      else{
        res.status(401).json({success:false,message:"User not authorized"});
      }
    }
    else{
      res.status(404).json({success:false,message:"User not found"});
    }
  }
  catch(err){
    res.status(500).json({success:false,message:err});
  }
 }
 module.exports={
  addUser,
  loginUser
 }