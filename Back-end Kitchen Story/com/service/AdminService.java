package com.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Admin;
import com.repository.Admin_Repository;

@Service
public class AdminService {

	@Autowired
	Admin_Repository ar;
	
	@Transactional
	public String checkAdmin(Admin ad) {
	try {
			
			
		Optional<Admin> op =ar.findById(ad.getUsername());
		if(op.isPresent()) {
			Admin yo = op.get();
			System.out.println("Password from the database: "+"'"+yo.getPassword()+"'");
			System.out.println("Password from the client: "+"'"+ad.getPassword()+"'");
             
			if(yo.getPassword().equals(ad.getPassword())) {
				return "Proceed shit";
			}else {
				return "invalid password";
			}
		}else {
			return "Invalid Login Credentials";
		}
		
		
		
	 }catch(Exception e) {
          System.out.println(e);
          e.printStackTrace();
          return "Something was wrong";
	}
	}
	
	
	public String StoreAdmin(Admin ad) {
		Optional<Admin> op= ar.findById(ad.getUsername());
		if(op.isPresent()) {
			return "Username already exists";
		}else {
			ar.save(ad);
			return "Account with credentials created";
		}
		
	}
	
	public String UpdateAdmin(Admin ad,String Password) {
		Optional<Admin> op= ar.findById(ad.getUsername());
		if(op.isPresent()) {
			
			Admin admin = op.get();
			if(admin.getPassword().equals(Password)) {
				return "Your new password cannot be the same as the existing password";
			}else {
			admin.setPassword(Password);
			ar.saveAndFlush(admin);
			}
			return "Admin account was updated";
		}else {
			return "Admin account with the username provided does not exist";
		}
	}
}
