package com.example.demo.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.demo.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByUsernameAndPassword(String username, String password);

    // Check if username already exists
    Optional<User> findByUsername(String username);

    // Get users by role (optional but useful)
    List<User> findByRole(String role);
}
