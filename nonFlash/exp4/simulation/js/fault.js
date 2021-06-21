const data = [
    {
        id: "meter1",
        switch: {
            id: "f1",
            status: false,
        },
    },
    {
        id: "meter2",
        switch: {
            id: "f2",
            status: false,
        },
    }
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
document.getElementById('hand1').style.animation="moveHand 2s infinite";
document.getElementById('hand2').style.animation="moveHand 2s infinite";


updateMeterTable3();

function changeSwitchStatus(ele){
    data.filter((e)=>{
        if(e.switch.id == ele.id){
            e.switch.status = !e.switch.status;
            changeSwitch(e.switch.id, e.switch.status);
        }
    })
}

function changeSwitch(switchId, status){
	document.getElementById(switchId).src = status == true ? "./images/switchClose.png" : "./images/switchOpen.png";
    updateTable(switchId, status)
}

function updateTable(index, status){
	if(index == "f1"){
		document.getElementById("mi1").innerHTML = status == true ? 0 : 45;
		document.getElementById("mp1").innerHTML = status == true ? 0 : 857.36;
		document.getElementById("leftBlue").style.opacity = status == true ? 1 : 0;
        updateMeterTable3();
        if(status == true){
            showPopup("CB6 is tripped");
        }
	} else if(index == "f2"){
        document.getElementById("mi2").innerHTML = status == true ? 0 : 30;
        document.getElementById("mp2").innerHTML = status == true ? 0 : 571.57;
        document.getElementById("rightBlue").style.opacity = status == true ? 1 : 0;
        updateMeterTable3();
        if(status == true){
            showPopup("CB7 is tripped");
        }
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
    data.forEach((e)=>{
            e.switch.status = false;
            document.getElementById(e.switch.id ).src="./images/switchOpen.png";
    })
    document.getElementById("mi1").innerHTML = 45;
    document.getElementById("mv1").innerHTML = 11;
    document.getElementById("mp1").innerHTML = 857.36;
    document.getElementById("mi2").innerHTML = 30;
    document.getElementById("mv2").innerHTML = 11;
    document.getElementById("mp2").innerHTML = 571.57;
    document.getElementById("leftBlue").style.opacity = 0;
    document.getElementById("rightBlue").style.opacity = 0;
    updateMeterTable3();
}

function checkForTrippedState(){
    if(data[0].switch.status == true) {
        showPopup("CB6 is Tripped");
    }
    if(data[1].switch.status == true) {
        showPopup("CB7 is Tripped");
    }
    if(data[0].switch.status == true && data[1].switch.status == true ) {
        showPopup("CB6 & CB7 is Tripped");
    }
}


