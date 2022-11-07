function createGame(player1,hour,player2){
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Ícone Brasil">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Ícone Servia">
        </li>
    `}

let delay = -.4;
function createCard(date,day,games) {
    delay = delay + .4;
    return `
    <div class="card" style="animation-delay: ${delay}s;">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
</div>
`
};

document.querySelector("#cards").innerHTML = 
        createCard("22/11", "terça",createGame("argentina","07:00","saudiArabia") + createGame("france","16:00","australia")) +

        createCard("23/11", "quarta", createGame("germany", "10:00", "japan") +  createGame("belgium","16:00", "canada")) +
        
        
        createCard("24/11","quinta", createGame("uruguay", "10:00", "southKorea") + 
        createGame("brazil","16:00","serbia"
        )) +

        createCard("28/11", "Segunda", createGame("brazil", "13:00", "switzerland") + 
        createGame("portugal", "16:00", "uruguay"));
