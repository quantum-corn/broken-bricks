var buttons=document.querySelectorAll("nav li");
console.log(buttons);
var contents=document.querySelectorAll("#content_box>div");
console.log(contents);
var current=0;

buttons[0].id="current_tab";
contents[0].id="current_cont";

for (i=0; i<buttons.length; i++) {
   if (buttons[i].id=="current_tab") {
    current=i;
   }
}

function show () {
    buttons[current].id='';
    contents[current].id='';
    this.id="current_tab";
    for (i=0; i<buttons.length; i++) {
        if (buttons[i]==this) {
            contents[i].id="current_cont";
            current=i;
        }
    }
}

for (i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", show);
}