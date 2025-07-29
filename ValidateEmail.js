function validateForm() {
  var email = document.forms["form"]["email"].value;
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
  
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false; // prevent form submission
  }
  return true; // allow form submission
}
