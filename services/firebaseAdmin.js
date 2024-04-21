const admin = require("firebase-admin");

const serviceAccount = require("../firebase-service-account.json");

// add your firebase db url here
const FIREBASE_DATABASE_URL =
  "https://schedule-notification-cc9df-default-rtdb.firebaseio.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: FIREBASE_DATABASE_URL,
});

const firebaseAdmin = {};

firebaseAdmin.sendMulticastNotification = function (payload) {
  console.log(1);
  const message = {
    notification: {
      title: payload.title,
      body: payload.body,
    },
    tokens: payload.tokens,
    data: payload.data || {},
  };
  console.log("Sending multicast notification:", message);

  return admin.messaging().sendMulticast(message);
};

module.exports = firebaseAdmin;
