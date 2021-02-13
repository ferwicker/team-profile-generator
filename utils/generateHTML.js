const fs = require('fs');

function generateHTML (array) {
    const htmlCards = [];
    
    // generate individual cards
    for (i = 0; i < array.length; i++){

        let cardClass;
        let extraInfo;
        
        if (array[i].role === 'Team Leader') {
            cardClass = 'team-leader'; // this gets the class that will define the colour scheme
            extraInfo = `Office: ${array[i].office}` // this gets the 'extra' information for the card
        } else if (array[i].role === 'Engineer') {
            cardClass = 'engineer';
            extraInfo = `Github: <a href="www.github.com/${array[i].github}" target="_blank">${array[i].github}</a>` //github user name and link
        } else {
            cardClass = 'intern';
            extraInfo = `School: ${array[i].school}` // this gets the 'extra' information for the card
        }
        
        let generatedCard = `<div class="team-card d-flex flex-column justify-content-center align-items-center ${cardClass}">
        <img src="${array[i].photoSource}" class="team-photo" alt="${array[i].name} photo">
        <div class="title">
            <h2>${array[i].name}</h2>
            <div class="position">${array[i].role}</div>
        </div>
        <div class="employee-id">ID: ${array[i].id}</div>
        <a class="email" href="mailto:${array[i].email}">${array[i].email}</a>
        <div class="extra">${extraInfo}</div>
        </div>`

        htmlCards.push(generatedCard);

    }


    //write html file once all cards have been generated
    let myHTML = `
    <!doctype html>

    <html lang="en">
        <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
            <!-- Additional CSS-->
            <link rel="stylesheet" href="assets/css/style.css">
            <!--Adobe Fonts-->
            <link rel="stylesheet" href="https://use.typekit.net/ztg5emc.css">
            
            <title>
                Our Team
            </title>
        </head>
        <body>

            <section>
                <h1>Our Team</h1>
                <div class="container d-flex flex-wrap align-items-center justify-content-center">
                
                ${htmlCards}

                </div>
                </section>
        
                <!--jQuery and Bootstrap Bundle (includes Popper) -->
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
            
            </body>
        </html> 
    `

    fs.writeFile('team.html', myHTML, (err) =>
                err ? console.error(err) : console.log('Thank you for using Team Profile Generator!')
                )
}

module.exports = generateHTML;