package com.service;

import java.util.List;
import java.util.Optional;

//import javax.persistence.EntityManager;
//import javax.persistence.EntityManagerFactory;
//import javax.transaction.Transactional;
//
//import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Food;
import com.repository.Food_Repository;

@Service
public class FoodService {

	@Autowired
    Food_Repository fd ;
	
	public String storeFoodDetails(Food f) {	
		Optional<Food> op = fd.findById(f.getId());
		if(op.isPresent()) {
			return "Food id must be unique";
		}else {
			fd.save(f);
			return "food was saved";
		}
		
	}
 	
	public List<Food> getFoodDetails(){
		return fd.findAll();
	}
}


