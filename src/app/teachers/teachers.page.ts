import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TeacherService } from '../../services/teacher.service';
import { Teacher } from '../../models/teacher.dto';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  styleUrls: ['./teachers.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class TeachersPage implements OnInit {
  teachers: Teacher[] = [];
  errorMessage = '';
  searchTerm: string = '';

  currentPage: number = 0;
  pageSize: number = 20;
  isLastPage: boolean = false;

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers(): void {
    this.teacherService.getAll(this.searchTerm, this.currentPage, this.pageSize).subscribe({
      next: (data: Teacher[]) => {
        this.teachers = data;
        this.isLastPage = data.length < this.pageSize;
      },
      error: (err: any) => {
        console.error('Error loading teachers:', err);
        this.errorMessage = 'Failed to load teachers.';
      }
    });
  }

  onSearchChange(): void {
    this.currentPage = 0;
    this.loadTeachers();
  }

  nextPage(): void {
    if (!this.isLastPage) {
      this.currentPage++;
      this.loadTeachers();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadTeachers();
    }
  }

  deleteTeacher(id: number): void {
    this.teacherService.delete(id).subscribe({
      next: () => this.loadTeachers(),
      error: (err: any) => {
        console.error('Error deleting teacher:', err);
        this.errorMessage = 'Delete failed.';
      }
    });
  }

  createTeacher(): void {
    // TODO: Navigate to TeacherFormPage for creating new teacher
  }

  editTeacher(teacher: Teacher): void {
    // TODO: Navigate to TeacherFormPage with teacher.id
  }
}
