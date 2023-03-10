
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBwD77ha7zXF6PvyD4Ni8WsF926uKv3KE8",
    authDomain: "v-book-d38ee.firebaseapp.com",
    projectId: "v-book-d38ee",
    storageBucket: "v-book-d38ee.appspot.com",
    messagingSenderId: "73665358281",
    appId: "1:73665358281:web:e85c85a6e287bdaf29e018",
    measurementId: "G-45HJMJZ55R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);