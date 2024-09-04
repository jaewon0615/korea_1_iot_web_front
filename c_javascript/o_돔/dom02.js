//! 문서 객체 가져오기
//? head,body,titlt
// documet.head
// documet.body
// documet.title

//? body요소 내부에서 만든 다른 요소들
// querySelector(),querySelectorAll(),getElemetById()

//! DOM 수정하기

//# 1) 글자 조작하기
// 문서객체.textContent
// :입력된 문자열을 그대로 넣기

//문서객체.innerHtml
// :입력된 문자열을 HTML 형식으로 넣기

document.addEventListener('DOMContentLoaded',() =>{
  const a = document.getElementById('textContent');
  const b = document.getElementById('innerHTML');

  a.textContent = '<h2>textContent속성<h2/>';
  // :텍스트 그 자체가 내용으로 삽입
  b.innerHTML = '<h2>innerHTML속성<h2/>';
  // :HTML 문서구조를 인식하고 해석한 뒤 내용만 삽입
});

// +) js에서 글자를 조작 시 문서 구조는 HTML,기능적인 텍스트는 js가 담당
// >> textContent사용을 권장

//# 2) 속성 조작하기
// :문서 객체의 속성(attribute)을 조작

//? 1) 문서객체.setAttribute()
// : 특성 속성에 값을 지정

//? 2) 문서객체.getAttribute()
// :특정 속성을 추출

// cf) HTML 표준에 정의된 속성은 위의 메서드 사용없이 사용 가능
// >> 내장된 속성들은 .연산자(온점)을 사용하여 속성 읽기 또는 지정이 가능
document.addEventListener('DOMContentLoaded',()=>{
  const dogs = document.querySelectorAll('.dogs');
  dogs.forEach((dog,index) =>{
    const width = (index+1)*100;

    dog.setAttribute('width',width);
    dog.setAttribute('height','250px');

    const source = './images/dog01.jpg'
    const alter = '강아지 이미지';
    dog.src = source;
    dog.alt = alter;
  })
})

//# 3) 스타일 조작하기
// :문서 객체의 스타일 조작 시 스타일 속성을 사용
//? style 속성은 js에서 객체로 인식

// :JS문법 체계에서는 식별자에 -(하이픈)기호 사용x
// >>lowerCamelCase 사용을 권장
// text-align >> textAlign
// font-size >> fontSize

//? style 객체 사용법
// : 주로 .(점) 표기법을 사용

//h1.style.backgroundColor
//h1.style.[backgroundColor]
//h1.style.[background-Color]

document.addEventListener('DOMContentLoaded',()=>{
  //id값이 container 인 요소 내부의 div를 가져옴
  const divs = document.querySelectorAll('#container div')

  // div개수만큼 반복 출력
  divs.forEach((div,index) =>{
    const gradation = index*10

    div.style.height = '10px';
    div.style['backgroundColor'] = `rgba(${gradation},${gradation},${gradation})`
  })
})
