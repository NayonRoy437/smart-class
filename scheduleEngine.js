import { db } from "./firebase.js";

import {
collection,
getDocs
}

from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";


export async function getCurrentAndNextClass(){

    let now = new Date();

    let hour = now.getHours();

    let minute = now.getMinutes();

    let currentTime =
    hour + minute / 60;

    let snapshot =
    await getDocs(collection(db,"classes"));

    let classes = [];

    snapshot.forEach(doc => {

        classes.push({

            id: doc.id,

            ...doc.data()

        });

    });

    // SORT
    classes.sort(

        (a,b)=>

        Number(a.startHour) -

        Number(b.startHour)

    );

    let current = null;

    let next = null;

    let minGap = Infinity;


    for(let c of classes){

        let start =
        Number(c.startHour);

        let end =
        Number(c.endHour);


        // CURRENT CLASS
        if(

            currentTime >= start &&

            currentTime < end

        ){

            current = c;
        }


        // NEXT CLASS
        if(start > currentTime){

            let gap =
            start - currentTime;

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
