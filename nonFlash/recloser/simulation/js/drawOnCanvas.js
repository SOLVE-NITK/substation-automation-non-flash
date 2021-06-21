function goToNextPage(ele){
    screen = 1;
    document.getElementById("canvas0").style.visibility = "hidden";
    document.getElementById("canvas1").style.visibility = "visible";
    // resetCanvas();
    setUpCanvas();
    switch(ele.id){
        case "tF1": transientFaultAtF1();
                    document.getElementById("faultF1").innerHTML= "create a transient fault";
                    break;
        case "pF1": permanentFaultAtF1();
                    document.getElementById("faultF1").innerHTML= "create a permanent fault";
                    break;
        case "tF2": transientFaultAtF2();
                    document.getElementById("faultF2").innerHTML= "create a transient fault";
                    break;
        case "pF2": permanentFaultAtF2();
                    document.getElementById("faultF2").innerHTML= "create a permanent fault";
                    break;
        case "tF3": transientFaultAtF3();
                    document.getElementById("faultF3").innerHTML= "create a transient fault";
                    break;

    }
}
function backToMainPage(){
    resetCanvas();
    document.getElementById("canvas0").style.visibility = "visible";
    document.getElementById("canvas1").style.visibility = "hidden";
    myInt1 = setInterval(function(){animateArrow()},800);
    myInt2 = setInterval(function(){downArrowAnimate()},1200);
    screen = 0;
}


function animateArrow(){
    let ar = document.getElementsByClassName("arrowFont");
    for(let i = 0; i<ar.length; i++){
        ar[i].style.opacity = ar[i].style.opacity == 0 ? 1 : 0;
    }
}

function downArrowAnimate(){
    let ar = document.getElementsByClassName("downArrow");
    for(let i = 0; i<ar.length; i++){
        ar[i].style.opacity = ar[i].style.opacity == 0 ? 1 : 0;
    }
}


function toggleTip(ele){
    if(document.getElementById("canvas0").style.visibility != "hidden"){
        ele.style.opacity = ele.style.opacity == 1 ? 0 : 1
    }
}


//To draw line
function drawLine(a,b,color="#00ff00"){
	ctx.strokeStyle = color;
	ctx.lineWidth = 2;
    ctx.setLineDash([0, 0]);
    ctx.beginPath();
	ctx.moveTo(a[0], a[1]);
	ctx.lineTo(b[0], b[1]);
	ctx.stroke();
	ctx.closePath();
}



function dashedLine(a, b){
    ctx.strokeStyle = "goldenrod";
	ctx.lineWidth = 2;
    //dashed Line
    ctx.setLineDash([1, 2]);
    ctx.beginPath();
	ctx.moveTo(a[0],a[1]);
	ctx.lineTo(b[0],b[1]);
	ctx.stroke();
    ctx.closePath();
}

function drawEndArrow(a, b, c){
    ctx.strokeStyle = "goldenrod";
	ctx.lineWidth = 2;
    ctx.beginPath();
    //straight line
    ctx.setLineDash([0, 0]);
    ctx.moveTo(a[0],a[1]);
	ctx.lineTo(b[0],b[1]);
	ctx.lineTo(c[0],c[1]);
    ctx.stroke();
	ctx.closePath();
}

// To draw rectangle

function drawRectangle(a, color="#00ff00"){
    ctx.strokeStyle = "white";
    ctx.fillStyle=color;
    ctx.beginPath();
    ctx.rect(a[0],a[1],25,25)
    ctx.stroke();
    ctx.fill();
	ctx.closePath();
}


function drawArc(a, color="#00ff00"){
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.fillStyle = color;
    ctx.ellipse(a[0], a[1], 9, 13, 0, 0, 4 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}




//functions for second canvas
function setUpCanvas(){
    ctx.clearRect(0,0,900,550);
    drawLine(lines[0].startPoint,lines[0].endPoint,lines[0].color);//substation
    drawLine(lines[1].startPoint,lines[1].endPoint,lines[1].color);//feeder1
    drawLine(lines[2].startPoint,lines[2].endPoint,lines[2].color);//feeder2
    drawLine(lines[3].startPoint,lines[3].endPoint,lines[3].color);//Bus to R

    drawLine(lines[4].startPoint[0],lines[4].endPoint[0],lines[4].color);//R To Rc
    drawLine(lines[4].startPoint[1],lines[4].endPoint[1],lines[4].color);//R To Rc
    drawLine(lines[4].startPoint[2],lines[4].endPoint[2],lines[4].color);//R To Rc
    drawLine(lines[4].startPoint[3],lines[4].endPoint[3],lines[4].color);//R To Rc
    drawLine(lines[4].startPoint[4],lines[4].endPoint[4],lines[4].color);//R To Rc

    drawLine(lines[5].startPoint,lines[5].endPoint,lines[5].color);//rC to S3
    drawLine(lines[6].startPoint,lines[6].endPoint,lines[6].color);//S3 to S2
    drawLine(lines[7].startPoint,lines[7].endPoint,lines[7].color);//S2 to S1
    drawLine(lines[8].startPoint,lines[8].endPoint,lines[8].color);//S1 to F1
    drawLine(lines[9].startPoint,lines[9].endPoint,lines[9].color);//S1 to F1

    drawLine(lines[10].startPoint[0],lines[10].endPoint[0],lines[10].color);//Load Pair 1
    drawLine(lines[10].startPoint[1],lines[10].endPoint[1],lines[10].color);//Load Pair 1

    drawLine(lines[11].startPoint[0],lines[11].endPoint[0],lines[11].color);//Load Pair 2
    drawLine(lines[11].startPoint[1],lines[11].endPoint[1],lines[11].color);//Load Pair 2

    drawLine(lines[12].startPoint[0],lines[12].endPoint[0],lines[12].color);//Load Pair 3
    drawLine(lines[12].startPoint[1],lines[12].endPoint[1],lines[12].color);//Load Pair 3

    drawLine(lines[13].startPoint[0],lines[13].endPoint[0],lines[13].color);//Load Pair 4
    drawLine(lines[13].startPoint[1],lines[13].endPoint[1],lines[13].color);//Load Pair 4


    drawLine(lines[14].startPoint[0],lines[14].endPoint[0],lines[14].color);//Load Pair 5
    drawLine(lines[14].startPoint[1],lines[14].endPoint[1],lines[14].color);//Load Pair 5


    drawLine(lines[15].startPoint[0],lines[15].endPoint[0],lines[15].color);//Load Pair 6
    drawLine(lines[15].startPoint[1],lines[15].endPoint[1],lines[15].color);//Load Pair 6

    drawLine(lines[16].startPoint[0],lines[16].endPoint[0],lines[16].color);//S1 to F1
    drawLine(lines[16].startPoint[1],lines[16].endPoint[1],lines[16].color);//S1 to F1

    drawLine(lines[17].startPoint,lines[17].endPoint,lines[17].color);//S1 to F1
    drawLine(lines[18].startPoint,lines[18].endPoint,lines[18].color);//S3 to F3
    drawLine(lines[19].startPoint,lines[19].endPoint,lines[19].color);//S2 to F2

    //r & rc
    drawRectangle(rectangles[0].pos,rectangles[0].color);
    drawRectangle(rectangles[1].pos,rectangles[1].color);

    //s1, s2, s3 & s4
    drawArc(arcs[0].pos,arcs[0].color);
    drawArc(arcs[1].pos,arcs[1].color);
    drawArc(arcs[2].pos,arcs[2].color);
    drawArc(arcs[3].pos,arcs[3].color);


}



function lineFromControlToS4(){
    dashedLine([344, 400],[560, 400]);
    drawEndArrow([550,390],[560,400],[550,410])
}
function lineFromControlToS2(){
    drawLine([344, 400],[439, 400], "goldenrod");
    dashedLine([439, 400],[439, 210]);
    drawEndArrow([429,220],[439,210],[449,220])
}
function lineFromControlToS3(){
    drawLine([344, 400],[439, 400], "goldenrod");
    dashedLine([439, 400],[439, 300]);
    drawLine([439, 300],[299, 300], "goldenrod");
    dashedLine([299, 300],[299, 210]);
    drawEndArrow([289,220],[299,210],[309,220])
}

function lineFromControltoS1(){
    drawLine([344, 400],[400, 400], "goldenrod");
    dashedLine([400, 400],[400, 300]);
    drawLine([400, 300],[580, 300], "goldenrod");
    dashedLine([580, 300],[580, 215]);
    drawEndArrow([570,225],[580,215],[590,225])
}

// Transient Fault at F1
function transientFaultAtF1(){
    document.getElementById("divFault1").style.visibility = "visible";
    document.getElementById("spf1").style.visibility = "visible"; 
    document.getElementById("t1").style.visibility = "visible";//shock symbol
    fault = "transient";
    document.getElementById("heading").innerHTML = "Transient Fault at F1";

    //color turn to blue from 
}
// Permanent Fault at F1
function permanentFaultAtF1(){
    document.getElementById("divFault1").style.visibility = "visible";
    document.getElementById("spf1").style.visibility = "visible"; 
    document.getElementById("t1").style.visibility = "visible";//shock symbol
    fault = "permanent";
    document.getElementById("heading").innerHTML = "Permanent Fault at F1";

}
// Transient Fault at F2
function transientFaultAtF2(){
    document.getElementById("divFault2").style.visibility = "visible";
    document.getElementById("spf2").style.visibility = "visible"; 
    document.getElementById("t2").style.visibility = "visible";//shock symbol
    fault = "transient";
    document.getElementById("heading").innerHTML = "Transient Fault at F2";
}
// Permanent Fault at F2
function permanentFaultAtF2(){
    document.getElementById("divFault2").style.visibility = "visible";
    document.getElementById("spf2").style.visibility = "visible"; 
    document.getElementById("t2").style.visibility = "visible";//shock symbol
    fault = "permanent";
    document.getElementById("heading").innerHTML = "Permanent Fault at F2";
}
// Transient Fault at F3
function transientFaultAtF3(){
    document.getElementById("divFault3").style.visibility = "visible";
    document.getElementById("spf3").style.visibility = "visible"; 
    document.getElementById("t3").style.visibility = "visible";//shock symbol
    fault = "transient";
    document.getElementById("heading").innerHTML = "Transient Fault at F3";
}


//Fault at F1
function processFault1(){
    // document.getElementById("fault1").onclick = "";
    document.getElementById("fakefault1").style.visibility = "visible";
    document.getElementById("shock1").style.visibility = "visible";//shock symbol
    document.getElementById("t1").style.visibility = "hidden";//shock symbol
    if(fault == "transient"){
        //set color
        for(let i = 3; i<=8; i++){
            lines[i].color="#0000ff";
        }
        lines[18].color="#0000ff";
        lines[19].color="#0000ff";
        rectangles[0].color="#0000ff";
        rectangles[1].color="#0000ff";
        //set control content
        document.getElementById("controlContent").innerText = transientF1[0];
        setUpCanvas();
        window.setTimeout(function(){
            document.getElementById("controlContent").innerText = transientF1[1];
            timerTracker = window.setInterval(function(){setTimer1();},1000);
        },1500);
    } else if(fault == "permanent"){
        for(let i = 3; i<=8; i++){
            lines[i].color="#0000ff";
        }
        lines[18].color="#0000ff";
        lines[19].color="#0000ff";
        rectangles[0].color="#0000ff";
        rectangles[1].color="#0000ff";
        //set control content
        document.getElementById("controlContent").innerText = transientF1[0];
        setUpCanvas();
        window.setTimeout(function(){
            document.getElementById("controlContent").innerText = transientF1[1];
            timerTracker = window.setInterval(function(){setTimerPerm1();},1000);
        },1500);
    }
}

//Fault at F2
function processFault2(){
    document.getElementById("fakefault2").style.visibility = "visible";
    document.getElementById("spf2").style.visibility = "visible";
    document.getElementById("shock2").style.visibility = "visible";//shock symbol
    document.getElementById("t2").style.visibility = "hidden";//shock symbol
    // if(fault == "transient"){
        //set color
        for(let i = 3; i<=6; i++){
            lines[i].color="#0000ff";
        }
        lines[18].color="#0000ff";
        lines[19].color="#0000ff";
        rectangles[0].color="#0000ff";
        rectangles[1].color="#0000ff";
        //set control content
        document.getElementById("controlContent").innerHTML = `At the instant of fault created, the fault is fed from the source. Relay and Recloser picks up during this instant. The line till the fault point gets loaded with fault current and the prefault load current.`;
        setUpCanvas();
        window.setTimeout(function(){
            document.getElementById("controlContent").innerHTML = `Definite time delay timer at the recloser starts counting till the set value.`;
            timerTracker = window.setInterval(function(){setF2Timer1();},1000);
        },1500);
    // } 
}

//Fault at F3
function processFault3(){
    document.getElementById("fakefault3").style.visibility = "visible";
    document.getElementById("spf3").style.visibility = "visible";
    document.getElementById("shock3").style.visibility = "visible";//shock symbol
    document.getElementById("t3").style.visibility = "hidden";//shock symbol
    for(let i = 3; i<=5; i++){
        lines[i].color="#0000ff";
    }
    lines[18].color="#0000ff";
    rectangles[0].color="#0000ff";
    rectangles[1].color="#0000ff";
    //set control content
    document.getElementById("controlContent").innerHTML = `At the instant of fault created, the fault is fed from the source. Relay and Recloser picks up during this instant. The line till the fault point gets loaded with fault current and the prefault load current.`;
    setUpCanvas();
    window.setTimeout(function(){
        document.getElementById("controlContent").innerHTML = `Definite time delay timer at the recloser starts counting till the set value.`;
        timerTracker = window.setInterval(function(){setF3Timer1();},1000);
    },1500);
}







//To reset canvas
function resetCanvas(){
    fault = '';
    count = 0;
    count1 = 0;
    s1Active = 0; 
    s2Active = 0; 
    s3Active = 0;
    s4Active = 0;
    window.clearInterval(myInt1);
    window.clearInterval(myInt2);
    window.clearInterval(timerTracker);
    window.clearInterval(timeTracker1);
    window.clearInterval(timerTracker2);
    window.clearInterval(timerTracker3);
    window.clearInterval(timerTracker4);
    window.clearInterval(timerTracker5);
    window.clearInterval(timerTracker6);
    window.clearInterval(timerTracker7);
    window.clearInterval(timerTracker8);
    window.clearInterval(timerTracker9);
    window.clearInterval(timerTracker10);
    // window.clearInterval(timerTracker1);
    lines.forEach(function(line){
        line.color = "#00ff00"
    })
    rectangles.forEach(function(rectangle){
        rectangle.color = "#00ff00"
    })
    arcs.forEach(function(arc){
        arc.color = "#00ff00"
    })
    for(let i=1;i<=3;i++){
        document.getElementById(`divFault${i}`).style.visibility = "hidden";
        document.getElementById(`spf${i}`).style.visibility = "hidden";
        document.getElementById(`shock${i}`).style.visibility = "hidden";
        document.getElementById(`t${i}`).style.visibility = "hidden";
        document.getElementById(`fakefault${i}`).style.visibility = "hidden";
    }
    document.getElementById("controlContent").innerHTML = "<p>HEALTHY SYSTEM</p>"
    document.getElementById("timer1").innerHTML = ""
    document.getElementById("timer2").innerHTML = ""
    document.getElementById("heading").innerHTML = "";
}

//function calls
let myInt1 = setInterval(function(){animateArrow()},800);
let myInt2 = setInterval(function(){downArrowAnimate()},1200);


function displayTimerFormat(count, textId){
    if(timeSet[0].includes(count)){
        document.getElementById(textId).innerText = `00.0${count}`;
    }
    if(timeSet[1].includes(count)){
        document.getElementById(textId).innerText = `00.${count}`;
    }
    if(timeSet[2].includes(count)){
        let counter = count/100;
        document.getElementById(textId).innerText = `0${counter}0`;
    }
    if(timeSet[3].includes(count)){
        let counter = count/100;
        document.getElementById(textId).innerText = `0${counter}.00`;
    }
    if(timeSet[4].includes(count)){
        let counter = count/100;
        document.getElementById(textId).innerText = `0${counter}`;
    }
    if(timeSet[5].includes(count)){
        let counter = count/100;
        document.getElementById(textId).innerText = `0${counter}0`;
    }
    if(timeSet[6].includes(count)){
        let counter = count/100;
        document.getElementById(textId).innerText = `${counter}.00`;
    }
    // if(100<=count<=1000)
}