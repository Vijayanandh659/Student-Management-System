package com.students.repository;
import com.students.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
public interface StudentRepository  extends JpaRepository<Student, Long> {
	

}
