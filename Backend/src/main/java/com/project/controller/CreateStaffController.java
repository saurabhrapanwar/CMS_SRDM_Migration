package com.example.demo.controller;

import com.example.demo.entity.CreateStaffEntity;
import com.example.demo.service.CreateStaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.repository.CreateStaffRepository;

import java.util.List;

@RestController
@RequestMapping("/api/create-staff")
@CrossOrigin(origins = "*")  // Allow all origins to access this API
public class CreateStaffController {

    @Autowired
    private CreateStaffService createStaffService;

    @Autowired
    private CreateStaffRepository staffRepository;
    
    @PostMapping
    public ResponseEntity<?> createStaff(@RequestBody CreateStaffEntity staff) {
        System.out.println("Received Staff Data: " + staff);  // Log to verify what the backend is receiving
        if (staff.getEmployeeName() == null) {
            System.out.println("Employee Name is NULL!");
        }
        staff.setEmp_date("2024-11-14");
        staff.setEmp_time("14:30");
        staff.setEmp_by_user("YASH");
        CreateStaffEntity savedStaff = staffRepository.save(staff);
        return ResponseEntity.ok(savedStaff);
    }


    @GetMapping
    public List<CreateStaffEntity> getAll() {
        return createStaffService.getAll();
    }

    @GetMapping("/{id}")
    public CreateStaffEntity getById(@PathVariable Long id) {
        return createStaffService.getById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CreateStaffEntity> updateStaff(@PathVariable Long id, @RequestBody CreateStaffEntity updatedStaff) {
        CreateStaffEntity updatedEntity = createStaffService.updateStaff(id, updatedStaff);
        return new ResponseEntity<>(updatedEntity, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        createStaffService.deleteById(id);
    }
}
