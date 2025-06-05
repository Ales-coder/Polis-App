import { Routes } from '@angular/router';
// filepath: src/app/pages/teachers/teacher-form.page.ts
export class TeacherFormPage { ... }
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses/courses.page').then(m => m.CoursesPage)
  },
  {
    path: 'students',
    loadComponent: () => import('./pages/students/students.page').then(m => m.StudentsPage)
  },
  {
    path: 'teachers',
    loadComponent: () => import('./pages/teachers/teachers.page').then(m => m.TeachersPage)
  },
  {
    path: 'TeacherFormPage', // for creating a new teacher
    loadComponent: () => import('./pages/teachers/TeacherFormPage').then(m => m.TeacherFormPage)
  },
  {
    path: 'TeacherFormPage/:id', // for editing an existing teacher
    loadComponent: () => import('./pages/teachers/TeacherFormPage').then(m => m.TeacherFormPage)
  }
];
