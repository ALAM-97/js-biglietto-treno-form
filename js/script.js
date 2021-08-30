// ------ seleziono i btn ------
var generateBtn = document.getElementById("gen-btn");
var deleteBtn = document.getElementById("del-btn");
var ticketPrice;
   
// ------ inizializzo la funzione al click del btn genera ------
generateBtn.addEventListener('click',
    function() {

        // ------ salvo gli user input ------
        var fullName = document.getElementById("name").value;
        var km = parseInt(document.getElementById("km").value);
        var userAge = document.getElementById("age").value;

        // ------ calcolo il prezzo del biglietto ------
        if (userAge == "underage") {
            ticketPrice = (km * 0.21 * 0.80);
            ticketPrice = ticketPrice.toFixed(2);
        } else if (userAge == "over") {
            ticketPrice = (km * 0.21 * 0.60);
            ticketPrice = ticketPrice.toFixed(2);
        } else {
            ticketPrice = (km * 0.21);
            ticketPrice = ticketPrice.toFixed(2);
        }
        
        // ------ stampo le informazioni del biglietto ------
        document.getElementById("pax-name").innerHTML = fullName;

    }
)




