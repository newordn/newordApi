var topic = 'notification'
var admin = require("firebase-admin")

var serviceAccount = require("./portfolio.json")
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://portfolio-f5927.firebaseio.com"
});

const notify = (data)=>{
  
var message = {
    data ,
    topic
  };
  
  // Send a message to the device corresponding to the provided
  // registration token.
  admin.messaging().send(message)
    .then((response) => {
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    })
}
module.exports={
  notify
}