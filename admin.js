import { db } from "./firebase.js";
updateDoc
import {

collection,
addDoc,
deleteDoc,
doc,
onSnapshot,
updateDoc

}

from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { hasConflict } from "./conflict.js";

import {

collection,
addDoc,
deleteDoc,
doc,
onSnapshot,
getDocs

}

from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const tableBody =
document.getElementById("classTableBody");

const message =
document.getElementById("message");

let allClasses = [];


// ADD CLASS
window.addClass = async function(){

    let subject =
    document.getElementById("subject").value;

    let teacher =
    document.getElementById("teacher").value;

    let room =
    document.getElementById("room").value;

    let startHour =
    parseInt(document.getElementById("startHour").value);

    let endHour =
    parseInt(document.getElementById("endHour").value);

    let newClass = {

        subject,
        teacher,
        room,
        startHour,
        endHour
    };

    // CONFLICT CHECK
    if(hasConflict(allClasses,newClass)){

        message.innerHTML =
        "❌ Room conflict detected";

        return;
    }

    // SAVE TO FIREBASE
    await addDoc(collection(db,"classes"),newClass);

    message.innerHTML =
    "✅ Class Added";
};


// REALTIME LISTENER
onSnapshot(collection(db,"classes"),(snapshot)=>{

    tableBody.innerHTML = "";

    allClasses = [];

    snapshot.forEach((docSnap)=>{

        let c = docSnap.data();

        allClasses.push(c);

        tableBody.innerHTML += `

        <tr>

            <td>${c.subject}</td>

            <td>${c.teacher}</td>

            <td>${c.room}</td>

            <td>${c.startHour}:00 - ${c.endHour}:00</td>

            <td>

                <button
                class="delete-btn"
                onclick="deleteClass('${docSnap.id}')">

                Delete

                </button>

            </td>

        </tr>
        `;
    });

});


// DELETE CLASS
window.deleteClass = async function(id){

    await deleteDoc(doc(db,"classes",id));

};
