package com.example.demo.repository;

import com.example.demo.entity.ExpFeeHeadEntity;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface ExpFeeHeadRepository extends CrudRepository<ExpFeeHeadEntity, Long> {
}