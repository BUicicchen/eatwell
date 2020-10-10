import admin from 'firebase-admin';

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: process.env.eatwell-f06d9,
      private_key: process.env.AIzaSyCigAOzXJYOEbrWtZBo6ZkvX0SmJf0S4Jg,
      client_email: process.env.FIREBASE_CLIENT_EMAIL
    }),
    databaseURL: "https://eatwell-f06d9.firebaseio.com"
  });
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack);
  }
}

export default admin.firestore();
