function setup() {
    var buttons = document.querySelectorAll("nav li");
    var contents = document.querySelectorAll("#content_box>main");

    buttons[0].id = "current_tab";
    contents[0].id = "current_cont";
}
setup();