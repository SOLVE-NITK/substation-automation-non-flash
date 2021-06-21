let dataSet = [
    {
        exp: "Circuit Breaker Status Indication from field input",
        link:"http://sa-nitk.vlabs.ac.in/exp1/index.html",
        sim: "nonFlash/dcs/simulation/index.html"
    },
    {
        exp: "Control of Group Operated Switches (GOS) from workstation",
        link:"http://sa-nitk.vlabs.ac.in/exp2/index.html",
        sim: "nonFlash/gos/simulation/index.html"
    },
    {
        exp: "Monitoring Feeder parameter from workstation",
        link:"http://sa-nitk.vlabs.ac.in/exp3/index.html",
        sim: "nonFlash/exp3/simulation/index.html"
    },
    {
        exp: "Fault scenario simulation in a feeder",
        link:"http://sa-nitk.vlabs.ac.in/exp4/index.html",
        sim: "nonFlash/exp4/simulation/index.html"
    },
    {
        exp: "Fault scenario simulation in a Transformer /Bus",
        link:"http://sa-nitk.vlabs.ac.in/exp5/index.html",
        sim: "nonFlash/exp5/simulation/index.html"
    },
    {
        exp: "Load Transfer from one Feeder to other during Transformer Maintenance",
        link:"http://sa-nitk.vlabs.ac.in/exp6/index.html",
        sim: "nonFlash/exp6/simulation/index.html"
    },
    {
        exp: "Control Of Bus Voltages Through Onload Tap Changes",
        link:"http://sa-nitk.vlabs.ac.in/exp7/index.html",
        sim: "nonFlash/exp7/simulation/index.html"
    },
    {
        exp: "Development of 11KV/433 volts substation automation scheme using PLC for normal load operation",
        link:"http://sa-nitk.vlabs.ac.in/exp8/index.html",
        sim: "nonFlash/normal/simulation/index.html"
    },
    {
        exp: "Development of 11KV/433 volts substation automation scheme using PLC for timer ON/OFF load control",
        link:"http://sa-nitk.vlabs.ac.in/exp9/index.html",
        sim: "nonFlash/timerOnOff/simulation/index.html"
    },
    {
        exp: "Development of 11KV/433 volts substation automation scheme using PLC for cyclic ON/OFF load control",
        link:"http://sa-nitk.vlabs.ac.in/exp10/index.html",
        sim: "nonFlash/cyclicLoad/simulation/index.html"
    },
    {
        exp: "Autoreclosure And Sectionalizer Operation",
        link:"http://sa-nitk.vlabs.ac.in/exp11/index.html",
        sim: "nonFlash/recloser/simulation/index.html"
    },

]
let textContent = "";
dataSet.map((data)=>{
    textContent+=`
        <div class="shadow card m-2" style="width: 24rem;">
            <div class="card-body">
                <p class="card-title">${data.exp}<p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setSim('${data.sim}')">
                Launch Simulator
              </button>                
              <p><a href=${data.link} target="blank">Vlab Link for Content</a></p>
            </div>
    </div>
    `
});
document.getElementById("cards").innerHTML=textContent;

function setSim(source){
    document.getElementById("simulator").src = source;
    let sim1 = document.getElementById("simMain");
    sim1.scrollIntoView();
}

function moveTop(){
    window.scrollTo(0,0);

}