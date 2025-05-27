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

let humanScore = 0;
let computerScore = 0;

//pelaajien tulosten 


