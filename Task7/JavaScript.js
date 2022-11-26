function DisplayMessage(e)
{
  con = confirm("Are You Sure");
  if(!con)
  {
    e.preventDefault();
  }

}

var ev = new Event("timeout");
document.addEventListener("timeout" , function(){ 
    alert("Enter Your Data");
    location.reload();
 
});

st = setTimeout(function(){
  document.dispatchEvent(ev);
}, 30000);

function stopEvent()
{
  console.log("stop it");
  clearTimeout(st);
}