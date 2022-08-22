function theme() {
    function change() {
        var current = theme_icon.getAttribute("name");
        var href=document.getElementById("theme_style").getAttribute("href");
        
        if (current == "moon") {
            document.getElementById("theme_style").setAttribute("href", href.replace("light", "dark"));
            theme_icon.setAttribute("name", "sunny");
        }
        
        else {
            document.getElementById("theme_style").setAttribute("href", href.replace("dark", "light"));
            theme_icon.setAttribute("name", "moon");
        }
    }
        
    var theme_icon = document.getElementById("theme_icon");
    theme_icon.addEventListener("click", change);
}

function tab(){
    function show () {
        buttons[current].id='';
        contents[current].id='';
        this.id="current_tab";
        for (i=0; i<buttons.length-1; i++) {
            if (buttons[i]==this) {
                contents[i].id="current_cont";
                current=i;
            }
        }
    }

    var buttons=document.querySelectorAll("nav li");
    var contents=document.querySelectorAll("#content_box>main");
    var current=0;
    
    for (i=0; i<buttons.length-1; i++) {
        if (buttons[i].id=="current_tab") {
            current=i;
        }
        buttons[i].addEventListener("click", show);
    }
}


tab();
theme();