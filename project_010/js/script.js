//buttons const

const bgreen = document.getElementById('b-green');
const byellow = document.getElementById('b-yellow');
const bred = document.getElementById('b-red');
const bauto = document.getElementById('auto');

var autocont = 0;

//led const

const lgreen = document.getElementById('light-g');
const lyellow = document.getElementById('light-y');
const lred = document.getElementById('light-r');

const green = document.getElementById('green');
const yellow = document.getElementById('yellow');
const red = document.getElementById('red');

//led functions

function greenON () {
    green.style.backgroundColor = 'rgb(0, 189, 0)';
    green.style.boxShadow = 'inset 3px 3px rgb(0, 139, 0)';
    lgreen.style.boxShadow = '-7px -7px 30px 2px rgb(66, 207, 66)';
}

function greenOFF () {
    green.style.backgroundColor = 'darkgreen';
    green.style.boxShadow = 'inset 3px 3px black';
    lgreen.style.boxShadow = '0px 0px 0px 0px black';
}

function yellowON () {
    yellow.style.backgroundColor = 'yellow';
    yellow.style.boxShadow = 'inset 3px 3px darkgoldenrod';
    lyellow.style.boxShadow = '-7px -7px 30px 2px rgb(189, 189, 104)';
}

function yellowOFF () {
    yellow.style.backgroundColor = 'darkgoldenrod';
    yellow.style.boxShadow = 'inset 3px 3px black';
    lyellow.style.boxShadow = '0px 0px 0px 0px black';
}

function redON () {
    red.style.backgroundColor = 'red';
    red.style.boxShadow = 'inset 3px 3px darkred';
    lred.style.boxShadow = '-7px -7px 30px 2px rgb(243, 63, 63)';
}

function redOFF () {
    red.style.backgroundColor = 'darkred';
    red.style.boxShadow = 'inset 3px 3px black';
    lred.style.boxShadow = '0px 0px 0px 0px black';
}

//auto function

function autored () {
    redON();
    yellowOFF();
    greenOFF();
}
function autoyellow () {
    redOFF();
    yellowON();
    greenOFF();
}
function autogreen () {
    redOFF();
    yellowOFF();
    greenON();
}

function ifauto () {
    if (autocont == 0) {
        autored();
    }
    if (autocont == 1) {
        autoyellow();
    }
    if (autocont == 2) {
        autogreen();
    }
}

function autotimer () {
    if (autocont == 3) {
        autocont = 0;
    }
    ifauto();
    autocont+=1;
    console.log(autocont);
}


function autoOFF () {
    clearInterval();
}

function autoON () {
    setInterval(autotimer, 1000);
}




//green button functions

function Gchangecolor () {
    bgreen.style.backgroundImage = 'linear-gradient(rgb(125, 255, 255), rgb(180, 255, 255), rgb(125, 255, 255))'
}
function GIcolor () {
    bgreen.style.backgroundImage = 'linear-gradient(rgb(219, 219, 219), white, rgb(219, 219, 219))'
}
function Gclick () {
    bgreen.style.backgroundImage = 'linear-gradient(rgb(36, 229, 255), rgb(79, 250, 241), rgb(36, 229, 255))'
    autoOFF();
    greenON();
    redOFF();
    yellowOFF();
    console.log(lgreen.style.boxShadow)
}

//yellow button functions

function Ychangecolor () {
    byellow.style.backgroundImage = 'linear-gradient(rgb(125, 255, 255), rgb(180, 255, 255), rgb(125, 255, 255))'
}
function YIcolor () {
    byellow.style.backgroundImage = 'linear-gradient(rgb(219, 219, 219), white, rgb(219, 219, 219))'
}
function Yclick () {
    byellow.style.backgroundImage = 'linear-gradient(rgb(36, 229, 255), rgb(79, 250, 241), rgb(36, 229, 255))'
    autoOFF();
    greenOFF();
    redOFF();
    yellowON();
    console.log(lyellow.style.boxShadow)
}

//red button functions

function Rchangecolor () {
    bred.style.backgroundImage = 'linear-gradient(rgb(125, 255, 255), rgb(180, 255, 255), rgb(125, 255, 255))'
}
function RIcolor () {
    bred.style.backgroundImage = 'linear-gradient(rgb(219, 219, 219), white, rgb(219, 219, 219))'
}
function Rclick () {
    bred.style.backgroundImage = 'linear-gradient(rgb(36, 229, 255), rgb(79, 250, 241), rgb(36, 229, 255))'
    autoOFF();
    greenOFF();
    redON();
    yellowOFF();
    console.log(lred.style.boxShadow)
}

//auto button functions

function changecolor () {
    bauto.style.backgroundImage = 'linear-gradient(rgb(125, 255, 255), rgb(180, 255, 255), rgb(125, 255, 255))'
}
function Icolor () {
    bauto.style.backgroundImage = 'linear-gradient(rgb(219, 219, 219), white, rgb(219, 219, 219))'
}
function click () {
    bauto.style.backgroundImage = 'linear-gradient(rgb(36, 229, 255), rgb(79, 250, 241), rgb(36, 229, 255))'
    autoON();
}

//buttons event listeners

bgreen.addEventListener('mouseover', Gchangecolor);
bgreen.addEventListener('mouseleave', GIcolor);
bgreen.addEventListener('mousedown', Gclick);
bgreen.addEventListener('mouseup', GIcolor);

byellow.addEventListener('mouseover', Ychangecolor);
byellow.addEventListener('mouseleave', YIcolor);
byellow.addEventListener('mousedown', Yclick);
byellow.addEventListener('mouseup', YIcolor);

bred.addEventListener('mouseover', Rchangecolor);
bred.addEventListener('mouseleave', RIcolor);
bred.addEventListener('mousedown', Rclick);
bred.addEventListener('mouseup', RIcolor);

bauto.addEventListener('mouseover', changecolor);
bauto.addEventListener('mouseleave', Icolor);
bauto.addEventListener('mousedown', click);
bauto.addEventListener('mouseup', Icolor);

