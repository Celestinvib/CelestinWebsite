
let iconsShowed = true;

const skillsText = document.getElementById('skills-text');
const skillsIcons = document.getElementById('skills-icons');

const btnIcons = document.getElementById('btnIcons');
const btnText = document.getElementById('btnText');

function showIcons() { 
        if(!iconsShowed){ 
            skillsIcons.style.display = "block";
            skillsText.style.display = "none";
    
            btnText.classList.remove("btn-primary");
            btnText.classList.add("btn-dark");
    
            btnIcons.classList.remove("btn-dark");
            btnIcons.classList.add("btn-primary");
            iconsShowed = true;
        }
}

function hideIcons() {  
    if(iconsShowed){ 
        skillsIcons.style.display = "none";
        skillsText.style.display = "block";

        btnIcons.classList.remove("btn-primary");
        btnIcons.classList.add("btn-dark");

        btnText.classList.remove("btn-dark");
        btnText.classList.add("btn-primary");
        iconsShowed = false;
    }
}

