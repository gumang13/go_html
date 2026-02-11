// 부모창에 입력한 이름을 가져와서 자식창의 input 태그에 넣기
// 새창을 열어줘 부모창(메인창)은 window.opener 이다.
let parentName = window.opener.document.getElementById("name").value; 

// 자식의 input 태그 가져오기
let childName = document.getElementById("childName");
childName.value = parentName; // 부모창에서 가져온 이름을 자식창의 input 태그에 넣기

const list=document.querySelectorAll(".emailText");
list.forEach( text =>{text.addEventListener("click",()=>{
       let parentEmail = window.opener.document.getElementById("email");
       parentEmail.value = text.innerText;
       window.close(); // 자식창 닫기
})});