const HLTCOLOR="#b39977";
const BGCOLOR="#342519";


const hoverEffect = function(e, state) {
    setBg(e, state);
}

const setBg = function(e, state) {
    console.dir(e.target);
    e.target.style.backgroundColor=state?HLTCOLOR:BGCOLOR;
}

const navBtn = document.querySelectorAll(".nav li ion-icon");
navBtn.forEach(btn=>{
    btn.addEventListener("mouseover", e=>hoverEffect(e, true));
    btn.addEventListener("mouseout", e=>hoverEffect(e, false));
});