import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";


export async function getCurrentAndNextClass(){

    let now = new Date();

    let hour = now.getHours();

    let minute = now.getMinutes();

    let currentTime = hour + minute / 60;

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
    classes.sort((a,b)=>
        a.startHour - b.startHour
    );

    let current = null;
    let next = null;

    let minGap = Infinity;

    for(let c of classes){

        let start = c.startHour;
        let end = c.endHour;

        // CURRENT CLASS (more accurate)
        if(
            currentTime >= start &&
            currentTime < end
        ){
            current = c;
        }

        // NEXT CLASS (closest future class)
        if(start > currentTime){

            let gap = start - currentTime;

            if(gap < minGap){

                minGap = gap;

                next = c;
            }
        }
    }

    return {
        current,
        next
    };
}
