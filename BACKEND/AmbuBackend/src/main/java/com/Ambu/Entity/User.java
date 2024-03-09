package com.Ambu.Entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "UserTable")
public class User {
	@Id
	@Column(name = "UserId")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "customSeq")
	@SequenceGenerator(name = "customSeq", sequenceName = "UserIdSeq", allocationSize = 1)
	private int userId;

	@Column(name = "Username")
	private String username;

	@Column(name = "Email")
	private String email;

	@Column(name = "PhoneNumber")
	private long phoneNo;

	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name = "DOB")
	private Date dob;

	@Column(name = "password")
	private String password;

	// getters and setters

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", email=" + email + ", phoneNo=" + phoneNo
				+ ", dob=" + dob + ", password=" + password + "]";
	}
	
	

}
