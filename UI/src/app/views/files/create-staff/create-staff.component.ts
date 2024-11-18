import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StaffService } from './staff.service';
import { HttpClientModule } from '@angular/common/http';
import { GridModule, CardModule, FormModule, ButtonModule } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

interface Staff {
  id: number | undefined;
  employeeName: string;
  designation: string;
  professorType: string;
  subject: string;
  pay: string;
  salaryPayBand: string;
  gp: string;
  da: string;
  hra: string;
  va: string;
  ta: string;
  otherAllowance: string;
}

@Component({
  selector: 'app-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.scss'],
  providers: [StaffService],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    GridModule,
    CardModule,
    FormModule,
    ButtonModule,
    FormsModule
  ]
})
export class CreateStaffComponent implements OnInit {

  staffForm: Staff = {
    id: undefined,
    employeeName: '',
    designation: '',
    professorType: '',
    subject: '',
    pay: '',
    salaryPayBand: '',
    gp: '',
    da: '',
    hra: '',
    va: '',
    ta: '',
    otherAllowance: ''
  };

  staffList: Staff[] = [];
  customStylesValidated: boolean = false;
  isEditMode: boolean = false; // Track if it's edit mode

  designations = [
    'Principal', 'Phy. Dir.', 'Librarian', 'Asso. Prof.', 'Asst. Prof.', 'OS',
    'Head Clerk', 'Sr. Clerk', 'Jr. Clerk', 'Lib. Clerk', 'Lib. Atten.',
    'Peon', 'Non-Teaching Staff', 'Lecturer'
  ];

  professorTypes = ['Jr Professor', 'Sr Professor', 'CHB lecturer'];

  subjects = [
    'NA', 'English', 'Hindi', 'Marathi', 'Botany', 'Physics', 'Mathematics',
    'Chesmistry', 'History', 'Comm.', 'Com.', 'Sociology', 'Comp.Sci',
    'Economic', 'Pol.Science', 'Lib.scienc', 'Zoology'
  ];

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    this.fetchStaffList();
  }

  // Fetch staff list
  fetchStaffList() {
    this.staffService.getAllStaff().subscribe(
      response => {
        this.staffList = response;
      },
      error => {
        console.error('Error fetching staff list', error);
      }
    );
  }

  // Submit the form (Create or update staff)
  onSubmit1(form: NgForm) {
    this.customStylesValidated = true;
    if (form.valid) {
      if (this.isEditMode) {
        // Update staff
        this.staffService.updateStaff(this.staffForm.id!, this.staffForm).subscribe(
          response => {
            Swal.fire('Success', 'Staff updated successfully!', 'success');
            this.fetchStaffList();
            this.onReset1();
          },
          error => {
            Swal.fire('Error', 'Failed to update staff.', 'error');
          }
        );
      } else {
        // Add new staff
        this.staffService.addStaff(this.staffForm).subscribe(
          response => {
            Swal.fire('Success', 'Staff added successfully!', 'success');
            this.fetchStaffList();
            this.onReset1();
          },
          error => {
            Swal.fire('Error', 'Failed to add staff.', 'error');
          }
        );
      }
    }
  }

  // Reset form
  onReset1() {
    this.staffForm = {
      id: undefined,
      employeeName: '',
      designation: '',
      professorType: '',
      subject: '',
      pay: '',
      salaryPayBand: '',
      gp: '',
      da: '',
      hra: '',
      va: '',
      ta: '',
      otherAllowance: ''
    };
    this.customStylesValidated = false;
    this.isEditMode = false;
  }

  // Edit staff
  editStaff(index: number) {
    const staff = this.staffList[index];
    this.staffForm = { ...staff }; // Copy selected staff data into form
    this.isEditMode = true; // Set edit mode
  }

  // Delete staff
  deleteStaff(index: number) {
    const staffId = this.staffList[index].id;
    if (staffId !== undefined) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.staffService.deleteStaff(staffId).subscribe(
            response => {
              Swal.fire('Deleted!', 'Staff has been deleted.', 'success');
              this.fetchStaffList();
            },
            error => {
              Swal.fire('Error', 'Failed to delete staff.', 'error');
            }
          );
        }
      });
    } else {
      Swal.fire('Error', 'Invalid staff ID.', 'error');
    }
  }

  // Validation for DA and HRA percentages
  validatePercentage(value: string): boolean {
    const num = parseFloat(value);
    return !isNaN(num) && num >= 0 && num <= 100;
  }

  // Validation for numeric fields
  validateNumeric(value: string): boolean {
    return /^\d+$/.test(value);
  }

  // Validation for employee name (letters only, spaces, and special characters allowed)
  validateEmployeeName(value: string): boolean {
    return /^[a-zA-Z\s]+$/.test(value);
  }
}
