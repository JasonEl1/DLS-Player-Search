const players = 'https://raw.githubusercontent.com/theshinramen/DLS-Files/main/data/playerData.json';
const imgs = 'https://raw.githubusercontent.com/theshinramen/DLS-Files/main/playerphotos/DLS23/';
const card = 'https://raw.githubusercontent.com/theshinramen/DLS-Card-Creator/main/DLS23/assets/card/';
const position = 'https://raw.githubusercontent.com/theshinramen/DLS-Card-Creator/main/DLS23/assets/position/';

document.getElementById("searchbtn").addEventListener("click", searchPlayer);

document.addEventListener("keydown",(event) =>{
    if(event.key=="Enter"){
        searchPlayer();
    }
});

function searchPlayer(){
    
    document.getElementById("result").innerHTML = "";

    fetch(players)
    .then(response => response.json())
    .then(data => {
        const player_fname = document.getElementById("fnamesearch").value;
        const player_lname = document.getElementById("lnamesearch").value;
        let found = 0;

        for(const player of data){
            if(player["First Name"].toLowerCase().includes(player_fname.toLowerCase()) && player["Last Name"].toLowerCase().includes(player_lname.toLowerCase())){
                found++;

                let resultDiv = document.createElement("div");
                let content = document.createTextNode(JSON.stringify(player));
                resultDiv.appendChild(content);

                document.getElementById("result").appendChild(resultDiv);

                let playerType = ratingToType(player["Rating"],player["Handling (GK)"]!="")
                let cardImgUrl = card + playerType + ".png"
                let cardImg = document.createElement("img");
                cardImg.src = cardImgUrl;
                cardImg.id = "cardImg";
                resultDiv.appendChild(cardImg);

                if(player["Player ID"]!=""){
                    let playerImg = document.createElement("img");
                    const imgUrl = imgs + player["Player ID"] + ".png";
                    playerImg.src = imgUrl;
                    playerImg.id = "playerImg";
                    //resultDiv.appendChild(playerImg);
                }
                let playerPositionUrl = position + player.Position + ".png";
                let positionImg = document.createElement("img");
                positionImg.src = playerPositionUrl;
                positionImg.id = "positionImg";
                //resultDiv.appendChild(positionImg);
            }
        }
        document.getElementById("count").innerHTML = found + " Results";
        if(found==0){
            document.getElementById("result").innerHTML = "Player not found."
        }
    });
}

function ratingToType(rating,isGK){
    let playerType;
    if(rating<70){
        if(isGK){
            playerType = "commonGK";
        }
        else{
            playerType = "common";
        }
    }
    else if(rating<80){
        if(isGK){
            playerType = "rareGK";
        }
        else{
            playerType = "rare";
        }
    }
    else{ //rating >= 80
        if(isGK){
            playerType = "legendaryGK";
        }
        else{
            playerType = "legendary";
        }
    }
    return playerType;
}
