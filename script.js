let hours=0
let minutes=0
let seconds=0
let time=null


function display(){
    let h=hours<10? "0" + hours : hours
    let m = minutes<10? "0" + minutes:minutes
    let s=seconds<10? "0" + seconds : seconds

    document.getElementById("timer").innerHTML=`${h}:${m}:${s}`
}

function start(){
    if(time!=null)return;
    time=setInterval(()=>{
        seconds++
        if(seconds===60){
            seconds=0
            minutes++
        }
        if(minutes===60){
            minutes=0
            hours++
        }
        display()
    },1000)

    
}
function stop(){
    clearInterval(time)
    time=null
}

function Reset(){
    stop()
    hours=0
    minutes=0
    seconds=0
   
    display()
}
display()