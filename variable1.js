const name = "Charlotte"
const age = 17
const ocupation = "LUA coder, Web developer"
const bio = "Short, Silly Gal with a passion for gaming and coding."
const profilePicture = "profile.png"

const profileContainer = document.getElementById("profile-container")
const profileCard = `
    <div class="card">
        <img src="${profilePicture}" alt="Profile Picture">
        <h2>${name}</h2>
        <p> Age: ${age}</p>
        <p> Occupation: ${ocupation}</p>
        <p> ${bio}</p>
    </div>
`

profileContainer.innerHTML = profileCard;
