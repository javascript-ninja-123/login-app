$(document).ready(function(){
 submit =$(":submit").hide();

$("#username" && "#password").each(function(){
$(this).keydown(function(){

if($(this).val() !=""){

	$(":submit").show();
}


});

$(":submit").click(function(){

	var name=$("#username").val();
	var password= $("#password").val();


	

	var login = [{

		name:"holygrail123",
		password:"banzai4"



	},
	{
		name:"killerman",
		password:"westVillage"

	},
	{
		name:"showtimeman",
		password:"zxcvbnm,./"


	}];

	for(var i =0; i<login.length; i++){
		if(login[i].name == name && login[i].password == 
			password){

			alert(name +" weclome");
		return
		}
		else{
			alert("wrong login info");
			return
		}



	}



});



// $(":submit").click(function(){

// 	var name = $("#username").val();
// 	var password = $("#password").val();

// 	var loginInfo =newArray();








// });



});