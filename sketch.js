var audio;

function setup(){

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		document.getElementById("mobile").style.display="inline";
		document.getElementById("title").style.display="none";
		document.getElementById("top").style.display="none";
		document.getElementById("arrow").style.display="none";
	};

	noCanvas();

	getInfo();

	updateStart();

	playTrack();

	window.setInterval(function(){
	updateStart();
	}, 15000);

	};

function playTrack(){
	mytrack = str("track"+ Math.floor(Math.random() * 7+1));

	audio = new Audio('audio/' + mytrack +'.mp3');
	console.log(audio);

	audio.play();
}


function stopTrack(){
	audio.stop();
}


function getInfo(){

d3.csv("https://media.githubusercontent.com/media/3milychu/majorstudio/master/data/clothes/costume_reclass.csv", function(data) {
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

	d3.csv("https://media.githubusercontent.com/media/3milychu/majorstudio/master/data/clothes/costume_reclass.csv", function(data) {
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


	var randomFootwear = Math.floor((Math.random() * footwear.length) + 0);

	for (i=0;i<9;i++){
		d3.select(".wheelbox"+[i]).selectAll("img").remove();
		var featuredFootwear = d3.select(".wheelbox"+[i]).selectAll("#wheelbox"+[i])
			.data(footwear.filter(function (d, i) { return i === randomFootwear;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .exit();

	};

	for (i=1;i<3;i++){
		d3.select(".top-feet"+[i]).selectAll("img").remove();
		var featuredFootwear = d3.select(".top-feet"+[i]).selectAll("#top-feet"+[i])
			.data(footwear.filter(function (d, i) { return i === randomFootwear;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .exit();

	};

	for (i=1;i<3;i++){
		d3.select(".bottom-feet"+[i]).selectAll("img").remove();
		var featuredFootwear = d3.select(".bottom-feet"+[i]).selectAll("#bottom-feet"+[i])
			.data(footwear.filter(function (d, i) { return i === randomFootwear;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .exit();

	};


	d3.select(".featured-feet").selectAll("img").remove();
		var featuredFootwear = d3.select(".featured-feet").selectAll("#featured-feet")
			.data(footwear.filter(function (d, i) { return i === randomFootwear;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .exit();

	d3.select(".caption-feet").selectAll("text").remove();

	var displayFootwear = d3.select(".caption-feet").selectAll("#caption-feet")
	        .data(footwear.filter(function (d, i) { return i === randomFootwear;}))
	        .enter()
	        .append("text")
	        .attr("id", "featured-footwear")
	        .text(function(d) { return d.Title + ", " + d.objectBegin + ", " + d.Culture;})
	        .exit();

	var randomEnsemble = Math.floor((Math.random() * fullbody.length) + 0);

	for (i=0;i<9;i++){
		d3.select(".top-spin"+[i]).selectAll("img").remove();
		var featuredEnsemble= d3.select(".top-spin"+[i]).selectAll("#top-spin"+[i])
			.data(fullbody.filter(function (d, i) { return i === randomEnsemble;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .exit();

	};
	
	d3.select(".featured-top").selectAll("img").remove();
		var featuredEnsemble = d3.select(".featured-top").selectAll("#featured-top")
			.data(fullbody.filter(function (d, i) { return i === randomEnsemble;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .exit();

	d3.select(".caption-fullbody").selectAll("text").remove();

	var displayEnsemble = d3.select(".caption-fullbody").selectAll("#caption-fullbody")
	        .data(fullbody.filter(function (d, i) { return i === randomEnsemble;}))
	        .enter()
	        .append("text")
	        .attr("id", "featured-ensemble")
	        .text(function(d) { return d.Title + ", " + d.objectBegin + ", " + d.Culture;})
	        .exit();

	var randomHeadwear = Math.floor((Math.random() * head.length) + 0);

	d3.select(".featured-head").selectAll("img").remove();
		var featuredEnsemble = d3.select(".featured-head").selectAll("#featured-head")
			.data(head.filter(function (d, i) { return i === randomHeadwear;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .exit();

	d3.select(".top-head").selectAll("img").remove();
		var featuredEnsemble = d3.select(".top-head").selectAll("#top-head")
			.data(head.filter(function (d, i) { return i === randomHeadwear;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .exit();

	d3.select(".bottom-head").selectAll("img").remove();
		var featuredEnsemble = d3.select(".bottom-head").selectAll("#bottom-head")
			.data(head.filter(function (d, i) { return i === randomHeadwear;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .exit();

	d3.select(".caption-head").selectAll("text").remove();

	var displayHeadwear = d3.select(".caption-head").selectAll("#caption-head")
	        .data(head.filter(function (d, i) { return i === randomHeadwear;}))
	        .enter()
	        .append("text")
	        .attr("id", "featured-headwear")
	        .text(function(d) { return d.Title + ", " + d.objectBegin + ", " + d.Culture;})
	        .exit();

	        // end getcsv
			});

// end updateStart
};