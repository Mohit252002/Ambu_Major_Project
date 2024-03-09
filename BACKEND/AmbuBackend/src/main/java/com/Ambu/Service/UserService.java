package com.Ambu.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ambu.Entity.User;
import com.Ambu.Repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;

	public void save(User userData) {
		userRepo.save(userData);
		
	}
	
	
}
