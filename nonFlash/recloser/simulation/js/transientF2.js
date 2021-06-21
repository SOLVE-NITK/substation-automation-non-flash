function setF2Timer1(){
    displayTimerFormat(count, "timer1");
    count++;
    if(count==13){
        document.getElementById("controlContent").innerHTML = `After the definite time delay the recloser opens the circuit. The complete circuit fed via recloser is out of power.`;
        for(let i = 0; i<=5; i++){
            lines[i].color="#00ff00";
        }
        for(let i = 5; i<=19; i++){
            lines[i].color="#ff0000";
        }
        rectangles[0].color="#00ff00";
        rectangles[1].color="#ff0000";
        arcs.forEach(function(arc){
            arc.color = "grey";
        })
        window.clearInterval(timerTracker);
        setTimeout(() => {
            document.getElementById("controlContent").innerHTML = `First reclosing time delay counter starts counting till the set value in the autorecloser.`;
            count = 10;
            timeTracker1 = window.setInterval(function(){setF2Timer2();},1000);
        }, 3000);
        setUpCanvas();
    }
}

function setF2Timer2(){
    displayTimerFormat(count, "timer1");
    count+=10;
    if(count==110){
        document.getElementById("controlContent").innerHTML = `Sectionaliser counts the upstream recloser/breaker operation and since the count set at the sectionaliser s1 and s4 is 1. They open the respective circuit in the first reclosing time.`;
        rectangles[1].color="#ff0000";
        arcs.forEach(function(arc){
            if(arc.id == 0 || arc.id == 1){
                arc.color = "grey";
            }
            if(arc.id == 2 || arc.id == 3){
                arc.color = "#ff0000";
            }
        })
        window.clearInterval(timeTracker1);
        setTimeout(() => {
            count = 100;
            timerTracker2 = window.setInterval(function(){setF2Timer3();},2500);
        }, 4500);
        setUpCanvas();
     }
}

function setF2Timer3(){
    count+=25;
    displayTimerFormat(count, "timer1");
    if(count==125){
        document.getElementById("controlContent").innerHTML = `First reclosing time delay counter continues till the set value in the autorecloser.`;   
    }
    if(count==150){
        document.getElementById("controlContent").innerText = transientF1[6];
    }
    if(count==175){
        document.getElementById("controlContent").innerText = transientF1[7];
    }
    if(count==400){
        document.getElementById("controlContent").innerHTML = `Autorecloser is closed. Circuit is reenergised.`;          
        rectangles[1].color = "#00ff00";
        arcs.forEach(function(arc){
            if(arc.id == 0 || arc.id == 1){
                arc.color = "#00ff00";
            }
        })
        lines.forEach(function(line){
            if(line.id==8 || line.id==9 || line.id==13 || line.id==13 || line.id == 15 || line.id == 17){
                line.color = "#ff0000";
            } else {
                line.color = "#00ff00";
            }
        })
        setUpCanvas();
        window.clearInterval(timerTracker2);
        setTimeout(function(){
            count = 1;
            document.getElementById("timer1").innerText = "00.01";
            document.getElementById("controlContent").innerHTML = `Since the fault still exists, recloser and relay picks up during the instant of closing of recloser breaker. Other loads are fed normal during this period.`; 
            for(let i = 3; i<=6; i++){
                lines[i].color="#0000ff";
            }
            lines[18].color="#0000ff";
            lines[19].color="#0000ff";
            rectangles[0].color="#0000ff";
            rectangles[1].color="#0000ff";
            setUpCanvas();
            timerTracker3 = window.setInterval(function(){setF2Timer4();},2500);
        },5000);
    } 
}

function setF2Timer4(){
    displayTimerFormat(count, "timer1");
    if(count == 9){
        count = 12;
        window.clearInterval(timerTracker3);
        timerTracker4 = window.setInterval(function(){setF2Timer41();},2500);
    } 
    else {
        count+=2;
    }
    if(count == 3){
        document.getElementById("controlContent").innerHTML = `Based on the current time characteristics and fault current. Time of operation is set in the delay counter. counter starts counting till the calculated value.`; 
    }
}

function setF2Timer41(){
    displayTimerFormat(count, "timer1");
    count+=2;
    if(count == 22){
        document.getElementById("controlContent").innerHTML = `After the delay counter reaches the calculated operating time value. Recloser opens the circuit under second shot. The complete circuit fed via recloser is out of power.`;
        for(let i = 0; i<=5; i++){
            lines[i].color="#00ff00";
        }
        for(let i = 5; i<=19; i++){
            lines[i].color="#ff0000";
        }
        rectangles[0].color="#00ff00";
        rectangles[1].color="#ff0000";
        arcs.forEach(function(arc){
            if(arc.id == 0 || arc.id == 1){
                arc.color = "grey";
            }
            if(arc.id == 2 || arc.id == 3){
                arc.color = "#ff0000";
            }        })
        setUpCanvas();
        window.clearInterval(timerTracker4);
        setTimeout(function(){
            count = 0;
            document.getElementById("timer1").innerText = "00.00";
            document.getElementById("controlContent").innerHTML = `Second reclosing time delay counter starts counting till the set value in the autorecloser.`; 
            timerTracker5 = window.setInterval(function(){setF2Timer5();},2500);
        },5000);
    }
}

function setF2Timer5(){
    displayTimerFormat(count, "timer1");
    count+=25;
    if(count == 75){
        document.getElementById("shock2").style.visibility = "hidden";
    }
    if(count == 125){
        arcs[1].color = "#ff0000";
        setUpCanvas();
        document.getElementById("controlContent").innerHTML = `Sectionaliser counts the upstream recloser/breaker operation and sice the count set at the sectionaliser s2 is 2, it opens the respective circuit in the second reclosing time.`; 
        window.clearInterval(timerTracker5);
        setTimeout(function(){
            count = 100;
            document.getElementById("timer1").innerText = "01.00";
            timerTracker6 = window.setInterval(function(){setF2Timer6();},2500);
        },5000)
    }
}

function setF2Timer6(){
    displayTimerFormat(count, "timer1");
    count+=100;
    if(count == 300){
        document.getElementById("controlContent").innerHTML = `Second reclosing time delay counter continues counting till the set value in the autorecloser.`; 
    }
    if(count == 1300){
        window.clearInterval(timerTracker6);
        document.getElementById("controlContent").innerHTML = `After Second reclosing time delay, the circuit is reenergised.`; 
        lines.forEach(function(line){
            if(line.id<=6){
                line.color = "#00ff00";
            }
        })
        lines[18].color = "#00ff00";
        arcs[0].color = "#00ff00";
        rectangles[1].color = "#00ff00";
        setUpCanvas();
        setTimeout(function(){
            count1 = 0;
            window.clearInterval(timerTracker6);
            document.getElementById("timer1").innerText = "";
            document.getElementById("timer2").innerText = "00.00";
            if(fault == "transient"){
                document.getElementById("controlContent").innerHTML = `Since the autorecloser doesn't sense the fault. Time delay starts counting in the substation automation control`; 
            } else {
                document.getElementById("controlContent").innerHTML = `Since the autorecloser doesn't sense the fault. Time delay starts counting in the substation automation control.After the time delay control, personnel is given the option to close S2`; 
            }
           
            timerTracker7 = window.setInterval(function(){setF2Timer7();},2500);
        },3500);
    }
}

//at the substation 
function setF2Timer7(){
    displayTimerFormat(count1, "timer2");
    count1+=100;
    if(count1 == 100 && s1Active){
        document.getElementById("controlContent").innerHTML = `Time delay between the consecutive sectionaliser operation is given at the control station`;
    }
    if(count1 == 1100){
        window.clearInterval(timerTracker7);
        window.clearInterval(timerTracker8);
        if(fault == "transient"){
            if(s2Active == 0 && s1Active == 0 && s4Active == 0){
                document.getElementById("controlContent").innerHTML = `After the time delay control, personnel is given the option to close S2`; 
                setTimeout(() => {
                    document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S2" onclick="s2Clicked()"/></p>`;
                }, 1500);
            }
            if(s2Active == 1 && s4Active == 0 && s1Active == 0){
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S1" onclick="s1F2Clicked()"/> OR <input type="button" class="btn" style='height: 25px' value="S4" onclick="s4F2Clicked()"/></p>`
            }
            if(s4Active == 1 && s1Active == 0){
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S1" onclick="s1F2Clicked()"/></p>`
            }
            if(s4Active == 0 && s1Active == 1){
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S4" onclick="s4F2Clicked()"/></p>`
            }
        } else {
            setTimeout(() => {
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S2" onclick="s2Clicked()"/></p>`;
            }, 1500);
        }
        
    }
}


function s2Clicked(){
    s2Active = 1;
    lineFromControlToS2();
    document.getElementById("controlContent").innerHTML = "<p style='color: goldenrod'>CLOSE COMMAND SIGNAL</p>"
    setTimeout(function(){
        lines[7].color="#00ff00";
        lines[10].color="#00ff00";
        lines[11].color="#00ff00";
        lines[12].color="#00ff00";
        lines[14].color="#00ff00";
        lines[16].color="#00ff00";
        lines[19].color="#00ff00";
        arcs[1].color = "#00ff00";
        setUpCanvas();
        if(fault == "transient"){
            count1 = 0;
            document.getElementById("timer2").innerText = "00.00";
            document.getElementById("controlContent").innerHTML = `After closing of s2 time delay is provided at control station before giving option to the control station personnel to close s1 or s4 `; 
            timerTracker8 = window.setInterval(function(){setF2Timer7();},2500);
        } else if(fault == "permanent"){
            count = 0;
            document.getElementById("timer2").innerText = "";
            document.getElementById("timer1").innerText = "00.00";
            document.getElementById("controlContent").innerHTML = `Sectionaliser s2 is closed. The autorecloser senses fault feed at that instant. The autorecloser goes for the second set of reclosing operations.`;
            setTimeout(function() {
                rectangles[0].color = "#0000ff";
                rectangles[1].color = "#0000ff";
                arcs[0].color = "#00ff00";
                arcs[1].color = "#00ff00";
                lines[5].color="#0000ff";
                lines[6].color="#0000ff";
                lines[18].color="#0000ff";
                lines[19].color="#0000ff";
                setUpCanvas();
                timerTracker8 = window.setInterval(function(){setPermF2Timer7();},2500);
            },1000);
        }
    },1500);    
}

function s1F2Clicked(){
    s1Active = 1;
    lineFromControltoS1();
    document.getElementById("controlContent").innerHTML = "<p style='color: goldenrod'>CLOSE COMMAND SIGNAL</p>"
    setTimeout(function(){
        lines[8].color = "#00ff00";
        lines[9].color = "#00ff00";
        lines[13].color = "#00ff00";
        arcs[2].color = "#00ff00";
        setUpCanvas();
        count1 = 0;
        document.getElementById("timer2").innerText = "00.00";
            document.getElementById("controlContent").innerHTML = `Sectionaliser s1 is selected to close. Loads are fed via sectionaliser s1`; 
            if(!s4Active){
                timerTracker8 = window.setInterval(function(){setF2Timer7();},2500);
            } else {
                clearInterval(timerTracker8);
                document.getElementById("timer2").innerText = "";
            }
    },1500);
}
function s4F2Clicked(){
    s4Active = 1;
    lineFromControlToS4();
    document.getElementById("controlContent").innerHTML = "<p style='color: goldenrod'>CLOSE COMMAND SIGNAL</p>"
    setTimeout(function(){
        lines[17].color = "#00ff00";
        lines[15].color = "#00ff00";
        arcs[3].color = "#00ff00";
        setUpCanvas();
        count1 = 0;
        document.getElementById("timer2").innerText = "00.00";
            document.getElementById("controlContent").innerHTML = `Sectionaliser s4 is selected to close. Loads are fed via sectionaliser s4`; 
            if(!s1Active){
                timerTracker8 = window.setInterval(function(){setF2Timer1();},2500);
            } else {
                clearInterval(timerTracker8);
                document.getElementById("timer2").innerText = "";

            }
    },1500);
}


