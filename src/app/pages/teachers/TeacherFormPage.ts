// src/app/services/teacher.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../../models/teacher.dto';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private baseUrl = 'http://localhost:8080/api/teachers'; // Ndrysho URL sipas backend-it tënd

  constructor(private http: HttpClient) {}

  // Merr listën e mësuesve
  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.baseUrl);
  }

  // Merr një mësues sipas id-së
  getTeacherById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.baseUrl}/${id}`);
  }

  // Krijon mësues të ri
  createTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.baseUrl, teacher);
  }

  // Përditëson mësues ekzistues
  updateTeacher(id: number, teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.baseUrl}/${id}`, teacher);
  }

  // Fshin mësuesin me id të dhënë
  deleteTeacher(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
