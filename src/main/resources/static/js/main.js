// 선택한 과목들의 목록
let selectedCourses = [];
const selectedCoursesDiv = document.querySelector('#selected-courses');

const inputElem = document.getElementsByName('search-input')[0];
inputElem.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    let inputText = event.target.value;

    // 해당 텍스트로 검색한 결과를 하단에 보여주기
    searchCourses(inputText);
  }
});

// input창 focusout될 경우 검색 결과 사라짐
// inputElem.addEventListener('focusout', () => {
//   let searchResult = document.querySelector('#search-result');
//   while (searchResult.firstChild) {
//     searchResult.removeChild(searchResult.firstChild);
//   }
// });

// 해당 텍스트로 검색한 결과를 하단에 보여주기
const searchCourses = async (inputText) => {
  const courses = await callApi(inputText);
  if (courses === null) {
    console.log('courses null')
  }

  // 검색 결과 전체가 들어갈 element
  const resultsDiv = document.getElementById('search-result');
  // 기존 결과 지우기
  resultsDiv.innerHTML = '';

  // 검색 결과 보여주기
  for (let course of courses) {
    ////// console.log(course);

    // result: 검색 결과 하나가 들어갈 element
    const result = document.createElement("div");
    result.setAttribute('class', 'result');
    // style 적용
    result.style.color = 'black';
    result.style.backgroundColor = 'white';
    result.style.width = '65%';
    result.style.height = '40px';
    result.style.border = '1px solid grey';
    result.style.margin = '0 auto 8px auto';
    result.style.cursor = 'pointer';
    result.style.lineHeight = '44px';

    const courseName = document.createElement("p");
    courseName.innerText = course.name;
    result.innerHTML = courseName.innerHTML;

    // hover 속성
    result.addEventListener("mouseover", () => {
      result.style.backgroundColor = "rgba(192,229,196,0.16)";
    });
    result.addEventListener("mouseleave", () => {
      result.style.backgroundColor = "white";
    });

    // 클릭 시 '선택한 과목 목록'에 추가
    result.addEventListener('click', () => {
      if (!selectedCourses.includes(course)) {
        updateSelectedCourses(course);
        // selectedCourses.push(course);
      }
    });

    resultsDiv.appendChild(result);
  }
};

const callApi = (inputText) => {
  return fetch(`/api/courses?name=${inputText}`)
    .then(res => res.json())
    .catch(err => console.error(err));
};

// 검색 결과로 나타난 과목 선택 시, 해당 과목을 selectedCourses에 추가하고 view에 반영
const updateSelectedCourses = (course) => {
  selectedCourses.push(course);

  // 한 course가 들어갈 작은 div
	const courseDiv = document.createElement('div');
	courseDiv.style.height = '40px';
	courseDiv.style.borderRadius = '5px';
	courseDiv.style.backgroundColor = 'rgba(190,220,229,0.36)';
	courseDiv.style.marginRight = '20px';
	courseDiv.style.marginBottom = '10px';
	courseDiv.style.padding = '0 12px';
	courseDiv.style.fontSize = '14px';

  // div에 course.name을 삽입
	const courseDivSpan = document.createElement('span');
	courseDivSpan.style.marginRight = '10px';
	courseDivSpan.style.lineHeight = '42px';
	courseDivSpan.innerText = course.name;
	courseDiv.appendChild(courseDivSpan);

  // 'x' 버튼 클릭시 '선택한 과목 목록'에서 제거
  const xElem = document.createElement('span');
  xElem.innerText = 'X';
  xElem.style.cursor = 'pointer';
  xElem.addEventListener('click', () => {
    let index = selectedCourses.indexOf(course);
    if (index > -1) {
      selectedCourses.splice(index, 1);
    }
    courseDiv.parentNode.removeChild(courseDiv);
  });
  courseDiv.appendChild(xElem);

  // selectedCoursesDiv 내에 div를 삽입
	selectedCoursesDiv.appendChild(courseDiv);
};

// TODO: 모든 경우의 수 계산
// selectedCourses에 들어있는 모든 course들의 sections > periods에 근거하여