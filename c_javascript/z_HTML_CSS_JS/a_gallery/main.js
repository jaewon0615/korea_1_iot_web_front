// 기능구현

/*
! 1)thubm-bar의 이미지 클릭
>> 해당 이미지로 full-img변경

! 2)button 태그에 클릭 이벤트 발생 시

-darken 버튼 클릭 시
:버튼의 class 속성을 dark로 지장
:버튼의 textcontent 을 'lighten'으로 변경
:overlay 배경색을 rgba0,0,0, 0.5로 변경

lighten버튼 클릭 시 (dark모드가 아닌경우)
 */

//& 1)html요소 선택
const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');
const button = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//& 2)썸네일 바에 이벤트 리스너 추가
thumbBar.addEventListener('click',(e)=> {
//클릭된 요소가 이미지인 경우
if(e.target.tagName === 'IMG') {
  const imgSrc = e.target.src;
  displayedImage.src = imgSrc;
};
});

//& 3)다크모드 라이트모드 변경 기능
button.addEventListener('click',()=> {
//클래스로 속성으로 현재 상태 확인
// >> 해당 요소의 클래스 리스트에 dark가 있는지 확인

//.contains 메서드
// :배열이나 문자열 내부에 값의 포함여뷰를 확인하는 메서드
if(button.classList.contains('dark')){
  // 현재 다크 모드인 경우 라이트모드로 변경
  button.textContent = 'lighten';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

  //다크모드를 지정하는 클래스명을 제거
  button.classList.remove('dark');
} else {
  //라이트 모드로 전환
  button.textContent = 'Darken';
  overlay.style.backgroundColor ='rgba(0,0,0,0.0)';

  button.classList.add('dark')

}
});