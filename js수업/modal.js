window.onload = function() {
   const title = document.querySelectorAll(".titleText");
   
   for(var text of title){
       text.addEventListener('click', showModal);
   }

   let close = this.document.querySelector(".close");
   close.addEventListener("click",hideModal);
      
   
}

function showModal(){
    // 어떤 제목을 클릭했냐 ? 해당 제목의 글번호와 일치하는 내용을 찾아서 모달에 넣어줘야 한다
    // 지금은 모달 display를 block으로 바꾸기만 함

   let modal = document.querySelector("#modalWrap");

//    modal.style.display = "block";
//   자바스크립트에서 태그의 calss 를 다루기 위해서는 classList 를 이용한다.
//   .classList.remove("클래스명") - 클래스삭제
//   .classList.add("클래스명")    - 클래스추가
//   .classList.toggle("클래스명") - 클래스가 있으면 삭제, 없으면 추가
//    .classList.contains("클래스명") - 클래스가 있으면 true, 없으면 false
    modal.classList.remove("hide");

}


function hideModal(){
        let modal = document.querySelector("#modalWrap");
        modal.classList.add("hide");
    
}