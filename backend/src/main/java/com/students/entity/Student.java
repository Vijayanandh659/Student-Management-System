package com.students.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Student {
	    @Id
	   
	    private Long id;

	    
	    private String name;
	    private String email;
	    private String phone;
	    private String dateOfBirth;
	    private String gender;
	    private String bloodGroup;

	    
	    private String registerNumber;
	    private String department;
	   
	    private String year;
	    private String semester;
	  
	    private String admissionDate;
	    private Double percentage;
	    private String status;

	   
	    private String fatherName;
	    private String occupation;

	   
	    private String address;
	    private String city;
	    private String state;
	    private String pincode;

	    
	    @Column(columnDefinition = "LONGTEXT")
	    private String photo;

	    public Student() {
	    }

	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }

	    public String getEmail() {
	        return email;
	    }

	    public void setEmail(String email) {
	        this.email = email;
	    }

	    public String getPhone() {
	        return phone;
	    }

	    public void setPhone(String phone) {
	        this.phone = phone;
	    }

	    public String getDateOfBirth() {
	        return dateOfBirth;
	    }

	    public void setDateOfBirth(String dateOfBirth) {
	        this.dateOfBirth = dateOfBirth;
	    }

	    public String getGender() {
	        return gender;
	    }

	    public void setGender(String gender) {
	        this.gender = gender;
	    }

	    public String getBloodGroup() {
	        return bloodGroup;
	    }

	    public void setBloodGroup(String bloodGroup) {
	        this.bloodGroup = bloodGroup;
	    }

	    public String getRegisterNumber() {
	        return registerNumber;
	    }

	    public void setRegisterNumber(String registerNumber) {
	        this.registerNumber = registerNumber;
	    }

	    public String getDepartment() {
	        return department;
	    }

	    public void setDepartment(String department) {
	        this.department = department;
	    }

	  

	    public String getYear() {
	        return year;
	    }

	    public void setYear(String year) {
	        this.year = year;
	    }

	    public String getSemester() {
	        return semester;
	    }

	    public void setSemester(String semester) {
	        this.semester = semester;
	    }

	    public String getAdmissionDate() {
	        return admissionDate;
	    }

	    public void setAdmissionDate(String admissionDate) {
	        this.admissionDate = admissionDate;
	    }

	    public Double getPercentage() {
	        return percentage;
	    }

	    public void setPercentage(Double percentage) {
	        this.percentage = percentage;
	    }

	    public String getStatus() {
	        return status;
	    }

	    public void setStatus(String status) {
	        this.status = status;
	    }

	    public String getFatherName() {
	        return fatherName;
	    }

	    public void setFatherName(String fatherName) {
	        this.fatherName = fatherName;
	    }

	    public String getOccupation() {
	        return occupation;
	    }

	    public void setOccupation(String occupation) {
	        this.occupation = occupation;
	    }

	    public String getAddress() {
	        return address;
	    }

	    public void setAddress(String address) {
	        this.address = address;
	    }

	    public String getCity() {
	        return city;
	    }

	    public void setCity(String city) {
	        this.city = city;
	    }

	    public String getState() {
	        return state;
	    }

	    public void setState(String state) {
	        this.state = state;
	    }

	    public String getPincode() {
	        return pincode;
	    }

	    public void setPincode(String pincode) {
	        this.pincode = pincode;
	    }

	    public String getPhoto() {
	        return photo;
	    }

	    public void setPhoto(String photo) {
	        this.photo = photo;
	    }

}
