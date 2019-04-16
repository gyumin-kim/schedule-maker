package com.example.schedulemaker.controller.api;

import com.example.schedulemaker.domain.Course;
import com.example.schedulemaker.service.CourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

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
	 * 모든 Course의 List를 리턴한다.
	 * @return 모든 Course의 List
	 */
	@GetMapping("/courses/all")
	public ResponseEntity<?> allCourses() {
		List<Course> courses = courseService.getAllCourses();
		if (courses != null) {
			return ResponseEntity.ok(courses);
		}
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}

	/**
	 * 수업 이름에 해당하는 검색어를 입력 받아, 수업 이름에 해당 검색어가 포함되어 있는 수업의 목록을 리턴
	 * @param name 수업 이름
	 * @return 해당 수업 이름이 포함된 수업의 목록
	 */
	@GetMapping("/courses")
	public ResponseEntity<?> coursesByName(@RequestParam("name") String name) {
		Set<Course> courses = courseService.getCoursesByNameContains(name);
		if (courses != null) {
			return ResponseEntity.ok(courses);
		}
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}
}
