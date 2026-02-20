// Firebase initialisation minimale
// Ne fait rien si Firebase n'est pas utilisé
if (typeof firebase !== "undefined") {
    var firebaseConfig = {};
    firebase.initializeApp(firebaseConfig);
    var db = firebase.database();
}
