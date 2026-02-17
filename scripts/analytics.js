// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1YlB6ub5GVSBr0uh3CkQ5cv4qC2MsSWY",
  authDomain: "www.flindersvex.com",
  projectId: "fvt-website",
  storageBucket: "fvt-website.firebasestorage.app",
  messagingSenderId: "914827557069",
  appId: "1:914827557069:web:e35ccc4e77ee105d989184",
  measurementId: "G-T1HG2XD614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.addEventListener("DOMContentLoaded", () => {
    logEvent(analytics, "site_visited")
})

document.getElementById("joining-rubric-button").addEventListener("click", () => {
    logEvent(analytics, "rubric-visited")
})
document.getElementById("joining-discord-button").addEventListener("click", () => {
    logEvent(analytics, "discord-visited")
})

