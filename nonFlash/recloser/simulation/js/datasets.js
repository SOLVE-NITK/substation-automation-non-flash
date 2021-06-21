let screen = 0;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let fault = '';
let count = 0, count1 = 0;
let s1Active = 0, s2Active = 0, s3Active=0, s4Active = 0;
let timerTracker = 0, timeTracker1 = 0, timerTracker2 = 0, timerTracker3 = 0;timerTracker4 = 0, timerTracker5 = 0, timerTracker6 = 0, timerTracker7 = 0, timerTracker8 = 0, timerTracker9 = 0, timerTracker10 = 0,timerTracker11 = 0,timerTracker12 = 0,timerTracker13=0, timerTracker14 = 0;
let timeSet = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,14,16,18,20,21,22,23,24,25,27,28,29,30,32,34,36,38,40,50,75],
    [20,30,40,50,60,70,80,90],
    [100,200,300,400,500,600,700,800,900],
    [125,175,225,275,325,375],
    [150,250,350],
    [1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2200,2400,2600,2800,3000,]]
let lines = [
    {
        id:0,
        element: 'substation',
        startPoint: [76,70],
        endPoint: [76,222],
        color: '#00ff00'
    },
    {
        id:1,
        element: 'feeder1',
        startPoint: [76,93],
        endPoint: [172,93],
        color: '#00ff00'
    },
    {
        id:2,
        element: 'feeder2',
        startPoint: [76,142],
        endPoint: [172,142],
        color: '#00ff00'
    },
    {
        id:3,
        element: 'busToR',
        startPoint: [76,195],
        endPoint: [93,195],
        color: '#00ff00'
    },
    {
        id:4,
        element: 'rToRc',
        startPoint: [[120,195],[133,195],[140,181],[142,205],[147,195]],
        endPoint: [[133,195],[140,181],[142,205],[147,195],[164,195]],
        color: '#00ff00'
    },
    {
        id:5,
        element: 'rcToS3',
        startPoint: [191,195],
        endPoint: [289,195],
        color: '#00ff00'
    },
    {
        id:6,
        element: 's3ToS2',
        startPoint: [310,195],
        endPoint: [428,195],
        color: '#00ff00'
    },
    {
        id:7,
        element: 's2ToS1',
        startPoint: [450,195],
        endPoint: [571,195],
        color: '#00ff00'
    },
    {
        id:8,
        element: 's1ToF1',
        startPoint: [591,195],
        endPoint: [684,195],
        color: '#00ff00'
    },
    {
        id:9,
        element: 'f1toLoadsHorizontal',
        startPoint: [684,195],
        endPoint: [738,195],
        color: '#00ff00'
    },
    {
        id:10,
        element: 'loadPair1',
        startPoint: [[216,195],[256,195]],
        endPoint: [[216,254],[256,254]],
        color: '#00ff00'
    },
    {
        id:11,
        element: 'loadPair2',
        startPoint: [[336,195],[375,195]],
        endPoint: [[336,254],[375,254]],
        color: '#00ff00'
    },
    {
        id:12,
        element: 'loadPair3',
        startPoint: [[472,195],[512,195]],
        endPoint: [[472,254],[512,254]],
        color: '#00ff00'
    },
    {
        id:13,
        element: 'loadPair4',
        startPoint: [[615,196],[652,196]],
        endPoint: [[615,254],[652,254]],
        color: '#00ff00'
    },
    {
        id:14,
        element: 'loadPair5',
        startPoint: [[505,312],[505,349]],
        endPoint: [[562,312],[562,349]],
        color: '#00ff00'
    },
    {
        id:15,
        element: 'loadPair6',
        startPoint: [[611,398],[645,398]],
        endPoint: [[611,455],[645,455]],
        color: '#00ff00'
    },
    {
        id:16,
        element: 's1ToS4',
        startPoint: [[562,195],[562,398]],
        endPoint: [[562,398],[568,398]],
        color: '#00ff00'
    },
    {
        id:17,
        element: 's4toLoadsHorizontal',
        startPoint: [590,398],
        endPoint: [750,398],
        color: '#00ff00'
    },
    {
        id:18,
        element: 's3ToF3',
        startPoint: [310,195],
        endPoint: [410,195],
        color: '#00ff00'
    },
    {
        id:19,
        element: 's2ToF2',
        startPoint: [450,195],
        endPoint: [550,195],
        color: '#00ff00'
    },
];

let rectangles = [
    {
        id:0,
        element: 'r',
        pos: [93,184],
        color: '#00ff00'
    },
    {
        id:1,
        element: 'rc',
        pos: [165,184],
        color: '#00ff00'
    },
]

let arcs = [
    {
        id:0,
        element: 's3',
        pos: [299,196],
        color: '#00ff00'
    },
    {
        id:1,
        element: 's2',
        pos: [439,196],
        color: '#00ff00'
    },
    {
        id:2,
        element: 's1',
        pos: [581,196],
        color: '#00ff00'
    },
    {
        id:3,
        element: 's4',
        pos: [580,398],
        color: '#00ff00'
    },
]

// Control Instructions
// F1 - Transient Fault

let transientF1 = [
    "At the instant of fault created, the fault is fed from the source. Relay and Recloser picks up during this instatnt. The line till the fault point gets loaded with fault current and the permanent load current.",
    "Definite time delay timer at the recloser starts counting till the set value.",
    "Definite time delay timer at the recloser starts counting till the set value. After the definite time delay the recloser opens the circuit. The complete circuit fed via recloser is out of power.",
    "First reclosing time delay counter starts counting till the set value in the autorecloser.",
    "Sectionaliser counts the upstream recloser/breaker operation and since the count set at the sectionalisers s1 and s4 are, 1.They open the respective ciruit in the first reclosing time.",
    "Since the fault is assumed to be transient. It gets cleared during the first reclosing time. The count continues at recloser.",
    "The count contnues at recloser.",
    "The first reclosing time count at the recloser contnues.",
    "After the 1st reclosing time delay, the circuit is reenergised.",
    "Since the recloser doesn't sense the fault, time delay starts counting in the substation automation control.",
    "Since the recloser doesn't sense the fault. Time delay starts recounting in the substation automation control. After time delay substation control personnel is given the option to close either s1 or s4.",
    "<span class='btn' onclick='s1Clicked()'>s1</span> or <span class='btn' onclick='s4Clicked()'>s4</span>",
    "Close command signal",
    "Sectionaliser s1 is selected to close.Loads are fed via sectionaliser s1",
    "Sectionaliser S1 is selected to close. Loads are fed via sectionaliser s1. Time delay between the consecutive sectionaliser operation is given at the control station.",
    "Would you like to close  <span class='btn'>s4</span>?",
    "Close Command Signal",
    "Sectionaliser s4 is selected to close. Loads are fed via sectionaliser S4",
    "Close Command signal",
    "Sectionaliser s4 is selected to close. Loads are fed via sectionaliser S4",
    "Sectionaliser S4 is selected to close. Loads are fed via sectionaliser s4. Time delay between the consecutive sectionaliser operation is given at the control station.",

]

