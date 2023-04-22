
let section1 = document.getElementById('clock');
let section2 = document.getElementById('stopwatch');
const section0 = document.querySelector('.container');
let section3=document.getElementById('timer');



function home() {
  section1.style.display = 'flex';
  section2.style.display = 'flex';
  section0.style.display = 'flex';
  section3.style.display = 'none';

  section0.style.flexDirection = 'row';
  section0.style.justifyContent = 'space-evenly';
  section0.style.alignItems = 'center';
}

function clk() {
  section1.style.display = 'flex';
  section2.style.display = 'none';
  section0.style.display = 'flex';
  section3.style.display = 'none';

  section0.style.flexDirection = 'column';
  section0.style.justifyContent = 'center';
  section0.style.alignItems = 'center';
}

function stpw() {
  section2.style.display = 'flex';
  section1.style.display = 'none';
  section3.style.display = 'none';
  
  section0.style.display = 'flex';
  section0.style.flexDirection = 'column';
  section0.style.justifyContent = 'center';
  section0.style.alignItems = 'center';
}

function tmr(){
  section3.style.display='flex';
  section1.style.display = 'none';
  section2.style.display = 'none';
}






//Adding zero..
const AddTracingZero=(num)=>
{
   return num<10? "0"+num : num;
}


// To display time...

setInterval(()=>{


let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');
let ampm=document.getElementById('ampm');

let hh=document.getElementById('hh');
let mm=document.getElementById('mm');
let ss=document.getElementById('ss');

let hr_dot=document.querySelector('.hr_dot');
let min_dot=document.querySelector('.min_dot');
let sec_dot=document.querySelector('.sec_dot');

let h= new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();

let am = h>=12 ? 'PM':'AM';

//converting 24hr to 12hrs...
if(h>12){
    h=h-12;
}


h=AddTracingZero(h);
m=AddTracingZero(m);
s=AddTracingZero(s);

hours.innerHTML=h + "<br><span>Hours</span>";
minutes.innerHTML=m + "<br><span>Minutes</span>";
seconds.innerHTML=s + "<br><span>Seconds</span>";
ampm.innerHTML=am;


hh.style.strokeDashoffset=440 - (440*h) / 12;
mm.style.strokeDashoffset=440 - (440*m) / 60;
ss.style.strokeDashoffset=440 - (440*s) / 60;

hr_dot.style.transform=`rotate(${h*30}deg)`;
min_dot.style.transform=`rotate(${m*6}deg)`;
sec_dot.style.transform=`rotate(${s*6}deg)`;

})


// Stopwatch...

const hoursw = document.getElementById('hoursw');
const minutesw = document.getElementById('minutesw');
const secondsw = document.getElementById('secondsw');
let timer = null;
let [h1, m1, s1] = [0, 0, 0];

let hhsw=document.getElementById('hhsw');
let mmsw=document.getElementById('mmsw');
let sssw=document.getElementById('sssw');

let hrsw_dot=document.querySelector('.hrsw_dot');
let minsw_dot=document.querySelector('.minsw_dot');
let secsw_dot=document.querySelector('.secsw_dot');

let lapList = document.getElementById('lapList');
let lapCount = 0;
function stopwatch() {
  s1++;
  if (s1 == 60) {
    s1 = 0;
    m1++;
    if (m1 == 60) {
      m1 = 0;
      h1++;
    }
  }

  let h2 = h1 < 10 ? "0" + h1 : h1;
  let m2 = m1 < 10 ? "0" + m1 : m1;
  let s2 = s1 < 10 ? "0" + s1 : s1;

  hoursw.textContent = h2;
  minutesw.textContent = m2;
  secondsw.textContent = s2;


  hhsw.style.strokeDashoffset=440 - (440*h2) / 12;
mmsw.style.strokeDashoffset=440 - (440*m2) / 60;
sssw.style.strokeDashoffset=440 - (440*s2) / 60;

hrsw_dot.style.transform=`rotate(${h2*30}deg)`;
minsw_dot.style.transform=`rotate(${m2*6}deg)`;
secsw_dot.style.transform=`rotate(${s2*6}deg)`;
}


function watchstart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

function watchstop() {
  clearInterval(timer);
}

function watchreset() {
  clearInterval(timer);
  [h1, m1, s1] = [0, 0, 0];
  minutesw.textContent = "00";
  hoursw.textContent = "00";
  secondsw.textContent = "00";
}


function laptime() {
  let lapTime = document.createElement("li");
  let lapTimeValue = document.createTextNode(`${hoursw.textContent}:${minutesw.textContent}:${secondsw.textContent}`);
  lapTime.appendChild(lapTimeValue);
  lapList.appendChild(lapTime);
  lapCount++;
}

// function clk() {
//   section1.style.display = 'flex';
//   section2.style.display = 'none';

// }

// function stpw() {

//   section2.style.display = 'flex';
//   section1.style.display = 'none';
//   section2.style.minHeight='70vh';
// }

// function home() {
  
  //   // set display style of clock and stopwatch divs to flex
  //   section1.style.display = 'flex';
  //   section2.style.display = 'flex';
  
  //   // set min-height style of stopwatch div to 70vh
  //   section2.style.minHeight = '70vh';
  
  //   // set display style of container div to flex
  //   section0.style.display = 'flex';
  // }
  


