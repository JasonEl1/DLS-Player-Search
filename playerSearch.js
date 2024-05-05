const players =
  "https://raw.githubusercontent.com/theshinramen/DLS-Files/main/data/playerData.json";
const imgs =
  "https://raw.githubusercontent.com/theshinramen/DLS-Files/main/playerphotos/DLS23/";
const card =
  "https://raw.githubusercontent.com/theshinramen/DLS-Card-Creator/main/DLS23/assets/card/";
const position =
  "https://raw.githubusercontent.com/theshinramen/DLS-Card-Creator/main/DLS23/assets/position/";
const nations =
  "https://raw.githubusercontent.com/MTN73/DLS-Player-Search/main/nations.json";
const flags =
  "https://raw.githubusercontent.com/theshinramen/DLS-Files/main/flags/";

const blue = "#62d0c7";
const green = "#5eca3d";
const yellow = "#eadd4c";
const orange = "#e08835";
const red = "#d9342b";

document.getElementById("searchbtn").addEventListener("click", searchByName);

//add search by position and search by country

document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    searchByName();
  }
});

function removeAll(found) {
  document.getElementById("result").innerHTML = "";
  for (let i = 0; i < found; i++) {
    document.getElementById(found).remove();
  }
}
let nation;
fetch(nations)
  .then((response) => response.json())
  .then((data) => {
    nation = data;
  });

function searchByName() {
  removeAll();

  fetch(players)
    .then((response) => response.json())
    .then((data) => {
      let stat;

      const player_fname = document.getElementById("fnamesearch").value;
      const player_lname = document.getElementById("lnamesearch").value;
      let found = 0;

      for (const player of data) {
        if (
          player["First Name"]
            .toLowerCase()
            .includes(player_fname.toLowerCase()) &&
          player["Last Name"].toLowerCase().includes(player_lname.toLowerCase())
        ) {
          let resultDiv = document.createElement("div");
          // let content = document.createTextNode(JSON.stringify(player));
          // resultDiv.appendChild(content);

          let cardCanvas = document.createElement("canvas");
          cardCanvas.id = found;
          resultDiv.appendChild(cardCanvas);

          document.getElementById("result").appendChild(resultDiv);

          let context = document.getElementById(found).getContext("2d");

          //card
          let playerType = ratingToType(
            player["Rating"],
            player["Handling (GK)"] != "",
          );
          let cardImg = new Image();
          cardImg.src = card + playerType + ".png";

          cardImg.onload = function () {
            let imgWidth = cardImg.width;
            let imgHeight = cardImg.height;
            cardCanvas.width = imgWidth;
            cardCanvas.height = imgHeight;
            context.drawImage(
              cardImg,
              0,
              0,
              cardCanvas.width,
              cardCanvas.height,
            );

            if (player["Player ID"] != "") {
              let playerImg = new Image();
              playerImg.src = imgs + player["Player ID"] + ".png";
              playerImg.onload = function () {
                context.drawImage(playerImg, 4, 69, 193, 193);

                //foot
                context.fillStyle = "#000000";
                context.font = "bold 25px Renogare";
                context.fillText(player.Foot, 421, 58);

                //height
                context.fillStyle = "#000000";
                context.font = "bold 25px Renogare";
                context.fillText(player["Height (cm)"], 311, 58);

                context.textAlign = "center";

                //speed
                stat = player.Speed;
                if (stat >= 90) {
                  context.fillStyle = blue;
                } else if (stat >= 80) {
                  context.fillStyle = green;
                } else if (stat >= 70) {
                  context.fillStyle = yellow;
                } else if (stat >= 60) {
                  context.fillStyle = orange;
                } else {
                  context.fillStyle = red;
                }

                context.font = "bold 25px Renogare";
                context.fillText(player.Speed, 335, 108);

                //acceleration
                stat = player.Acceleration;
                if (stat >= 90) {
                  context.fillStyle = blue;
                } else if (stat >= 80) {
                  context.fillStyle = green;
                } else if (stat >= 70) {
                  context.fillStyle = yellow;
                } else if (stat >= 60) {
                  context.fillStyle = orange;
                } else {
                  context.fillStyle = red;
                }

                context.font = "bold 25px Renogare";
                context.fillText(player.Acceleration, 335, 154);

                //stamina
                stat = player.Stamina;
                if (stat >= 90) {
                  context.fillStyle = blue;
                } else if (stat >= 80) {
                  context.fillStyle = green;
                } else if (stat >= 70) {
                  context.fillStyle = yellow;
                } else if (stat >= 60) {
                  context.fillStyle = orange;
                } else {
                  context.fillStyle = red;
                }

                context.font = "bold 25px Renogare";
                context.fillText(player.Stamina, 335, 202);

                //control
                stat = player.Control;
                if (stat >= 90) {
                  context.fillStyle = blue;
                } else if (stat >= 80) {
                  context.fillStyle = green;
                } else if (stat >= 70) {
                  context.fillStyle = yellow;
                } else if (stat >= 60) {
                  context.fillStyle = orange;
                } else {
                  context.fillStyle = red;
                }

                context.font = "bold 25px Renogare";
                context.fillText(player.Control, 335, 248);

                //strength
                stat = player.Strength;
                if (stat >= 90) {
                  context.fillStyle = blue;
                } else if (stat >= 80) {
                  context.fillStyle = green;
                } else if (stat >= 70) {
                  context.fillStyle = yellow;
                } else if (stat >= 60) {
                  context.fillStyle = orange;
                } else {
                  context.fillStyle = red;
                }

                context.font = "bold 25px Renogare";
                context.fillText(player.Strength, 435, 108);

                //tackling
                stat = player.Tackling;
                if (stat >= 90) {
                  context.fillStyle = blue;
                } else if (stat >= 80) {
                  context.fillStyle = green;
                } else if (stat >= 70) {
                  context.fillStyle = yellow;
                } else if (stat >= 60) {
                  context.fillStyle = orange;
                } else {
                  context.fillStyle = red;
                }

                context.font = "bold 25px Renogare";
                context.fillText(player.Tackling, 435, 154);

                //passing
                stat = player.Passing;
                if (stat >= 90) {
                  context.fillStyle = blue;
                } else if (stat >= 80) {
                  context.fillStyle = green;
                } else if (stat >= 70) {
                  context.fillStyle = yellow;
                } else if (stat >= 60) {
                  context.fillStyle = orange;
                } else {
                  context.fillStyle = red;
                }

                context.font = "bold 25px Renogare";
                context.fillText(player.Passing, 435, 202);

                //shooting
                stat = player.Shooting;
                if (stat >= 90) {
                  context.fillStyle = blue;
                } else if (stat >= 80) {
                  context.fillStyle = green;
                } else if (stat >= 70) {
                  context.fillStyle = yellow;
                } else if (stat >= 60) {
                  context.fillStyle = orange;
                } else {
                  context.fillStyle = red;
                }

                context.font = "bold 25px Renogare";
                context.fillText(player.Shooting, 435, 248);

                //rating
                stat = player.Rating;
                if (stat >= 90) {
                  context.fillStyle = blue;
                } else if (stat >= 80) {
                  context.fillStyle = green;
                } else if (stat >= 70) {
                  context.fillStyle = yellow;
                } else if (stat >= 60) {
                  context.fillStyle = orange;
                } else {
                  context.fillStyle = red;
                }
                context.beginPath();
                context.arc(222, 45, 31, 0, 2 * Math.PI);
                context.fill();

                context.fillStyle = "#FFFFFF";
                context.font = "bold 40px Renogare";
                context.fillText(player.Rating, 223, 59);

                //First Name
                context.fillStyle = "#000000";
                context.font = "bold 16px Renogare";
                context.fillText(player["First Name"], 110, 285);

                // Last Name
                context.fillStyle = "#000000";
                context.font = "bold 25px Renogare";
                context.fillText(player["Last Name"], 110, 310);

                //player position
                let positionImg = new Image();
                positionImg.src = position + player.Position + ".png";
                positionImg.onload = function () {
                  context.drawImage(positionImg, 202, 90);
                  //flag
                  let flagImg = new Image();
                  flagImg.src =
                    flags + nation.indexOf(player.Nationality) + ".png";
                  flagImg.onload = function () {
                    context.drawImage(
                      flagImg,
                      202,
                      128,
                      positionImg.naturalWidth,
                      positionImg.naturalHeight,
                    );
                  };
                };
              };
            }
          };
          found++;
        }
      }
      document.getElementById("count").innerHTML = found + " Results";
      if (found == 0) {
        document.getElementById("result").innerHTML = "Player not found.";
      }
    });
}

function searchByPosition() {}

function searchByCountry() {}

function ratingToType(rating, isGK) {
  let playerType;
  if (rating < 70) {
    if (isGK) {
      playerType = "commonGK";
    } else {
      playerType = "common";
    }
  } else if (rating < 80) {
    if (isGK) {
      playerType = "rareGK";
    } else {
      playerType = "rare";
    }
  } else {
    //rating >= 80
    if (isGK) {
      playerType = "legendaryGK";
    } else {
      playerType = "legendary";
    }
  }
  return playerType;
}

/*const nation = [
    "Spain",
    "Italy",
    "France",
    "Zimbabwe",
    "El Salvador",
    "Haiti",
    "Cuba",
    "Saint Kitts and Nevis",
    "Puerto Rico",
    "Armenia",
    "Estonia",
    "Burundi",
    "Tanzania",
    "Russia",
    "Cyprus",
    "Moldova",
    "Faroe Islands",
    "Kosovo",
    "Saint Vincent and the Grenadines",
    "Bermuda",
    "Syria",
    "Uzbekistan",
    "Panama",
    "Kazakhstan",
    "Cameroon",
    "San Marino",
    "Democratic Republic of the Congo",
    "Kuwait",
    "Liechtenstein",
    "Azerbaijan",
    "Luxembourg",
    "Libya",
    "Zambia",
    "Guyana",
    "Antigua and Barbuda",
    "England",
    "Iraq",
    "Jordan",
    "Qatar",
    "Bahrain",
    "New Caledonia",
    "French Polynesia",
    "Thailand",
    "Vietnam",
    "Malaysia",
    "Indonesia",
    "Scotland",
    "United Arab Emirates",
    "Singapore",
    "Hong Kong",
    "USSR",
    "Bangladesh",
    "Republic of the Congo",
    "Mozambique",
    "Curacao",
    "Philippines",
    "Mauritania",
    "Greece",
    "Myanmar",
    "Kyrgyzstan",
    "Laos",
    "Benin",
    "Chad",
    "Belize",
    "Sri Lanka",
    "Lebanon",
    "Nepal",
    "Yemen",
    "Ghana",
    "Bahamas",
    "Bhutan",
    "Botswana",
    "Cambodia",
    "Dominica",
    "Dominican Republic",
    "Fiji",
    "Madagascar",
    "Mauritius",
    "Mongolia",
    "Egypt",
    "Montserrat",
    "Namibia",
    "Nicaragua",
    "Rwanda",
    "Seychelles",
    "Eswatini",
    "United Kingdom",
    "Central African Republic",
    "Equatorial Guinea",
    "Suriname",
    "Uruguay",
    "Comoros",
    "Palestine",
    "Guinea-Bissau",
    "South Sudan",
    "Ivory Coast",
    "Germany",
    "Mexico",
    "Paraguay",
    "Nigeria",
    "Niger",
    "United States of America",
    "Colombia",
    "Poland",
    "Sweden",
    "Ulster",
    "Japan",
    "Netherlands",
    "Morocco",
    "Ireland",
    "Australia",
    "Chile",
    "Tunisia",
    "Senegal",
    "Iran",
    "Saudi Arabia",
    "South Korea",
    "Ecuador",
    "Croatia",
    "Wales",
    "Honduras",
    "Venezuela",
    "South Africa",
    "Costa Rica",
    "Trinidad and Tobago",
    "Canada",
    "China",
    "Jamaica",
    "North Korea",
    "Brazil",
    "Barbados",
    "India",
    "Belgium",
    "Switzerland",
    "Denmark",
    "Bulgaria",
    "Togo",
    "Norway",
    "Slovakia",
    "Israel",
    "Argentina",
    "Ukraine",
    "Peru",
    "Mali",
    "Romania",
    "Guinea",
    "Serbia",
    "Montenegro",
    "Bosnia and Herzegovina",
    "Iceland",
    "Algeria",
    "Czech Republic",
    "Hungary",
    "Albania",
    "Somalia",
    "Oman",
    "Slovenia",
    "Angola",
    "Belarus",
    "Lithuania",
    "Turkey",
    "Kenya",
    "Democratic Republic of the Congo",
    "Cape Verde",
    "Austria",
    "Guadeloupe",
    "Finland",
    "Uganda",
    "Malta",
    "Gabon",
    "Sierra Leone",
    "Pakistan",
    "Guatemala",
    "Yugoslavia",
    "Liberia",
    "New Zealand",
    "Bolivia",
    "Portugal",
    "Republic of The Gambia",
    "Georgia",
    "World",
    "Grenada",
    "Macedonia",
    "Latvia"
]*/
