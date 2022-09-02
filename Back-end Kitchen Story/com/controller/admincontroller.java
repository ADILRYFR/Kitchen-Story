package com.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Admin;
import com.service.AdminService;

@RestController
@RequestMapping("admin")
@CrossOrigin
public class admincontroller {
	
	@Autowired
	AdminService as;
	
	@PostMapping(value="checkAdmin", consumes=MediaType.APPLICATION_JSON_VALUE)
	public String checkAdmin(@RequestBody Admin ad) {
		
		return as.checkAdmin(ad);
		
	}
	
	
	
	@PostMapping(value="storeAdmin",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String storeAdmin(@RequestBody Admin ad) {
		return as.StoreAdmin(ad);
	}
	
	@PostMapping(value="updateAdmin/{password}",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String updateAdmin(@RequestBody Admin ad,@PathVariable("password") String Pass) {
		return as.UpdateAdmin(ad,Pass);
	}

}
