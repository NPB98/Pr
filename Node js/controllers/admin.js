const User=require('../models/users');

exports.getUsers=(req,res,next)=>{
    User.findAll()
    .then(users => {
      //console.log(users);
       res.status(200).json(users);
    })
    .catch(err => console.log(err));
 };

 exports.deleteUser = (req,res,next)=>{
   //console.log(req);
    const id = req.params.userId;
    //console.log(id)
    User.findByPk(id)
    .then(user => {
      //console.log(user);
      return user.destroy();
    })
    .then(result => {
        res.status(202).json('Successfully Deleted');
    })
    .catch((err)=>{
        console.log(err)
    })
 };

 exports.addUser = (req,res,next)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    User.create({
     name:name,
     email:email,
     phone:phone
  })
  .then((result)=>{
      res.status(201).json(result);
  })
  .catch((err)=> console.log(err));
 };
