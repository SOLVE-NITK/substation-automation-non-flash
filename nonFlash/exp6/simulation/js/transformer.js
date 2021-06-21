let txt = 'Select Transformer for Maintenance. Only one transformer can be tried at once.';
let speed = 80;
let i = 0;
let selectedTransformer = false;
let buttonsArray = [];
let instructions = "";
let transformer = "";
let operationId = "";
let takeOutTr1Clicked = false;
let takeOutTr2Clicked = false;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("tag").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("tag").innerHTML = "";
    i=0;
    setTimeout(typeWriter, speed);
  }
}
let circuitControl = [
	{
		control: 1,
		status: {
			id: 'cb1',
			pos: 'position: absolute; left: 65px; top: 185px;width: 40px;',
			src: 'images/on.png'
		}, 
		forceOperation: {
			id: 'cb1Force',
			pos: "position: absolute; left: 125px; top: 185px;width: 40px; cursor: pointer",
			src: 'images/off.png'
		}, 
        indicator: {
            id: 'ind1',
            pos: "position: absolute; left: 455px; top: 75px;width: 32px;",
            src: 'images/green.png'
        },
		active: true
		
	}, 
	{
		control: 2,
		status: {
			id: 'cb2',
			pos: 'position: absolute; left: 65px; top: 213px;width: 40px; ',
			src: 'images/on.png'
		}, 
		forceOperation: {
			id: 'cb2Force',
			pos: "position: absolute; left: 125px; top: 213px;width: 40px; cursor: pointer",
			src: 'images/off.png'
		}, 
        indicator: {
            id: 'ind2',
            pos: "position: absolute; left: 355px; top: 199px;width: 32px;",
            src: 'images/green.png'
        },
		active: true
		
	}, 
	{
		control: 3,
		status: {
			id: 'cb3',
			pos: 'position: absolute; left: 65px; top: 240px;width: 40px; ',
			src: 'images/on.png'
		}, 
		forceOperation: {
			id: 'cb3Force',
			pos: "position: absolute; left: 125px; top: 240px;width: 40px; cursor: pointer",
			src: 'images/off.png'
		}, 
        indicator: {
            id: 'ind3',
            pos: "position: absolute; left: 594px; top: 199px;width: 32px;",
            src: 'images/green.png'
        },
		active: true
		
	}, 
	{
		control: 4,
		status: {
			id: 'cb4',
			pos: 'position: absolute; left: 65px; top: 268px;width: 40px; ',
			src: 'images/on.png'
		}, 
		forceOperation: {
			id: 'cb4Force',
			pos: "position: absolute; left: 125px; top: 268px;width: 40px; cursor: pointer",
			src: 'images/off.png'
		}, 
        indicator: {
            id: 'ind4',
            pos: "position: absolute; left: 353px; top: 270px;width: 32px;",
            src: 'images/green.png'
        },
		active: true
		
	}, 
	{
		control: 5,
		status: {
			id: 'cb5',
			pos: 'position: absolute; left: 65px; top: 296px;width: 40px; ',
			src: 'images/on.png'
		}, 
		forceOperation: {
			id: 'cb5Force',
			pos: "position: absolute; left: 125px; top: 296px;width: 40px; cursor: pointer",
			src: 'images/off.png'
		}, 
        indicator: {
            id: 'ind5',
            pos: "position: absolute; left: 596px; top: 270px;width: 32px;",
            src: 'images/green.png'
        },
		active: true
		
	}, 
	{
		control: 6,
		status: {
			id: 'cb6',
			pos: 'position: absolute; left: 65px; top: 326px;width: 40px; ',
			src: 'images/on.png'
		}, 
		forceOperation: {
			id: 'cb6Force',
			pos: "position: absolute; left: 125px; top: 326px;width: 40px; cursor: pointer",
			src: 'images/off.png'
		}, 
        indicator: {
            id: 'ind6',
            pos: "position: absolute; left: 280.5px; top: 347px;width:32px",
            src: 'images/green.png'
        },
		active: true
		
	}, 
	{
		control: 7,
		status: {
			id: 'cb7',
			pos: 'position: absolute; left: 65px; top: 356px;width: 40px;',
			src: 'images/on.png'
		}, 
		forceOperation: {
			id: 'cb7Force',
			pos: "position: absolute; left: 125px; top: 356px;width: 40px; cursor: pointer",
			src: 'images/off.png'
		}, 
        indicator: {
            id: 'ind7',
            pos: "position: absolute; left: 652.5px; top: 347px;width:32px",
            src: 'images/green.png'
        },
		active: true
		
	}, 
	{
		control: 8,
		status: {
			id: 'cb8',
			pos: 'position: absolute; left: 65px; top: 384px;width: 40px; ',
			src: 'images/off.png'
		}, 
		forceOperation: {
			id: 'cb8Force',
			pos: "position: absolute; left: 125px; top: 384px;width: 40px; cursor: pointer",
			src: 'images/on.png'
		}, 
        indicator: {
            id: 'ind8',
            pos: "position: absolute; left: 458px; top: 294px;width: 32px;",
            src: 'images/red.png'
        },
		active: false
	}, 
	{
		control: 9,
		status: {
			id: 'gos1Status',
			pos: 'position: absolute; left: 65px; top: 424px;width: 40px; cursor: pointer',
			src: 'images/goson.png'
		}, 
		forceOperation: {
			id: 'gos1Force',
			pos: "position: absolute; left: 125px; top: 424px;width: 40px; cursor: pointer",
			src: 'images/gosoff.png'
		}, 
        indicator: {
            id: 'switch1',
            pos: "position: absolute; left: 352px; top: 154px;width: 38px; cursor: pointer",
            src: 'images/swBlack.png'
        },
		active: true
	}, 
	{
		control: 10,
		status: {
			id: 'gos2Status',
			pos: 'position: absolute; left: 65px; top: 444px;width: 40px; cursor: pointer',
			src: 'images/goson.png'
		}, 
		forceOperation: {
			id: 'gos2Force',
			pos: "position: absolute; left: 125px; top: 444px;width: 40px; cursor: pointer",
			src: 'images/gosoff.png'
		}, 
        indicator: {
            id: 'switch2',
            pos: "position: absolute; left: 590px; top: 155px;width: 38px; cursor: pointer",
            src: 'images/swBlack.png'
        },
		active: true
	}, 
	
]

let operations = [
    {
        id: 't1',
        list: [
            'Change BC from OFF to ON',
            'Change CB4 from ON to OFF',
            'Change CB2 from ON to OFF',
            'Change GOS3 from ON to OFF'
        ],
        txt: 'Take Out',
        clicked: false,
        step: [
            {id: 'cb8Force', status: false}, 
            {id: 'cb4Force', status: false},
            {id: 'cb2Force', status: false}, 
            {id: 'gos1Force', status: false}]
    },
    {
        id: 't2',
        list: [
            'Change GOS3 from OFF to ON',
            'Change CB2 from OFF to ON',
            'Change CB4 from OFF to ON',
            'Change BC from ON to OFF',
        ],
        txt: 'Take In',
        clicked: false,
        step: [
            {id: 'gos1Force', status: false},
            {id: 'cb2Force', status: false}, 
            {id: 'cb4Force', status: false},
            {id: 'cb8Force', status: false}]
    },
    {
        id: 't3',
        list: [
            'Change BC from OFF to ON',
            'Change CB5 from ON to OFF',
            'Change CB3 from ON to OFF',
            'Change GOS4 from ON to OFF'
        ],
        txt: 'Take Out',
        clicked: false,
        step: [
            {id: 'cb8Force', status: false}, 
            {id: 'cb5Force', status: false}, 
            {id: 'cb3Force', status: false}, 
            {id: 'gos2Force', status: false}]
    },
    {
        id: 't4',
        list: [
            'Change GOS4 from OFF to OFF',
            'Change CB3 from OFF to OFF',
            'Change CB5 from OFF to OFF',
            'Change BC from ON to OFF',
        ],
        txt: 'Take In',
        clicked: false,
        step: [
            {id: 'gos2Force', status: false},
            {id: 'cb3Force', status: false},
            {id: 'cb5Force', status: false},
            {id: 'cb8Force', status: false}]
    }
]

typeWriter();

circuitControl.forEach(function(circuit, index){
	let status = document.createElement('img');
	let force = document.createElement('img');
	let indicator = document.createElement('img');
	status.setAttribute("id",circuit.status.id)
	status.setAttribute("src",circuit.status.src)
	status.setAttribute("style",circuit.status.pos)

	force.setAttribute("id",circuit.forceOperation.id)
	force.setAttribute("src",circuit.forceOperation.src)
	force.setAttribute("style",circuit.forceOperation.pos)
	// force.setAttribute('onclick',`activate(${index})`)

    indicator.setAttribute("id",circuit.indicator.id)
	indicator.setAttribute("src",circuit.indicator.src)
	indicator.setAttribute("style",circuit.indicator.pos)

	document.getElementById("canvas0").appendChild(status);
	document.getElementById("canvas0").appendChild(force);
	document.getElementById("canvas0").appendChild(indicator);
})



function blinkArrow(id){
	if(document.getElementById(id).style.visibility == "visible") {
		document.getElementById(id).style.visibility = "hidden"
	} else {
		document.getElementById(id).style.visibility = "visible"
	}
}


function updateList(ele){
    document.getElementById('info').style.visibility = "visible";
    let list="";
    let txt = '';
    operations.filter(function(op){
        if(op.id == ele.id){
            txt = op.txt;
            list+=`Sequence of Operations<ol>`
            op.list.forEach(function(i){
                list+=`<li>${i}</li>`
            })
            list+=`<\ol>`
            list+=`<p>Click <b>${txt}</b> button to choose operation</p>`
        }
    });
    document.getElementById('info').innerHTML = list;
}

function removeInfo(){
    document.getElementById('info').style.visibility = "hidden";
}

function giveOptions(ele){
    if(!selectedTransformer){
        let connection = ele.id == 'tr1' ? 'c1' : 'c2';
        let takeOut = ele.id == 'tr1' ? 't1' : 't3';
        let takeIn = ele.id == 'tr1' ? 't2' : 't4';
        document.getElementById(connection).style.visibility = "visible";
        document.getElementById(takeOut).style.visibility = "visible";
        document.getElementById(takeIn).style.visibility = "visible";
    
        let connectionHide = ele.id == 'tr2' ? 'c1' : 'c2';
        let takeOutHide = ele.id == 'tr2' ? 't1' : 't3';
        let takeInHide = ele.id == 'tr2' ? 't2' : 't4';
        document.getElementById(connectionHide).style.visibility = "hidden";
        document.getElementById(takeOutHide).style.visibility = "hidden";
        document.getElementById(takeInHide).style.visibility = "hidden";
        transformer = ele.id == 'tr1' ? 'TR1' : 'TR2'
    } else {
        showPopup(`You have already choosen Transformer ${transformer} Take Out operation. So you click on Reset to go with this transformer`)
    }
}


document.getElementById('arr').style.animation="moveArrow 1s infinite";



function changeSwitchStatus(ele){
    data.filter((e)=>{
        if(e.id == ele.id){
            e.status = !e.status;
            changeSwitch(e, e.status);
        }
    })
}

function changeSwitch(ele, status){
	document.getElementById(ele.blueId).style.opacity = status == true ? 1 : 0;
	document.getElementById(ele.id).style = status == true ? ele.transformedstyle : ele.originalstyle;
    updateTable(ele.id, status)
}



function showPopup(text){
    document.getElementById("parentPopup").style.display = "block";
    document.getElementById("popUpContent").innerHTML = `<span class="close"
    onclick="closeModal(event);">Alert</span>
    <p style="text-align:center;padding-top: 20%; font-size: 14px">${text}</p>
    <p style="text-align:center;"><button style="margin:auto;font-size: 14px; cursor: pointer" onclick="closeModal(event)">OK</button></p>
    `
}

function closeModal(ev){
ev.preventDefault();
document.getElementById("parentPopup").style.display = "none";
}


function setOperation(ele){
    
    buttonsArray.forEach(function(btn){
        document.getElementById(btn.id).onclick = "";
    })
    operations.filter(function(op){
        if(op.id == ele.id){
            if(ele.id == 't2' && takeOutTr1Clicked == false){
                showPopup(`You have to select Take Out operation for this Transfromer <span style="color:blue">${transformer} </span>. Only then you can perform Take In operation`);
            }
            else if(ele.id == 't4' && takeOutTr2Clicked == false) {
                showPopup(`You have to select Take Out operation for this Transfromer <span style="color:blue">${transformer} </span>. Only then you can perform Take In operation`);
            } 
            else if(ele.id == 't1' &&  takeOutTr1Clicked == true){
                showPopup(`You have performed Take Out operation for this Transfromer <span style="color:blue">${transformer} </span>. You can perform Take In operation`);
            }
            else if(ele.id == 't3' &&  takeOutTr2Clicked == true) {
                showPopup(`You have performed Take Out operation for this Transfromer <span style="color:blue">${transformer} </span>. You can perform Take In operation`);
            } 
            else {
                operationId = ele.id;
                op.clicked = true;
                selectedTransformer = true;
                buttonsArray = op.step;
                buttonsArray.forEach(function(btn, id){
                    document.getElementById(btn.id).onclick = function(){activate(btn.id, btn, id)};
                })
                showPopup('Complete this operation!. Only controls relevant for this operation are enabled.');
                if(op.id == 't1' || op.id == 't3'){
                    showPopup(`You have selected Transfromer <span style="color:blue">${transformer} </span>and <span style="color:blue">Take out</span> operation. So you need go with Take In opertation or Reset to try with next transformer`);
                }
                if(op.id == 't2' || op.id == 't4'){
                    showPopup(`You have selected Transfromer <span style="color:blue">${transformer} </span>and <span style="color:blue">Take In</span> operation. So you need go with Reset to try with next transformer`);
                }
            }
        }
    });
}

function activate(index, btn, id){
    let status = checkForButtonStatus(btn, id)
    if(status){
        circuitControl.filter(function(circuit){
            if(circuit.forceOperation.id == index){
                circuit.active = !circuit.active;
                btn.status = !btn.status;
                // if(circuit.status.id == 'cb8' && circuit.active == false){
                //     document.getElementById(circuit.status.id).src=circuit.active ? "images/on.png" : "images/off.png" ;
                //     document.getElementById(circuit.forceOperation.id).src = circuit.active ? "images/off.png":"images/on.png" ;
                //     document.getElementById(circuit.indicator.id).src = circuit.active ? "images/green.png":"images/red.png" ;
                // }
                if(index == "gos1Force" || index == "gos2Force"){
                    document.getElementById(circuit.status.id).src=circuit.active ? "images/goson.png" : "images/gosoff.png" ;
                    document.getElementById(circuit.forceOperation.id).src = circuit.active ? "images/gosoff.png":"images/goson.png" ;
                    document.getElementById(circuit.indicator.id).src = circuit.active ? "images/swBlack.png":"images/swRed.png" ;
                } else {
                    document.getElementById(circuit.status.id).src=circuit.active ? "images/on.png" : "images/off.png" ;
                    document.getElementById(circuit.forceOperation.id).src = circuit.active ? "images/off.png":"images/on.png" ;
                    document.getElementById(circuit.indicator.id).src = circuit.active ? "images/green.png":"images/red.png" ;
                }
            }
        });
    }
}



function checkForButtonStatus(btn, index){
    if(selectedTransformer){
        if(index == 0 && !buttonsArray[0].status){
            document.getElementById("bcStatus").innerHTML = "Closed";
            return true;
        }
        if(index == 1){
            if(buttonsArray[0].status == true && !buttonsArray[1].status){
                if(operationId == 't1'){
                    updateData('t1');
                } else if(operationId == 't3'){
                    updateData('t3');
                }
                return true
            } else {
                showPopup("Please read the procedure")
                return false;
            }
            
        }
        if(index == 2){
            if(buttonsArray[0].status == true && buttonsArray[1].status == true && !buttonsArray[2].status){
                if(operationId == 't2'){
                    updateDataInitial();
                } else if(operationId == 't4'){
                    updateDataInitial();
                }
                return true
            } else {
                showPopup("Please read the procedure")
                return false;
            }
        }
        if(index == 3){
            if(buttonsArray[0].status == true && buttonsArray[1].status == true && buttonsArray[2].status == true && !buttonsArray[3].status){
                changeTransformer();
                if(operationId == 't1' || operationId == 't3'){
                    operations.forEach(function(op){
                        op.clicked = false;
                        op.step.forEach((function(opt){
                            opt.status = false;
                        }));
                    });
                    showPopup(`Transformer ${transformer} is taken out for maintenance `);
                } else if(operationId == 't2' || operationId == 't4') {
                    document.getElementById("bcStatus").innerHTML = "Open";
                    // resetSetup();
                    selectedTransformer = false;
                    operations.forEach(function(op){
                        op.clicked = false;
                        op.step.forEach((function(opt){
                            opt.status = false;
                        }));
                    });

                    takeOutTr1Clicked = false;
                    takeOutTr2Clicked = false;
                    showPopup(`Transformer ${transformer} is back to the initial position`);

                }
                return true;
            } else {
                showPopup("Please read the procedure")
                return false;
            }
        }
    }
}

function changeTransformer(){
    if(operationId == 't1'){
        document.getElementById("transformer1").src = "images/transformerRemoved.png";
        takeOutTr1Clicked = true;
    }
    if(operationId == 't2'){
        document.getElementById("transformer1").src = "images/transformerInitial.png";
        takeOutTr1Clicked = false;
    }
    if(operationId == 't3'){
        document.getElementById("transformer2").src = "images/transformerRemoved.png";
        takeOutTr2Clicked = true;
    }
    if(operationId == 't4'){
        document.getElementById("transformer2").src = "images/transformerInitial.png";
        takeOutTr2Clicked = false;
    }
}

function updateData(t){
    if(t == 't1') {
        let id1= t == 't1' ? 4 : 5;
        let id2= t == 't1' ? 5 : 4;
        document.getElementById('mi'+id1).innerHTML = 0;
        document.getElementById('mv'+id1).innerHTML = 0;
        document.getElementById('mp'+id1).innerHTML = 0;
        document.getElementById('mi'+id2).innerHTML = 75;
        document.getElementById('mv'+id2).innerHTML = 11;
        document.getElementById('mp'+id2).innerHTML = 1428.94;
    }
    if(t == 't3') {
        let id1= t == 't3' ? 4 : 5;
        let id2= t == 't3' ? 5 : 4;
        document.getElementById('mi'+id1).innerHTML = 75;
        document.getElementById('mv'+id1).innerHTML = 11;
        document.getElementById('mp'+id1).innerHTML = 1428.94;
        document.getElementById('mi'+id2).innerHTML = 0;
        document.getElementById('mv'+id2).innerHTML = 0;
        document.getElementById('mp'+id2).innerHTML = 0;
    }

}

function updateDataInitial(){
    document.getElementById('mi4').innerHTML = 30;
    document.getElementById('mv4').innerHTML = 11;
    document.getElementById('mp4').innerHTML = 571.58;
    document.getElementById('mi5').innerHTML = 45;
    document.getElementById('mv5').innerHTML = 11;
    document.getElementById('mp5').innerHTML = 857.36;
}
function resetSetup(){
    selectedTransformer = false;
    buttonsArray = [];
    instructions = "";
    transformer = "";
    operationId = "";
    takeOutTr1Clicked = false;
    takeOutTr2Clicked = false;
    document.getElementById('mi4').innerHTML = 30;
    document.getElementById('mv4').innerHTML = 11;
    document.getElementById('mp4').innerHTML = 571.58;
    document.getElementById('mi5').innerHTML = 45;
    document.getElementById('mv5').innerHTML = 11;
    document.getElementById('mp5').innerHTML = 857.36;
    document.getElementById('info').style.visibility = "hidden";
    document.getElementById('c1').style.visibility = "hidden";
    document.getElementById('c2').style.visibility = "hidden";
    document.getElementById('t1').style.visibility = "hidden";
    document.getElementById('t2').style.visibility = "hidden";
    document.getElementById('t3').style.visibility = "hidden";
    document.getElementById('t4').style.visibility = "hidden";
    document.getElementById("transformer1").src = "images/transformerInitial.png";
    document.getElementById("transformer2").src = "images/transformerInitial.png";
    document.getElementById("bcStatus").innerHTML = "Open";
    circuitControl.forEach(function(circuit){
        if(circuit.status.id == 'cb8'){
            circuit.active = false;
            document.getElementById(circuit.status.id).src=circuit.active ? "images/on.png" : "images/off.png" ;
            document.getElementById(circuit.forceOperation.id).src = circuit.active ? "images/off.png":"images/on.png" ;
            document.getElementById(circuit.indicator.id).src = circuit.active ? "images/green.png":"images/red.png" ;
        }
        else if(circuit.status.id == "gos1Status" || circuit.status.id == "gos2Status"){
            circuit.active = true;
            document.getElementById(circuit.status.id).src=circuit.active ? "images/goson.png" : "images/gosoff.png" ;
            document.getElementById(circuit.forceOperation.id).src = circuit.active ? "images/gosoff.png":"images/goson.png" ;
            document.getElementById(circuit.indicator.id).src = circuit.active ? "images/swBlack.png":"images/swRed.png" ;
        } else {
            circuit.active = true;
            document.getElementById(circuit.status.id).src=circuit.active ? "images/on.png" : "images/off.png" ;
            document.getElementById(circuit.forceOperation.id).src = circuit.active ? "images/off.png":"images/on.png" ;
            document.getElementById(circuit.indicator.id).src = circuit.active ? "images/green.png":"images/red.png" ;
        }
    });
    operations.forEach(function(op){
        op.clicked = false;
        op.step.forEach((function(opt){
            opt.status = false;
        }));
    });
}





























