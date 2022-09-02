package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Food;
import com.service.FoodService;

@RestController
@RequestMapping("food")
@CrossOrigin
public class FoodController {
	
	@Autowired
	FoodService fs;
	
	@PostMapping(value="StoreFood",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String storeFood(@RequestBody Food fd) {	
		return fs.storeFoodDetails(fd);
	}
	
	@GetMapping(value="FindAll",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Food> findAllFood(){
		return fs.getFoodDetails();
	}
}
