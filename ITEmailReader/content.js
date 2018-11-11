
//alert works!!!!!


/*
this page has no access to APIs and will only display to the user
if the email is a fraud
*/




//this works now !!!!
window.addEventListener ("load", myMain, false);

function myMain (evt) {
  var email = $(".a3s").html();
  var div = document.createElement("div");
  div.innerHTML = email;
  var text = div.textContent || div.innerText || "";

  for(var i=0; i<text.length;i++){
    var uppercaseLetters;
    var storedchars;
  storedchars+=text.charAt(i);
    if(text.charAt(i)==text.charAt(i).upperCase){
      var uppercaseLetters=uppercaseLetters+=1;
    }
  }
  if(storedchars.length>50){
    alert("email is too long");
  }else if(uppercaseLetters>30){
      alert("too many capital letters in email");
    }
}
