package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Modelclass;
import com.example.demo.repository.Repository;

@RestController
@CrossOrigin("http://localhost:3001/")
public class Controllerclass {
	@Autowired
	Repository repo;
	
	@PostMapping("/savedata")
	public String save(@RequestBody Modelclass s) {
		String sname=s.getName();
		Modelclass s1=repo.findByname(sname);
		if(s1==null) {
			repo.save(s);
			return "added";
		}
		else {
			return "exist user";
			
		}
		
	}
	@PostMapping("/checkdata/{name}/{password}")
	public String checkdata(@PathVariable String name,@PathVariable String password) {
		Modelclass m=repo.findByname(name);
		if(m==null) {
			return "User not found";
		}
		else {
			if(m.getPassword().equals(password)) {
				return "Succsuss";
			}
			else {
				return "Invalid password";
			}
		}
	}
}
	
	


