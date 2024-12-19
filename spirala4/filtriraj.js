var FiltrirajRaspored = (function () {

  var raspored;

  var postaviRaspored = function (raspored) {
    this.raspored = raspored;
  }

  var filtrirajPredmet = function (filtriranje) {

    if(this.raspored === undefined || this.raspored === null){
      console.log("Postavi raspored!");
      return;
    }

    var aktivnosti = this.raspored.getElementsByClassName("aktivnost");
    if (!filtriranje.length == 0) {
      for (var i of aktivnosti) {
        if (!i.innerHTML.includes(filtriranje)) {
          i.style = "visibility:hidden";
        }
      }
    }
  }

  var filtrirajTip = function (filtriranjeTipa) {

    if(this.raspored === undefined || this.raspored === null){
      console.log("Postavi raspored!");
      return;
    }

    var aktivnosti = this.raspored.getElementsByClassName("aktivnost");
    if (!filtriranjeTipa.length == 0) {
      for (var i of aktivnosti) {
        if (!i.innerHTML.includes(filtriranjeTipa)) {
          i.style =  "visibility:hidden";
        }
      }
    }

  }

  var filtrirajTrajanje = function (filTrajanje) {

    

    var aktivnosti = this.raspored.getElementsByClassName("aktivnost");
    var a = false;
    if (filtrirajTrajanje === 0) {
      a = true;
      
    }
    for (var i of aktivnosti) {
      if (a == false) {
        
        var trajanje = i.getAttribute("colspan");
        var pom = (trajanje - "0") * 30;
        if (pom > filTrajanje) {
          i.style =  "visibility:hidden";
        }
      }
      else {
        i.style = "visibility:hidden";
       
      }

    }

  }

  var filtrirajProslo = function (proslo) {

 

    var dani = this.raspored.getElementsByClassName("dan");

    var danBroj=0;
    if (proslo == "Ponedjeljak" || proslo == "ponedjeljak") {
      danBroj = 1;

    }
    else if (proslo == "Utorak" || proslo == "utorak") {
      danBroj = 2;
    }
    else if (proslo == "Srijeda" || proslo == "srijeda") {
      danBroj = 3;

    } else if (proslo == "Četvrtak" || proslo == "četvrtak") {
      danBroj = 4;

    } else if (proslo == "Petak" || proslo == "petak") {
      danBroj = 5;

    }
  
    if (!(danBroj < 2 || danBroj > 5)) {
      
      for (var i = 0; i < dani.length; i++) {
        
        if (i < danBroj-1) {
          var aktivnosti = dani[i].getElementsByClassName("aktivnost");

          for (var j of aktivnosti) {

            j.style =  "visibility:hidden";

          }

        }

      }
    }
  }
  var filtrirajBuduce = function (buduce) {


    var dani = this.raspored.getElementsByClassName("dan");

    var danBroj;
    if (buduce == "Ponedjeljak" || buduce == "ponedjeljak") {
      danBroj = 1;

    }
    else if (buduce == "Utorak" ||buduce == "utorak") {
      danBroj = 2;

    }
    else if (buduce == "Srijeda" || buduce == "srijeda") {
      danBroj = 3;

    } else if (buduce == "Četvrtak" || buduce == "četvrtak") {
      danBroj = 4;

    } else if (buduce == "Petak" || buduce == "petak") {
      danBroj = 5;

    }
    if (!(danBroj < 1 || danBroj >= 5)) {
      for (var i = 0; i < dani.length; i++) {

        if (i >= danBroj) {
          var aktivnosti = dani[i].getElementsByClassName("aktivnost");

          for (var j of aktivnosti) {

            j.style = "visibility:hidden";

          }

        }

      }

    }

  }
  return {
    postaviRaspored: postaviRaspored,
    filtrirajPredmet: filtrirajPredmet,
    filtrirajTip: filtrirajTip,
    filtrirajTrajanje:filtrirajTrajanje,
    filtrirajProslo: filtrirajProslo,
    filtrirajBuduce: filtrirajBuduce
  }
}());








