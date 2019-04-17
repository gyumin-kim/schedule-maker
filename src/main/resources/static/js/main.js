const inputElem = document.getElementsByName('search-input')[0];
inputElem.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    let inputText = event.target.value;
    console.log(`'${inputText}' 입력`);

    // 해당 텍스트로 검색한 결과를 하단에 보여주기
    searchCourses(inputText);
  }
});

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
    console.log(course);

    // result: 검색 결과 하나가 들어갈 element
    const result = document.createElement("div");
    result.setAttribute('class', 'result');
    // style 적용
    result.style.color = 'black';
    // result.style.backgroundColor = 'rgba(142,229,147,0.2)';
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
      result.style.backgroundColor = "rgba(142,229,147,0.2)";
    });
    result.addEventListener("mouseleave", () => {
      result.style.backgroundColor = "white";
    });

    resultsDiv.appendChild(result);
  }
};

const callApi = (inputText) => {
  return fetch(`/api/courses?name=${inputText}`)
    .then(res => res.json())
    .catch(err => console.error(err));
};