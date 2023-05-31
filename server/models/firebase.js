// const multer = require("multer");
const firebsae = require("firebase/app");
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  };

// Initialize Firebase
firebsae.initializeApp(firebaseConfig);
// const storage = getStorage();
// const upload = multer({ storage: multer.memoryStorage() });


// module.exports = {
//     storage,
//     upload
//   };

