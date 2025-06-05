// src/app/services/teacher.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher.dto';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl = 'http://localhost:8080/api/teachers';

  constructor(private http: HttpClient) { }

  // Merr listën e të gjithë mësuesve
  getAll(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.baseUrl);
  }

  // Merr një mësues me ID
  getById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.baseUrl}/${id}`);
  }

  // Shto mësues të ri
  add(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.baseUrl, teacher);
  }

  // Përditëso një mësues ekzistues
  update(id: number, teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.baseUrl}/${id}`, teacher);
  }

  // Fshi një mësues
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
