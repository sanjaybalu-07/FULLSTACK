package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "bugs")
public class Bug {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String title;
	    private String severity;
	    private String status;

	    @Column(name="assigned_to")
	    private String assignedTo;
	    
	    public Bug(){}
	    public Long getId(){
	    	return id;
	    }
	    public String getTitle() { 
	    	return title; 
	    }
	    public String getSeverity() { 
	    	return severity; 
	    }
	    public String getStatus() { 
	    	return status; 
	    }
	    public String getAssignedTo(){
	    	return assignedTo;
	    }
	    
	    public void setId(Long id){
	    	this.id=id;
	    }
	    public void setTitle(String title) { 
	    	this.title = title; 
	    }
	    public void setSeverity(String severity) { 
	    	this.severity = severity; 
	    }
	    public void setStatus(String status) { 
	    	this.status = status; 
	    }
	    public void setAssignedTo(String assignedTo){
	    	this.assignedTo=assignedTo;
	    }
}
