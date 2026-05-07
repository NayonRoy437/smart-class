import { getCurrentAndNextClass }
from "./scheduleEngine.js";

async function updateUI(){

    let data =
    await getCurrentAndNextClass();

    // CURRENT CLASS
    if(data.current){

        document.getElementById("current").innerHTML =
        "📘 Current: " +
        data.current.subject;

    }else{

        document.getElementById("current").innerHTML =
        "❌ No Running Class";
    }

    // NEXT CLASS
    if(data.next){

        document.getElementById("next").innerHTML =
        "⏳ Next: " +
        data.next.subject;

    }else{

        document.getElementById("next").innerHTML =
        "🏁 No More Classes Today";
    }
}

// AUTO UPDATE
setInterval(updateUI,5000);

updateUI();
