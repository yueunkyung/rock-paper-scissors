
//자바스크립트 객체
//메서드와 속성
// 자동차
// 속성. 멤버필드, properties
//  배.배기량 = 30000;
// 자동차.배기량 = 2000;
// 자동차.컬러 = "yellow";
// 자동차.브랜드 = "현대";
// 자동차.엑셀(); //속도 증가
// 자동차.브레이크(); //속도 감소

/*
//배열은 번호매기기....
const student01 = "홍길동";
const student02 = "둘리";
const student03 = "홍길동";
const student04 = "홍길동";

const 우리반 = ["홍길동","둘리","고길동","bts"];
console.log("우리반", 우리반[1]);

const now = new Date();
console.log(now.getDay());
const days = ["일", "월", "화", "수", "목", "금", "토"];
const months = ["Jan", "Feb", "Mar", "수", "목", "금", "토","","","","","Dec"];
console.log(days[now.getDay()]);
console.log(now.getMonth());
console.log(months[now.getMonth()]);
*/

/*
if(now.getDay() === 0) {
    console.log("일요일");
} else if(now.getDay() === 1) {
    console.log("월요일");
}
 */

//NodeList 유사배열
const computerItems = document.querySelectorAll("#computer li");
const humanItems = document.querySelectorAll("#human li");
const resultList = document.querySelector("#resultList");
const resultCover = document.querySelector("#resultCover");
const btnRestart = document.querySelector("#btnRestart");
// console.log("items", items);
// document.title="나는 타이틀";
// items[0].style.display = "none";
// items[1].style.display = "none";
// items[2].style.display = "none";
/*
let sum = 0;
// i=0; 이고 i+=2이면 짝수
// i=1; 이고 i+=2이면 홀수
for(let i=0; true; i++) {
    if(i>7) break;  // 조건을 만족해서 break를 만나면 반복문을 빠져 나간다.
    sum = sum + i;
    console.log("i==="+i,"sum==="+sum);
}
console.log("break_sum", sum);

for(let i=0; i<10; i++) {
    if(i%2===0) continue;   // 조건을 만족해서 continue를 만나면 다음 조건으로 간다.
                            // 반복문은 계속 이어진다.
    sum = sum + i;
    console.log("i==="+i,"sum==="+sum);
}
console.log("continue_sum", sum);
 */
let computerPick = 0;
let gameCount = 0;

function computerSelect(){
    /*
    for(let i=0; i<items.length; i++){
        // console.log(i);
        items[i].style.display = "none";
    }
    */
    computerItems.forEach(function(item, i, array){
        item.style.display = "none";
    });
    const random = Math.floor(Math.random()*3);
    // console.log("random",random);
    computerItems[random].style.display = "block";
    computerPick = random;
}

let clearID = setInterval(computerSelect,10); //0.01초마다 한번씩
let clearTimeoutID = null;
const clickItem = function(e) {
    clearInterval(clearID);
    const userPick = parseInt(e.currentTarget.dataset.id);
    // console.log("computerPick===",computerPick);
    console.log("userPick===", userPick);
    if(computerPick === userPick) {
        // console.log("비겼어요");
        // resultList.innerHTML += `<li class="draw"><span>D</span></li>`;

        const inner = document.createElement("li");
        inner.classList.add("draw");
        inner.innerHTML = "<span>D</span>";
        resultList.appendChild(inner);

        // console.log("computerPick===",computerPick);
        // console.log("userPick===", userPick);
    } else if((computerPick === 0 && userPick === 1) || (computerPick === 1 && userPick === 2) || (computerPick === 2 && userPick === 0)) {
        // console.log("이겼어요");
        // resultList.innerHTML += `<li class="win"><span>W</span></li>`;
        
        const inner = document.createElement("li");
        inner.classList.add("win");
        inner.innerHTML = "<span>W</span>";
        resultList.appendChild(inner);

        // console.log("computerPick===",computerPick);
        // console.log("userPick===", userPick);
    } else {
        // console.log("졌어요");
        // resultList.innerHTML += `<li class="lose"><span>L</span></li>`;
        
        const inner = document.createElement("li");
        inner.classList.add("lose");
        inner.innerHTML = "<span>L</span>";
        resultList.appendChild(inner);

        // console.log("computerPick===",computerPick);
        // console.log("userPick===", userPick);
    }
    humanItems.forEach(function(item, i){
        item.removeEventListener("click", clickItem);
    });

    if(clearTimeoutID !== null) {
        clearTimeout(clearTimeoutID);
    }
    clearTimeoutID = setTimeout(function() {
        clearID = setInterval(computerSelect,10);
        humanItems.forEach(function(item, i){
            item.addEventListener("click", clickItem);
        });
    }, 1000);
    gameCount++;
    console.log("gameCount", gameCount);
    if(gameCount >= 3 ) {
        clearTimeout(clearTimeoutID);
        resultCover.classList.remove("off");
        resultCover.classList.add("on");
    }
}

humanItems.forEach(function(item, i){
    item.addEventListener("click", clickItem);
});

btnRestart.addEventListener("click", function(){
    resultCover.classList.remove("on");
    resultCover.classList.add("off");
    gameCount = 0;
    resultList.innerHTML = "";
    clearTimeoutID = setTimeout(function() {
        clearID = setInterval(computerSelect,10);
        humanItems.forEach(function(item, i){
            item.addEventListener("click", clickItem);
        });
    }, 1000);
});


const sc01 = 10;
function scope01() {
    const innerSc01 = "sc01";
    // console.log("scope01_sc01", sc01);
    const aa = 10;
    if(true) {
        var var01 = 10;
        let let01 = 20;
        const const01 = 30;
    }
    for(var i=0;i<3;i++) {
        var temp = i;
    }
    console.log("var01=="+var01);
    console.log("temp=="+temp);
    console.log("i==="+i);

    // var는 function() 스코프,
    // let과 const는 block스코프
    // console.log("var01",var01);
    // console.log("let01",let01);
    // console.log("const01",const01);
}
scope01();
// console.log("sc01",sc01);


// rest api  url/user/01
const fruits = ["orange","apple","kiwi","shine","tomato"];
console.log(fruits.length);
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

fruits.forEach(function(item, i){
    console.log("item",item);
    console.log("i",i);
});
