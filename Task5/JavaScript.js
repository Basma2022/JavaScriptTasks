window.addEventListener("keydown" , function(event)
{
   if(event.altKey)
   {
     alert("Alt key was pressed");
   }
   else if(event.ctrlKey)
   {
    alert("Ctrl key was pressed");
   }
   else if(event.shiftKey)
   {
    alert("Shift key was pressed");
   }
   else
   {
       alert("You Pressed Key: " + event.keyCode);
   }
});

