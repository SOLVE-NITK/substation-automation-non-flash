function setPermF2Timer7(){
    displayTimerFormat(count, "timer1");
    count+=1;
    if(count == 2){
        document.getElementById("controlContent").innerHTML = `Definite time delay timer at the recloser starts continuing till the set value.`; 
    }
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
            if(arc.id == 0 || arc.id == 1){
                arc.color = "grey";
            }
            if(arc.id == 2 || arc.id == 3){
                arc.color = "#ff0000";
            }       
        })
        setUpCanvas();
        window.clearInterval(timerTracker8);
        setTimeout(() => {
            document.getElementById("controlContent").innerHTML = `First reclosing time delay counter starts counting till the set value in the autorecloser.`;
            count = 10;
            timerTracker9 = window.setInterval(function(){setPermF2Timer8();},1000);
        }, 3000);
    }
}

function setPermF2Timer8(){
    displayTimerFormat(count, "timer1");
    count+=10;
    if(count == 100){
        document.getElementById("controlContent").innerHTML = `Sectionaliser counts the upstream recloser/breaker operation. During the first reclosing time the substation automation control sends a permanent open command to sectionaliser s2 to reduce further autorecloser shots.`;
    }
    if(count == 110){
        document.getElementById("controlContent").innerHTML = "<p style='color: goldenrod'>OPEN COMMAND SIGNAL</p>";
        lineFromControlToS2();
        setTimeout(function(){
            arcs[1].color = "#ff0000";
            setUpCanvas();
            document.getElementById("controlContent").innerHTML = `Reclosing time delay counter continues counting till the set value in the autorecloser.`;
            setTimeout(() => {
                count = 100;
                window.clearInterval(timerTracker9);
                document.getElementById("timer1").innerText = "01.00";
                timerTracker10 = window.setInterval(function(){setPermF2Timer9();},1000);
            }, 2500);
        },1500)
    }
}

function setPermF2Timer9(){
    displayTimerFormat(count, "timer1");
    count+=25;
    if(count == 125){
        document.getElementById("controlContent").innerHTML = `Reclosing time delay counter continues counting till the set value in the autorecloser.`;
    }
    if(count == 425){
        // document.getElementById("timer1").innerText = "00.00";
        window.clearInterval(timerTracker10);
        document.getElementById("controlContent").innerHTML = `<p>After the reclosing time delay, the circuit is reenergised.<span style="height: 25px"></span>Fault is permanent and needs manual inspection and clearing before recharging s2 section.</p>`;
        arcs[0].color = "#00ff00";
        rectangles[1].color = "#00ff00";
        lines[5].color = "#00ff00";
        lines[6].color = "#00ff00";
        lines[18].color = "#00ff00";
        setUpCanvas();
    }
}