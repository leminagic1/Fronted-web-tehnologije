FiltrirajRaspored.postaviRaspored(document.getElementById("sadrzaj"));

document.getElementById("naziv").onkeydown=function(){
 
    document.getElementById("tip").value="";
    document.getElementById("vrijeme").value="";
    document.getElementById("dan").value="";
}
document.getElementById("tip").onkeydown=function(){
 
    document.getElementById("naziv").value="";
    document.getElementById("vrijeme").value="";
    document.getElementById("dan").value="";
}
document.getElementById("vrijeme").onchange=function(){
 
    document.getElementById("tip").value="";
    document.getElementById("naziv").value="";
    document.getElementById("dan").value="";
}
document.getElementById("dan").onkeydown=function(){
 
    document.getElementById("tip").value="";
    document.getElementById("vrijeme").value="";
    document.getElementById("naziv").value="";
}

document.getElementById("dugme").onclick = function () {
    var ime = document.getElementById("naziv").value;
    FiltrirajRaspored.filtrirajPredmet(ime);

    var tip = document.getElementById("tip").value;
    FiltrirajRaspored.filtrirajTip(tip);


    var vrijeme = document.getElementById("vrijeme").value;
    var satiMinute = vrijeme.split(":");
    var sati = parseInt(satiMinute[0]);
    var minute = parseInt(satiMinute[1]);
    sati *= 60;
    minute += sati;
    FiltrirajRaspored.filtrirajTrajanje(minute);


    var dan = document.getElementById("dan").value;
    if (dan[0] == "-") {
        var str = dan.slice(1);

        FiltrirajRaspored.filtrirajProslo(str);
    }
    else if (dan[0] == "+") {
        var str = dan.slice(1);
        FiltrirajRaspored.filtrirajBuduce(str);

    }
}
















