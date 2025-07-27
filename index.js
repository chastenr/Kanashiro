document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("about");
    const aboutSection = document.getElementById("aboutmain");
    const projectsButton = document.getElementById("projects");
    const projectsSection = document.getElementById("technical");


    button.addEventListener("click", function () {

        aboutSection.scrollIntoView({ behavior: "smooth", });

    });

    projectsButton.addEventListener("click", function () {
      projectsSection.scrollIntoView({ behavior: "smooth", });
    })});

