const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");

class Mailer {
  constructor({ subject, recipients }, content) {
    super();

    this.message = {
      from: "no-reply@tinker-stack.io",
      subject: subject,
      html: content,
      to: recipients,
      trackingSettings: {
        clickTracking: { enable: true, enableText: true }
      }
    };
    sgMail.setApiKey(keys.sendGridKey);
  }

  async send() {
    try {
      response = await sgMail.sendMultiple(this.message);
      return response;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Mailer;
