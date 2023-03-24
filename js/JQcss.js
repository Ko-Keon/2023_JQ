// html heaed에 cdn 값을 가져온 후
// 다른 js에서도 JQ에 접근할 수 있다

// .css()를 이용해서 style값을 바꿀 수 있다
$("#header").css("color","blue")
// 값을 여러개 넣고 싶을때는 객체 형태로 작성
// 속성 이름을 적을 때 - 있다면 첫 글자 대문자로 작성
// 값 안에 변수나 JS 계산식을 적고싶다면 `${}` 이용가능
$("#header").css({
    "backgroundColor":"lightgray",
    "fontSize" : "3rem"
})

// 버튼을 클릭했을 때, hidden 클래스 추가
$("#btn").on("click",function(){
    // 형제 태그를 통해 p 찾고 클래스 추가
    // this 통해서 현재 이벤트가 실행된 태그를 가져올 수 있다.
    $(this).prev().addClass("hidden");
    console.log($(this));
})

// 버튼을 클릭했을 떄, header 숨김/보임
$("#toggle-button").on("click",function(){
    $("#header").toggleClass("hidden");
})

$("#checkbox").on("click", function(){
    $("#todo").toggleClass("color")
})

// 자바스크립트를 이용하여 버튼에 이벤트 넣기
/*
const btns = document.querySelectorAll("#number-btns button")
for(let i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function(e){
    e.target.style.color = "red";
    e.target.disabled = "true"
})
}
*/

// JQ로 접근한 여러 개의 태그는
// 배열로 처리하지않고 바로 메소드를 이용해 모두 적용 가능
console.log($("number-btns button"))
$("number-btns button").css({
    "color" : "blue"
})

// JQ로 여러개의 태그에 이벤트 추가
$("#number-btns button").on("click",function(){
    $(this).css("color","red").prop("disabled","true");
    console.log($(this));
})

