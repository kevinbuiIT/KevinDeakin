function validate(){
	var name=document.getElementById("name").value;
	sessionStorage.name= name;

	var age =document.getElementById("age").value;
	sessionStorage.age=age;

	var status=document.getElementById("status").value;
	sessionStorage.status=status;

	var love=document.getElementById("love").value;
	sessionStorage.love=love;

	error_message=""
	if(love.match("^Em iu anh so much$") == null){
		error_message += "<strong>No love no next page</strong><br/>";
	}

	if(name.match("[A-Z a-z]{1,30}") == null){
		error_message += "<strong>Please type character from a-z</strong><br/>";
	}
	if(age.match("^(((([0-9])|([0-9][0-9])|(1[1,4][0,9])))|(150))$") == null){
		error_message += "<strong>Please type a number</strong><br/>";
	}

	if(status.match("^single|taken$") == null){
		error_message +="<strong>Please choose only 1</strong><br/>";
	}


	
	if(error_message ==""){
		return true;
	}else{
		document.getElementById("error").innerHTML=error_message;
		return false;
	}
}
	



function init(){
	regForm=document.getElementById("registerForm");
	regForm.onsubmit=validate;
}

window.onload=init;