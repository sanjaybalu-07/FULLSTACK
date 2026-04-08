package com.example.demo.controller;
import java.util.List;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Project;
import com.example.demo.model.User;
import com.example.demo.repository.ProjectRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.AuthService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
	private final UserRepository userRepo;
    private final ProjectRepository projectRepo;

    public AdminController(UserRepository userRepo, ProjectRepository projectRepo) {
        this.userRepo = userRepo;
        this.projectRepo = projectRepo;
    }

    
    @PostMapping("/create-user")
    public User createUser(@RequestBody User user) {
        return userRepo.save(user);
    }

    @GetMapping("/developers")
    public List<User> getDevelopers() {
        return userRepo.findByRole("DEVELOPER");
    }
    
    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepo.findAll();
    }

    
    @PostMapping("/create-project")
    public Project createProject(@RequestBody Project project) {
        return projectRepo.save(project);
    }
    

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectRepo.findAll();
    }
}
