package com.students.service;

import com.students.entity.Student;
import com.students.repository.StudentRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student getStudentById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }

    public Student addStudent(Student student) {

        if (repository.existsById(student.getId())) {
            throw new RuntimeException(
                    "Student ID " + student.getId() + " already exists"
            );
        }

        return repository.save(student);
    }

    @Transactional
    public Student updateStudent(Long oldId, Student student) {

        // Find old student
        Student existingStudent = repository.findById(oldId)
                .orElseThrow(() ->
                        new RuntimeException("Student not found with ID: " + oldId)
                );

        Long newId = student.getId();

        // ID cannot be empty
        if (newId == null) {
            throw new RuntimeException("Student ID cannot be empty");
        }

        // ==============================
        // ID CHANGED
        // ==============================
        if (!oldId.equals(newId)) {

            // Check whether new ID already exists
            if (repository.existsById(newId)) {
                throw new RuntimeException(
                        "Student ID " + newId + " already exists"
                );
            }

            // Delete old record
            repository.delete(existingStudent);

            // Force DELETE query to database
            repository.flush();

            // Set new ID
            student.setId(newId);

            // Save as new record
            return repository.save(student);
        }

        // ==============================
        // ID NOT CHANGED
        // ==============================

        existingStudent.setName(student.getName());
        existingStudent.setEmail(student.getEmail());
        existingStudent.setPhone(student.getPhone());
        existingStudent.setDateOfBirth(student.getDateOfBirth());
        existingStudent.setGender(student.getGender());
        existingStudent.setBloodGroup(student.getBloodGroup());

        existingStudent.setRegisterNumber(student.getRegisterNumber());
        existingStudent.setDepartment(student.getDepartment());
        existingStudent.setYear(student.getYear());
        existingStudent.setSemester(student.getSemester());
        existingStudent.setAdmissionDate(student.getAdmissionDate());
        existingStudent.setPercentage(student.getPercentage());
        existingStudent.setStatus(student.getStatus());

        existingStudent.setFatherName(student.getFatherName());
        existingStudent.setOccupation(student.getOccupation());

        existingStudent.setAddress(student.getAddress());
        existingStudent.setCity(student.getCity());
        existingStudent.setState(student.getState());
        existingStudent.setPincode(student.getPincode());

        existingStudent.setPhoto(student.getPhoto());

        return repository.save(existingStudent);
    }

    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }
}