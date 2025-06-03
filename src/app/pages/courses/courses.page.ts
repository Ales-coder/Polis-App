import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { CourseService, CourseDto } from 'src/app/services/course.service';
import { AppSearchComponent } from 'src/app/components/search/search.component';

@Component({
  standalone: true,
  selector: 'app-courses',
  imports: [IonicModule, CommonModule, FormsModule, AppSearchComponent],
  templateUrl: './courses.page.html',
})
export class CoursesPage {
  courses: CourseDto[] = [];
  searchText: string = '';

  constructor(
    private toastCtrl: ToastController,
    private courseService: CourseService
  ) {}

  async showError(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color: 'danger',
    });
    await toast.present();
  }

  loadCourses(filter: string = '') {
    this.courseService.getAll(filter).subscribe({
      next: data => {
        this.courses = data?.content || [];
      },
      error: () => {
        this.showError('Failed to load courses.');
      },
    });
  }

  // ✅ Updated to accept plain string
  onSearch(searchTerm: string) {
    this.searchText = searchTerm;
    this.loadCourses(searchTerm);
  }

  loadMore(event: any) {
    // Implement pagination logic here if needed
    event.target.complete(); // Just end the scroll event
  }

  ngOnInit() {
    this.loadCourses();
  }
}
