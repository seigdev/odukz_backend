const twilio = require('twilio');

function sendSms(body,to) {
    const client = twilio('ACc837fae39258cf7e3ad0c965c7f48bf7', 'd13339360106662b7a945a4f5a4557e3',);
    // Send SMS
    client.messages
      .create({
        body: body,
        from: '+16516615073',
        to: to,
      })
      .then((message) => console.log('SMS sent:', message.sid))
      .catch((error) => console.error('Error sending SMS:', error));
  
  }

  exports.modules = sendSms