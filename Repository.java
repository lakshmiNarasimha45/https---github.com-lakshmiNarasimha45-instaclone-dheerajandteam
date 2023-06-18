package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Modelclass;

public interface Repository extends JpaRepository<Modelclass, Long>{

	Modelclass findByname(String sname);

}
