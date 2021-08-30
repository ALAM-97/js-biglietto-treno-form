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

        if (userAge == "underage") {
            document.getElementById("discount-info").innerHTML = "Sconto Minorenne";
        } else if (userAge == "over") {
            document.getElementById("discount-info").innerHTML = "Sconto Over-65";
        } else {
            document.getElementById("discount-info").innerHTML = "Biglietto Standard";
        }
        
        var carriageNum = Math.floor(Math.random() * 10) + 1;
        document.getElementById("carriage").innerHTML = carriageNum;

        function cpCode(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        document.getElementById("cp-code").innerHTML = cpCode(90000, 99999);

        document.getElementById("price").innerHTML = ticketPrice + "€";  
        
        // ------ faccio apparire le info del biglietto ------
        document.getElementById("ticket-print").classList.add("open");
    }
)

deleteBtn.addEventListener('click',
    function() {
        // ------ creo la funzione per il tasto annulla ------
        document.getElementById("ticket-print").classList.remove("open");
        // ------ azzero i campi input e select ------
        document.getElementById("name").value = "";
        document.getElementById("km").value = "";
        document.getElementById("age").value = "";

    }
)




