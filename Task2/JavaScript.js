var div = document.body.firstElementChild;
var div1 = document.body.firstElementChild.firstElementChild;
var div2 = div1.nextElementSibling;
var div3 = div1.cloneNode(true);

div1.style.position = "absolute";
div1.style.top = "0px";
div1.style.right = "0px"; 

div2.style.position = "absolute";
div2.style.top = "280px";
div2.style.right = "750px"; 

div3.style.position = "absolute";
div3.style.bottom = "0px";
div3.style.letf = "0px"; 

//div.removeAttribute("style");
div.appendChild(div3); 