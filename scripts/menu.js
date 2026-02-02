const navBar = document.querySelector("#navbar");
const menuBtn = document.querySelector("#menuBtn");
let flexawy = 0;
function dropMenu() {
    if (flexawy == 0) {
        navBar.style.display = "block";
        navBar.classList.add("showEvent");
        flexawy = 1;
    } else {
        navBar.classList.remove("showEvent")
        navBar.classList.add("closeEvent");
        const noneInterval=setInterval(()=>{
            navBar.style.display="none";
            flexawy = 0;
            clearInterval(noneInterval); 
            navBar.classList.remove("closeEvent");
        },900)
        noneInterval;
        
    }
}
menuBtn.addEventListener("click", dropMenu);