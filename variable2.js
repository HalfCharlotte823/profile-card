const name = "Charlotte Miller"
const age = 16
const ocupation = "LUA coder, Web developer"
const bio = "Just a silly coder trying not to fail her classes. :3"
const profilePicture = "../profilecard/profile.png"

const profileContainer = document.getElementById("profile-container")
const profileCard =
    '<div class="card">' +
        '<img src="' + profilePicture + '" alt="Profile"></img>' +
        '<h2>' + name + '</h2>' +
        '<p> Age: ' +age+ '</p>' +
        '<p> Occupation: ' +ocupation + '</p>' +
        '<p>'+bio+ '</p>' +
    '</div>'

profileContainer.innerHTML = profileCard;