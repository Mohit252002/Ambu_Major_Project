package com.Ambu.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Ambu.Entity.User;
import com.Ambu.Repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;
	@Autowired
	PasswordEncoder passwordEncoder;

	public void save(User userData) {
		User newUser = new User();
		newUser.setUsername(userData.getUsername());
		newUser.setEmail(userData.getEmail());
		newUser.setDob(userData.getDob());
		newUser.setPhoneNo(userData.getPhoneNo());
		newUser.setPassword(passwordEncoder.encode(userData.getPassword()));

		userRepo.save(newUser);

	}

}
