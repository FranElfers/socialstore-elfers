import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
	apiKey: "AIzaSyA9EsWnjUgC-YC3300M5gVuZbIg8uVfQCU",
	authDomain: "socialstore-a7284.firebaseapp.com",
	projectId: "socialstore-a7284",
	storageBucket: "socialstore-a7284.appspot.com",
	messagingSenderId: "365988386653",
	appId: "1:365988386653:web:37e3103b62d63b56b5fab4"
})

export const getFirebase = () => app
export const getFirestore = () => firebase.firestore(app)