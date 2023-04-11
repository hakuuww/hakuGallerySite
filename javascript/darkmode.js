function toggleMode() {
    document.body.classList.toggle("light-mode");

    const icon = document.getElementById("icon");
    if(document.body.classList.contains("light-mode")){
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else{
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }

  }

const modeToggle = document.getElementById("theme-mode-toggle");
modeToggle.addEventListener('click', toggleMode);

