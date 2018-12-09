const sgMail = require("@sendgrid/mail");
const helpers = require("@sendgrid/helpers").classes;
const keys = require("../config/keys");

class Mailer extends helpers.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.from_email = new helpers.EmailAddress("no-reply@tinker-stack.io");
    this.subject = subject;
    this.body = this.addHtmlContent(content);
    this.recipients = this.formatAddresses(recipients);
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helpers.EmailAddress(email);
    });
  }
}

module.exports = Mailer;
