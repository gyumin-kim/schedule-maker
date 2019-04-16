package com.example.schedulemaker.service;

import com.example.schedulemaker.domain.Course;
import com.example.schedulemaker.repository.CourseRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

/**
 * @author Gyumin Kim
 * @since 2019-04-16
 */
@Service
public class CourseService {

	private CourseRepository courseRepository;

	public CourseService(CourseRepository courseRepository) {
		this.courseRepository = courseRepository;
	}

	@Transactional(readOnly = true)
	public List<Course> getAllCourses() {
		return courseRepository.findAll();
	}

	@Transactional(readOnly = true)
	public Set<Course> getCoursesByNameContains(String name) {
		return courseRepository.findAllByNameContains(name);
	}
}
