import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

export async function getCurrentAndNextClass(){

    let now = new Date();
    let hour = now.getHours();

    let snapshot = await getDocs(collection(db, "classes"));

    let classes = [];

    snapshot.forEach(doc => {
        classes.push(doc.data());
    });

    let current = null;
    let next = null;

    for(let c of classes){

        if(hour >= c.startHour && hour < c.endHour){
            current = c;
        }

        if(c.startHour > hour && !next){
            next = c;
        }
    }

    return { current, next };
}