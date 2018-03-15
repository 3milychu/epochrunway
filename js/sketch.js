var audio;

function setup(){

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		document.getElementById("mobile").style.display="inline";
		document.getElementById("main").style.display="none";
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
};


function pauseTrack() {
	audio = audio;
	audio.pause();
	// audio.currentTime = currentTime;
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
		d3.select(".wheelbox"+[i]).selectAll("a").remove();
		var featuredFootwear = d3.select(".wheelbox"+[i]).selectAll("#wheelbox"+[i])
			.data(footwear.filter(function (d, i) { return i === randomFootwear;}))
	        .enter()
	        .append('a')
	        .attr("class","wheelbox-link"+[i])
	        .attr("id","wheelbox-link"+[i])
	        .attr("target","_blank")
	        .attr("href",function(d) {return d.link;})
	        .exit();

	};

	for (i=0;i<9;i++){
		d3.select(".wheelbox-link"+[i]).selectAll("img").remove();
		var featuredFootwear = d3.select(".wheelbox-link"+[i]).selectAll("#wheelbox-link"+[i])
			.data(footwear.filter(function (d, i) { return i === randomFootwear;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        .attr("alt", function(d){return d.Medium})
	        .attr("title", function(d){return d.Medium})
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img3+".png";})
	        .exit();

	};

	for (i=1;i<3;i++){
		d3.select(".top-feet"+[i]).selectAll("a").remove();
		var featuredFootwear = d3.select(".top-feet"+[i]).selectAll("#top-feet"+[i])
			.data(footwear.filter(function (d, i) { return i === randomFootwear;}))
	        .enter()
	        .append('a')
	       	.attr("class","top-feet-link"+[i])
	        .attr("id","top-feet-link"+[i])
	        .attr("target","_blank")
	        .attr("href",function(d) {return d.link;})
	        .exit();

	};

	for (i=1;i<3;i++){
		d3.select(".top-feet-link"+[i]).selectAll("img").remove();
		var featuredFootwear = d3.select(".top-feet-link"+[i]).selectAll("#top-feet-link"+[i])
			.data(footwear.filter(function (d, i) { return i === randomFootwear;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        // .attr("alt", function(d){return d.Medium})
	        .attr("title", function(d){return d.Medium})
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img3+".png";})
	        .exit();

	};

	for (i=1;i<3;i++){
		d3.select(".bottom-feet"+[i]).selectAll("a").remove();
		var featuredFootwear = d3.select(".bottom-feet"+[i]).selectAll("#bottom-feet"+[i])
			.data(footwear.filter(function (d, i) { return i === randomFootwear;}))
	        .enter()
	        .append('a')
	       	.attr("class","bottom-feet-link"+[i])
	        .attr("id","bottom-feet-link"+[i])
	        .attr("target","_blank")
	        .attr("href",function(d) {return d.link;})
	        .exit();

	};

	for (i=1;i<3;i++){
		d3.select(".bottom-feet-link"+[i]).selectAll("img").remove();
		var featuredFootwear = d3.select(".bottom-feet-link"+[i]).selectAll("#bottom-feet-link"+[i])
			.data(footwear.filter(function (d, i) { return i === randomFootwear;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        // .attr("alt", function(d){return d.Medium})
	        .attr("title", function(d){return d.Medium})
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img3+".png";})
	        .exit();

	};

	d3.select(".featured-feet").selectAll("a").remove();
		var featuredFootwear = d3.select(".featured-feet").selectAll("#featured-feet")
			.data(footwear.filter(function (d, i) { return i === randomFootwear;}))
	        .enter()
	        .append('a')
	       	.attr("class","featured-feet-link")
	        .attr("id","featured-feet-link")
	        .attr("target","_blank")
	        .attr("href",function(d) {return d.link;})
	        .exit();

	d3.select(".featured-feet-link").selectAll("img").remove();
		var featuredFootwear = d3.select(".featured-feet-link").selectAll("#featured-feet-link")
			.data(footwear.filter(function (d, i) { return i === randomFootwear;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        // .attr("alt", function(d){return d.Medium})
	        .attr("title", function(d){return d.Medium})
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img3+".png";})
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
		d3.select(".top-spin"+[i]).selectAll("a").remove();
		var featuredEnsemble= d3.select(".top-spin"+[i]).selectAll("#top-spin"+[i])
			.data(fullbody.filter(function (d, i) { return i === randomEnsemble;}))
	        .enter()
	        .append('a')
	       	.attr("class","top-spin-link"+[i])
	        .attr("id","top-spin-link"+[i])
	        .attr("target","_blank")
	        .attr("href",function(d) {return d.link;})
	        .exit();

	};

	for (i=0;i<9;i++){
		d3.select(".top-spin-link"+[i]).selectAll("img").remove();
		var featuredEnsemble= d3.select(".top-spin-link"+[i]).selectAll("#top-spin-link"+[i])
			.data(fullbody.filter(function (d, i) { return i === randomEnsemble;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        // .attr("alt", function(d){return d.Medium})
	        .attr("title", function(d){return d.Medium})
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img3+".png";})
	        .exit();

	};
	
	d3.select(".featured-top").selectAll("a").remove();
		var featuredEnsemble = d3.select(".featured-top").selectAll("#featured-top")
			.data(fullbody.filter(function (d, i) { return i === randomEnsemble;}))
	        .enter()
	        .append('a')
	       	.attr("class","featured-top-link")
	        .attr("id","featured-top-link")
	        .attr("target","_blank")
	        .attr("href",function(d) {return d.link;})
	        .exit();

	d3.select(".featured-top-link").selectAll("img").remove();
		var featuredEnsemble = d3.select(".featured-top-link").selectAll("#featured-top-link")
			.data(fullbody.filter(function (d, i) { return i === randomEnsemble;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        // .attr("alt", function(d){return d.Medium})
	        .attr("title", function(d){return d.Medium})
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img3+".png";})
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

	d3.select(".featured-head").selectAll("a").remove();
		var featuredEnsemble = d3.select(".featured-head").selectAll("#featured-head")
			.data(head.filter(function (d, i) { return i === randomHeadwear;}))
	        .enter()
	        .append('a')
	       	.attr("class","featured-head-link")
	        .attr("id","featured-head-link")
	        .attr("target","_blank")
	        .attr("href",function(d) {return d.link;})
	        .exit();

	d3.select(".featured-head-link").selectAll("img").remove();
		var featuredEnsemble = d3.select(".featured-head-link").selectAll("#featured-head-link")
			.data(head.filter(function (d, i) { return i === randomHeadwear;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        // .attr("alt", function(d){return d.Medium})
	        .attr("title", function(d){return d.Medium})
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img3+".png";})
	        .exit();

	d3.select(".top-head").selectAll("a").remove();
		var featuredEnsemble = d3.select(".top-head").selectAll("#top-head")
			.data(head.filter(function (d, i) { return i === randomHeadwear;}))
	        .enter()
	        .append('a')
	       	.attr("class","top-head-link")
	        .attr("id","top-head-link")
	        .attr("target","_blank")
	        .attr("href",function(d) {return d.link;})
	        .exit();

	d3.select(".top-head-link").selectAll("img").remove();
		var featuredEnsemble = d3.select(".top-head-link").selectAll("#top-head-link")
			.data(head.filter(function (d, i) { return i === randomHeadwear;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        // .attr("alt", function(d){return d.Medium})
	        .attr("title", function(d){return d.Medium})
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img3+".png";})
	        .exit();

	d3.select(".bottom-head").selectAll("a").remove();
		var featuredEnsemble = d3.select(".bottom-head").selectAll("#bottom-head")
			.data(head.filter(function (d, i) { return i === randomHeadwear;}))
	        .enter()
	        .append('a')
	       	.attr("class","bottom-head-link")
	        .attr("id","bottom-head-link")
	        .attr("target","_blank")
	        .attr("href",function(d) {return d.link;})
	        .exit();

	d3.select(".bottom-head-link").selectAll("img").remove();
		var featuredEnsemble = d3.select(".bottom-head-link").selectAll("#bottom-head-link")
			.data(head.filter(function (d, i) { return i === randomHeadwear;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("background-position","center")
	        .style("background-size","30%")
	        // .attr("alt", function(d){return d.Medium})
	        .attr("title", function(d){return d.Medium})
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img3+".png";})
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