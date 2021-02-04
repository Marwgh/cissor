
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scis = document.querySelector(".scissors")
let playerUno = document.querySelector("#player1")
let playerDos = document.querySelector("#player2")
let touche = document.querySelector("body"); 


chose();


function chose () {

    rock.addEventListener("click",  () => {
        playerUno.classList.add("shake");
        playerDos.classList.add("shake");
        rockc();
         });
    paper.addEventListener("click",  () => {
        playerUno.classList.add("shake");
        playerDos.classList.add("shake");
        paperc();
         }); 
    scis.addEventListener("click",  () => {
        playerUno.classList.add("shake");
        playerDos.classList.add("shake");
        scissorsc();
         }); 
}
function rockc () {
    scis.removeEventListener("click",  () => {playerUno.classList.add("shake");playerDos.classList.add("shake");rockc();});
    rock.removeEventListener("click",  () => {playerUno.classList.add("shake");playerDos.classList.add("shake");scissorsc();});
    paper.removeEventListener("click",  () => {playerUno.classList.add("shake");playerDos.classList.add("shake");paperc();});
    document.querySelector(".player.shake").addEventListener("animationend", resultr );
}
function resultr () {
    document.querySelector(".player.shake").removeEventListener("animationend", resultr );
    playerUno.classList.remove("shake");
    playerDos.classList.remove("shake");
    number = Math.floor(Math.random() * (4 - 1) + 1)
    console.log(number);

    if ( number == 1 ) {
        playerUno.classList.add("rock");
        playerDos.classList.add("rock");
        document.querySelector("#draw").classList.remove("hidden");
        touche.addEventListener("click", restart);

    } else if ( number == 2 ) {
        playerUno.classList.add("rock");
        playerDos.classList.add("paper");
        document.querySelector("#lose").classList.remove("hidden");
        touche.addEventListener("click", restart);
        
    } else  {
        playerUno.classList.add("rock");
        playerDos.classList.add("scissors");
        document.querySelector("#win").classList.remove("hidden");
        touche.addEventListener("click", restart);
        
    }
 
    
}


function paperc() {
    scis.removeEventListener("click",  () => {playerUno.classList.add("shake");playerDos.classList.add("shake");rockc();});
    rock.removeEventListener("click",  () => {playerUno.classList.add("shake");playerDos.classList.add("shake");scissorsc();});
    paper.removeEventListener("click",  () => {playerUno.classList.add("shake");playerDos.classList.add("shake");paperc();});
    
    
    
    document.querySelector(".player.shake").addEventListener("animationend", resultp );
}
function resultp (numb) {
    document.querySelector(".player.shake").removeEventListener("animationend", resultp );
    playerUno.classList.remove("shake");
    playerDos.classList.remove("shake");
    numb = Math.floor(Math.random() * (4 - 1) + 1)
    console.log(numb);
    if ( numb == 1 ) {
        playerUno.classList.add("paper");
        playerDos.classList.add("rock");
        document.querySelector("#win").classList.remove("hidden");
        touche.addEventListener("click", restart);

    } else if ( numb == 2 ) {
        playerUno.classList.add("paper");
        playerDos.classList.add("paper");
        document.querySelector("#draw").classList.remove("hidden");
        touche.addEventListener("click", restart);
        
    } else  {
        playerUno.classList.add("paper");
        playerDos.classList.add("scissors");
        document.querySelector("#lose").classList.remove("hidden");
        touche.addEventListener("click", restart);
        
    }
 
    
}


function scissorsc () {
    scis.removeEventListener("click",  () => {playerUno.classList.add("shake");playerDos.classList.add("shake");rockc();});
    rock.removeEventListener("click",  () => {playerUno.classList.add("shake");playerDos.classList.add("shake");scissorsc();});
    paper.removeEventListener("click",  () => {playerUno.classList.add("shake");playerDos.classList.add("shake");paperc();});
    
    
    
    document.querySelector(".player.shake").addEventListener("animationend", results );
}
function results ( numbe ) {
    document.querySelector(".player.shake").removeEventListener("animationend", results );
    playerUno.classList.remove("shake");
    playerDos.classList.remove("shake");
    numbe = Math.floor(Math.random() * (4 - 1) + 1)
    console.log(numbe);
    
    if ( numbe == 1 ) {
        playerUno.classList.add("scissors");
        playerDos.classList.add("rock");
        document.querySelector("#lose").classList.remove("hidden");
        touche.addEventListener("click", restart);

    } else if ( numbe == 2 ) {
        playerUno.classList.add("scissors");
        playerDos.classList.add("paper");
        document.querySelector("#win").classList.remove("hidden");
        touche.addEventListener("click", restart);
        
    } else  {
        playerUno.classList.add("scissors");
        playerDos.classList.add("scissors");
        document.querySelector("#draw").classList.remove("hidden");
        touche.addEventListener("click", restart);
        
    }
 
    
}

function restart () {
    touche.removeEventListener("click", restart);
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    playerUno.classList.remove("scissors");
    playerDos.classList.remove("scissors");
    playerUno.classList.remove("rock");
    playerDos.classList.remove("rock");
    playerUno.classList.remove("paper");
    playerDos.classList.remove("paper");
    chose();
    
}