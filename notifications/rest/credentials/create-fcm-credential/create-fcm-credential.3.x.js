// Download the Node helper library from www.twilio.com/docs/libraries/node#installation
// These identifiers are your accountSid and authToken from
// https://www.twilio.com/console
// To set up environmental variables, see http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const credentialOpts = {
  friendlyName: 'MyFCMCredential',
  secret: 'fcm_secret',
  type: 'fcm',
};

client.notify.credentials
  .create(credentialOpts)
  .then(credential => console.log(credential.sid))
  .catch(error => console.log(error))
  .done();
