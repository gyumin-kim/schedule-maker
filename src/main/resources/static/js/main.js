const inputElem = document.getElementsByName('search-input')[0];
inputElem.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    let inputText = event.target.value;
    console.log(`${inputText} 입력`);

    // 해당 텍스트로 검색 작업하는 함수
    searchCourses(inputText);
  }
});

const searchCourses = async (inputText) => {
  const courses = await callApi(inputText);
  if (courses === null) {
    console.log('courses null')
  }
  console.log(courses)
};

const callApi = (inputText) => {
  return fetch(`/api/courses?name=${inputText}`)
    .then(res => res.json())
    .catch(err => console.error(err))
};