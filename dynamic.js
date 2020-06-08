
document.getElementById("demo1").innerHTML="This is a dynamic webpage"
document.getElementById("demo2").innerHTML="Welcome !! Javascript"
document.getElementById("myBtn").onclick=displayDate;

function displayDate()
{
	document.getElementById("myDate").innerHTML=Date();
}
