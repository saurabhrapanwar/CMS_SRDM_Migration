package com.example.demo.service;

import com.example.demo.entity.CreateStaffEntity;
import com.example.demo.repository.CreateStaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CreateStaffService {

    @Autowired
    private CreateStaffRepository createStaffRepository;

    // Creating a new staff and setting defaults
    public CreateStaffEntity createStaff(CreateStaffEntity createStaffEntity) {
        // Set static fields if not already set
        createStaffEntity.setEmp_by_user("YASH");  // Default user name
        createStaffEntity.setEmp_date(LocalDate.now().toString());  // Current date
        createStaffEntity.setEmp_time(LocalTime.now().toString());  // Current time

        return createStaffRepository.save(createStaffEntity);
    }

    public CreateStaffEntity save(CreateStaffEntity createStaffEntity) {
        // Set static fields if not already set
        createStaffEntity.setEmp_by_user("YASH");  // Default user name
        createStaffEntity.setEmp_date(LocalDate.now().toString());  // Current date
        createStaffEntity.setEmp_time(LocalTime.now().toString());  // Current time

        return createStaffRepository.save(createStaffEntity);
    }

    public List<CreateStaffEntity> getAll() {
        Iterable<CreateStaffEntity> iterable = createStaffRepository.findAll();
        List<CreateStaffEntity> staffList = new ArrayList<>();
        
        // Convert Iterable to List
        iterable.forEach(staffList::add);
        
        return staffList;
    }


    public CreateStaffEntity getById(Long id) {
        return createStaffRepository.findById(id).orElse(null);
    }

    public void deleteById(Long id) {
        createStaffRepository.deleteById(id);
    }

    public CreateStaffEntity updateStaff(Long id, CreateStaffEntity updatedStaff) {
        Optional<CreateStaffEntity> existingStaffOpt = createStaffRepository.findById(id);
        
        if (existingStaffOpt.isPresent()) {
            CreateStaffEntity existingStaff = existingStaffOpt.get();
            
            // Set new values for the fields
            existingStaff.setEmployeeName(updatedStaff.getEmployeeName());
            existingStaff.setDesignation(updatedStaff.getDesignation());
            existingStaff.setProfessorType(updatedStaff.getProfessorType());
            existingStaff.setSubject(updatedStaff.getSubject());
            existingStaff.setPay(updatedStaff.getPay());
            existingStaff.setSalaryPayBand(updatedStaff.getSalaryPayBand());
            existingStaff.setGp(updatedStaff.getGp());
            existingStaff.setDa(updatedStaff.getDa());
            existingStaff.setHra(updatedStaff.getHra());
            existingStaff.setVa(updatedStaff.getVa());
            existingStaff.setTa(updatedStaff.getTa());
            existingStaff.setOtherAllowance(updatedStaff.getOtherAllowance());
            
            // Set default values for the static fields
            existingStaff.setEmp_by_user("YASH");  // Default user name
            existingStaff.setEmp_date(LocalDate.now().toString());  // Current date
            existingStaff.setEmp_time(LocalTime.now().toString());  // Current time
            
            return createStaffRepository.save(existingStaff);
        } else {
            throw new RuntimeException("Staff with ID " + id + " not found.");
        }
    }


}
