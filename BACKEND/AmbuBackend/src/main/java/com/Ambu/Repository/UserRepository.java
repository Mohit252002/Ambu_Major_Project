package com.Ambu.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Ambu.Entity.User;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
