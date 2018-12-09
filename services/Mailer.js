const sgMail = require("@sendgrid/mail");
const helper = sgMail.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mailer {
  constructor({ subject, recipients }, content) {
    super();

    this.from_email = new helper.from_email("no-reply@tinkerstack.io");
    this.subject = subject;
    this.body = new helper.content("text/html", content);
    this.recipients = this.formatAddresses(recipients);
  }
}

module.exports = Mailer;
