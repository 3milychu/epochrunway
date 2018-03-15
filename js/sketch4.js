function setup(){

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		document.getElementById("mobile").style.display="inline";
		document.getElementById("main").style.display="none";
	};

	noCanvas();

	// window.setInterval(function(){
	// animatethis($('#scroll-post-head'), 5000);
	// }, 1000);

	getHeadwear();
	console.log("Headwear is loaded");
	animatethis($('#scroll-post-head'), 90000);

	getTops();
	console.log("Tops are loaded");
	animatethis($('#scroll-post-top'), 90000);

	getAcc();
	console.log("Accessories are loaded");
	animatethis($('#scroll-post-acc'),150000);

	getEnsembles();
	console.log("Ensembles are loaded");
	animatethis($('#scroll-post-fullbody'),150000);

	getBottoms();
	console.log("Bottoms are loaded");
	animatethis($('#scroll-post-bottom'),90000);

	getFeet();
	console.log("Footwear is loaded");
	animatethis($('#scroll-post-feet'),90000);

	};

function animatethis(targetElement, speed) {
    var scrollWidth = $(targetElement).get(0).scrollWidth;
    var clientWidth = $(targetElement).get(0).clientWidth;
    $(targetElement).animate({ scrollLeft: scrollWidth},
    {
        duration: speed,
        complete: function () {
            targetElement.animate({ scrollLeft: 0 },
            {
                duration: speed,
                complete: function () {
                    animatethis(targetElement, speed);
                }
            });
        }
    });
};



function getHeadwear() {

	d3.csv("https://media.githubusercontent.com/media/3milychu/majorstudio/master/data/clothes/costume_reclass.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.objectBegin = +d.objectBegin;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			// Head
			  head = data.filter(function(d) { 
			    	return d.bodyclass1 == "head"});

			  headsort = head.sort(d3.ascending);
			  console.log(headsort.length);


	// for (i=0;i<headsort.length;i++){
		d3.select(".scroll-post-head").selectAll("img").remove();
		var myHeadwear = d3.select(".scroll-post-head").selectAll("#scroll-post-head")
			.data(headsort)
	        .enter()
	        .append('a')
	        .attr("href",function(d) {return d.link})
	        .attr("target","_blank")
	        .append('img')
	        .style("width","50px")
	        .style("max-height","100px")
	        .style("background-position","center")
	        .attr("alt", function(d){return d.Title +", " + d.objectBegin + ", " + d.Culture})
	        .attr("title", function(d){return d.Title +", " + d.objectBegin + ", " + d.Culture})
	        .attr("src",function(d) {return "assets/" + d.folder + "/" + d.img2+".png";})
	        .exit();

	// };
	
	        // end getcsv
			});
// end getHeadwear
};


function getTops() {

	d3.csv("https://media.githubusercontent.com/media/3milychu/majorstudio/master/data/clothes/costume_reclass.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.objectBegin = +d.objectBegin;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			// Head
			  tops = data.filter(function(d) { 
			    	return d.bodyclass1 == "top"});

			  topsort = tops.sort(d3.ascending);
			  console.log(topsort.length);


	// for (i=0;i<topsort.length;i++){

		d3.select(".scroll-post-top").selectAll("img").remove();
		var myTops = d3.select(".scroll-post-top").selectAll("#scroll-post-top")
			.data(topsort)
	        .enter()
	        .append('a')
	        .attr("href",function(d) {return d.link})
	        .attr("target","_blank")
	        .append('img')
	       	.style("width","50px")
	        .style("max-height","100px")
	        .style("background-position","center")
	        .attr("alt", function(d){return d.Title +", " + d.objectBegin + ", " + d.Culture})
	        .attr("title", function(d){return d.Title +", " + d.objectBegin + ", " + d.Culture})
	        .attr("src",function(d) {return "assets/" + d.folder + "/" + d.img2+".png";})
	        .exit();

	// };
	
	        // end getcsv
			});
// end getTops
};

function getBottoms() {

	d3.csv("https://media.githubusercontent.com/media/3milychu/majorstudio/master/data/clothes/costume_reclass.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.objectBegin = +d.objectBegin;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			// Head
			  bottoms = data.filter(function(d) { 
			    	return d.bodyclass1 == "bottom"});

			  bottomsort = bottoms.sort(d3.ascending);
			  console.log(bottomsort.length);


	// for (i=0;i<bottomsort.length;i++){
		d3.select(".scroll-post-bottom").selectAll("img").remove();
		var myBottoms = d3.select(".scroll-post-bottom").selectAll("#scroll-post-bottom")
			.data(bottomsort)
	        .enter()
	        .append('img')
	       	.style("width","50px")
	        .style("max-height","100px")
	        .style("background-position","center")
	        .attr("alt", function(d){return d.Title +", " + d.objectBegin + ", " + d.Culture})
	        .attr("title", function(d){return d.Title +", " + d.objectBegin + ", " + d.Culture})
	        .attr("src",function(d) {return "assets/" + d.folder + "/" + d.img2+".png";})
	        .exit();

	// };
	
	        // end getcsv
			});
// end getBottoms
};


function getEnsembles() {

	d3.csv("https://media.githubusercontent.com/media/3milychu/majorstudio/master/data/clothes/costume_reclass.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.objectBegin = +d.objectBegin;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			// fullbody
			  fullbody = data.filter(function(d) { 
			    	return d.bodyclass1 == "fullbody"});

			  fullbodysort = fullbody.sort(d3.ascending);
			  console.log(fullbodysort.length);


	// for (i=0;i<fullbodysort.length;i++){
		d3.select(".scroll-post-fullbody").selectAll("img").remove();
		var myEnsembles = d3.select(".scroll-post-fullbody").selectAll("#scroll-post-fullbody")
			.data(fullbodysort)
	        .enter()
	        .append('a')
	        .attr("href",function(d) {return d.link})
	        .attr("target","_blank")
	        .append('img')
	       	.style("width","50px")
	        .style("max-height","100px")
	        .style("background-position","center")
	        .attr("alt", function(d){return d.Title +", " + d.objectBegin + ", " + d.Culture})
	        .attr("title", function(d){return d.Title +", " + d.objectBegin + ", " + d.Culture})
	        .attr("src",function(d) {return "assets/" + d.folder + "/" + d.img2+".png";})
	        .exit();

	// };
	
	        // end getcsv
			});
// end getEnsembles
};

function getFeet() {

	d3.csv("https://media.githubusercontent.com/media/3milychu/majorstudio/master/data/clothes/costume_reclass.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.objectBegin = +d.objectBegin;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			// feet
			  feet = data.filter(function(d) { 
			    	return d.bodyclass1 == "feet"});

			  feetsort = feet.sort(d3.ascending);
			  console.log(feetsort.length);


	// for (i=0;i<feetsort.length;i++){
		d3.select(".scroll-post-feet").selectAll("img").remove();
		var myFeet = d3.select(".scroll-post-feet").selectAll("#scroll-post-feet")
			.data(feetsort)
	        .enter()
	        .append('a')
	        .attr("href",function(d) {return d.link})
	        .attr("target","_blank")
	        .append('img')
	       	.style("width","40px")
	        .style("max-height","80px")
	        .style("background-position","center")
	        .style("vertical-align","middle")
	        .attr("alt", function(d){return d.Title +", " + d.objectBegin + ", " + d.Culture})
	        .attr("title", function(d){return d.Title +", " + d.objectBegin + ", " + d.Culture})
	        .attr("src",function(d) {return "assets/" + d.folder + "/" + d.img2+".png";})
	        .exit();

	// };
	
	        // end getcsv
			});
// end getBottoms
};


function getAcc() {

	d3.csv("https://media.githubusercontent.com/media/3milychu/majorstudio/master/data/clothes/costume_reclass.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.objectBegin = +d.objectBegin;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			// feet
			  acc = data.filter(function(d) { 
			    	return d.bodyclass1 == "accessory" });

			  accsort = acc.sort(d3.ascending);
			  console.log(accsort.length);


	// for (i=0;i<accsort.length;i++){
		d3.select(".scroll-post-acc").selectAll("img").remove();
		var myAcc = d3.select(".scroll-post-acc").selectAll("#scroll-post-acc")
			.data(accsort)
	        .enter()
	        .append('a')
	        .attr("href",function(d) {return d.link})
	        .attr("target","_blank")
	        .append('img')
	       	.style("width","50px")
	        .style("max-height","100px")
	        .style("background-position","center")
	        .attr("alt", function(d){return d.Title +", " + d.objectBegin + ", " + d.Culture})
	        .attr("title", function(d){return d.Title +", " + d.objectBegin + ", " + d.Culture})
	        .attr("src",function(d) {return "assets/" + d.folder + "/" + d.img2+".png";})
	        .exit();

	// };
	
	        // end getcsv
			});
// end getAcc
};