function makeBubble(){

    var clutter = " ";

    for(var i = 0; i < 133; i++) {
        var rand = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rand}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = clutter;
}

var timer = 6;
function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0)
        {
            timer --;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML = `<h1>Time Finished</h1></br>
            <h1>Your score is : ${score - 10}</h1>`;
        }
        
    },1000);
}

var hitrn;
function Hitrand(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}


var score = 0;
function increaseScore(){
    
    document.querySelector("#scoreval").textContent = score;
    score += 10;
}


document.querySelector(".pbtm").addEventListener("click",
    function(dets){
        var clicknum = Number(dets.target.textContent);
        if(clicknum === hitrn)
        {
            increaseScore();
            makeBubble();
            Hitrand();
        }
    });

increaseScore();
Hitrand();
runTimer();
makeBubble();