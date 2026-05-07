import { db }
from "./firebase.js";

import {
collection,
getDocs
}

from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";


export async function getCurrentAndNextClass(){

    let now = new Date();

    let hour = now.getHours();

    let snapshot =
    await getDocs(collection(db,"classes"));

    let classes = [];

    snapshot.forEach(doc => {

        classes.push({

            id: doc.id,

            ...doc.data()

        });

    });

    // SORT BY START TIME
    classes.sort(
        (a,b) => a.startHour - b.startHour
    );

    let current = null;

    let next = null;

    for(let c of classes){

        // CURRENT CLASS
        if(
            hour >= c.startHour &&
            hour < c.endHour
        ){

            current = c;
        }

        // NEXT CLASS
        if(
            c.startHour > hour &&
            !next
        ){

            next = c;
        }
    }

    return {

        current,
        next

    };
}
