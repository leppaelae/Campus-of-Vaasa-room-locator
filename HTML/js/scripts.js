function openMainTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("maintabs");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("mainlinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


function searchRoom(){
	
	var roomid = "A3010";
	document.getElementById("searchfield").setAttribute("value", roomid);
	
}


// GETS PARAMETER FROM URL
// USE var roomid = GetURLParameter("roomid");
// example.com?roomid=1234
// returns "1234"
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

// SECOND PAGE INITIALIZING

function init(){
	var roomid = GetURLParameter("roomid");
	document.getElementById("roomid").innerHTML = roomid;
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
			{
				myFunction(this);
			}
	}
	xhttp.open("GET", "roomdb.xml", true);
	xhttp.send();
	
	function myFunction(xml)
	{
	var x, y, xlen, xmlDoc;
    xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("room")[0];
	xlen = x.childNodes.length;
	y = x.firstChild;
	console.log(y);
	
	while(y.nodeName != "roomid"){
		console.log("jeejee");
		y = y.nextSibling;
	}
	
	
	}	
}