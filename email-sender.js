var nodemailer= require("nodemailer")

 var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'amanimbarki@gmail.com',
        pass: '*********'
    }
 });

 var mailOptions = {
    from: 'amanimbarki@gmail.com',
    to: 'amani.99@hotmail.fr',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  transporter.sendMail(mailOptions,(err,info)=>{
    if(err) {
        console.log(err)
    }else{
        console.log('Email sent' + info.response)
    }
  });