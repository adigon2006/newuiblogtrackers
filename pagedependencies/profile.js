$(document).ready(function() {

// editing the account handler
$('#deleteaccount').click(function(e){
e.preventDefault();
var opt = confirm("Are you sure you want to delete this account");

if(opt==true){
	$.ajax({
		url: baseurl+'register',
		method: 'POST',
		data: {
			action: "delete_account",
		},
		error: function(response)
		{						
			console.log(response);		
		},
		success: function(response)
		{       
			toastr.success('Account successfully deleted!','Success');
			window.location.href = baseurl+"login";
		}
	});
}
return false;
});


$('#customFileLang').change(function(evt){	
	var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            $(".profilepageimg").attr("src",fr.result);

						
        }
        fr.readAsDataURL(files[0]);
    }else {
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
    }
	
});

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
$('.profileinput').css("border","1px solid #dedede");


}
else if(valueintext === "Update Account")
{
$('#editaccount').html("Edit Account");
fullname.attr("readonly",true);
email.attr("readonly",true);
phone.attr("readonly",true);
$('.profileinput').css("border","none");
$('.passwordsection').hide();

oldpassword = $('#password').val();
newpassword = $('#newpassword').val();
confirmpassword = $('#confirmpassword').val()

// storevalue of data
fullnameval = $('#fullname').val();
emailval  = $('#email').val();
phoneval  = $('#phone').val();

file = $("#customFileLang").val();
console.log(file);

if(oldpassword !== "" && oldpassword !== newpassword && newpassword === confirmpassword)
{
	
changedpassword = newpassword;
// changed password
}

if(oldpassword !== newpassword && newpassword !== confirmpassword){
	toastr.error('Your password did not match!','Invalid');
	return false;
}else{
//console.log(name);
	$.ajax({
		url: baseurl+'register',
		method: 'POST',
		data: {
			name: fullnameval,
			email: emailval,			
			phone: phoneval,
			password:newpassword,
			oldpassword:oldpassword,
			action: "update_profile",
		},
		error: function(response)
		{						
			console.log(response);		
		},
		success: function(response)
		{       
		console.log(response);
			var statuss = response;//.responseText;
					// console.log(login_status);
					if(statuss === "success"){
						toastr.success('Profile successfully updated!','Success');
						if(file!=""){
							$("#image-form").submit();
						}
						return false;
					}else{
						toastr.error('Old password is not valid!','Invalid');
						return false;
					}
						
		}
	});
	
	
}
//create a data array

// perform a check to make sure password has been changed

// on update call an ajax function to pass on the request

}


})


// change password show toggler
$('#changepassword').on("click", function(e){
  e.preventDefault();
visiblesection = $('.passwordsection').is(":hidden");
password  = $('#password');
newpassword  = $('#newpassword');
confirmpassword = $('#confirmpassword');
// toggle the password section
$('.passwordsection').slideToggle(100);

// check if the password section is visible

if(visiblesection)
{
  // console.log(true);
  password.removeAttr("readonly").focus();
  newpassword.removeAttr("readonly");
  confirmpassword.removeAttr("readonly");
  // change the value of text in Edit Account
  $('#editaccount').html("Update Account");
  $('.passinput').css("border","1px solid #dedede");
}
if(!visiblesection)
{
  // console.log(false);
  password.attr("readonly",true).val("");
  newpassword.attr("readonly",true).val("");
  confirmpassword.attr("readonly",true).val("");
$('.passinput').css("border","none");
}
});


fullname  = $('#fullname');
email  = $('#email');
phone  = $('#phone');
password  = $('#password');
newpassword  = $('#newpassword');
confirmpassword = $('#confirmpassword');
UpdateTextfiled(fullname);
UpdateTextfiled(email);
UpdateTextfiled(phone);
UpdateTextfiled(password);
UpdateTextfiled(newpassword );
UpdateTextfiled(confirmpassword);





// function that updates the textfield
function UpdateTextfiled(ElementID)
{
ElementID.on("input",function(){
updatedInput = this.value;
//console.log(updatedInput);
ElementID.attr("value",updatedInput);

name = ElementID.attr("name");

	

});
}


});
