function Draw(){
	var content = document.getElementById("content");
	content.innerHTML="";
	for (let i=1;i<=10;i++)
		{
			let elmP = document.createElement("p");
			elmP.innerHTML=i;
			elmP.onclick=function(){
				alert(" selected: " +i);
			}
			content.appendChild(elmP);
		}
}
function Clear(){
	var content  = document.getElementById("content");
	content.innerHTML="";
}