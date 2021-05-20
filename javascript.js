<script>
function Enquireform() {
var name = document.forms["enq"]["Name"];
var email = document.forms["enq"]["EMail"];
var phone = document.forms["enq"][Number];

if (name.value == "") {
window.alert("Please enter your name.");
name.focus();
return false;
}

if (email.value == "") {
window.alert("Please enter a valid e-mail address.");
email.focus();
var mail_form = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mail_form))
{
document.form1.email.focus();
email.value = "";
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.email.focus();
return false;
}
}


if (phone.value == "") {
window.alert("Please enter your telephone number.");
phone.focus();
var numbers = /^[0-9]+$/;
      if(inputText.value.match(numbers))
      {
      document.form1.Number.focus();
      return true;
      }
      else
      {
      alert('Please input a valid number');
      document.form1.Number.focus();
      Number.value = "";
      return false;

}
function allnumeric()
 {
 var phone = document.forms["enq"][Number];

      var numbers = /^[0-9]+$/;
       if(inputText.value.match(numbers))
          {
            return true;
           }
       else
            {
             alert('Please input numeric characters only');
             document.form1.Number.focus();
             return false;
             }
}
return true;
</script>