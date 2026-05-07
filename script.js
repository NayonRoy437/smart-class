function updateClock(){

    let now = new Date();

    let clockEl =
    document.getElementById("clock");

    let dateEl =
    document.getElementById("date");

    // SAFETY CHECK
    if(clockEl){
        clockEl.innerHTML =
        now.toLocaleTimeString();
    }

    if(dateEl){
        dateEl.innerHTML =
        now.toDateString();
    }
}

setInterval(updateClock,1000);

updateClock();
<script src="script.js"></script>
