console.log("Clock Running");
console.log("Clock Script Running");
function updateClock(){

    let now = new Date();

    let clockEl =
    document.getElementById("clock");

    let dateEl =
    document.getElementById("date");

    if(clockEl){
        clockEl.innerHTML =
        now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });
    }

    if(dateEl){
        dateEl.innerHTML =
        now.toDateString();
    }
}

setInterval(updateClock, 1000);
updateClock();
console.log("Clock Script Loaded");
