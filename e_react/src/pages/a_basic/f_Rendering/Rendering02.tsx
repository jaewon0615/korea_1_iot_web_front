import React from "react";

//! 배열(list) 렌더링
// >> map,filter

export default function Rendering02() {
  const people = ["이승아", "이도경", "윤대휘", "정규민", "김소빈"];

  const peopleDescription = [
    {
      id: 0,
      name: "이승아",
      job: "developer",
    },
    {
      id: 1,
      name: "이도경",
      job: "opreation",
    },
    {
      id: 3,
      name: "윤대휘",
      job: "business",
    },
    {
      id: 4,
      name: "정규민",
      job: "business",
    },
    {
      id: 5,
      name: "김소빈",
      job: "opreation",
    },
  ];

  // map 콜백함수를 사용한 배열 렌더링
  // >> 요소 개수의 변화x
  // : 전체 내용을 렌더링

  const listItems = people.map((person, index) => (
    // 배열을 렌더링 하여 html요소로 반환할 경우
    // : 각 요소를 구분할 수 있는 구분값을
    // key속성에 전달
    <li key={index}>{person}</li>
  ));
  
  // filter 콜백함수를 사용한 배열 렌더링
  const businessItems = peopleDescription.filter(person =>
    person.job === 'business'
  )

  // 필터링된 배열을 순회하여 ui로 반환하는 businessItemsRender
  const businessItemsRender = businessItems.map(person =>
    <li key={person.id}>{person.name}</li>
  )


  return (
    <div>
      <h2>MAp을 사용한 전체 리스트 렌더링</h2>
      <ul>{listItems}</ul>

      <h2>filter를 사용한 필터링 배열 렌더링</h2>
      <ul>{businessItemsRender}</ul>
    </div>
  );
}
