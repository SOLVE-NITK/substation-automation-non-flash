const data = [
    {
        id: "meter1",
        switch: [{
            id: "f11",
            status: false,
        },
        {
            id: "f12",
            status: false,
        },
        {
            id: "f13",
            status: false,
        },
        {
            id: "f14",
            status: false
        }],
        counter: -1,
        m1: [15, 30, 45, 0],
        v1: 11,
        p1: [285.78, 571.57, 857.36, 0]
    },
    {
        id: "meter2",
        switch: [{
            id: "f21",
            status: false,
        },{
            id: "f22",
            status: false,
        },{
            id: "f23",
            status: false,
        },{
            id: "f24",
            status: false
        }],
        counter: -1,
        m2: [15, 30, 45, 0],
        v2: 11,
        p2: [285.78, 571.57, 857.36, 0]
    },
    
]



function blinkArrow(id){
	if(document.getElementById(id).style.visibility == "visible") {
		document.getElementById(id).style.visibility = "hidden"
	} else {
		document.getElementById(id).style.visibility = "visible"
	}
}
let upArrow = setInterval(function(){
	blinkArrow('upArrow');
}, 500);
let leftArrow = setInterval(function(){
	blinkArrow('leftArrow');
}, 500);
let rightArrow = setInterval(function(){
	blinkArrow('rightArrow');
}, 500);
let info = setInterval(function(){
	blinkArrow('info');
}, 500);

document.getElementById('arr').style.animation="moveArrow 1s infinite";
document.getElementById('hand').style.animation="moveHand 2s infinite";



function changeSwitchStatus(ele){
	data.forEach((d)=>{
		d.switch.filter((e)=>{
			if(e.id == ele.id){
				e.status = !e.status;
				changeSwitch(e.id, e.status);
			}
		})
	})
}

function changeSwitch(switchId, status){
	document.getElementById(switchId).src = status == true ? "./images/switchClose.png" : "./images/switchOpen.png";
	if(switchId == "f11" || switchId == "f12" || switchId == "f13"|| switchId == "f14" ){
		updateTable(0, status)
	} else if(switchId == "f21" || switchId == "f22" || switchId == "f23"|| switchId == "f24" ){
		updateTable(1, status)
	}
}

function updateTable(index, status){
	data[index].counter = status == true ? data[index].counter+1 : data[index].counter-1;
	if(index == 0){
		document.getElementById("mi1").innerHTML = data[index].counter == -1 ? data[index].m1[3] : data[index].m1[data[index].counter];
		document.getElementById("mp1").innerHTML = data[index].counter == -1 ? data[index].m1[3] : data[index].p1[data[index].counter];
		document.getElementById("meter1Load").innerHTML = data[index].counter == 2 ? "FULL LOAD" : data[index].counter == 3 ? "TRIP": "";
		document.getElementById("leftBlue").style.opacity = data[index].counter == 3 ? 1: 0;
        if(data[index].counter == 3) {
            showPopup("CB6 is Tripped");
        }
        updateMeterTable3();
	} else {
		document.getElementById("mi2").innerHTML = data[index].counter == -1 ? data[index].m2[3] : data[index].m2[data[index].counter];
		document.getElementById("mp2").innerHTML = data[index].counter == -1 ? data[index].m2[3] : data[index].p2[data[index].counter];
		document.getElementById("meter2Load").innerHTML = data[index].counter == 2 ? "FULL LOAD" : data[index].counter == 3 ? "TRIP": "";
		document.getElementById("rightBlue").style.opacity = data[index].counter == 3 ? 1: 0;
		if(data[index].counter == 3) {
            showPopup("CB7 is Tripped");
        }
        updateMeterTable3();
	}
    checkForTrippedState();
}


function showPopup(text){
    document.getElementById("parentPopup").style.display = "block";
    document.getElementById("popUpContent").innerHTML = `<span class="close"
    onclick="closeModal(event);">Trip</span>
    <p style="text-align:center;padding-top: 20%; font-size: 14px">${text}</p>
    <p style="text-align:center;"><button style="margin:auto;font-size: 14px; cursor: pointer" onclick="closeModal(event)">OK</button></p>
    `
}

function closeModal(ev){
ev.preventDefault();
document.getElementById("parentPopup").style.display = "none";
}

function updateMeterTable3(){
    let m3 = ((Number(document.getElementById("mi1").innerText)+Number(document.getElementById("mi2").innerText))/3);
    let p3 = ((Number(document.getElementById("mp1").innerText)+Number(document.getElementById("mp2").innerText))).toFixed(2);
    document.getElementById("mi3").innerHTML = m3;
    document.getElementById("mp3").innerHTML = p3 == 0.00 ? 0 : p3;
}

function resetSwitch(){
     data.forEach((d)=>{
        d.counter = -1;
		d.switch.forEach((e)=>{
				e.status = false;
                document.getElementById(e.id).src="./images/switchOpen.png";
		})
	})
    document.getElementById("mi1").innerHTML = data[0].m1[3];
    document.getElementById("mp1").innerHTML = data[0].p1[3];
    document.getElementById("mi2").innerHTML = data[1].m2[3];
    document.getElementById("mp2").innerHTML = data[1].p2[3];
    document.getElementById("mi3").innerHTML = data[1].m2[3];
    document.getElementById("mp3").innerHTML = data[1].p2[3];
}


function checkForTrippedState(){
    if(data[0].counter == 3) {
        showPopup("CB6 is Tripped");
    }
    if(data[1].counter == 3) {
        showPopup("CB7 is Tripped");
    }
    if(data[0].counter == 3 && data[1].counter == 3 ) {
        showPopup("CB6 & CB7 is Tripped");
    }
}
