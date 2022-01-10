var nodemailer = require("nodemailer");
var transport = nodemailer.createTransport
    ({


        host: 'smtp.gmail.com',
        post: 587,
        secure: false,
        requireTLS: true,

        auth: {

            user: 'sulochnapatel2020@gmail.com',
            pass: 'sulochna!@#$5'
        }

    })
var mailOption =
{
    from: 'sulochnapatel2020@gmail.com',
    to: 'sulochnapatel2020@gmail.com',
    subject: 'test node mail',
    test: 'hello i am mahi'
}
transport.sendMail(mailOption, (error, info) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("email has been send", info.res);
    }
})