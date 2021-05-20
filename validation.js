<script>
function Enquireform(inputText) {
var name = document.forms["enq"]["Name"].value;
var email = document.forms["enq"]["EMail"].value;
var phone = document.forms["enq"][Number].value;

if (name.value == "") {
window.alert("Please enter your name.");
name.focus();
return false;
}

var mail_form = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mail_form))
{
document.enq.email.focus();
email.value = "";
return true;
}
else
{
alert("You have entered an invalid email address!");
document.enq.email.focus();
return false;
}
}

}
</script>