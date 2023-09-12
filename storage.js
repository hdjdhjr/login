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

// Initialize Firestore
    const db = firebase.firestore();
// Firebase Storage reference
    var storage = firebase.storage();
    var storageRef = storage.ref();
    


// Check if the user is authenticated
firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log(user.uid , "demo")

        console.log(db)
                // Example: Add a document to a collection
        // Example: Retrieve data from a document with custom ID "ddd"
const customId = `${user.uid}`;
// *******************************************************************
db.collection("users")
    .doc(customId)
    .get()
    .then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            const name = data.name;
            const email = data.email;
            const age = data.age;

            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Age: ${age}`);
            console.log(name)

// +++++++++++++++++++++++++
var photosRef = storageRef.child(name);

// List all items in the 'photos' folder
photosRef.listAll()
    .then(function (result) {
        result.items.forEach(function (itemRef) {
            // Display file name and download URL
            var fileName = itemRef.name;
            var fileUrl;

            itemRef.getDownloadURL()
                .then(function (url) {
                    fileUrl = url;
                    displayFile(fileName, fileUrl);
              console.log(fileName,fileUrl);

                })
                .catch(function (error) {
                    console.error('Error getting download URL:', error);
                });
        });
    })
    .catch(function (error) {
        console.error('Error listing files:', error);
    });

// Display file in the list
function displayFile(fileName, fileUrl) {
    var fileList = document.getElementById('file-list');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
        th.innerText = fileName;
    var td = document.createElement('td');
    var link = document.createElement('a');
    link.href = fileUrl;
    link.target = "_blank";
    link.textContent = "Download";
        td.appendChild(link)

        tr.appendChild(th)
        tr.appendChild(td)
    
    fileList.appendChild(tr);
  console.log(link)
}



// +++++++++++++++++++++++++++++++++++

        } else {
            console.log(`Document with custom ID "${customId}" does not exist.`);
        }
        
    })
    .catch((error) => {
        console.error("Error getting document: name age email data data  " , error);
    });
// **************************************************************


    }else {
        // User is not signed in, redirect to the login page
        window.location.href = 'index.html';
    }
});




function logoutButton(){
            // User is not signed in, redirect to the login page
            window.location.href = 'index.html';
}
// start countdown
let x = 300;
let myInterval = setInterval(time, 1000);
function time(){
  if(x == 1){
    console.log("hello");
    clearInterval(myInterval);
    logoutButton();
  }else{
      x = x-1
  console.log(x)
  }
}
// end countdown
