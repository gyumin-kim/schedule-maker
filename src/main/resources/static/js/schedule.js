let max;

// TODO: 모든 경우의 수 계산
/**
 * 1. `selectedCourse`에 존재하는 각각의 course → `sections[i].periods[j]`를 스캔한다. (반복)
 * (ex. 컴구.sections[i].periods[j], 운체.sections[i].periods[j], ... 등을 일일이 비교)
 * 		1. 각 periods를 담아 놓을 배열(`periodsArr`)을 하나 만든다.
 * 		2. `periodsArr`에 중복되는 periods 값이 있는지 체크한다.
 * 			1. 중복되는 값이 있다면, 해당 loop을 break하고, 다음 반복으로 진행한다.
 * 			2. 중복되는 값이 없다면, `periodsArr`에 해당 period를 push한다.
 * 				(시간표에 해당 course의 정보를 표시해야므로, course를 담을 배열도 추가로 필요하다)
 * 		3. 한 번의 순회를 모두 마쳤다면, course 정보가 담긴 배열의 요소들을 시간표들이 담길 배열
 * 			(→ `schedulesArr`)에 push한다.
 * 2. `schedulesArr`에 담긴 요소들에 대해 반복
 * 		1. 시간표 하나를 담을 html element를 만든다.
 * 		2. `schedulesArr` 요소에 담긴 정보를 활용한다.
 */

/**
 * 'Backtracking'으로 풀자.
 */
const updateSchedules = () => {
	console.log(selectedCourses);
	max = selectedCourses.length;

	// schedules element 내부 삭제
	let schedulesDiv = document.getElementById('schedules');
	while (schedulesDiv.firstChild) {
		schedulesDiv.removeChild(schedulesDiv.firstChild);
	}

	let returnedPeriods = dfs(-1, 0, 0, []);

	// TODO: returnedPeriods를 시간표 UI에 삽입하는 작업
};

const dfs = (m, n, depth, periods) => {
	// base case
	if (depth === max) {
		return periods;
	}

	// ex) currPeriods: ['B4', 'B5', 'E2', 'E3']
	let currPeriods = selectedCourses[m].sections[n].periods;
	if (!containsSameElement(periods, currPeriods)) {
		periods.push(currPeriods);
		dfs(m+1, n, depth+1, periods);
	}
	else {
		if (n === 2) {

		} else {

		}
		dfs(m-1, );
	}
};

/**
 * periods와 currPeriods에 중복되는 요소가 있는지 검사
 * 중복 요소가 존재한다면 true를 리턴
 */
const containsSameElement = (periods, currPeriods) => {


};












// // 모든 경우의 수 계산
// const calculate = () => {
//
// };