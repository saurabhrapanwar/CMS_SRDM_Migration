package com.example.demo.service;

import java.time.LocalDate;
import java.time.LocalTime;
import org.springframework.data.repository.CrudRepository;
import com.example.demo.entity.ExpFeeHeadEntity;
import com.example.demo.repository.ExpFeeHeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.ArrayList;
import java.util.List;

@Service
public class ExpFeeHeadService {

    @Autowired
    private ExpFeeHeadRepository expFeeHeadRepository;

    // Creating a new ExpFeeHead entry and setting defaults
    public ExpFeeHeadEntity createExpFeeHead(ExpFeeHeadEntity expFeeHeadEntity) {
        // Set static fields if not already set
        expFeeHeadEntity.setbyUser("YASH"); 
        expFeeHeadEntity.setDate(LocalDate.now().toString());
        expFeeHeadEntity.setTime(LocalTime.now().toString());

        return expFeeHeadRepository.save(expFeeHeadEntity);
    }

    public ExpFeeHeadEntity save(ExpFeeHeadEntity expFeeHeadEntity) {
        // Set static fields if not already set
        expFeeHeadEntity.setbyUser("YASH"); 
        expFeeHeadEntity.setDate(LocalDate.now().toString());
        expFeeHeadEntity.setTime(LocalTime.now().toString());

        return expFeeHeadRepository.save(expFeeHeadEntity);
    }

    public List<ExpFeeHeadEntity> getAll() {
        Iterable<ExpFeeHeadEntity> iterable = expFeeHeadRepository.findAll();
        List<ExpFeeHeadEntity> feeHeads = new ArrayList<>();
        iterable.forEach(feeHeads::add);  // Convert Iterable to List
        return feeHeads;
    }

    public ExpFeeHeadEntity getById(long id) {
        return expFeeHeadRepository.findById(id).orElse(null);  // Use long instead of int
    }

    public void deleteById(long id) {
        expFeeHeadRepository.deleteById(id);
    }

    public ExpFeeHeadEntity updateExpFeeHead(Long id, ExpFeeHeadEntity updatedFeeHead) {
        Optional<ExpFeeHeadEntity> existingFeeHeadOpt = expFeeHeadRepository.findById(id);
        
        if (existingFeeHeadOpt.isPresent()) {
            ExpFeeHeadEntity existingFeeHead = existingFeeHeadOpt.get();
            
            // Set the new values to the existing entity (overwriting old values)
            existingFeeHead.setfeeHead(updatedFeeHead.getfeeHead());
            existingFeeHead.setAmount(updatedFeeHead.getAmount());
            existingFeeHead.setbyUser("YASH");  // Setting static user name
            existingFeeHead.setDate(LocalDate.now().toString());  // Current date
            existingFeeHead.setTime(LocalTime.now().toString());  // Current time
            
            return expFeeHeadRepository.save(existingFeeHead);
        } else {
            throw new RuntimeException("Fee head with ID " + id + " not found.");
        }
    }

}
