const client = require("@sendgrid/client");
const helpers = require("@sendgrid/helpers").classes;
const keys = require("../config/keys");

class Mailer extends helpers.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgClient = client.setApiKey(keys.sendGridKey);
    this.from_email = new helpers.EmailAddress("no-reply@tinker-stack.io");
    this.subject = subject;
    this.body = this.addHtmlContent(content);
    this.recipients = this.formatAddresses(recipients);

    this.addClickTracking();
    this.setPersonalizations(this.recipients);
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helpers.EmailAddress(email);
    });
  }

  addClickTracking() {
    const trackingSettings = {
      clickTracking: { enable: true, enableText: true }
    };
    this.setTrackingSettings(trackingSettings);
  }

  async send() {
    console.log("TODO: API request to SendGrid");
  }
}

module.exports = Mailer;
