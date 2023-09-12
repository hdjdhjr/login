// Initialize Firebase
// Replace with your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBazQ7sknQ8zn53PDQTLPQyXW4BiLXgaoE",
    authDomain: "datasystem-4ab3d.firebaseapp.com",
    projectId: "datasystem-4ab3d",
    storageBucket: "datasystem-4ab3d.appspot.com",
    messagingSenderId: "761286626969",
    appId: "1:761286626969:web:85fb7dace68a93340eb208"
};
firebase.initializeApp(firebaseConfig);

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    // Sign in with Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to the storage page on successful login
            window.location.href = 'storage.html';
        })
        .catch((error) => {
            // Handle login errors here (e.g., display an error message)
            console.error("Login error:", error);
        });
});
