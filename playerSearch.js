const players = 'https://raw.githubusercontent.com/theshinramen/DLS-Files/main/data/playerData.json';
const imgs = 'https://raw.githubusercontent.com/theshinramen/DLS-Files/main/playerphotos/DLS23/';

const card = 'https://raw.githubusercontent.com/theshinramen/DLS-Card-Creator/main/DLS23/assets/card/';
//common, common GK, rare, rare GK, legendary, legendary GK
const cards = ['common.png','commonGK.png','rare.png','rareGK.png','legendary.png','legendaryGK.png']

document.getElementById("searchbtn").addEventListener("click", searchPlayer);

function searchPlayer(){
    
document.getElementById("result").innerHTML = "";

fetch(players)
.then(response => response.json())
.then(data => {
    const playerData = data;
    const player_fname = document.getElementById("fnamesearch").value;
    const player_lname = document.getElementById("lnamesearch").value;
    let found = 0;

    for(const player of data){
        if(player["First Name"].toLowerCase().includes(player_fname.toLowerCase()) && player["Last Name"].toLowerCase().includes(player_lname.toLowerCase())){
            document.getElementById("result").innerHTML += JSON.stringify(player);
            document.getElementById("result").innerHTML += "<br></br>"
            found++;
        }
    }
    document.getElementById("count").innerHTML = found + " Results";
    if(found==0){
        document.getElementById("result").innerHTML = "Player not found."
    }
});

}
