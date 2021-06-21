let circuitControl = [
	{
		control: 1,
		status: {
			id: 'status1',
			pos: 'position: absolute; left: 72px; top: 104px;max-width: 43px;height: 24px;',
			src: 'images/onn.png'
		}, 
		forceOperation: {
			id: 'force1',
			pos: "position: absolute; left: 152px; top: 103px;max-width: 43px;height: 24px;cursor: pointer",
			src: 'images/offf.png'
		}, 
		sw: {
			id: 'switch1',
			pos: "position: absolute;left: 465px;top: 31px;width: 41px",
			src: 'images/switchOn.png'
		},
		active: true
		
	}, 
	{
		control: 2,
		status: {
			id: 'status2',
			pos: 'position: absolute; left: 72px; top: 166px;max-width: 43px;height: 24px;',
			src: 'images/onn.png'
		}, 
		forceOperation: {
			id: 'force2',
			pos: "position: absolute; left: 150px; top: 164px;max-width: 43px;height: 24px;cursor: pointer",
			src: 'images/offf.png'
		}, 
		sw: {
			id: 'switch2',
			pos: "position: absolute;left: 465px;top: 94px;width:41px",
			src: 'images/switchOn.png'
		},
		active: true
		
	}, 
	{
		control: 3,
		status: {
			id: 'status3',
			pos: 'position: absolute; left: 73px; top: 227px;max-width: 43px;height: 24px;',
			src: 'images/offf.png'
		}, 
		forceOperation: {
			id: 'force3',
			pos: "position: absolute; left: 149px; top: 227px;max-width: 43px;height: 24px;cursor: pointer",
			src: 'images/onn.png'
		}, 
		sw: {
			id: 'switch3',
			pos: "position: absolute;left: 364px;top: 154px;width: 41px;",
			src: 'images/switchOff.png'
		},
		active: false
		
	},  
	{
		control: 4,
		status: {
			id: 'status4',
			pos: 'position: absolute; left: 73px; top: 291px;max-width: 43px;height: 24px;',
			src: 'images/onn.png'
		}, 
		forceOperation: {
			id: 'force4',
			pos: "position: absolute; left: 149px; top: 290px;max-width: 43px;height: 24px;cursor: pointer",
			src: 'images/offf.png'
		}, 
		sw: {
			id: 'switch4',
			pos: "position: absolute;left: 570px;top: 154px;width: 41px;",
			src: 'images/switchOn.png'
		},
		active: true
		
	},  
	{
		control: 5,
		status: {
			id: 'status5',
			pos: 'position: absolute; left: 73px; top: 354px;max-width: 43px;height: 24px;',
			src: 'images/offf.png'
		}, 
		forceOperation: {
			id: 'force5',
			pos: "position: absolute; left: 148px; top: 352px;max-width: 43px;height: 24px;cursor: pointer",
			src: 'images/onn.png'
		}, 
		sw: {
			id: 'switch5',
			pos: "position: absolute;left: 289px;top: 358px;width: 41px;",
			src: 'images/switchOff.png'
		},
		active: false
		
	},  
	{
		control: 6,
		status: {
			id: 'status6',
			pos: 'position: absolute; left: 72px; top: 416px;max-width: 43px;height: 24px;',
			src: 'images/onn.png'
		}, 
		forceOperation: {
			id: 'force6',
			pos: "position: absolute; left: 149px; top: 415px;max-width: 43px;height: 24px;cursor: pointer",
			src: 'images/offf.png'
		}, 
		sw: {
			id: 'switch6',
			pos: "position: absolute;left: 662px;top: 358px;width: 41px",
			src: 'images/switchOn.png'
		},
		active: true
		
	},  
	
	
]

circuitControl.forEach(function(circuit, index){
	let status = document.createElement('img');
	let force = document.createElement('img');
	let sw = document.createElement('img');
	status.setAttribute("id",circuit.status.id)
	status.setAttribute("src",circuit.status.src)
	status.setAttribute("style",circuit.status.pos)

	force.setAttribute("id",circuit.forceOperation.id)
	force.setAttribute("src",circuit.forceOperation.src)
	force.setAttribute("style",circuit.forceOperation.pos)
	force.setAttribute('onclick',`activate(${index})`)


	sw.setAttribute("id",circuit.sw.id)
	sw.setAttribute("src",circuit.sw.src)
	sw.setAttribute("style",circuit.sw.pos)
	document.getElementById("canvas0").appendChild(status);
	document.getElementById("canvas0").appendChild(force);
	document.getElementById("canvas0").appendChild(sw);
})

function activate(index){
	circuitControl[index].active = !circuitControl[index].active;
	document.getElementById(circuitControl[index].status.id).src = circuitControl[index].active ? "images/onn.png" : "images/offf.png" ;
	document.getElementById(circuitControl[index].forceOperation.id).src = circuitControl[index].active ? "images/offf.png":"images/onn.png" ;

	document.getElementById(circuitControl[index].sw.id).src = circuitControl[index].active ? "images/switchOn.png" : "images/switchOff.png";
}


document.getElementById('arr').style.animation = "moveArrow 1s infinite";