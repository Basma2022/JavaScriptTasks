function showData()
{
   var n =parseInt(GetCookie("session"));
   n++;
   SetCookie("session" , n);
   arr = GetAllCookies();
   document.getElementById("name").innerText = "Welcome " +arr['name'];
   document.getElementById("age").innerText = "Your Age is " +arr['age'];
   document.getElementById("gender").innerText = "Your are a " +arr['gender'];
   document.getElementById("color").innerText = "Your Favourite Color is " +arr['color'];
   document.getElementById("session").innerText = "This is Session number " + arr['session'];
}

//showData();