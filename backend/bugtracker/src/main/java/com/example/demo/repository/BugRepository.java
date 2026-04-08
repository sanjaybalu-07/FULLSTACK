package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Bug;

public interface BugRepository extends JpaRepository<Bug, Long> {
	List<Bug> findByAssignedTo(String assignedTo);
}
