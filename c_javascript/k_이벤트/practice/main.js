//! 간단한 투두리스트 만들기
/*
input태그에 할 일을 입력
추가버튼 클릭으로 할 일을 추가
할 일은 Ul태그 내에 li태그로 저장
*/


let todoInput = document.querySelector('#todo-input');
let addButton = document.querySelector('#add-button');
let todoList = document.querySelector('#todo-list');

addButton.addEventListener('click',() =>{
  //input태그에 입력 값이 있는 경우
  if(todoInput.value !== ''){
    let newItem = document.createElement('li');
    newItem.textContent = todoInput.value;

    //html요소.classList.add('클래스명')
  
    newItem.classList.add('todo-item');
    todoList.appendChild(newItem);

    //? input 등과 같이 상호작용 된 데이터를 사용하고 나면 
    //? 해당 데이터를 초기화
    todoInput.value = '';
  }
//추가 버튼 ㅡㄹ릭 시 동적으로 LI태그 생성
//생성된 li태그를 ul태그 안에 삽입

});

todoList.addEventListener('click',(e) =>{
  //e이벤트 객체
  //실제 이벤트가 발생되는 요소 target

  // +)dom 요소의 태그명을 가져오기
  //html요소.tagname >> 태그명의 알파벳이 모두 대문자 표기
  if(e.target.tagName === 'LI'){

    //html요소.classlist:html요소의 Class 속성에 접근

    //toggle 속성
    //>>classList 중에서 해당 클래스명의 토글
    //  :작성된 경우 -삭제
    //  :작성되어 있지 않은 경우 -명시
    e.target.classList.toggle('completed'); 
  }
});

//! 남은 글자 수 출력하기
document.addEventListener('DOMContentLoaded',() => {
  const wordInput = document.querySelector('#word-input');
  const p = document.querySelector('#para');

  wordInput.addEventListener('keyup',(e) => {
    const length = wordInput.value.length;
    p.textContent = `글자 수:${length}`;

  });
});