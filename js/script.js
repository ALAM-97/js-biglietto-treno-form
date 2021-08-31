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

        // verifico che l'utente inserisca i dati richiesti
        if (fullName != "" && !isNaN(km) && km > 0 && userAge != "") {

            // ------ calcolo il prezzo del biglietto ------
            if (userAge == "underage") {
                ticketPrice = (km * 0.21 * 0.80);
                discountType = "Sconto Minorenne";
            } else if (userAge == "over") {
                ticketPrice = (km * 0.21 * 0.60);
                discountType = "Sconto Over 65";
            } else {
                ticketPrice = (km * 0.21);
                discountType = "Biglietto Standard";
            }
            ticketPrice = ticketPrice.toFixed(2);
            
            // ------ stampo le informazioni del biglietto ------
            document.getElementById("pax-name").innerHTML = fullName;

            document.getElementById("discount-info").innerHTML = discountType;
            
            document.getElementById("carriage").innerHTML = Math.floor(Math.random() * 10) + 1;

            document.getElementById("cp-code").innerHTML = Math.floor(Math.random() * (99999 - 90000)) + 90000;

            document.getElementById("price").innerHTML = ticketPrice + "€";  
            
            // ------ faccio apparire le info del biglietto ------
            document.getElementById("ticket-print").classList.add("open");
       
        } else {
            alert("Errore! Riempire i campi richiesti!")
        }
    }
)

deleteBtn.addEventListener('click',
    function() {
        // ------ creo la funzione per il tasto annulla ------
        document.getElementById("ticket-print").classList.remove("open");
        // ------ azzero i campi input e select ------
        document.getElementById("name").value = "";
        document.getElementById("km").value = "";
        document.getElementById("age").selectedIndex = 0;

    }
)




