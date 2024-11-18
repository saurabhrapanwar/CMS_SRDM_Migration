package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tbl_Create_Staff")
public class CreateStaffEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String employeeName;
    private String designation;
    private String professorType;
    private String subject;
    private String pay;
    private String salaryPayBand;
    private String gp;
    private String da;
    private String hra;
    private String va;
    private String ta;
    private String otherAllowance;
    private String emp_date;
    private String emp_time;
    private String emp_by_user;
    
	public CreateStaffEntity() {
		super();
	}

	public CreateStaffEntity(Long id, String employeeName, String designation, String professorType, String subject,
			String pay, String salaryPayBand, String gp, String da, String hra, String va, String ta,
			String otherAllowance, String emp_date, String emp_time, String emp_by_user) {
		super();
		this.id = id;
		this.employeeName = employeeName;
		this.designation = designation;
		this.professorType = professorType;
		this.subject = subject;
		this.pay = pay;
		this.salaryPayBand = salaryPayBand;
		this.gp = gp;
		this.da = da;
		this.hra = hra;
		this.va = va;
		this.ta = ta;
		this.otherAllowance = otherAllowance;
		this.emp_date = emp_date;
		this.emp_time = emp_time;
		this.emp_by_user = emp_by_user;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getProfessorType() {
		return professorType;
	}

	public void setProfessorType(String professorType) {
		this.professorType = professorType;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getPay() {
		return pay;
	}

	public void setPay(String pay) {
		this.pay = pay;
	}

	public String getSalaryPayBand() {
		return salaryPayBand;
	}

	public void setSalaryPayBand(String salaryPayBand) {
		this.salaryPayBand = salaryPayBand;
	}

	public String getGp() {
		return gp;
	}

	public void setGp(String gp) {
		this.gp = gp;
	}

	public String getDa() {
		return da;
	}

	public void setDa(String da) {
		this.da = da;
	}

	public String getHra() {
		return hra;
	}

	public void setHra(String hra) {
		this.hra = hra;
	}

	public String getVa() {
		return va;
	}

	public void setVa(String va) {
		this.va = va;
	}

	public String getTa() {
		return ta;
	}

	public void setTa(String ta) {
		this.ta = ta;
	}

	public String getOtherAllowance() {
		return otherAllowance;
	}

	public void setOtherAllowance(String otherAllowance) {
		this.otherAllowance = otherAllowance;
	}

	public String getEmp_date() {
		return emp_date;
	}

	public void setEmp_date(String emp_date) {
		this.emp_date = emp_date;
	}

	public String getEmp_time() {
		return emp_time;
	}

	public void setEmp_time(String emp_time) {
		this.emp_time = emp_time;
	}

	public String getEmp_by_user() {
		return emp_by_user;
	}

	public void setEmp_by_user(String emp_by_user) {
		this.emp_by_user = emp_by_user;
	}

	@Override
	public String toString() {
		return "CreateStaffEntity [id=" + id + ", employeeName=" + employeeName + ", designation=" + designation
				+ ", professorType=" + professorType + ", subject=" + subject + ", pay=" + pay + ", salaryPayBand="
				+ salaryPayBand + ", gp=" + gp + ", da=" + da + ", hra=" + hra + ", va=" + va + ", ta=" + ta
				+ ", otherAllowance=" + otherAllowance + ", emp_date=" + emp_date + ", emp_time=" + emp_time
				+ ", emp_by_user=" + emp_by_user + "]";
	}
    
}
