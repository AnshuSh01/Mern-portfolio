const nodeMailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

//Transport

const transPorter = nodeMailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

const sendEmailController = (req, res) => {
  try {
    const { email, name, msg } = req.body;

    //validation
    if (!email || !name || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please provide all details",
      });
    }

    //email matter
    transPorter.sendMail({
      to: "anshush0609@gmail.com",
      from: "anshush0609@gmail.com",
      subject: "Mern Portfolio Contact",
      html: `<h5>Sender Information</h5>
      <ul>
      <li>Name : ${name}</li>
      <li>Email : ${email}</li>
      <li>Message : ${msg}</li>
      </ul>
      `,
    });
    return res.status(200).send({
      success: true,
      message: "Your Message Sent Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

module.exports = { sendEmailController };
