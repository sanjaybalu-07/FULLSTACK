package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class AuthService {
	private final UserRepository repo;

    public AuthService(UserRepository repo) {
        this.repo = repo;
    }

    public User createUser(User user) {
        return repo.save(user);
    }
    
    public User login(String username, String password) {
        return repo.findByUsernameAndPassword(username, password)
                   .orElse(null);
    }

    public List<User> getAllUsers() {
        return repo.findAll();
    }
}
