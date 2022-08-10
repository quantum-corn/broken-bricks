var theme_icon = document.getElementById("theme_icon");

function change() {
    var current = theme_icon.getAttribute("name");
    if (current =="moon_outline") {
        document.getElementById("theme_style").setAttribute("href", "./styles/light_theme.css");
        theme_icon.setAttribute("name", "sunny_outline");
    }
    else {
        document.getElementById("theme_style").setAttribute("href", "./styles/dark_theme.css");
        theme_icon.setAttribute("name", "moon_outline");
    }
}

theme_icon.addEventListener("click", change());
