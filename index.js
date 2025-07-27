document.addEventListener("DOMContentLoaded", function () {
  const buttonIds = ["home", "about", "skills", "projects"]; //buttons sa navbar
  const sectionsIds = ["base", "aboutmain", "skillssector", "projectsmain"]; // section sa mapupunta

  for (let i = 0; i < buttonIds.length; i++) {
    const button = document.getElementById(buttonIds[i]);
    const section = document.getElementById(sectionsIds[i]);

    button.addEventListener("click", function() {
      section.scrollIntoView({ behavior: "smooth"})
    })
  }
});