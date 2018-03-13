function preload() {

	d3.csv("https://media.githubusercontent.com/media/3milychu/majorstudio/master/data/clothes/costume_reclass.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.objectBegin = +d.objectBegin;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			preloads = [];

			for (i=0;i<data.length;i++) {
				var url = function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" + d.img + ".png";}
				preloads.push(url);
			}
			console.log(preloads);

			var tempImg = []

			for(var x=0;x<preloads.length;x++) {
			    tempImg[x] = new Image()
			    tempImg[x].src = preloads[x]
			};
	});
};

<script>
	function preload() {
		var queue = new createjs.LoadQueue(false);
		queue.on("fileload", handleFileComplete);

		d3.csv("https://media.githubusercontent.com/media/3milychu/majorstudio/master/data/clothes/costume_reclass.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.objectBegin = +d.objectBegin;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			for (i=0;i<data.length;i++) {
				var url = function(d) {return "https://raw.githubusercontent.com/3milychu/majorstudio/master/" + d.folder + "/" 
				+ d.img + ".png";};
				queue.loadFile(str(url));
			};
	});

				function handleFileComplete(event) {
				document.body.appendChild(event.result);
			};
	};
	</script>


	var my_image = new Image();

// we will call this function when the image has finished loading
function notify_complete()
{
    alert('The image has been loaded into the browser cache.');
}

function load_image()
{
    // call the notify_complete function when the image has loaded
    my_image.onload = notify_complete;

    // load the image
    my_image.src = 'someimage.jpg';
}