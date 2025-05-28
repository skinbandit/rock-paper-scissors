// tietokoneen logiikka
//valitse satunnaisesti kivi, sakset tai paperi. 
// tee funktio "getComputerChoice" -> palauttaa satunnaisesti pelin arvon.
//math.randon palauttaa arvon 0 ja 1 välistä. Ideana tehdä 1-3, jossa 1=kivi, 2=paperi ja 3=sakset.

function getComputerChoice(min, max) {
  const randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        return "kivi"
    } else if (randomNumber === 1) {
        return "paperi"
    } else if (randomNumber === 2) {
        return "sakset"
    }
}

// console.log(getComputerChoice(0,3))


//ihmisen logiikka
//laita prompt, mihin ihminen voi laittaa kiven, saket tai paperin

let nimi = prompt('Valitse kivi, sakset tai paperi')
const rock = "kivi";
const paper = "paperi";
const scissors = "sakset";

function getHumanChoice () {
    if (nimi === "kivi") {
        return rock
    } else if (nimi === "sakset") {
        return scissors
    } else if (nimi === "paperi") {
        return paper
    }
        
}


//pelaajien tulosten muuttujat

let humanScore = 0;
let computerScore = 0;

//yhden kierroksen pelaamisen logiikka

function playRound (humanChoice, computerChoice) {
   if (humanSelection =="kivi" && computerSelection == "kivi") {
    console.log ("Valitsit arvon "+humanSelection+", tietokone valitsi arvon "
        +computerSelection+". Tulos on tasapeli!")
   } else if (humanSelection == "kivi" && computerSelection == "paperi") {
    console.log("Valitsit arvon "+humanSelection+", tietokone valitsi arvon "
        +computerSelection+". Hävisit!")
    computerScore++;
   } else if (humanSelection == "kivi" && computerSelection == "sakset") {
    console.log("Valitsit arvon "+humanSelection+", tietokone valitsi arvon "
        +computerSelection+". Voitit!")
    humanScore++;
   } 
   
   else if (humanSelection == "sakset" && computerSelection == "paperi") {
    console.log("Valitsit arvon "+humanSelection+", tietokone valitsi arvon "
        +computerSelection+". Voitit!")
    humanScore++;
   } else if (humanSelection == "sakset" && computerSelection == "sakset") {
    console.log("Valitsit arvon "+humanSelection+", tietokone valitsi arvon "
        +computerSelection+". Tasapeli!")
    } else if (humanSelection == "sakset" && computerSelection == "kivi") {
    console.log("Valitsit arvon "+humanSelection+", tietokone valitsi arvon "
        +computerSelection+". Hävisit!")
        computerScore++
    } 
    
    else if (humanSelection == "paperi" && computerSelection == "paperi") {
    console.log("Valitsit arvon "+humanSelection+", tietokone valitsi arvon "
        +computerSelection+". Tasapeli!")
   } else if (humanSelection == "paperi" && computerSelection == "sakset") {
    console.log("Valitsit arvon "+humanSelection+", tietokone valitsi arvon "
        +computerSelection+". Hävisit!")
        computerScore++;
    } else if (humanSelection == "paperi" && computerSelection == "kivi") {
    console.log("Valitsit arvon "+humanSelection+", tietokone valitsi arvon "
        +computerSelection+". Voitit!")
        humanScore++
    }
}

const humanSelection = getHumanChoice ()
const computerSelection = getComputerChoice ()

