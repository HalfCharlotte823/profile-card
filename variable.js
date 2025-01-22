/* const name = "Charlotte Miller"
const age = 16
const ocupation = "LUA coder, Web developer"
const bio = "Just a silly coder trying not to fail her classes. :3"
const profilePicture = "../profilecard/profile.png" */

const profile = ["Charlotte Miller", 16, "LUA coder, Web Developer", "Just a silly coder trying not to fail Math Class :3", "../profilecard/profile.png"]

const profileContainer = document.getElementById("profile-container")
const profileCard =
    '<div class="card">' +
        '<img src="' + profile[4] + '" alt="Profile"></img>' +
        '<h2>' + profile[0] + '</h2>' +
        '<p> Age: ' +profile[1]+ '</p>' +
        '<p> Occupation: ' +profile[2] + '</p>' +
        '<p>'+profile[3]+ '</p>' +
    '</div>'

profileContainer.innerHTML = profileCard;