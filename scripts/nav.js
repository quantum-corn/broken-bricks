const HLTCOLOR="#b39977";
const BGCOLOR="#342519";


const hoverEffect = function(e, state) {
    setBg(e, state);
    toggleLabel(e, state);
}

const setBg = function(e, state) {
    e.target.style.backgroundColor=state?HLTCOLOR:BGCOLOR;
}

const toggleLabel = function(e, state) {
    let item=e.target.parentElement;
    if(state) {
        let label=document.createElement("span");
        label.textContent=item.className;
        label.className="label"
        item.appendChild(label);
    }
    else {
        let label=item.querySelector(".label");
        item.removeChild(label);
    }
}

const navBtn = document.querySelectorAll(".nav li ion-icon");
navBtn.forEach(btn=>{
    btn.addEventListener("mouseover", e=>hoverEffect(e, true));
    btn.addEventListener("mouseout", e=>hoverEffect(e, false));
});