package com.example.demo.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.example.demo.model.Bug;
import com.example.demo.repository.BugRepository;

@Service
public class BugService {
	private final BugRepository repo;
	  public BugService(BugRepository r){this.repo=r;}

	  public Bug create(Bug b){
	    b.setStatus("NEW");
	    return repo.save(b);
	  }

	  public List<Bug> all(){ return repo.findAll(); }

	  public Bug assign(Long id,String dev){
	    Bug b=repo.findById(id).orElseThrow();
	    b.setAssignedTo(dev);
	    b.setStatus("IN PROGRESS");
	    return repo.save(b);
	  }

	  public List<Bug> forDeveloper(String dev){
	    return repo.findByAssignedTo(dev);
	  }

	  public Bug fix(Long id){
	    Bug b=repo.findById(id).orElseThrow();
	    b.setStatus("FIXED");
	    return repo.save(b);
	  }

	  public Bug close(Long id){
	    Bug b=repo.findById(id).orElseThrow();
	    b.setStatus("CLOSED");
	    return repo.save(b);
	  }
}
