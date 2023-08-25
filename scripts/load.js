var box=document.getElementById('content_box');
var content=document.getElementById('content');
var content_box=document.createElement("div");
content_box.setAttribute("id","content");
box.replaceChild(content_box, content);
var path="../assets/"+'about.html';
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function() {
    if(xhr.readyState==4 && xhr.status==200){
        content=xhr.responseText;
    }
};
xhr.open("GET", path);
xhr.send();
content_box.innerHTML=content;