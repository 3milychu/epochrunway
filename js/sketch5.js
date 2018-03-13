var audio;

function setup(){

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		document.getElementById("mobile").style.display="inline";
		document.getElementById("main").style.display="none";
	};

	noCanvas();

	updateStart();

	playTrack();

	// window.setInterval(function(){
	// getFact();
	// }, 10000);

	window.setInterval(function(){
	updateStart();
	}, 5000);

	};

function playTrack(){
	// mytrack = str("track"+ Math.floor(Math.random() * 7+1));

	audio = new Audio('audio/' + "track9" +'.mp3');
	console.log(audio);

	audio.play();
}


function pauseTrack() {
	audio = audio;
	audio.pause();
	// audio.currentTime = currentTime;
}

function updateStart() {

	d3.csv("https://media.githubusercontent.com/media/3milychu/majorstudio/master/data/clothes/costume_reclass.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.objectBegin = +d.objectBegin;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			// Hand Accessories
			  handAcc = data.filter(function(d) { 
			    	return d.bodyclass1 == "accessory" && d.bodyclass2 == "hand"});

			// Leg Accessories
			  legAcc = data.filter(function(d) { 
			    	return d.bodyclass1 == "accessory" && d.bodyclass2 == "leg"});

			  // Ear Accessories
			  earAcc = data.filter(function(d) { 
			    	return d.bodyclass1 == "accessory" && d.bodyclass2 == "ears"});
	
	var acc = Math.floor((Math.random() * handAcc.length) + 0);
	
	for(i=0;i<9;i++){

	d3.select(".hand"+[i]).selectAll("img").remove();

	var displayHandAcc = d3.select(".hand"+[i]).selectAll("#hand"+[i])
			.data(handAcc.filter(function (d, i) { return i === acc;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("vertical-align","middle")
	        .style("background-position","center")
	        .style("background-size","100%")
	        .style("z-index","0")
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .exit();
	      };


	var acc2 = Math.floor((Math.random() * legAcc.length) + 0);
	
	for(i=0;i<9;i++){

	d3.select(".leg"+[i]).selectAll("img").remove();

	var displayLegAcc = d3.select(".leg"+[i]).selectAll("#leg"+[i])
			.data(legAcc.filter(function (d, i) { return i === acc2;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("vertical-align","middle")
	        .style("background-position","center")
	        .style("background-size","100%")
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .exit();
	      };


	var acc3 = Math.floor((Math.random() * earAcc.length) + 0);
	
	for(i=0;i<7;i++){

	d3.select(".ear"+[i]).selectAll("img").remove();

	var displayEarAcc = d3.select(".ear"+[i]).selectAll("#ear"+[i])
			.data(earAcc.filter(function (d, i) { return i === acc3;}))
	        .enter()
	        .append('img')
	        .style("width","100%")
	        .style("height","100%")
	        .style("vertical-align","middle")
	        .style("background-position","center")
	        .style("background-size","100%")
	        .style("z-index","0")
	        .attr("src",function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img+".png";})
	        .exit();
	      };
    // end getcsv
	});

// end updateStart
};