let search = document.getElementById("search");
search.addEventListener("click", function(){
    // 새로운 브라우저 창 열기
    // window.open("주소",대상,옵션);

    // 새창 옵션 : width,height
            // 위치 : top,left
    // 창 크기 조절 가능 : resizable=yes/no
    // 스크롤바 표시 : scrollbars=yes/no
   
    if(document.querySelector("#name").value == ""){
        alert("이름을 입력하세요");
        document.querySelector("#name").focus();
        return;
    }else{

     const child=   window.open("child.html","_blank","width=500,height=700,top=200,left=500" );
    
    }
});

