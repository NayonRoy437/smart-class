import { getCurrentAndNextClass } from "./scheduleEngine.js";

async function updateUI(){

    let data = await getCurrentAndNextClass();

    if(data.current){
        document.getElementById("current").innerHTML =
        "Current: " + data.current.subject;
    }

    if(data.next){
        document.getElementById("next").innerHTML =
        "Next: " + data.next.subject;
    }
}

setInterval(updateUI, 5000);
updateUI();