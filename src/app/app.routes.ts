import { Routes } from '@angular/router';

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
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/teachers/teachers.page').then(m => m.TeachersPage)
      },
      {
        path: 'form',
        loadComponent: () => import('./pages/teachers/TeacherFormPage').then(m => m.TeacherFormPage)
      },
      {
        path: 'form/:id',
        loadComponent: () => import('./pages/teachers/TeacherFormPage').then(m => m.TeacherFormPage)
      }
    ]
  }
];
