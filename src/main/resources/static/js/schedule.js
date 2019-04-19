/**
 * 모든 경우의 수 계산
 * 'Backtracking' 사용
 */
const updateSchedules = () => {
	const max = selectedCourses.length;
	let allCases = [];

	const dfs2 = (courseIdx, sectionIdx, sections, depth) => {
		if (courseIdx >= selectedCourses.length) {
			return;
		}

		const currSection = selectedCourses[courseIdx].sections[sectionIdx];
		if (containsSamePeriod(sections, currSection)) {
			return;
		}

		sections.push(currSection);
		if (depth !== max && max !== -1) {
			dfs2(courseIdx + 1, 0, sections.slice(0), depth + 1);
			dfs2(courseIdx + 1, 1, sections.slice(0), depth + 1);
			dfs2(courseIdx + 1, 2, sections.slice(0), depth + 1);
		} else {
				allCases.push(sections);
		}
	};

	dfs2(0, 0, [], 1);
	dfs2(0, 1, [], 1);
	dfs2(0, 2, [], 1);

	return allCases;
};

/**
 * sections.period와 currPeriods에 중복되는 요소가 있는지 검사
 * 중복 요소가 존재한다면 true를 리턴
 */
const containsSamePeriod = (sections, currSection) => {
	for (let section of sections) {
		if (section.periods.some(r => currSection.periods.indexOf(r) >= 0)) {
			return true;
		}
	}
	return false;
};

// const hasSameCourse = (sections, currSection) => {
// 	for (let section of sections) {
// 		if (section.course === currSection.course) {
// 			return true;
// 		}
// 	}
// 	return false;
// };