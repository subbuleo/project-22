		var starImg,bgImg;
		var star, starBody;
		//create variable for fairy sprite and fairyImg
		var fairy, fairyImage;
		const Engine = Matter.Engine;
		const World = Matter.World;
		const Bodies = Matter.Bodies;
		const Body = Matter.Body;
		function preload()
		{
			starImg = loadImage("images/star.png");
			bgImg = loadImage("images/starNight.png");
			//load animation for fairy here
			fairyImage= loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
			//****MAM IF I LOAD THE SOUND here AND call IT in line 28  ITS NOT COMING MAM**********************<=======please read this .
			//and mam the fairy and the star are disappearing instead of stopping i triend it in 2 ways mam *********<=====this too please.
			//fairySound = loadSound("joyMusic.mp3");
		}
		function setup() {
			createCanvas(800, 700);

			//write code to play fairyVoice sound


			//create fairy sprite and add animation for fairy
			fairy = createSprite(155,400);
		fairy.addAnimation("flyingfairy",fairyImage);
		fairy.scale=0.4;
			//fairySound.play();


			star = createSprite(650,30);
			star.addImage(starImg);
			star.scale = 0.2;


			engine = Engine.create();
			world = engine.world;

			starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
			World.add(world, starBody);
			
			Engine.run(engine);

		}
		function draw() {
		background(bgImg);

		star.x= starBody.position.x 
		star.y= starBody.position.y 

		console.log(star.y);

		//write code to stop star in the hand of fairy
		/*if(star.y > 470 && starBody.position.y >470){
		matter.body.setStatic(starBody,true);*/
		if(star.isTouching(fairy)){
			fairy.velocityX=0;
			matter.body.setStatic(starBody,true)

		}

		fairy.setCollider("rectangle",0,0,1040,100)
		fairy.debug = false;
		drawSprites();

		}
		function keyPressed() {

			if (keyCode === DOWN_ARROW) {
				Matter.Body.setStatic(starBody,false); 
			}

			//writw code to move fairy left and right
			if(keyCode === RIGHT_ARROW){
				fairy.velocityX=2 ;
			}
			
			
			}
