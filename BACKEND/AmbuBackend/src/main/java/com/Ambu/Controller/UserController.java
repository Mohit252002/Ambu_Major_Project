package com.Ambu.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Ambu.Entity.User;
import com.Ambu.Service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin
@RequestMapping("/RegisterUser")
public class UserController {
	
	ObjectMapper objMapper;

	@Autowired
	UserService userService;

	@PostMapping("/save")
	public ResponseEntity<String> save(@RequestBody User userData) throws JsonProcessingException {

		userService.save(userData);
		String respJson = objMapper.writeValueAsString(userData);
		
		return ResponseEntity.status(HttpStatus.OK).body(respJson);

	}

}
