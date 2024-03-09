package com.Ambu.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Ambu.Entity.User;
import com.Ambu.Service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/RegisterUser")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/save")
	public ResponseEntity<String> save(@RequestBody User userData) {

		userService.save(userData);
		return ResponseEntity.status(HttpStatus.OK).body(userData.toString());

	}

}
