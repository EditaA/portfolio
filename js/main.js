const burger = document.querySelector(".burger");
const body = document.querySelector("body")

burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    body.classList.toggle("menu-shown")
})

// Contact Form
const form = document.querySelector('.form');
const emailInput = form.querySelector('#email')

// Firebase

var firebaseConfig = {
    apiKey: "AIzaSyCWWjM0Y-cX4JsTaxf2DHqfpmrnn2LcuMs",
    authDomain: "my-contact-form-edita.firebaseapp.com",
    databaseURL: "https://my-contact-form-edita.firebaseio.com",
    projectId: "my-contact-form-edita",
    storageBucket: "",
    messagingSenderId: "954371087617",
    appId: "1:954371087617:web:69739e3267a2fe52"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebasePush = ({ name, email, message }) => {

    const messageRef = firebase.database().ref('messages');
    const newMsgRef = messageRef.push();

    newMsgRef.set({ name, email, message });
}

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        const msgDetails = {
            name: '',
            email: '',
            message: '',
        }

        for (let index = 0; index < e.target.length; index++) {
            if (e.target[index].id) {
                msgDetails[e.target[index].id] = e.target[index].value
                e.target[index].value = '';
            }
        }

        firebasePush(msgDetails)
        return alert('Data Successfully sent to Realtime Database');
    });
}