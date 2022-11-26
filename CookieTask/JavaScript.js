document.getElementById("m").checked = true;
document.getElementById("mImg").onclick = function(){
    document.getElementById("m").checked = true;
}

document.getElementById("fImg").onclick = function(){
    document.getElementById("f").checked = true;
}

function GetData()
{
    SetCookie("name" , document.getElementById("fn").value);
    SetCookie("age" , document.getElementById("age").value);
    if(document.getElementById("m").checked) 
       SetCookie("gender" , "male");
    else
       SetCookie("gender" , "female");
    
    var colorElement = document.getElementById("color");

    var colorIndex = colorElement.options.selectedIndex;
    SetCookie("color" , colorElement[colorIndex].value);
    SetCookie("session","0");
    location.replace("WelcomeScreen.html");
}