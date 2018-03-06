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

			// Suits
			  suits= data.filter(function(d) { 
			    	return d.objectName == "Suit"});
	
	
	for(i=0;i<4;i++){
	var suit = Math.floor((Math.random() * suits.length) + 0);

	d3.select(".ff"+[i]).selectAll("div").remove();

	var displayff = d3.select(".ff"+[i]).selectAll("#ff"+[i])
	        .data(suits.filter(function (d, i) { return i === suit;}))
	        .enter()
	        .append('div')
	        .attr("class", function(d){return d.Culture})
	        .exit();

	d3.select(".brunch"+[i]).selectAll("img").remove();

	var displaySuit = d3.select(".brunch"+[i]).selectAll("#brunch"+[i])
			.data(suits.filter(function (d, i) { return i === suit;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("margin-top","70%")
	        .style("vertical-align","middle")
	        .style("background-position","center")
	        .style("background-size","100%")
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .attr("class", "target")
	        .attr("id", "target1")
	        .exit();

	};
	



	        // end getcsv
			});

// end updateStart
};