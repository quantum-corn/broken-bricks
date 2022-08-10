var theme_icon = document.getElementById("theme_icon");

function change() {
    var current = theme_icon.getAttribute("name");

    if (current == "moon-outline") {
        document.getElementById("theme_style").setAttribute("href", "./styles/dark_theme.css");
        theme_icon.setAttribute("name", "sunny-outline");
    }

    else {
        document.getElementById("theme_style").setAttribute("href", "./styles/light_theme.css");
        theme_icon.setAttribute("name", "moon-outline");
    }
}

theme_icon.addEventListener("click", change);
