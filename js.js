/***Check First Name***/
function chkfname(abcd)
{
	if(abcd==null || abcd=="")
  {
 
  return true;
  }
  else
	  return false;
}
/***Check Last Name***/

function chklname(lnm){
	if (lnm==null || lnm=="")
  {
  
  return true;
  }
   else
	  return false;
	
}
/***Check Email***/

function chkemail(eml){
	  if (eml==null || eml=="")
  {
  return true;
  }
     else
	  return false;
	
}

/***Check Email for invalid type***/

function chkemail2(eml){
	
	var atpos=eml.indexOf("@");
   var dotpos=eml.lastIndexOf(".");
   if (atpos<1 || dotpos<atpos+2 || dotpos+2>=eml.length) //Checks if @ is first character, if email is @. or if the . is not in the string
  	{
  		return true;
  	}
	else
	  return false;
}

/***Check Password***/
function chkpwd(pd){
	if (pd == "" || pd == null)
		{
	return true;
		}
	else
	  return false;
}

/***Match Passwords***/

function chkpwd1(pd1,pd2){
if (pd1 != pd2){return true;}
else
	  return false;
}

function chkAge(byear,bmonth,bday){

var min_age = 13;

	var submitteddate = new Date((byear + min_age), bmonth, bday); //get date in JS format
	var today = new Date;

	if ( (today.getTime() - submitteddate.getTime()) < 0) { //If thier age is less than 13, this will generate an alert.
				return true;
		}
	else
	  return false;

}



/***Prints The Days on the Registration Form***/
function printDays()
{
for(i=0;i<31;i++){ 
var dateVar = 1 + i; 
document.write('<option value=\"' + dateVar + '\">' + dateVar + '</option>'); 
}
}

/***Prints The Years on the Registration Form***/
function printYears()
{
for(i=0;i<83;i++)
{ 
var dateVar = 1930 + i; -
document.write('<option value=\"' + dateVar + '\">' + dateVar + '</option>'); 
}
}

/***Validates The Inputted Registration Form***/
function validateregform()
{
var fname=document.forms["register"]["fname"].value;
var lname=document.forms["register"]["lname"].value;
var email=document.forms["register"]["email"].value;
var pwd1=document.forms["register"]["pwd"].value;
var pwd2=document.forms["register"]["pwd2"].value;
var birthyear = parseInt(document.forms["register"]["year"].value);
var birthmonth = parseInt(document.forms["register"]["month"].value) - 1;
var birthday = parseInt(document.forms["register"]["day"].value);

if(chkfname(fname)==true){
	 var div = document.getElementById("error");
    div.textContent = 	"First name must be filled in";
    var text = div.textContent;
	return false;
	}
	

if(chklname(lname)==true){
	var div = document.getElementById("error");
    div.textContent = "Last name must be filled in";
    var text = div.textContent;
	return false;
	}
	
if(chkemail(email)==true){
	var div = document.getElementById("error");
    div.textContent = "E-mail must be filled in";
    var text = div.textContent;
	return false;
	}
if(chkemail2(email)==true){
		var div = document.getElementById("error");
    div.textContent = "Not a valid e-mail address";
    var text = div.textContent;
	return false;
	}

  if(chkpwd(pwd1)==true){
	   var div = document.getElementById("error");
    div.textContent = "Passwords must be filled in";
    var text = div.textContent;
	return false;
	  
  }

  
   if(chkpwd1(pwd1,pwd2)==true){
 var div = document.getElementById("error");
    div.textContent = "Passwords don't match";
    var text = div.textContent;
  return false;
  }


	if(chkAge(birthyear,birthmonth,birthday)==true){
		
		alert("Sorry! Due to the Children's Online Privacy Protection Act, you must be 13 years old to join the Brotherhood.");
		return false;
	}
  
  	
}

/***Validates The Login Box***/
function validatelogin()
{
var pwd=document.forms["loginbox"]["password"].value;
var email=document.forms["loginbox"]["email"].value;


if(chkemail(email)==true){
	  alert("Email must be filled in!");
	return false;
	}

if(chkpwd(pwd)==true){
	    alert("Please fill in your Password!");
	return false;
  }

}

function validateDispatches()
{
var text=document.forms["dispatches"]["dispatch"].value;
if (text==null || text=="")
	{
  alert("Please type something to post!");
  return false;
  }
}

function handleUserInfoChangers()
{
	var changerequest = new XMLHttpRequest();
	xmlhttp.open("GET", "get_data.php", true);
	xmlhttp.send();
}

function goHome()
{
window.location = "home.php";
}

function logout()
{
window.location = "logout.php";
}

function goToMyFriends()
{
window.location = "friends.php";
}

function goToMyRequests()
{
window.location = "requests.php";
}

function validatemissinginfomname()
{
	var mname=document.forms["missinginfo"]["mname"].value;
	if (mname==null || mname=="")
  	{
  		alert("Middle name must be filled in");
  		return false;
  	}
}

function validatemissinginfonickname()
{
	var nickname=document.forms["missinginfo"]["nickname"].value;
	if (nickname==null || nickname=="")
  	{
  		alert("Nickname name must be filled in");
  		return false;
  	}
}

function validatemissinginfophonenum()
{
	var nickname=document.forms["missinginfo"]["phonenum"].value;
	if (phonenum==null || phonenum=="")
  	{
  		alert("Phone number must be filled in");
  		return false;
  	}
}

function searchValidate()
{
	var searchterms=document.forms["navsearch"]["query"].value;
	if (searchterms==null || searchterms=="")
	{
		alert("You must type in a search term to search!");
		return false;
	}
	else 
	{
		var numOfWords = (searchterms.split(" ")).length
		if (numOfWords>2)
		{	
			alert("Please type in only up to two search terms!");
			return false;
		}
	}
}

function printFriendsListold(userid)
{
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function()
	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{ 
			xmlDoc = xmlhttp.responseXML;
			var root = xmlDoc.documentElement;
			var friends = root.getElementsByTagName("friend");
			document.write("<table border=\"1\"><tbody><tr><th>Userid</th><th>First Name</th><th>Last Name</th>");
			for(var i = 0; i < friends.length; i += 1)
			{
				var fuserid = friends[i].getElementsByTagName("userid");
				var fname = friends[i].getElementsByTagName("fname");
				var lname = friends[i].getElementsByTagName("lname");
				document.write("<tr><td>");
				document.write(fuserid[0].textContent);
				document.write("</td><td>");
				document.write(fname[0].textContent);
				document.write("</td><td>");
				document.write(lname[0].textContent);
				document.write("</td></tr>");
			}
			document.write("</tbody></table>");
			}

	}
	var fListURL="getfriends.php?id=" + userid;
	xmlhttp.open("GET", fListURL, true)
	xmlhttp.send()
}

function checkProfilePicUpload()
{
	var fileUploadDoc = document.getElementById('upload_filename');
	var fileName = fileUploadDoc.value;
	var extension = fileName.substring(fileName.lastIndexOf('.') + 1);
	if(ext == "gif" || ext == "GIF" || ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "png" || ext == "PNG" )
	{
	return true;
	} 
	else
	{
	alert("Upload Gif or Jpg images only");
	fileUploadDoc.focus();
	return false;
	}
}

/******Profile Navigation*******/
function showFriendsTab()
{
	//Show Selected Tab
	document.getElementById('friendsTab').style.display = '';
	
	//Hide deselected Tabs
	document.getElementById('userinfoTab').style.display = 'none';
	document.getElementById('dispatchesTab').style.display = 'none';

}

function showUserinfoTab()
{
	//Show Selected Tab
	document.getElementById('userinfoTab').style.display = '';
	
	//Hide deselected Tabs
	document.getElementById('friendsTab').style.display = 'none';
	document.getElementById('dispatchesTab').style.display = 'none';
	
}

function showDispatchesTab()
{
	//Show Selected Tab
	document.getElementById('dispatchesTab').style.display = '';
	
	//Hide deselected Tabs
	document.getElementById('friendsTab').style.display = 'none';
	document.getElementById('userinfoTab').style.display = 'none';
	
}



/**
 * I required this snipp.it due to the new format of dates from the v2 API and found
 * a great example so thought I'd share.
 * Credit to:
 *  - fest (http://snippets.dzone.com/user/fest)
 *  - post: http://snippets.dzone.com/posts/show/4132
 **/
function mysqlTimeStampToDate(timestamp) {
    //function parses mysql datetime string and returns javascript Date object
    //input has to be in this format: 2007-06-05 15:26:02
    var regex=/^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) (?:([0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/;
    var parts=timestamp.replace(regex,"$1 $2 $3 $4 $5 $6").split(' ');
    return new Date(parts[0],parts[1]-1,parts[2],parts[3],parts[4],parts[5]);
}
