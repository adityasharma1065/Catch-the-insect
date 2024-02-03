var arr=document.querySelectorAll(".page")
var playbtn=document.querySelector("button")
var insects=document.querySelector("#insects")
var insects_img=document.querySelector("#insects img")
var time=document.querySelector("#time span")
var scoree=document.querySelector("#scoree span")
var scoreboard=document.querySelector("#scoreboard")
var boardres=document.querySelector("#board span")
var boardrestime=document.querySelector("#boarde span")
var countdown=document.querySelector("#countdown h1")
var score=0;

var duration = prompt("Game Duration (sec):");

playbtn.addEventListener("click",function(){
    arr[1].style.transform="translateY(-100%)"
})

var count=0;
var creatures=document.querySelectorAll(".creature")
creatures.forEach(function(i){
    i.addEventListener("click",function(){
    
    var count =3
    arr[2].style.transform="translateY(-200%)"
    var cd=setInterval(function(){
        if(count>=0){
            count--;
          countdown.innerHTML=count;
          
        }
    },1000)
    var main=setTimeout(function(){

        countdown.innerHTML="";
        clearInterval(cd)

        createimg();
        onClick();
        
        setInterval(function(){

            createimg();
           onClick();

        },2000)
    var timepointer=0    
    var timeinterval=setInterval(function(){

    timepointer++;
    time.innerHTML=`${timepointer/10}`
          

    },100)    
    setTimeout(function(){
        clearTimeout(main);
        clearInterval(timeinterval);
        scoreboard.style.scale="1";
        boardres.innerHTML=`${score}`;
        boardrestime.innerHTML=`${duration} secs`;

    },duration*1000)   
    
    },4000)
})

     function createimg(){
        var selector=i.childNodes[3].getAttribute("src");
        var newImg = document.createElement("img")
        newImg.setAttribute("src",selector)
        insects.appendChild(newImg)
        randomize()
        return newImg
     }

    function onClick(){
        var child=document.querySelectorAll("#insects img")
        child.forEach(function(val){
             val.addEventListener("click",function(){
                //  console.log(val.childNodes)
                val.outerHTML=""
                score++;
                scoree.innerHTML=score;

             })

        })
        
    }
    

    function randomize(){
        var child=document.querySelectorAll("#insects img")
        child.forEach(val=>{
            val.style.left=`${Math.floor(Math.random()*100)%80}%`   
            val.style.bottom=`${Math.floor(Math.random()*100)%70}%`
            val.style.rotate=`${Math.floor(Math.random()*360)}deg`
        })
        
    }
    
    })












    
    
    













