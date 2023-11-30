// uhrzeit.js
function aktualisiereUhrzeit() {
    var jetzt = new Date();
    var stunden = jetzt.getHours();
    var minuten = jetzt.getMinutes();
    var sekunden = jetzt.getSeconds();

    stunden = stunden < 10 ? "0" + stunden : stunden;
    minuten = minuten < 10 ? "0" + minuten : minuten;
    sekunden = sekunden < 10 ? "0" + sekunden : sekunden;

    var uhrzeitString = stunden + ":" + minuten + ":" + sekunden;

    document.getElementById("clock").innerHTML = uhrzeitString;
}

setInterval(aktualisiereUhrzeit, 1000);
aktualisiereUhrzeit(); // Initial aufrufen, um die Uhrzeit sofort anzuzeigen
