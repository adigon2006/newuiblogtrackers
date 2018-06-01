$(document).ready(function() {

// editing the account handler
$('#editaccount').click(function(e){
e.preventDefault();
valueintext = $('#editaccount').html()
fullname = $('#fullname');
email  = $('#email');
phone  = $('#phone');
console.log(valueintext);
if(valueintext === "Edit Account")
{
$('#editaccount').html("Update Account");
// start editing the account details
// convert the each to an editable text-field
fullname.removeAttr("readonly").focus();
email.removeAttr("readonly");
phone.removeAttr("readonly");
}
else if(valueintext === "Update Account")
{
$('#editaccount').html("Edit Account");
fullname.attr("readonly",true);
email.attr("readonly",true);
phone.attr("readonly",true);

oldpassword = $('#password').val();
newpassword = $('#newpassword').val();

// storevalue of data
fullnameval = $('#fullname').val();
emailval  = $('#email').val();
phoneval  = $('#phone').val();

if(oldpassword !== "" && oldpassword === newpassword)
{
changedpassword = oldpassword;
}
//create a data array

// perform a check to make sure password has been changed

// on update call an ajax function to pass on the request

}


})


// change password show toggler
$('#changepassword').on("click", function(){
visiblesection = $('.passwordsection').is(":hidden");
password  = $('#password');
newpassword  = $('#newpassword');
// toggle the password section
$('.passwordsection').slideToggle(100);

// check if the password section is visible

if(visiblesection)
{
  // console.log(true);
  password.removeAttr("readonly").focus();
  newpassword.removeAttr("readonly");
  // change the value of text in Edit Account
  $('#editaccount').html("Update Account");
}
if(!visiblesection)
{
  // console.log(false);
  password.attr("readonly",true).val("");
  newpassword.attr("readonly",true).val("");
}
});


fullname  = $('#fullname');
email  = $('#email');
phone  = $('#phone');
UpdateTextfiled(fullname);
UpdateTextfiled(email);
UpdateTextfiled(phone);





// function that updates the textfield
function UpdateTextfiled(ElementID)
{
ElementID.on("input",function(){
updatedInput = this.value;
console.log(updatedInput);
ElementID.attr("value",updatedInput);
});
}


});
