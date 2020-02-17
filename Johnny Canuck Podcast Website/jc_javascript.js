window.onload = displayTime;
function displayTime(){
	var date = new Date();
	var time = date.toLocaleString();
	document.getElementById("time").textContent = time;
}
 setInterval(displayTime, 1000);
 
	 function validation(){
		var firstname = document.forms["ContactInfo"]["custfName"].value;
		var lastname = document.forms["ContactInfo"]["custlName"].value;
	
		var email = document.forms["ContactInfo"]["custEmail"].value;
	
		var textbox = document.forms["ContactInfo"]["custExp"].value;

		if( firstname == ""){
			window.alert("Please Enter a First Name");
		}
		else if( lastname == ""){
			window.alert("Please Enter a Last Name");
		}
		else if( email == ""){
			window.alert("Please Enter an Email");
		}
		else if( textbox == ""){
			window.alert("Textbox empty! Send us a Message!");
		}
		getValues();
	}	
	

	
	
	
	
	