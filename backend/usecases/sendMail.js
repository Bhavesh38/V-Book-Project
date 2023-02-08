const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const dotenv = require("dotenv");
dotenv.config();
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
);

// send mail
const sendEmail = async (to, url, name, txt) => {
  console.log("send mail");

  try {
    console.log("before1 transport");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.example.com",
      port: 587,
      secure: false,
      auth: {
        user: "mern.dev.bhavesh38@gmail.com",
        pass: "Apurv@123",
      },
    });
    console.log("before transport");
    var mailOptions = {
      from: 'mern.dev.bhavesh38@gmail.com',
      to: to,
      subject: 'Email Verification',
      html: `<p>Please click the following link to verify your email:</p>' +
            '<a href="${url}">Verify Email</a>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("error occures bhavesh")
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    // await transporter.sendMail({
    //   from: "romanRahul015@gmail.com",
    //   to: to,
    //   subject: url,
    //   text: txt,
    // });
    console.log("email sent successfully");
  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return error;
  }











  // oauth2Client.setCredentials({
  // access_token : MAILING_SERVICE_CLIENT_SECRET,
  //   refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  // });

  // const accessToken = oauth2Client.getAccessToken();
  // const smtpTransport = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     type: "OAuth2",
  //     user: SENDER_EMAIL_ADDRESS,
  //     clientId: MAILING_SERVICE_CLIENT_ID,
  //     clientSecret: MAILING_SERVICE_CLIENT_SECRET,
  //     refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
  //     accessToken,
  //   },
  // });

  // const mailOptions = {
  //   from: SENDER_EMAIL_ADDRESS,
  //   to: to,
  //   subject: "Vbook Activation mail",
  //   html: `
  //           <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
  //           <img src="https://i.imgur.com/4jq68uE.png" alt style="display: block; margin:auto;" width="205"; >
  //           <h2 style="text-align: center; text-transform: uppercase;color: rgb(37, 132, 214);">Welcome to EduSpace.</h2>
  //           Hey <strong> ${name},</strong>
  //           Thanks for signing up at EduSpace.   
  //           To complete your registration, please confirm your email <strong>${to}</strong> by clicking the following button:

  //           <div style="text-align:center">   
  //           <a href=${url} style="background: rgb(37, 132, 214); text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
  //           </div>
  //           <p>If the button doesn't work for any reason, you can also click on the link below:</p>

  //           <div>${url}</div>
  //           </div>
  //       `,
  // };

  // smtpTransport.sendMail(mailOptions, (err, infor) => {
  //   console.log(err);
  //   if (err) return err;
  //   return infor;
  // });
};

module.exports = sendEmail;
