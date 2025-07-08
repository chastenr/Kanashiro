var greetings = "Helloto";

function greetuser() {
let userName = document.getElementById("nameInput").value;

if (userName === "") {
    userName = "bitch";
}

let lastGreeting = `${greetings}, ${userName}! welcome.`;

document.getElementById("greetings").textContent = lastGreeting;
}