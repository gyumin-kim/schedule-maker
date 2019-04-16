package com.example.schedulemaker.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * @author Gyumin Kim
 * @since 2019-04-16
 */
@Getter
@Setter
@Entity
@Table(name = "SECTION")
public class Section {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "course_id")
	private Course course;

	@ElementCollection
	@CollectionTable(name = "PERIODS",
			joinColumns = @JoinColumn(name = "SECTION_ID"))
	@Column(name = "DAY_PERIOD")
	private Set<String> periods = new HashSet<>();
}
