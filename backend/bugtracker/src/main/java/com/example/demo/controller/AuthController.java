package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import com.example.demo.model.User;
import com.example.demo.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {
	
	private final AuthService s;
	  public AuthController(AuthService s){this.s=s;}

	  @PostMapping("/login")
	  public ResponseEntity<?> login(@RequestBody User u){
	    User found=s.login(u.getUsername(),u.getPassword());
	    return (found==null)
	      ? ResponseEntity.status(401).body("Invalid")
	      : ResponseEntity.ok(found);
	  }
}
