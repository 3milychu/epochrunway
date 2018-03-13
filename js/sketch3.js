var headwear;
var tops;
var bottoms;
var fullbody;
var feet;
var accessory;
var img;

function preload() {
  table = loadTable('https://media.githubusercontent.com/media/3milychu/majorstudio/master/data/clothes/costume_reclass.csv',
  'csv', 'header');
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
 
  // Move the canvas so it’s inside our <div id="sketch">.
  canvas.parent('sketch');

  // background(255, 0, 200);

 headwear = table.findRows('head', 'bodyclass1');
  	console.log(headwear.length + ' headpieces');
 tops = table.findRows('top', 'bodyclass1');
  	console.log(tops.length + ' tops');
  bottoms = table.findRows('bottom', 'bodyclass1');
  	 console.log(bottoms.length + ' bottoms');
  fullbody = table.findRows('fullbody', 'bodyclass1');
  	 console.log(fullbody.length + ' ensembles');
  feet = table.findRows('feet', 'bodyclass1');
  	 console.log(feet.length + ' footwear');
  accessory = table.findRows('accessory', 'bodyclass1');
  	 console.log(accessory.length + ' accessories');

}

function draw() {

	// Draw headpieces
	for (i=0;i<headwear.length;i++){
		headwear = table.findRows('head', 'bodyclass1');
		folder=table.getColumn('folder')[i];
		imgPath = table.getColumn('img')[i];
		img = loadImage("https://raw.githubusercontent.com/3milychu/majorstudio/master/" + folder + "/" + imgPath +".png");
		image(img, 50, 50, img.width/2, img.height/2);
	};

}