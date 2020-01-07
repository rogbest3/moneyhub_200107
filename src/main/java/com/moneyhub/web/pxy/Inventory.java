package com.moneyhub.web.pxy;

import java.util.ArrayList;

import org.springframework.stereotype.Component;

@Component
public class Inventory<T> {

	private ArrayList<T> inventory;
	
	public Inventory() {
		inventory = new ArrayList<>();
	}
	
	public void clear() {
		inventory.clear();
	}
	
	public void add(T t) {
		inventory.add(t);
	}
	
	public T get(int i) {
		return inventory.get(i);
	}
	
	public ArrayList<T> get(){
		return inventory;
	}
	
	public int size() {
		return inventory.size();
	}
	
}
