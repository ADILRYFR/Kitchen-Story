package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="food")
public class Food {
	
	@Id
	private int id;
	private String name;
	private float price;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Food [id=" + id + ", name=" + name + ", price=" + price + "]";
	}
	public Food() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
