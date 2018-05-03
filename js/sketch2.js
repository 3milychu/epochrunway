var audio;

function setup(){

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		document.getElementById("mobile").style.display="inline";
		document.getElementById("main").style.display="none";
	};

	noCanvas();

	getInfo();

	updateStart();

	// window.setInterval(function(){
	// getFact();
	// }, 10000);

	window.setInterval(function(){
	updateStart();
	}, 3000);

	window.onload = function () {window.location.reload()}

	document.getElementById("loading-overlay").style.opacity="0";

	playTrack();

	};


function playTrack(){
	// mytrack = str("track"+ Math.floor(Math.random() * 7+1));

	audio = new Audio('audio/' + "track8" +'.m4a');
	console.log(audio);

	audio.play();
}


function pauseTrack() {
	audio = audio;
	audio.pause();
	// audio.currentTime = currentTime;
}


function getFact() {

	var facts = [
	{key: "1", value: "There are 2,271 full body pieces at the MET. 101 of them are suits."},
	{key: "2", value: "P.S. Eggs are American, Crossaints are French, Spaghetti is Italian and Soup is British."},
	{key: "3", value: "About half of these suits are American and the rest are French, British or Italian."},
	{key: "4", value: "All suits at the MET date between 1700s to 2000s."},
	{key: "5", value: "Generally European is the tomato/noodle medley."},
	];

	var random = Math.floor((Math.random() * 4+1));
	console.log("fact"+random)

	d3.select(".caption-fact").selectAll("text").remove();

	var displayfact = d3.select(".caption-fact").selectAll("#caption-fact")
	        .data(facts.filter(function (d, i) { return i === random;}))
	        .enter()
	        .append("text")
	        .attr("id", "caption-fact")
	        .text(function(d) { return d.value;})
	        .exit();

	
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

			// Suits
			  suits= data.filter(function(d) { 
			    	return d.objectName == "Suit"});
	
	
	for(i=0;i<3;i++){
	var suit = Math.floor((Math.random() * suits.length) + 0);

	d3.select(".ff"+[i]).selectAll("div").remove();

	var displayff = d3.select(".ff"+[i]).selectAll("#ff"+[i])
	        .data(suits.filter(function (d, i) { return i === suit;}))
	        .enter()
	        .append('div')
	        // .attr("alt", function(d){return d.Culture})
	        .attr("title", function(d){return d.Culture})
	        .attr("class", function(d){return d.Culture})
	        .exit();

	d3.select(".brunch"+[i]).selectAll("a").remove();
	var setupLink = d3.select(".brunch"+[i]).selectAll("#brunch"+[i])
			.data(suits.filter(function (d, i) { return i === suit;}))
	        .enter()
	        .append('a')
	        .attr("class","brunch-link"+[i])
	        .attr("id","brunch-link"+[i])
	        .attr("target","_blank")
	        .attr("href",function(d) {return d.link;})
	        .exit();

	d3.select(".brunch-link"+[i]).selectAll("img").remove();
	var displaySuit = d3.select(".brunch-link"+[i]).selectAll("#brunch-link"+[i])
			.data(suits.filter(function (d, i) { return i === suit;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("margin-top","70%")
	        .style("vertical-align","middle")
	        .style("background-position","center")
	        .style("background-size","100%")
	       	// .attr("alt", function(d){return "(Dated " + d.objectBegin + ") " + d.credit})
	        .attr("title", function(d){return "(Dated " + d.objectBegin + ") " + d.credit})
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .attr("class", "target")
	        .attr("id", "target1")
	        .exit();
	      };

	for(i=11;i<16;i++){
	var suit2 = Math.floor((Math.random() * suits.length) + 0);

	d3.select(".ff"+[i]).selectAll("div").remove();

	var displayff = d3.select(".ff"+[i]).selectAll("#ff"+[i])
	        .data(suits.filter(function (d, i) { return i === suit2;}))
	        .enter()
	        .append('div')
	        // .attr("alt", function(d){return d.Culture})
	        .attr("title", function(d){return d.Culture})
	        .attr("class", function(d){return d.Culture})
	        .exit();

	d3.select(".brunch"+[i]).selectAll("a").remove();
	var setupLink2 = d3.select(".brunch"+[i]).selectAll("#brunch"+[i])
			.data(suits.filter(function (d, i) { return i === suit2;}))
	        .enter()
	        .append('a')
	        .attr("class","brunch-link"+[i])
	        .attr("id","brunch-link"+[i])
	        .attr("target","_blank")
	        .attr("href",function(d) {return d.link;})
	        .exit();

	d3.select(".brunch-link"+[i]).selectAll("img").remove();
	var displaySuit = d3.select(".brunch-link"+[i]).selectAll("#brunch-link"+[i])
			.data(suits.filter(function (d, i) { return i === suit2;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("margin-top","70%")
	        .style("vertical-align","middle")
	        .style("background-position","center")
	        .style("background-size","100%")
	       	// .attr("alt", function(d){return "(Dated " + d.objectBegin + ") " + d.credit})
	        .attr("title", function(d){return "(Dated " + d.objectBegin + ") " + d.credit})
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .attr("class", "target")
	        .attr("id", "target1")
	        .exit();
	      };


	var jumpingSuit = Math.floor((Math.random() * suits.length) + 0);
	
	for(i=3;i<11;i++){
	

	d3.select(".ff"+[i]).selectAll("div").remove();

	var displayff = d3.select(".ff"+[i]).selectAll("#ff"+[i])
	        .data(suits.filter(function (d, i) { return i === jumpingSuit;}))
	        .enter()
	        .append('div')
	        // .attr("alt", function(d){return d.Culture})
	        .attr("title", function(d){return d.Culture})
	        .attr("class", function(d){return d.Culture})
	        .exit();

	d3.select(".brunch"+[i]).selectAll("a").remove();
	var setupLink3 = d3.select(".brunch"+[i]).selectAll("#brunch"+[i])
			.data(suits.filter(function (d, i) { return i === jumpingSuit;}))
	        .enter()
	        .append('a')
	        .attr("class","brunch-link"+[i])
	        .attr("id","brunch-link"+[i])
	        .attr("target","_blank")
	        .attr("href",function(d) {return d.link;})
	        .exit();

	d3.select(".brunch-link"+[i]).selectAll("img").remove();
	var displaySuit = d3.select(".brunch-link"+[i]).selectAll("#brunch-link"+[i])
			.data(suits.filter(function (d, i) { return i === jumpingSuit;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("margin-top","70%")
	        .style("vertical-align","middle")
	        .style("background-position","center")
	        .style("background-size","100%")
	        // .attr("alt", function(d){return "(Dated " + d.objectBegin + ") " + d.credit})
	        .attr("title", function(d){return "(Dated " + d.objectBegin + ") " + d.credit})
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .attr("class", "target")
	        .attr("id", "target1")
	        .exit();

	};
	        // end getcsv
			});

// end updateStart
};