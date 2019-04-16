package com.example.schedulemaker.controller.api;

import com.example.schedulemaker.domain.Course;
import com.example.schedulemaker.service.CourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Gyumin Kim
 * @since 2019-04-15
 */
@RestController
@RequestMapping("/api")
public class MainRestController {

	private CourseService courseService;

	public MainRestController(CourseService courseService) {
		this.courseService = courseService;
	}

	/**
	 * 대학교 고유번호를 입력 받아, 해당 대학교의 모든 Course의 List를 리턴한다.
//	 * @param univNo 대학교 고유번호
	 * @return {@param univNo}에 해당하는 대학교의 모든 Course의 List
	 */
//	@GetMapping("/courses/{univNo}")
//	public ResponseEntity<?> allCourses(@PathVariable("univNo") Long univNo) {
//		List<Course> courses = courseService.getCoursesByUnivNo(univNo);
	@GetMapping("/courses")
	public ResponseEntity<?> allCourses() {
		List<Course> courses = courseService.getAllCourses();
		if (courses != null) {
			return ResponseEntity.ok(courses);
		}
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}
}
