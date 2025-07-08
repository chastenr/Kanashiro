var i = 0;
var txt = 'Web Development is difficult only when you set your standard. It is fun to do!';
var speed = 50;

var target = document.querySelector(".margindes");

function typeWriter() {
    if (i < txt.length) {
        target.textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Pause, then restart from the beginning
        setTimeout(() => {
            i = 0;
            target.textContent = "";
            typeWriter();
        }, 2000); // Wait 2 seconds before restarting
    }
}

typeWriter();