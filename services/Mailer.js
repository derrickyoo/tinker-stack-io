const sgMail = require("@sendgrid/mail");
const helper = sgMail.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {}

module.exports = Mailer;
