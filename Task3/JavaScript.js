var br = document.createElement("br");
document.body.append(br);

document.body.style.background = "bisque";
var h1 = document.createElement("h1");
h1.innerText = "Generate Get Well Soon Card";
h1.style.color = "lightblue";
h1.style.textAlign = "center";
h1.style.backgroundColor = "papayawhip";
document.body.append(h1);

document.body.append(br);
var div1 = document.createElement("div");
div1.style.textAlign = "center";
div1.style.position = "absolute";
div1.style.left = "25%";
//div1.style.borderStyle = "solid";
div1.style.height = "500px";
div1.style.width = "700px";

var arrSrc = [7];

for(let i=1;i <= 7 ;i++)
{
    arrSrc[i-1] = i + ".jpg";
}

var currRadId;
var currImg;
for(let i=1;i <= 6 ;i++)
{
    if(i==4)
    div1.appendChild(br);

   divChild = document.createElement("div");
   divChild.style.width = "200px";
   divChild.style.height = "250px";
   divChild.style.display = "inline-block";

   let img = document.createElement('img');
   img.id = "img" +i;
   img.src = arrSrc[i];
   img.style.width = "180px";
   img.style.height = "180px";
   
   
   let rad = document.createElement("input");
   rad.type = "radio";
   rad.id =  i;
   rad.name = "rd";
   rad.addEventListener("change" , function(){
    if(currRadId != null &&!document.getElementById(currRadId).checked)
        document.getElementById("img" + document.getElementById(currRadId).id).style.borderStyle = "none";

    if(rad.checked)
    {
        img.style.borderStyle = "solid";
        img.style.borderColor = "red";
        currRadId = rad.id;
        currImg = img;
    }
   });
   

   divChild.appendChild(img);
   divChild.appendChild(rad);

   div1.appendChild(divChild);
}

document.body.appendChild(div1);


var div2 = document.createElement("div");
div2.style.position = "absolute";
div2.style.top = "600px";
div2.style.left = "35%";
div2.style.textAlign = "center";
div2.style.height = "300px";
var h2 = document.createElement("h1");
h2.innerText = "Personl Message";
h2.style.color = "lightblue";
div2.appendChild(h2);
//div2.appendChild(br);
var txt = document.createElement("TextArea");
txt.id = "txt1";
//txt.style.rows = "10";
txt.style.height = "100px";
txt.style.width = "350px";
div2.appendChild(txt);
div2.appendChild(br);

var btnGenerate = document.createElement("input");
btnGenerate.type = "button";
btnGenerate.value = "Generate";
btnGenerate.textAlign = "center";
div2.appendChild(btnGenerate);

document.body.appendChild(div2); 

var win;
btnGenerate.addEventListener("click",function()
{
    win = window.open(""," ","width=800,height=650");
    win.document.body.style.backgroundColor = "bisque";

    var wDiv =document.createElement("div");
    wDiv.style.textAlign = "center";

    var wImg =document.createElement("img");
    wImg.src = currImg.src;
    wImg.width = "500";
    wImg.height = "500";
    wDiv.appendChild(wImg);
    wDiv.appendChild(br);
    
    var wH1 = document.createElement("h1");
    wH1.innerText = document.getElementById("txt1").value;
    wDiv.appendChild(wH1);

    var btnClose = document.createElement("input");
    btnClose.type = "button";
    btnClose.value = "Close";
    btnClose.addEventListener("click" , function(){
        win.close();

    });
    wDiv.appendChild(btnClose);
    win.document.body.appendChild(wDiv);

});