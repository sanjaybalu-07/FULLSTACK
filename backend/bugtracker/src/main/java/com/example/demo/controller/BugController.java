package com.example.demo.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Bug;
import com.example.demo.service.BugService;

@RestController
@RequestMapping("/api/bugs")
@CrossOrigin
public class BugController {
	private final BugService s;
	  public BugController(BugService s){this.s=s;}

	  @PostMapping public Bug create(@RequestBody Bug b){ return s.create(b); }
	  @GetMapping public List<Bug> all(){ return s.all(); }

	  @PutMapping("/{id}/assign/{dev}")
	  public Bug assign(@PathVariable Long id,@PathVariable String dev){
	    return s.assign(id,dev);
	  }

	  @GetMapping("/developer/{dev}")
	  public List<Bug> devBugs(@PathVariable String dev){
	    return s.forDeveloper(dev);
	  }

	  @PutMapping("/{id}/fix") public Bug fix(@PathVariable Long id){ return s.fix(id); }
	  @PutMapping("/{id}/close") public Bug close(@PathVariable Long id){ return s.close(id); }

}
