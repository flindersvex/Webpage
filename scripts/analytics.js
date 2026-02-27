// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log("I exist!")

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

function add_ga_tag(selector, event_name) {
    try {
        document.querySelectorAll(`[${selector}]`).forEach(element => {
            // console.log(`bound to ${element.href}`)// only for testing
            element.addEventListener("click", () => {
                logEvent(analytics, event_name)
            })
        })
    } catch (e) {
        console.error(`Error appending event ${event_name} to selector ${selector}: ` + e)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    logEvent(analytics, "site_visited")
    
    add_ga_tag("data-ga-rubric", "rubric-visited")
    add_ga_tag("data-ga-discord", "discord-visited")
    add_ga_tag("data-ga-mapDownload", "map-downloaded")
    add_ga_tag("data-ga-nviLink", "nvi-visited")
    add_ga_tag("data-ga-dattaLink", "datta-visited")
    add_ga_tag("data-ga-onshapeLink", "onshape-visited")
    add_ga_tag("data-ga-robotevents", "robotevents-visited")
    add_ga_tag("data-ga-mailto", "mailto-clicked")
    add_ga_tag("data-ga-github", "github-visited")
    add_ga_tag("data-ga-instagram", "instagram-visited")
    add_ga_tag("data-ga-flashgordon", "flashgordon-visited")
})



