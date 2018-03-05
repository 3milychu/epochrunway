function setup(){

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		document.getElementById("mobile").style.display="inline";
		document.getElementById("title").style.display="none";
		document.getElementById("top").style.display="none";
		document.getElementById("arrow").style.display="none";
	};

	noCanvas();

	getInfo();

	};


function getInfo(){

d3.csv("https://github.com/3milychu/majorstudio/raw/master/project2/analysis/costume_reclass.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.objectBegin = +d.objectBegin;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

	  		// FullBody
			  fullbody = data.filter(function(d) { 
			    	return d.bodyclass1 == "fullbody"});

			// Head
			  head = data.filter(function(d) { 
			    	return d.bodyclass1 == "head"});

	  		// Tops
			  tops = data.filter(function(d) { 
			    	return d.bodyclass1 == "top"});

			// Bottoms
			  bottoms = data.filter(function(d) { 
			    	return d.bodyclass1 == "bottom"});

			// Accessory
			  accessory = data.filter(function(d) { 
			    	return d.bodyclass1 == "accessory"});

	});
};

function updateStart() {

	d3.csv("https://github.com/3milychu/majorstudio/raw/master/project2/analysis/costume_reclass.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.objectBegin = +d.objectBegin;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

	  		// FullBody
			  fullbody = data.filter(function(d) { 
			    	return d.bodyclass1 == "fullbody"});

			// Head
			  head = data.filter(function(d) { 
			    	return d.bodyclass1 == "head"});

			// Footwear
			  footwear = data.filter(function(d) { 
			    	return d.bodyclass1 == "feet"});

			});
};