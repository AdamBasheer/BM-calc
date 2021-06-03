function BMI(){
		var w=document.getElementById('w').value;
		var h=document.getElementById('h').value;
		var bmi=w/(h*h);
		if(bmi< 18.5){
			document.getElementById("result").innerHTML="Your BMI is " + bmi+  " so you are underweight";
		}
		else if(bmi<= 18.5 && bmi>= 24.9 ){
            document.getElementById("result").innerHTML="Your BMI is " + bmi+  " so you have a normal weight";
		}
		else{
			document.getElementById("result").innerHTML="Your BMI is " + bmi+  " so you are overweight";	
		}
		}