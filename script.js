function updateClock(){

    let now = new Date();

    document.getElementById("clock").innerHTML =
    now.toLocaleTimeString();

    document.getElementById("date").innerHTML =
    now.toDateString();

}

setInterval(updateClock,1000);
updateClock();