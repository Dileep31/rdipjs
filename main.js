
//functions for calculator

function display(val)
{
	document.getElementById("result").value += val;
	return val;
}

function clr()
{
	document.getElementById("result").value = ""; 
	return "";
}

function dileep(){
	  let x = document.getElementById("result").value 
	   //document.getElementById("pid").innerHTML = typeof(x)
      let y = eval(x) 
      document.getElementById("result").value = y ;
      return y;
}




//function for palindrome
function palin() {
	var string = document.getElementById("palin").value;
	var str = string.toLowerCase();
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    if (str == newString)
    {
    		document.getElementById("pid1").innerHTML = "The given word is a palindrome"
    }
    else{
        			document.getElementById("pid1").innerHTML = "The given word is not a palindrome";
        		}
        		return "The given word is a palindrome"; 	
    
}
//function for anagram
function anagram()
{
	try{
	var string1 = (document.getElementById("string1").value);
	var string2 = document.getElementById("string2").value;
	string1 = string1.split(" ").join("");
	string2 = string2.split(" ").join("");
	var str1 = string1.toLowerCase().split("");
	var str2 = string2.toLowerCase().split("");
	str1 = str1.sort();
	 var arr1 = JSON.stringify(str1);
	str2 = str2.sort();
	var arr2 = JSON.stringify(str2);
		}
		catch(err)
		{
			alert(err);
		}
	
	if (arr1 === arr2)
	{
		document.getElementById("pid2").innerHTML = "The given two strings are anagrams";
	}
	else{
		document.getElementById("pid2").innerHTML = "The given two strings are  not anagrams";
	}
	return "The given two strings are anagrams";

}

function validateform(){
    var name=document.myform.name.value;
    var password=document.myform.password.value;
 
    if (name==null || name==""){
       alert("Name can't be blank");
       return false;
       }
       else if(!isNaN(name))
                    {
                      alert("Please Enter Only Characters");
                      return false;
                    }
                     else if ((name.length < 5) || (name.length > 15))
                    {
                       alert("Your Character must be 5 to 15 Character");
                       return false;
                     }
    else if(password.length<6){
       alert("Password must be at least 6 characters long.");
       return false;
      }
    else if(!(/^\d{10}$/).test(document.myform.phno.value))
    {
       alert("you have entered an invalid phone number!");
     return false;
    }
    else if(!( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(document.myform.email.value))
    {
     alert("you have entered an invalid email address!");
     return false;
    }
 
   } 
//function for game
   function generate()
		{
			var x = Math.floor(Math.random()*100)+1;
			var y = Math.floor(Math.random()*100)+1;
			document.getElementById("ran1").value = x;
			document.getElementById("ran2").value = y;
			var map_x = (x%10);
			var map_y = (y%10);
			document.getElementById("pid1").innerHTML = "map(x) = "+" "+map_x+"  "+"map(y) = "+" " +map_y;
			if((map_x == 0 && map_y == 1)||(map_x == 0 && map_y == 4)||(map_x == 0 && map_y == 7))
			{
				document.getElementById("pid").innerHTML = "Human Survives";
			}
			
			else if((map_x == 3 && map_y == 1)||(map_x == 3 && map_y == 4)||(map_x == 3 && map_y == 7))
			{
				document.getElementById("pid").innerHTML = "Human Survives";
			}
			else if((map_x == 6 && map_y == 1)||(map_x == 6 && map_y == 4)||(map_x == 6 && map_y == 7))
			{
				document.getElementById("pid").innerHTML = "Human Survives";
			}
			else if((map_x == 9 && map_y == 1)||(map_x == 9 && map_y == 4)||(map_x == 9 && map_y == 7))
			{
				document.getElementById("pid").innerHTML = "Human Survives";
			}
			else if((map_x == 1 && map_y == 0)||(map_x == 1 && map_y == 3)||(map_x == 1 && map_y == 6)||(map_x == 1 && map_y == 9))
			{
				document.getElementById("pid").innerHTML = "Human Survives";
			}
			
			else if((map_x == 4 && map_y == 0)||(map_x == 4 && map_y == 3)||(map_x == 4 && map_y == 6)||(map_x == 4 && map_y == 9))
			{
				document.getElementById("pid").innerHTML = "Human Survives";
			}
			else if((map_x == 7 && map_y == 0)||(map_x == 7 && map_y == 3)||(map_x == 7 && map_y == 6)||(map_x == 7 && map_y == 9))
			{
				document.getElementById("pid").innerHTML = "Human Survives";
			}
			
			else if((map_x == 2 && map_y == 1)||(map_x == 2 && map_y == 4)||(map_x == 2 && map_y == 7))
			{
				document.getElementById("pid").innerHTML = "cockroach Survives";
			}
			else if((map_x == 5 && map_y == 1)||(map_x == 5 && map_y == 4)||(map_x == 5 && map_y == 7))
			{
				document.getElementById("pid").innerHTML = "cockroach Survives";
			}
			else if((map_x == 8 && map_y == 1)||(map_x == 8 && map_y == 4)||(map_x == 8 && map_y == 7))
			{
				document.getElementById("pid").innerHTML = "cockroach Survives";
			}
			else if((map_x == 1 && map_y == 2)||(map_x == 4 && map_y == 2)||(map_x == 7 && map_y == 2))
			{
				document.getElementById("pid").innerHTML = "cockroach Survives";
			}
			else if((map_x == 1 && map_y == 5)||(map_x == 4 && map_y == 5)||(map_x == 7 && map_y == 5))
			{
				document.getElementById("pid").innerHTML = "cockroach Survives";
			}
			else if((map_x == 1 && map_y == 8)||(map_x == 4 && map_y == 8)||(map_x == 7 && map_y == 8))
			{
				document.getElementById("pid").innerHTML = "cockroach Survives";
			}
			else if((map_x == 0 && map_y == 2)||(map_x == 0 && map_y == 5)||(map_x == 0 && map_y == 8))
			{
				document.getElementById("pid").innerHTML = "Human dies";
			}
			else if((map_x == 3 && map_y == 2)||(map_x == 3 && map_y == 5)||(map_x == 3 && map_y == 8))
			{
				document.getElementById("pid").innerHTML = "Human dies";
			}
			else if((map_x == 6 && map_y == 2)||(map_x == 6 && map_y == 5)||(map_x == 6 && map_y == 8))
			{
				document.getElementById("pid").innerHTML = "Human dies";
			}
			else if((map_x == 9 && map_y == 2)||(map_x == 9 && map_y == 5)||(map_x == 9 && map_y == 8))
			{
				document.getElementById("pid").innerHTML = "Human dies";
			}
			else if((map_x == 2 && map_y == 0)||(map_x == 5 && map_y == 0)||(map_x == 8 && map_y == 0))
			{
				document.getElementById("pid").innerHTML = "Human dies";
			}
			else if((map_x == 2 && map_y == 3)||(map_x == 5 && map_y == 3)||(map_x == 8 && map_y == 3))
			{
				document.getElementById("pid").innerHTML = "Human dies";
			}
			else if((map_x == 2 && map_y == 6)||(map_x == 5 && map_y == 6)||(map_x == 8 && map_y == 6))
			{
				document.getElementById("pid").innerHTML = "Human dies";
			}
			else if((map_x == 2 && map_y == 9)||(map_x == 5 && map_y == 9)||(map_x == 8 && map_y == 9))
			{
				document.getElementById("pid").innerHTML = "Human dies";
			}
			else if ((map_x == 0 && map_y ==0)||(map_y == 1 && map_x == 1)||(map_x == 2 && map_y == 2)||(map_x == 3 && map_y == 3)||(map_x == 4 && map_y == 4)||(map_x == 5 && map_y == 5)||(map_x == 6 && map_y == 6)||(map_x == 7 && map_y == 7)||(map_x == 8 && map_y == 8)||(map_x == 9 && map_y == 9)||(map_x == 0 && map_y == 3)||(map_x == 0 && map_y == 6)||(map_x == 0 && map_y == 9)||(map_x == 1 && map_y == 4)||(map_x == 1 && map_y == 7)||(map_x == 2 && map_y == 5)||(map_x == 2 && map_y == 8)||(map_x == 3 && map_y == 0)||(map_x == 6 && map_y == 0)||(map_x == 9 && map_y == 0)||(map_x == 4 && map_y == 1)||(map_x == 7 && map_y == 1)||(map_x == 5 && map_y == 2)||(map_x == 8 && map_y == 9)||(map_x == 3 && map_y == 6)||(map_x == 3 && map_y == 9)||(map_x == 6 && map_y == 3)||(map_x == 6 && map_y == 9)||(map_x == 4 && map_y == 1)||(map_x == 4 && map_y == 7)||(map_x == 7 && map_y == 4)||(map_x == 5 && map_y == 2)||(map_x == 5 && map_y == 8)||(map_x == 8 && map_y == 5)||(map_x == 9 && map_y == 3)||(map_x == 9 && map_y == 6)||(map_x == 9 && map_y == 0))
			{
				document.getElementById("pid").innerHTML = "Ties";
			}
			else
			{
				document.getElementById("pid").innerHTML = "something wromg";
			}
			return 0;
		}
	