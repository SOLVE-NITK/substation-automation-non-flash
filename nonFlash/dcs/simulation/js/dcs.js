
let myInt = 0, arrowInt1 = 0; arrowInt2 = 0;
let screen = 0;
let circuitControl = [
	{
		control: 1,
		status: {
			statusId: 'CB1',
			pos: 'position: absolute;left: 560px;top: 142px;width: 18px;height: 15px;',
			src: 'images/red.png'
		}, 
		click: {
			clickId: 'C1',
			pos: "position: absolute;left: 40px;top: 140px;width: 22px;height: 20px;cursor: pointer",
			rePos: "position: absolute;left: 60px;top: 140px;width: 22px;height: 20px;cursor: pointer",
			src: 'images/click.png'
		}, 
		switch: {
			switchId: 'SW1',
			pos: "position: absolute;left: 63px;top: 142px;width: 19px;height: 15px;",
			rePos: "position: absolute;left: 82px;top: 142px;width: 19px;height: 15px;",
			src: 'images/switch.png'
		},
		active: false
		
	}, 
	{
		control: 2,
		status: {
			statusId: 'CB2',
			pos: "position: absolute;left: 513px;top: 262px;width: 18px;height: 15px;",
			src: 'images/red.png'
		}, 
		click: {
			clickId: 'C2',
			pos: "position: absolute;left: 40px;top: 180px;width: 22px;height: 20px;cursor: pointer",
			rePos: "position: absolute;left: 60px;top: 180px;width: 22px;height: 20px;cursor: pointer",
			src: 'images/click.png'
		}, 
		switch: {
			switchId: 'SW2',
			pos: "position: absolute;left: 63px;top: 182px;width: 19px;height: 15px;",
			rePos: "position: absolute;left: 82px;top: 182px;width: 19px;height: 15px;",
			src: 'images/switch.png'
		},
		active: false
		
	}, 
	{
		control: 3,
		status: {
			statusId: 'CB3',
			pos: "position: absolute;left: 612px;top: 262px;width: 18px;height: 16px;",
			src: 'images/red.png'
		}, 
		click: {
			clickId: 'C3',
			pos: "position: absolute;left: 40px;top: 223px;width: 22px;height: 20px;cursor: pointer",
			rePos: "position: absolute;left: 60px;top: 223px;width: 22px;height: 20px;cursor: pointer",
			src: 'images/click.png'
		}, 
		switch: {
			switchId: 'SW3',
			pos: "position: absolute;left: 63px;top: 225px;width: 19px;height: 15px;",
			rePos: "position: absolute;left: 83px;top: 225px;width: 19px;height: 15px;",
			src: 'images/switch.png'
		},
		active: false
		
	}, 
	{
		control: 4,
		status: {
			statusId: 'CB4',
			pos: "position: absolute;left: 514px;top: 330px;width: 19px;height: 16px;",
			src: 'images/red.png'
		}, 
		click: {
			clickId: 'C4',
			pos: "position: absolute;left: 40px;top: 264px;width: 22px;height: 20px;cursor: pointer",
			rePos: "position: absolute;left: 60px;top: 264px;width: 22px;height: 20px;cursor: pointer",
			src: 'images/click.png'
		}, 
		switch: {
			switchId: 'SW4',
			pos: "position: absolute;left: 63px;top: 266px;width: 19px;height: 15px;",
			rePos: "position: absolute;left: 82px;top: 266px;width: 19px;height: 15px;",
			src: 'images/switch.png'
		},
		active: false
		
	}, 
	{
		control: 5,
		status: {
			statusId: 'CB5',
			pos: "position: absolute;left: 613px;top: 330px;width: 18px;height: 15px;",
			src: 'images/red.png'
		}, 
		click: {
			clickId: 'C5',
			pos: "position: absolute;left: 40px;top: 308px;width: 22px;height: 20px;cursor: pointer",
			rePos: "position: absolute;left: 60px;top: 308px;width: 22px;height: 20px;cursor: pointer",
			src: 'images/click.png'
		}, 
		switch: {
			switchId: 'SW5',
			pos: "position: absolute;left: 63px;top: 310px;width: 19px;height: 15px;",
			rePos: "position: absolute;left: 82px;top: 310px;width: 19px;height: 15px;",
			src: 'images/switch.png'
		},
		active: false
		
	}, 
	{
		control: 6,
		status: {
			statusId: 'CB6',
			pos: "position: absolute;left: 496px;top: 380px;width: 19px;height: 16px;",
			src: 'images/red.png'
		}, 
		click: {
			clickId: 'C6',
			pos: "position: absolute;left: 40px;top: 350px;width: 22px;height: 20px;cursor: pointer",
			rePos: "position: absolute;left: 60px;top: 350px;width: 22px;height: 20px;cursor: pointer",
			src: 'images/click.png'
		}, 
		switch: {
			switchId: 'SW6',
			pos: "position: absolute;left: 63px;top: 352px;width: 19px;height: 15px;",
			rePos: "position: absolute;left: 82px;top: 352px;width: 19px;height: 15px;",
			src: 'images/switch.png'
		},
		active: false
		
	}, 
	{
		control: 7,
		status: {
			statusId: 'CB7',
			pos: "position: absolute;left: 632px;top: 380px;width: 19px;height: 16px;",
			src: 'images/red.png'
		}, 
		click: {
			clickId: 'C7',
			pos: "position: absolute;left: 40px;top: 388px;width: 22px;height: 20px;cursor: pointer",
			rePos: "position: absolute;left: 60px;top: 388px;width: 22px;height: 20px;cursor: pointer",
			src: 'images/click.png'
		}, 
		switch: {
			switchId: 'SW7',
			pos: "position: absolute;left: 63px;top: 390px;width: 19px;height: 15px;",
			rePos: "position: absolute;left: 82px;top: 390px;width: 19px;height: 15px;",
			src: 'images/switch.png'
		},
		active: false
	}
]
function navNext()
{
	for(temp=0;temp<=4;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	magic();
}


function navBack()
{
	for(temp=0;temp<=4;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum-=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
    document.getElementById("nextButton").style.visibility="visible";
    refresh();
	magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow(arrow1)
{
	if (document.getElementById(arrow1).style.visibility=="hidden")
		document.getElementById(arrow1).style.visibility="visible";
	else
		document.getElementById(arrow1).style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction(myInt, arrow1)
{
     clearInterval(myInt);
     document.getElementById(arrow1).style.visibility="hidden";
}

//animate arrow at position
function animateArrowATPosition(left,top,degg)
{
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)";
	 // Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
	 // Standard syntax
	document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
}


function highlightRedArrow(){
	if (document.getElementById('h1').style.visibility=="visible"){
		document.getElementById('h1').style.visibility="hidden";
		document.getElementById('h2').style.visibility="visible";
	}
	else if(document.getElementById('h1').style.visibility=="hidden") {
		document.getElementById('h1').style.visibility="visible";
		document.getElementById('h2').style.visibility="hidden";
	}
}

function moveArrow(){
	let arrows = document.getElementsByClassName("arr");
	for(let i=0; i< arrows.length; i++){
		arrows[i].style.transformOrigin = "right bottom";
		arrowInt1 = arrows[i].style.animation = "move 1s infinite";
	}
	let arrows1 = document.getElementsByClassName("arr1");
	for(let i=0; i< arrows1.length; i++){
		arrows1[i].style.transformOrigin = "left bottom";
		arrowInt2 = arrows1[i].style.animation = "move 1s infinite";
	}
}

let controlSetImages = '';
function magic()
{
	if(simsubscreennum==0)
	{
		screen = 0;
		myInt = setInterval(function() {highlightRedArrow()},500)
		moveArrow();
	}
	else if(simsubscreennum==1)
	{
		screen = 1;
		myStopFunction(myInt, 'h1');
		myStopFunction(myInt, 'h2');
		let arrows = document.getElementsByClassName("arr");
		let arrows1 = document.getElementsByClassName("arr1");
		for(let i=0; i< arrows.length; i++){
			arrows[i].style.animation = "";
			arrows[i].style.visibility = "hidden";
			arrows1[i].style.animation = "";
			arrows1[i].style.visibility = "hidden";
		}
		document.getElementById("prevButton").style.visibility = "visible";
	}
	else if(simsubscreennum == 2){
		screen = 2;
		arrowInt1 = setInterval(function() {animatearrow('leftArrow')},500)
		arrowInt2 = setInterval(function() {animatearrow('rightArrow')},500)
	}
	else if(simsubscreennum == 3){
		screen = 3;
		myStopFunction(arrowInt1, 'leftArrow');
		myStopFunction(arrowInt2, 'rightArrow');
		arrowInt1 = setInterval(function() {animatearrow('s1')},500)
	}
	else if(simsubscreennum == 4){
		screen = 4;
		myStopFunction(arrowInt1, 's1');
		document.getElementById("sim").style.opacity = 0;
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function(){
			document.getElementById('setup').style.visibility="visible";
			arrowInt1 = setInterval(function() {animatearrow('s2')},500)
			circuitControl.forEach(function(circuit, index){
				let CB = document.createElement('img');
				let C = document.createElement('img');
				let SW = document.createElement('img');
				CB.setAttribute("id",circuit.status.statusId)
				CB.setAttribute("src",circuit.status.src)
				CB.setAttribute("style",circuit.status.pos)

				C.setAttribute("id",circuit.click.clickId)
				C.setAttribute("src",circuit.click.src)
				C.setAttribute("style",circuit.click.pos)
				C.setAttribute('onclick',`activate(${index})`)

				SW.setAttribute("id",circuit.switch.switchId)
				SW.setAttribute("src",circuit.switch.src)
				SW.setAttribute("style",circuit.switch.pos)
				document.getElementById("canvas4").appendChild(CB);
				document.getElementById("canvas4").appendChild(C);
				document.getElementById("canvas4").appendChild(SW);
			})
		}, 2500);
	}
}

magic();


function activate(index){
	circuitControl[index].active = !circuitControl[index].active;
	document.getElementById(circuitControl[index].status.statusId).src = circuitControl[index].active ? "images/green.png" : circuitControl[index].status.src;
	document.getElementById(circuitControl[index].click.clickId).style = circuitControl[index].active ? circuitControl[index].click.rePos : circuitControl[index].click.pos;
	document.getElementById(circuitControl[index].switch.switchId).style = circuitControl[index].active ? circuitControl[index].switch.rePos : circuitControl[index].switch.pos;
}


function refresh() {
    myStopFunction(arrowInt1, 'leftArrow');
	myStopFunction(arrowInt2, 'rightArrow');
    if(simsubscreennum == 0){
        document.getElementById("prevButton").style.visibility = "hidden";
        document.getElementById("nextButton").style.visibility = "visible";
    }       
	if(visibleImagesId[simsubscreennum].initialImages.length>0) {
		visibleImagesId[simsubscreennum].initialImages.forEach(function(id,index){
			document.getElementById(id).style.visibility = "visible";
		});
	}
	if(visibleImagesId[simsubscreennum].hideImages.length>0) {
		visibleImagesId[simsubscreennum].hideImages.forEach(function(id,index){
			document.getElementById(id).style.visibility = "hidden";
		});
	}
	if(simsubscreennum == 3){
		document.getElementById('sim').style.opacity = 1;
		for(let i=1; i<=7; i++){
			let elem = document.getElementById("CB"+i);
			let elem1 = document.getElementById("C"+i);
			let elem2 = document.getElementById("SW"+i);
			elem.parentElement.removeChild(elem);
			elem1.parentElement.removeChild(elem1);
			elem2.parentElement.removeChild(elem2);
			circuitControl[i-1].active = false;
		}
	}
	
}
