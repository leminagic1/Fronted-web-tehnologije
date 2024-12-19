let assert = chai.assert;
describe('FiltrirajRaspored', function() {
 describe('filtrirajPredmet', function() {
   it('Treba da prikaze WT, a odtalo da bude hidden', function() {
 
    var aktivnosti=document.getElementsByClassName("aktivnost");
     FiltrirajRaspored.filtrirajPredmet("WT");
     var pom;

     for(var i of aktivnosti){
      
         if(!i.innerHTML.includes("WT")){
            pom=i;
            break;
         }
         assert.equal(aktivnosti[pom].style.visibility, "hidden");
     }

     
   });

 
  });

});





