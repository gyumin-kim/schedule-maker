package com.example.schedulemaker.repository;

import com.example.schedulemaker.domain.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface CourseRepository extends JpaRepository<Course, Long> {

	Set<Course> findAllByNameContains(String name);
}
