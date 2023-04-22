let hour=document.getElementById('thour');
let minute=document.getElementById('tminute');
let second=document.getElementById('tsecond');
let th=0;
let tm=0;
let ts=0;


function plus(){
    tm=tm+15;
    if(tm>=60){
        th++;
        tm=0;
    }
    hour.textContent=th<10? "0"+th : th;
    minute.textContent=tm<10? "0"+tm : tm;
}
function minus(){
    
    if(tm>=15){
        tm=tm-15;
        
    }
    else{
        if(th>0){
            th--;
            tm=45;
        }
    }
    // th= th<10? "0"+th : th;
    // tm= tm<10? "0"+tm : tm;
    hour.textContent=th<10? "0"+th : th;
    minute.textContent=tm<10? "0"+tm : tm;
}



let total=0;

totalvalue=()=>{
    total=(Number(th)*3600)+(Number(tm)*60)+Number(ts);
}
function timer1(){
    
    totalvalue();
    total--;

    if(total>=0){
        th=Math.floor(total/3600);
        tm=Math.floor((total/60)-(th*60));
        ts=total-((th*3600)+(tm*60));

        hour.textContent=th<10? "0"+th : th;
        minute.textContent=tm<10? "0"+tm : tm;
        second.textContent=ts<10? "0"+ts : ts;
        
        
        
        let thh=document.getElementById('thh');
        let tmm=document.getElementById('tmm');
        let tss=document.getElementById('tss');
        
        let thr_dot=document.querySelector('.thr_dot');
        let tmins_dot=document.querySelector('.tmins_dot');
        let tsec_dot=document.querySelector('.tsec_dot');
    
        thh.style.strokeDashoffset=440 - (440*th) / 12;
        tmm.style.strokeDashoffset=440 - (440*tm) / 60;
        tss.style.strokeDashoffset=440 - (440*ts) / 60;
        
        thr_dot.style.transform=`rotate(${th*30}deg)`;
        tmins_dot.style.transform=`rotate(${tm*6}deg)`;
        tsec_dot.style.transform=`rotate(${ts*6}deg)`;
    }
}









let interval = null;
function starttimer(){
    clearInterval(interval);
    interval=setInterval(timer1,1000);
    disp.textContent="Timer Started";
}

function resettimer(){
    clearInterval(interval);
    th=0;
    tm=0;
    ts=0;
    hour.textContent=th<10? "0"+th : th;
    minute.textContent=tm<10? "0"+tm : tm;
    second.textContent=ts<10? "0"+ts : ts;
}




