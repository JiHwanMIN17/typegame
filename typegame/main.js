const wordInput=document.querySelector("#word-input")
const currentWord=document.querySelector("#current-word")
const scoreDisplay=document.querySelector("#score")
const timeDisplay=document.querySelector("#time")
const messageDisplay=document.querySelector("#message")

const GAME_TIME=5;//t-1 기본적으로 갖는 시간

let word=["banana","key","car","javascript","scalper"];
let score=0;
let time=0;
let timeInterval;
//t-3시간을 줄이기 위해 interval이 필요하다.
let isPlaying =false;
//p-1 게임의 진행가능여부 결정할 변수 선언
//isPlaying이 false인 상태로 시작하게되면 첫번째로 입력을 시작했다는의미


wordInput.addEventListener("input",e=>{
    const typedText=e.target.value;
    const currentText=currentWord.innerText;
//    console.log(typedText===currentText,typedText,currentText);
    //이렇게 하면 대문자까지 다 맞아야한다.
    //이걸 방지하기위해
    if (typedText.toUpperCase()===currentText.toUpperCase()){
        addScore();
        setNewWord();
        
    }
})

function gameover(){
    clearInterval(timeInterval);
    //t-8 clearInterVal은
    // 시간이 다된 후에 실행되는 함수로서
    //timeInterval이라는 1초씩 줄이는 기능을 중지시킨다.

}

//t-6 시간 카운트다운
function countDown(){
    console.log(time)
    time=time-1;
    timeDisplay.innerText=time;
    if(time===0){
        //t-7 시간이 0초인경우 더이상 실행하지 않는 함수 만든다.
        gameover();
        
    }
}

function setNewWord(){
    time=GAME_TIME;//t-2 새로운 단어가 나올때마다 5초동안에 실행하는 것을 정의

    //currentWorld를 바꾸고
    //wordInput을 초기화 시키는 기능을 넣는다.
    wordInput.value="";
    messageDisplay.innerText="NOW PLAYING!!!";
    const randomIndex=Math.floor(Math.random()*word.length);
    currentWord.innerText=word[randomIndex];

    if(!isPlaying){
        
        timeInterval=setInterval(countDown,1000);
        isPlaying=true;
    //t-5 1초마다 countdown을 하게한다.
    //여기서 문제는 성공할 때마다 interval이 계속 하나씩 쌓인다는 것.
    //해결위해 위에서 isPlaying 변수를 만들어야.
    }

    
}

function addScore(){
    score=score+1;
    scoreDisplay.innerText=score
    
}