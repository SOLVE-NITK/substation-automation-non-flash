function setF3Timer1(){
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
            timeTracker1 = window.setInterval(function(){setF3Timer2();},1000);
        }, 3000);
        setUpCanvas();
    }
}


function setF3Timer2(){
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
            timerTracker2 = window.setInterval(function(){setF3Timer3();},2500);
        }, 4500);
        setUpCanvas();
     }
}

function setF3Timer3(){
    count+=25;
    displayTimerFormat(count, "timer1");
    if(count==125){
        document.getElementById("controlContent").innerHTML = `First reclosing time delay counter continues till the set value in the autorecloser.`;   
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
            for(let i = 3; i<=5; i++){
                lines[i].color="#0000ff";
            }
            lines[18].color="#0000ff";
            rectangles[0].color="#0000ff";
            rectangles[1].color="#0000ff";
            setUpCanvas();
            timerTracker3 = window.setInterval(function(){setF3Timer4();},2500);
        },5000);
    } 
}

function setF3Timer4(){
    displayTimerFormat(count, "timer1");
    count+=1;
    if(count == 3){
        document.getElementById("controlContent").innerHTML = `Based on the current time characteristics and fault current. Time of operation is set in the delay counter. counter starts counting till the calculated value.`; 
    }
    if(count == 13){
        document.getElementById("controlContent").innerHTML = `After the delay counter reaches the calculated operating time value. Recloser opens the circuit under second shot. The complete circuit fed via recloser is out of power.`;
        count = 0;
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
        window.clearInterval(timerTracker3);
        setTimeout(() => {
            timerTracker4 = window.setInterval(function(){setF3Timer5();},2500);
        }, 1500);
    } 
}

function setF3Timer5(){
    displayTimerFormat(count, "timer1");
    count+=10;
    if(count == 20){
        document.getElementById("controlContent").innerHTML = `Second reclosing time delay counter starts counting till the set value in the autorecloser.`;
    }
    if(count==110){
        document.getElementById("controlContent").innerHTML = `Sectionaliser counts the upstream recloser/breaker operation and since the count set at the sectionaliser s1 and s4 is 1. They open the respective circuit in the first reclosing time.`;
        rectangles[1].color="#ff0000";
        arcs.forEach(function(arc){
            if(arc.id == 0){
                arc.color = "grey";
            }
            if(arc.id == 2 || arc.id == 3){
                arc.color = "#ff0000";
            }
        })
        setUpCanvas();
        window.clearInterval(timerTracker4);
        setTimeout(() => {
            count = 100;
            timerTracker5 = window.setInterval(function(){setF3Timer6();},2500);
        }, 4500);
     }
}

function setF3Timer6(){
    displayTimerFormat(count, "timer1");
    count+=100;
    if(count == 200){
        document.getElementById("controlContent").innerHTML = `Second reclosing time delay counter starts counting till the set value in the autorecloser.`;
    }
    if(count == 1300){
        for(let i = 3; i<=6; i++){
            lines[i].color="#00ff00";
        }
        lines[18].color="#00ff00";
        rectangles[0].color="#00ff00";
        rectangles[1].color="#00ff00";
        arcs[0].color = "#00ff00";
        setUpCanvas();
        window.clearInterval(timerTracker5);
        count = 0;
        document.getElementById("controlContent").innerHTML = `After the second reclosing time delay, the circuit is reenergised.`;
        setTimeout(function(){
            for(let i = 3; i<=5; i++){
                lines[i].color="#0000ff";
            }
            lines[18].color="#0000ff";
            rectangles[0].color="#0000ff";
            rectangles[1].color="#0000ff";
            setUpCanvas();
            document.getElementById("controlContent").innerHTML = `Since the fault still exists, recloser and relay picks up during the instant of closing of recloser breaker. other loads are fed normal during this period.`;
            timerTracker6 = window.setInterval(function(){setF3Timer7();},2500);
        },1500);
    }
}

function setF3Timer7(){
    displayTimerFormat(count, "timer1");
    count+=2;
    if(count == 4){
        document.getElementById("controlContent").innerHTML = `Based on the current time characteristics and fault current. Time of operation is set in the delay counter. Counter starts counting till the calculated value.`;
    }
    if(count == 40){
        for(let i = 3; i<=6; i++){
            lines[i].color="#ff0000";
        }
        lines[18].color="#ff0000";
        lines[10].color="#ff0000";
        lines[11].color="#ff0000";
        rectangles[0].color="#00ff00";
        rectangles[1].color="#ff0000";
        arcs[0].color = "grey";
        setUpCanvas();
        setTimeout(function(){
            count = 0;
            window.clearInterval(timerTracker6);
            document.getElementById("controlContent").innerHTML = `Third reclosing time delay counter starts counting till the set value in the autorecloser.`;
            timerTracker7 = window.setInterval(function(){setF3Timer8();},2500);
        },1500);
    }
}

function setF3Timer8(){
    displayTimerFormat(count, "timer1");
    count+=10;
    if(count == 110){
        arcs[0].color = "#ff0000";
        arcs[1].color = "#ff0000";
        setUpCanvas();
        document.getElementById("controlContent").innerHTML = `Sectionaliser counts the upstream recloser/breaker operation and since the count set at the sectionaliser S3 is 3, It opens the respective circuit in the third reclosing time.`;
        setTimeout(function(){
            count = 100;
            window.clearInterval(timerTracker7);
            timerTracker8 = window.setInterval(function(){setF3Timer9();},2500);
        },1500)
    }
}


function setF3Timer9(){
    displayTimerFormat(count, "timer1");
    count+=100;
    if(count == 300){
        document.getElementById("controlContent").innerHTML = `Third reclosing time delay counter starts counting till the set value in the autorecloser.`;
    }
    if(count == 400){
        document.getElementById("shock3").style.visibility = "hidden";
    }
    if(count == 1100){
        count = 1000;
        window.clearInterval(timerTracker8);
        timerTracker9 = window.setInterval(function(){setF3Timer10();},2500);
    }
}

function setF3Timer10(){
    displayTimerFormat(count, "timer1");
    count+=200;
    if(count == 3200){
        rectangles[0].color = "#00ff00";
        rectangles[1].color = "#00ff00";
        lines[3].color = "#00ff00";
        lines[4].color = "#00ff00";
        lines[5].color = "#00ff00";
        lines[10].color = "#00ff00";
        setUpCanvas();
        document.getElementById("controlContent").innerHTML = `After the Third reclosing time delay, the circuit is reenergised.`;
        setTimeout(function(){
            count = 0;
            count1 = 0;
            document.getElementById("timer1").innerHTML = ``;
            document.getElementById("timer2").innerHTML = `00.00`;
            window.clearInterval(timerTracker9);
            document.getElementById("controlContent").innerHTML = `Since the recloser doesn't sense the fault, time delay starts counting in the substation automation control.`;
            timerTracker10 = window.setInterval(function(){setF3Timer11();},2500);
        },2500);
    }
}

function setF3Timer11(){
    displayTimerFormat(count1, "timer2");
    count1+=100;
    if(count1 == 1100){
        if(s3Active==0){
            window.clearInterval(timerTracker10);
            document.getElementById("controlContent").innerHTML = `After time delay substation control personnel is given option to close S3. `;
            setTimeout(() => {
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S3" onclick="s3Clicked()"/></p>`;
            }, 1000);
        }
        if(s3Active == 1 && s2Active == 0){
            window.clearInterval(timerTracker11);
            document.getElementById("controlContent").innerHTML = `option to close S2 is given to the control station personnel. `;
            setTimeout(() => {
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S2" onclick="s2F3Clicked()"/></p>`;
            }, 1000);
        }
        if(s3Active == 1 && s2Active == 1 && s1Active == 0 && s4Active == 0){
            window.clearInterval(timerTracker12);
            document.getElementById("controlContent").innerHTML = `After closing of S2 time delay is provided at control station before giving option to close the control station personnel to close S1 or S4 `;
            setTimeout(() => {
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S1" onclick="s1F3Clicked()"/> OR <input type="button" class="btn" style='height: 25px' value="S4" onclick="s4F3Clicked()"/></p>`
            }, 1000);
        }
        if(s3Active == 1 && s2Active == 1 && s1Active == 1 && s4Active == 0){
            window.clearInterval(timerTracker13);
            document.getElementById("controlContent").innerHTML = `Time delay between the consecutive sectionaliser operation is given at the control station.`;
            setTimeout(() => {
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S4" onclick="s4F3Clicked()"/></p>`;
            }, 1000);
        }
        if(s3Active == 1 && s2Active == 1 && s1Active == 0 && s4Active == 1){
            window.clearInterval(timerTracker14);
            document.getElementById("controlContent").innerHTML = `Time delay between the consecutive sectionaliser operation is given at the control station.`;
            setTimeout(() => {
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S1" onclick="s1F3Clicked()"/></p>`;
            }, 1000);
        }
    }
}

function s3Clicked(){
    s3Active = 1;
    lineFromControlToS3();
    document.getElementById("controlContent").innerHTML = "<p style='color: goldenrod'>CLOSE COMMAND SIGNAL</p>";
    arcs[0].color = "#00ff00";
    lines[6].color = "#00ff00";
    lines[11].color = "#00ff00";
    lines[18].color = "#00ff00";
    setTimeout(function(){
        setUpCanvas();
        document.getElementById("controlContent").innerHTML = `After closing S3, time delay is provided at control station. `;
        count1 = 0;
        document.getElementById("timer2").innerHTML = `00.00`;
        timerTracker11 = window.setInterval(function(){setF3Timer11();},2500);
    },1500);
}

function s2F3Clicked(){
    s2Active = 1;
    lineFromControlToS2();
    document.getElementById("controlContent").innerHTML = "<p style='color: goldenrod'>CLOSE COMMAND SIGNAL</p>";
    arcs[1].color = "#00ff00";
    lines[7].color = "#00ff00";
    lines[16].color = "#00ff00";
    lines[12].color = "#00ff00";
    lines[14].color = "#00ff00";
    lines[18].color = "#00ff00";
    lines[19].color = "#00ff00";
    setTimeout(function(){
        setUpCanvas();
        document.getElementById("controlContent").innerHTML = `After closing S3, time delay is provided at control station before giving option to the control station personnel to close s1 or s4 `;
        count1 = 0;
        document.getElementById("timer2").innerHTML = `00.00`;
        timerTracker12 = window.setInterval(function(){setF3Timer11();},2500);
    },1500);
}
function s1F3Clicked(){
    s1Active = 1;
    lineFromControltoS1();
    document.getElementById("controlContent").innerHTML = "<p style='color: goldenrod'>CLOSE COMMAND SIGNAL</p>";
    lines[8].color = "#00ff00";
    lines[9].color = "#00ff00";
    lines[13].color = "#00ff00";
    arcs[2].color = "#00ff00";
        // setUpCanvas();
    setTimeout(function(){
        setUpCanvas();
        document.getElementById("controlContent").innerHTML = `Sectionaliser s1 is selected to close. Loads are fed via sectionaliser s1`; 
        count1 = 0;
        document.getElementById("timer2").innerHTML = `00.00`;
        if(!s4Active){
            timerTracker13 = window.setInterval(function(){setF3Timer11();},2500);
        } else {
            // clearInterval(timerTracker8);
            document.getElementById("timer2").innerText = "";
        }
    },1500);
}
function s4F3Clicked(){
    s4Active = 1;
    lineFromControlToS4();
    document.getElementById("controlContent").innerHTML = "<p style='color: goldenrod'>CLOSE COMMAND SIGNAL</p>";
    lines[17].color = "#00ff00";
    lines[15].color = "#00ff00";
    arcs[3].color = "#00ff00";
        // setUpCanvas();
    setTimeout(function(){
        setUpCanvas();
        document.getElementById("controlContent").innerHTML = `Sectionaliser s4 is selected to close. Loads are fed via sectionaliser s4`; 
        count1 = 0;
        document.getElementById("timer2").innerHTML = `00.00`;
        if(!s1Active){
            timerTracker14 = window.setInterval(function(){setF3Timer11();},2500);
        } else {
            // clearInterval(timerTracker8);
            document.getElementById("timer2").innerText = "";
        }
    },1500);
}