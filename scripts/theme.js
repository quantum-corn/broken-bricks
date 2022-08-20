var theme_icon = document.getElementById("theme_icon");

function change() {
    var current = theme_icon.getAttribute("name");

    if (current == "moon") {
        document.getElementById("theme_style").setAttribute("href", "./styles/dark_theme.css");
        theme_icon.setAttribute("name", "sunny");
    }

    else {
        document.getElementById("theme_style").setAttribute("href", "./styles/light_theme.css");
        theme_icon.setAttribute("name", "moon");
    }
}

theme_icon.addEventListener("click", change);
