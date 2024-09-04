//날씨 정보를 가져오는 비동기 함수

const city = "Seoul";
// >> input창에서 입력받을 경우 capitalize 사용
// ex)london,tokyo

const apikey = "e82646a63590bae0b1a5a54022618c30";
const lang = "kr";

const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}&units=metric`;

//>> 제공된 api를 사용하여 지역의 이름을 바탕으로 해당 날씨에 대한 데이터를 lang속성을 지정하여 원하는 언어로 호출

async function getWeatherData() {
    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        //api
        const data = await response.json();
        console.log(data);
        console.log(data.main.temp);
    } catch (error) {
        console.error('Error:', error);
    }
}
getWeatherData();



async function fetchWeather(){
  try{
    //Weather api의 데이터를 요청하는 함수 fetch
    const response = await fetch(`e82646a63590bae0b1a5a54022618c30`);

    //응답이 성공적이지 않은 경우 에러 발생
    if(!response.ok){
      throw new Error('failde to fetch weather data');
    }

    //응답된 데이터를 json형식으로 변환하여 저장
    const data = await response.json();

    //날씨 ui를 업데이트 하는 함수에 데이터 전달
    updateWeatherUI(data);

  }catch(error){
    console.error('error fetching weather data:',error);
  }
}

function updateWeatherUI(data){
  const weatherInfo = `
  <p>온도:${data.current.temp_c}</p>
`;
document.getElementById('weather-info').innerHTML = weatherInfo;
}


document.addEventListener('DOMContentLoaded', (event) => {
  const toggleButton = document.getElementById('toggle');
  const body = document.body;

  const savedMode = localStorage.getItem('darkMode');
  if (savedMode) {
      body.classList.add(savedMode);
  }

  toggleButton.addEventListener('click', () => {
      if (body.classList.contains('dark-mode')) {
          body.classList.remove('dark-mode');
          body.classList.add('light-mode');
          localStorage.setItem('darkMode', 'light-mode');
      } else {
          body.classList.remove('light-mode');
          body.classList.add('dark-mode');
          localStorage.setItem('darkMode', 'dark-mode');
      }
  });
});