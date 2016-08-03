function sum(){
    var s;
	for( i = 0; i < arguments.length; i++)
		s += arguments[i];
	return s;
}

console.log("we");


function loadDoc() {
    		var xhttp = new XMLHttpRequest();
    		xhttp.onreadystatechange = function() {
                   if( xhttp.readyState === 4 &&
						xhttp.status === 200){

							var json = xhttp.responseText;

							console.log(json);
							var content = JSON.parse(json);

							var stuff = "<ul>";

							for( var attr in content){
								stuff += "<li>" + attr + ":" + content[attr]  + "</li>";
								}
							stuff += "</ul>"

							document.getElementById("content").innerHTML
							 = "<p>" + stuff + "</p>";
						}
    		     
            };
    		
    		xhttp.open("GET", "http://www.omdbapi.com/?t=batman&y=&plot=short&r=json",true);
    		xhttp.send();

    	}

