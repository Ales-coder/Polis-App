import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonButton, IonLabel } from '@ionic/angular/standalone';
import { StudentService } from '../../services/student.service';
import { StudentDto, RespSliceDto } from '../../models/student.dto';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonButton, IonLabel, CommonModule, FormsModule],
})
export class StudentsPage implements OnInit {
  students: StudentDto[] = [];
  filter: string = '';
  pageNumber = 0;
  pageSize = 10;
  lastPage = false;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    const filterDto = {
      filter: this.filter,
      pagination: {
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
      },
    };

    this.studentService.filterStudents(filterDto).subscribe({
      next: (resp: RespSliceDto<StudentDto>) => {
        this.students = resp.slice.content;
        this.pageNumber = resp.slice.pageable.pageNumber;
        this.pageSize = resp.slice.pageable.pageSize;
        this.lastPage = resp.slice.last;
      },
      error: (err) => {
        console.error('Failed to load students', err);
      },
    });
  }

  search() {
    this.pageNumber = 0; // reset page to 0 when searching
    this.loadStudents();
  }

  nextPage() {
    if (!this.lastPage) {
      this.pageNumber++;
      this.loadStudents();
    }
  }

  prevPage() {
    if (this.pageNumber > 0) {
      this.pageNumber--;
      this.loadStudents();
    }
  }
}
