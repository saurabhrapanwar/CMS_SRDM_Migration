import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpFeeHeadService, ExpFeeHeadEntity } from './exp-fee-head.service';
import { HttpClientModule } from '@angular/common/http';
import { GridModule, CardModule, FormModule, ButtonModule } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exp-fee-head',
  templateUrl: './exp-fee-head.component.html',
  styleUrls: ['./exp-fee-head.component.scss'],
  standalone: true,
  providers: [ExpFeeHeadService],
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
export class ExpFeeHeadComponent implements OnInit {
  formValue = {
    id: undefined as number | undefined,
    fee_head: '',
    amount: 0
  };

  customStylesValidated = false;
  feeHeads: ExpFeeHeadEntity[] = [];
  isEditMode = false;

  constructor(private expFeeHeadService: ExpFeeHeadService) {}

  ngOnInit(): void {
    this.fetchFeeHeads();
  }

  onSubmit11(form: NgForm) {
    this.customStylesValidated = true;
    if (form.valid) {
      const data: ExpFeeHeadEntity = {
        feeHead: this.formValue.fee_head,
        amount: this.formValue.amount,
        by_user: 'YASH',
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString(),
        id: this.formValue.id
      };

      if (this.isEditMode) {
        this.expFeeHeadService.updateExpFeeHead(data.id!, data).subscribe(
          () => {
            Swal.fire('Success', 'Fee Head updated successfully!', 'success');
            this.fetchFeeHeads();
            this.onReset1();
          },
          error => Swal.fire('Error', 'Failed to update Fee Head.', 'error')
        );
      } else {
        this.expFeeHeadService.addExpFeeHead(data).subscribe(
          () => {
            Swal.fire('Success', 'Fee Head added successfully!', 'success');
            this.fetchFeeHeads();
            this.onReset1();
          },
          error => Swal.fire('Error', 'Failed to add Fee Head.', 'error')
        );
      }
    }
  }

  fetchFeeHeads() {
    this.expFeeHeadService.getAllExpFeeHeads().subscribe(
      response => {
        this.feeHeads = response;
      },
      error => {
        Swal.fire('Error', 'Failed to fetch Fee Heads.', 'error');
      }
    );
  }

  editFeeHead(index: number) {
    const feeHead = this.feeHeads[index];
    this.formValue.id = feeHead.id;
    this.formValue.fee_head = feeHead.feeHead;
    this.formValue.amount = feeHead.amount;
    this.isEditMode = true;
  }

  deleteFeeHead(index: number) {
    const feeHeadId = this.feeHeads[index].id;
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        this.expFeeHeadService.deleteExpFeeHead(feeHeadId!).subscribe(
          () => {
            Swal.fire('Deleted!', 'Fee Head has been deleted.', 'success');
            this.feeHeads.splice(index, 1);
          },
          error => {
            Swal.fire('Error', 'Failed to delete Fee Head.', 'error');
          }
        );
      }
    });
  }

  onReset1() {
    this.formValue = {
      id: undefined,
      fee_head: '',
      amount: 0
    };
    this.customStylesValidated = false;
    this.isEditMode = false;
  }
}
