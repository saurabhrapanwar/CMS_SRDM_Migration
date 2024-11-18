package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tbl_Exp_feeHeads")
public class ExpFeeHeadEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String feeHead;
    private Integer amount;
    private String date;
    private String time;
    private String byUser;

    // Constructors, Getters, Setters, and ToString methods
    public ExpFeeHeadEntity() {}

    public ExpFeeHeadEntity(Long id, String feeHead, Integer amount, String date, String time, String byUser) {
        this.id = id;
        this.feeHead = feeHead;
        this.amount = amount;
        this.date = date;
        this.time = time;
        this.byUser = byUser;
    }
    

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getfeeHead() {
		return feeHead;
	}

	public void setfeeHead(String feeHead) {
		this.feeHead = feeHead;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getbyUser() {
		return byUser;
	}

	public void setbyUser(String byUser) {
		this.byUser = byUser;
	}

	@Override
	public String toString() {
		return "ExpFeeHeadEntity [id=" + id + ", feeHead=" + feeHead + ", amount=" + amount + ", date=" + date
				+ ", time=" + time + ", byUser=" + byUser + "]";
	}

	
}
