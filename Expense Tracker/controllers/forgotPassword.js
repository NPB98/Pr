const Sib = require("sib-api-v3-sdk");
require('dotenv').config();

const client = Sib.ApiClient.instance;
const apiKey = client.authentications['api-key'];
apiKey.apiKey = process.env.API_KEY;

const tranEmailApi = new Sib.TransactionalEmailsApi();
const sender = {
    email: 'nishibiswasroy@gmail.com',
}
exports.forgotPassword = (req,res,next)=>{
    console.log(req);
    const receivers = [
        {
            email: req.body.email,
        },
    ]
    tranEmailApi.sendTransacEmail({
        sender,
        to: receivers,
        subject: 'Subscribe to Cules Coding to become a developer',
        textContent:`
        Cules Coding will help us become a developer
        `
    })
    .then((response)=> {
      res.status(202).json({message:'Mail send successfully'});
    })
    .catch(err => console.log(err));
}

