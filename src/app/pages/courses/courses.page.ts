import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class CoursesPage implements OnInit {
  courses: CourseDto[] = [];
  searchText: string = '';

  // Pagination state
  currentPage: number = 0;
  pageSize: number = 10;
  lastPageReached: boolean = false;

  constructor(
    private toastCtrl: ToastController,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses(reset: boolean = false) {
    if (reset) {
      this.currentPage = 0;
      this.courses = [];
      this.lastPageReached = false;
    }

    this.courseService.filterCourses(this.searchText, this.currentPage, this.pageSize).subscribe({
      next: (res) => {
        // Backend returns 'status' array, not error string
        if (res.status && res.status.length > 0) {
          this.showError('Server returned an error status.');
          return;
        }

        const newCourses = res.slice?.content || [];

        this.courses = [...this.courses, ...newCourses];
        this.lastPageReached = res.slice?.last || false;
      },
      error: () => this.showError('Failed to load courses.'),
    });
  }

  onSearch(searchTerm: string) {
    this.searchText = searchTerm;
    this.loadCourses(true); // Reset when searching
  }

  loadMore(event: any) {
    if (this.lastPageReached) {
      event.target.disabled = true;
      event.target.complete();
      return;
    }

    this.currentPage++;
    this.loadCourses();

    // Always complete the scroll event
    event.target.complete();
  }

  async showError(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color: 'danger',
    });
    await toast.present();
  }
}
