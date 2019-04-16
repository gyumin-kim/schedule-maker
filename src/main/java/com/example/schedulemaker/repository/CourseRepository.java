package com.example.schedulemaker.repository;

import com.example.schedulemaker.domain.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
