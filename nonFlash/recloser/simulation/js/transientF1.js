function setTimer1(){
    displayTimerFormat(count, "timer1");
    count++;
    if(count==13){
        document.getElementById("controlContent").innerText = transientF1[2];
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
            document.getElementById("controlContent").innerText = transientF1[3];
            count = 10;
            timerTracker1 = window.setInterval(function(){setTimer2();},1000);
        }, 3000);
        setUpCanvas();
    }
}

function setTimer2(){
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
            timerTracker2 = window.setInterval(function(){setTimer3();},2500);
        }, 4500);
        setUpCanvas();
     }
}
function setTimer3(){
    count+=25;
    displayTimerFormat(count, "timer1");
    if(count==125){
        document.getElementById("shock1").style.visibility = "hidden";//shock symbol
        document.getElementById("controlContent").innerText = transientF1[5];
    }
    if(count==150){
        document.getElementById("controlContent").innerText = transientF1[6];
    }
    if(count==175){
        document.getElementById("controlContent").innerText = transientF1[7];
    }
    if(count==400){
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
            timerTracker3 = window.setInterval(function(){setTimer4();},2500);
            document.getElementById("timer2").innerText = "00.00";
            document.getElementById("timer1").innerText = "";
            document.getElementById("controlContent").innerText = transientF1[9];
        },5000);
    }
}

function setTimer4(){
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
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S1" onclick="s1Clicked()"/> OR <input type="button" class="btn" style='height: 25px' value="S4" onclick="s4Clicked()"/></p>`;
            },7500);
        }
        if(s1Active == 1 && s4Active == 0){
            document.getElementById("controlContent").innerText = transientF1[10];
            setTimeout(function(){
                count1 = 0;
                window.clearInterval(timerTracker3);
                document.getElementById("timer2").innerText = " ";
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S4" onclick="s4Clicked()"/></p>`;
            },7500);
        }
        if(s4Active == 1 && s1Active == 0){
            document.getElementById("controlContent").innerText = transientF1[10];
            setTimeout(function(){
                count1 = 0;
                window.clearInterval(timerTracker3);
                document.getElementById("timer2").innerText = " ";
                document.getElementById("controlContent").innerHTML = `<p style='margin-bottom: 5px'>Would you like to close <br><input type="button" class="btn" style='height: 25px' value="S1" onclick="s1Clicked()"/></p>`;
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

function s1Clicked(){
    s1Active = 1;
    lineFromControltoS1();
    document.getElementById("controlContent").innerHTML = "<p style='color: goldenrod'>CLOSE COMMAND SIGNAL</p>"
    setTimeout(() => {
        document.getElementById("timer2").innerText = "00.00";
        document.getElementById("controlContent").innerHTML = "<p>Sectionaliser s1 is selected to close.Loads are fed via sectionaliser s1</p>"
        setTimeout(function(){
            lines[8].color = "#00ff00";
            lines[9].color = "#00ff00";
            lines[13].color = "#00ff00";
            arcs[2].color = "#00ff00";
            setUpCanvas();
            document.getElementById("controlContent").innerHTML = !s4Active? "<p>Sectionaliser S1 is selected to close. Loads are fed via sectionaliser s1. Time delay between the consecutive sectionaliser operation is given at the control station.</p>":"<p>Sectionaliser S1 is selected to close. Loads are fed via sectionaliser s1.";
            if(s4Active){
                document.getElementById("timer2").innerText = "";
                clearInterval(timerTracker3);
            } else {
                timerTracker3 = window.setInterval(function(){setTimer4();},2500);
            }
        },1500);
    }, 8000);
}


function s4Clicked(){
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
            document.getElementById("controlContent").innerHTML = !s1Active ? "<p>Sectionaliser S4 is selected to close. Loads are fed via sectionaliser s4. Time delay between the consecutive sectionaliser operation is given at the control station.</p>":"<p>Sectionaliser S4 is selected to close. Loads are fed via sectionaliser s4.";
            if(s1Active){
                document.getElementById("timer2").innerText = "";
                clearInterval(timerTracker3);
            } else {
                timerTracker3 = window.setInterval(function(){setTimer4();},2500);
            }        
        },1500);
    }, 8000);
}
