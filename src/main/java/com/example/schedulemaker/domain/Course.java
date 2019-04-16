package com.example.schedulemaker.domain;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * @author Gyumin Kim
 * @since 2019-04-15
 */
@Getter
@Setter
@JsonIdentityInfo(
		generator = ObjectIdGenerators.PropertyGenerator.class,
		property = "id")
@Entity
@Table(name = "COURSE")
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, insertable = false, updatable = false, length = 100)
	private String name;

	@Column(nullable = false, insertable = false, updatable = false)
	private Integer credit;

	// Section: 같은 course에 대한 서로 다른 반(class)을 의미
	@OneToMany(mappedBy = "course")
	private Set<Section> sections = new HashSet<>();
}
