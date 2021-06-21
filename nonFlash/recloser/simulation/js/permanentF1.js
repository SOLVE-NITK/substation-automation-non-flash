function setTimerPerm1(){
    displayTimerFormat(count, "timer1");
    if(s1Active){
        document.getElementById("controlContent").innerText = transientF1[1];
    }
    count++;
    if(count==13){
        if(s1Active){
            document.getElementById("controlContent").innerText = 'After the defininte time delay the recloser opens the circuit. The complete circuit fed via recloser is out of power.';
        } else {
            document.getElementById("controlContent").innerText = transientF1[2];
        }
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
            if(s1Active && !s4Active){
                if(arc.id == 3){
                    arc.color = "#ff0000";
                }
            }
        })
        window.clearInterval(timerTracker);
        setTimeout(() => {
            if(s1Active){
                document.getElementById("controlContent").innerText = 'First reclosing time delay counter starts counting till the set value in the autorecloser.';
            } else {
                document.getElementById("controlContent").innerText = transientF1[3];
            }
            count = 10;
            timerTracker1 = window.setInterval(function(){setTimerPerm2();},1000);
        }, 3000);
        setUpCanvas();
    }
}

function setTimerPerm2(){
    displayTimerFormat(count, "timer1");
    count+=10;
    if(count==110){
        document.getElementById("controlContent").innerText = transientF1[4];
        rectangles[1].color="#ff0000";
        arcs.forEach(function(arc){
            if(arc.id == 0 || arc.id == 1){
                arc.color = "grey";
            }
            if(arc.id == 2 || arc.id == 3){
                arc.color = "#ff0000";
            }
        })
        window.clearInterval(timerTracker1);
        setTimeout(() => {
            count = 100;
            timerTracker2 = window.setInterval(function(){setTimerPerm3();},2500);
        }, 4500);
        setUpCanvas();
     }
}
function setTimerPerm3(){
    count+=25;
    displayTimerFormat(count, "timer1");
    if(count==125 || count == 100){
        if(s1Active){
            document.getElementById("controlContent").innerHTML = "After reclosing time delay counter starts counting till the set value in the autorecloser.";
        } else {
            document.getElementById("controlContent").innerText = transientF1[5];
        }
    }
    if(count==150){
        if(s1Active && !s4Active){
            document.getElementById("controlContent").innerHTML = "At the same time close command signal is given to S4";
            // setTimeout(function(){
                closeS4();
            // },1000);
        } else {
            document.getElementById("controlContent").innerText = transientF1[6];
        }
    }
    if(count==175){
        document.getElementById("controlContent").innerText = transientF1[7];
    }
    if(count==400){
        if(s4Active && s1Active){
            document.getElementById("controlContent").innerHTML = "At the same time close command signal is given to S4";
            closeS4();
        } else {
            document.getElementById("controlContent").innerText = transientF1[8];
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
                count1 = 100;
                timerTracker3 = window.setInterval(function(){setTimerPerm4();},2500);
                document.getElementById("timer2").innerText = "00.00";
                document.getElementById("timer1").innerText = "";
                document.getElementById("controlContent").innerText = transientF1[9];
            },5000);
        }
        
    }
}

function setTimerPerm4(){
    document.getElementById("timer1").innerText = "";
    displayTimerFormat(count1, "timer2");
    count1+=100;
    if(count1 == 1100){
        if(s1Active == 0 && s4Active == 0){
            document.getElementById("controlContent").innerText = transientF1[10];
            setTimeout(function(){
                count1 = 0;
                window.clearInterval(timerTracker3);
                document.getElementById("timer2").innerText = " ";
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S1" onclick="s1PermClicked()"/> OR <input type="button" class="btn" style='height: 25px' value="S4" onclick="s4PermClicked()"/></p>`;
            },7500);
        }
        if(s1Active == 1 && s4Active == 0){
            document.getElementById("controlContent").innerText = transientF1[10];
            setTimeout(function(){
                count1 = 0;
                window.clearInterval(timerTracker3);
                document.getElementById("timer2").innerText = " ";
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S4" onclick="s4PermClicked()"/></p>`;
            },7500);
        }
        if(s4Active == 1 && s1Active == 0){
            document.getElementById("controlContent").innerText ='Time delay between different sectionaliser operation is given at the control station. Close command prompt for S1 is given at the end of delay';
            setTimeout(function(){
                count1 = 0;
                window.clearInterval(timerTracker3);
                document.getElementById("timer2").innerText = " ";
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S1" onclick="s1PermClicked()"/></p>`;
            },7500);
        }
        if(s4Active == 1 && s1Active == 1){
            // setTimeout(function(){
                count1 = 0;
                window.clearInterval(timerTracker3);
                document.getElementById("timer2").innerText = " "; 
            // },7500);
        }
        
    }
}

function s1PermClicked(){
    s1Active = 1;
    lineFromControltoS1();
    document.getElementById("controlContent").innerHTML = "<p style='color: goldenrod'>CLOSE COMMAND SIGNAL</p>"
    setTimeout(() => {
        document.getElementById("timer2").innerText = "";
        // document.getElementById("controlContent").innerHTML = "<p>Sectionaliser s1 is selected to close.Loads are fed via sectionaliser s1</p>"
        setTimeout(function(){
            count = 0;
            for(let i = 3; i<=8; i++){
                lines[i].color="#0000ff";
            }
            lines[4].color="#00ff00";
            lines[13].color="#00ff00";
            lines[16].color="#00ff00";
            lines[18].color="#0000ff";
            lines[19].color="#0000ff";
            rectangles[0].color="#0000ff";
            rectangles[1].color="#0000ff";
            arcs[2].color="#00ff00";
            //set control content
            document.getElementById("controlContent").innerText = "Sectionaliser S1 is selected to close. Loads are fed via sectionaliser S1";
            setUpCanvas();
            window.setTimeout(function(){
                clearInterval(timerTracker3);
                document.getElementById("controlContent").innerText = "Autorecloser and relay picks the fault feed during this instant. The lines till the fault point gets loaded with fault current and the prefault load current."
                timerTracker = window.setInterval(function(){setTimerPerm1();},1000);
            },1500);
        },1500);
    }, 4500);
}


function s4PermClicked(){
    s4Active = 1;
    lineFromControlToS4();
    document.getElementById("controlContent").innerHTML = "<p style='color: goldenrod'>CLOSE COMMAND SIGNAL</p>"
    setTimeout(() => {
        document.getElementById("timer2").innerText = "00.00";
        document.getElementById("controlContent").innerHTML = "<p>Sectionaliser s4 is selected to close.Loads are fed via sectionaliser s4</p>"
        setTimeout(function(){
            lines[17].color = "#00ff00";
            lines[15].color = "#00ff00";
            arcs[3].color = "#00ff00";
            setUpCanvas();
            document.getElementById("controlContent").innerHTML = !s1Active ? "<p>Sectionaliser S4 is selected to close. Loads are fed via sectionaliser s4. </p>":"<p>Sectionaliser S4 is selected to close. Loads are fed via sectionaliser s4.";
            if(s1Active){
                document.getElementById("timer2").innerText = "";
                clearInterval(timerTracker3);
            } else if(s4Active){
                clearInterval(timerTracker3);
                timerTracker3 = window.setInterval(function(){setTimerPerm4();},2500);
            }        
        },1500);
    }, 8000);
}

function closeS4(){
    s4Active = 1;
    document.getElementById("timer2").innerText = "";
    clearInterval(timerTracker2);
    lineFromControlToS4();
    document.getElementById("controlContent").innerHTML = "<p style='color: goldenrod'>CLOSE COMMAND SIGNAL</p>"
    lines.forEach(function(line){
        line.color = line.id == 8 || line.id == 9 || line.id == 13 ? "#ff0000":"#00ff00";
    })
    arcs.forEach(function(arc){
        arc.color = arc.id == 2 ?"#ff0000":"#00ff00";
    })
    rectangles.forEach(function(rect){
        rect.color = "#00ff00";
    })
    setTimeout(() => {
        setUpCanvas();
        document.getElementById("controlContent").innerHTML = (!s1Active)?"<p>Fault is permanent and needs manual inspection and clearing  before recharging S1</p>":"<p>Sectionaliser S4 is selected to close. Loads are fed via sectionaliser S4.<span style='height:25px'></span><span>Fault is permanent and needs manual inspection and clearing  before recharging S1</span></p>" ;
        clearInterval(timerTracker3);
    }, 2500);
}

