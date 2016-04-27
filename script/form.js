/*popup form send message*/
  // Validation

   function check_empty() {
    if (document.getElementById('cname').value == "" 
    || document.getElementById('cemail').value == "" 
    || document.getElementById('cmsg').value == "") {
      alert("Fill All Fields !");
    } else {
      document.getElementById('form').submit();
      
    }
  }
  //Function To Display Popup
  function showpopup(){
    document.getElementById('popupform').style.display = 'block';
  }
  //Function to Hide Popup
  function div_hide(){
    document.getElementById('popupform').style.display = 'none';
  }
 