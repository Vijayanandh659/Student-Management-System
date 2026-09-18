package com.students.controller;
import com.students.entity.Student;
import com.students.service.StudentService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    
    @GetMapping
    public List<Student> getAllStudents() {

        return service.getAllStudents();
    }

    
    @GetMapping("/{id}")
    public Student getStudentById(
            @PathVariable Long id) {

        return service.getStudentById(id);
    }

    
    @PostMapping
    public Student addStudent(
            @RequestBody Student student) {

        return service.addStudent(student);
    }

    
    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id,
                                 @RequestBody Student student) {
        return service.updateStudent(id, student);
    }
   
    @DeleteMapping("/{id}")
    public String deleteStudent(
            @PathVariable Long id) {

        service.deleteStudent(id);

        return "Student deleted successfully";
    }

}
