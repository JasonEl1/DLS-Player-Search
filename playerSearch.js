const url = 'https://raw.githubusercontent.com/theshinramen/DLS-Files/main/data/playerData.json';

document.getElementById("searchbtn").addEventListener("click", searchPlayer);

function searchPlayer(){

fetch(url)
.then(response => response.json())
.then(data => {
    const playerData = data;
    const player_fname = document.getElementById("fnamesearch").value;
    const player_lname = document.getElementById("lnamesearch").value;
    let found = false;

    for(const player of data){
        if(player["First Name"].toLowerCase()==player_fname.toLowerCase() && player["Last Name"].toLowerCase()==player_lname.toLowerCase()){
            document.getElementById("result").innerHTML = JSON.stringify(player);
            found = true;
        }
    }
    if(!found){
        document.getElementById("result").innerHTML = "Player not found."
    }
});

}