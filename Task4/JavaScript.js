var rightDiv = document.getElementById("rightDiv");
var leftDiv = document.getElementById("leftDiv");
var bottomDiv = document.getElementById("bottomDiv");

var val =0;
var offset = 20;
var s;
var r =0;
function GoOrStop(btn)
{
    if(btn.value == "Go" || r)
    {
        r=0;
        s=setInterval(function(){
            if(val >= 445 || val < 0)
            {
            offset *= -1;
            }
        
            val += offset;
        
            rightDiv.style.left = val +"px";
            leftDiv.style.right = val + "px";
            bottomDiv.style.bottom = val + "px";
        }, 100);
        btn.value = "Stop";
    }
    else
    {
        btn.value = "Go";
        clearInterval(s);
    }
    
}

function ResetPos()
{
    clearInterval(s);
    
    rightDiv.style.top = "40%";
    rightDiv.style.left = "0px";
    leftDiv.style.top = "40%";
    leftDiv.style.right = "0px";

    bottomDiv.style.right = "25%";
    bottomDiv.style.left = "50%";
    bottomDiv.style.marginLeft = "-150px";
    bottomDiv.style.bottom = "0px";
    r=1;
    //console.log(document.getElementById("btnn"));
    val=0;
    GoOrStop(document.getElementById("btnn"));
}