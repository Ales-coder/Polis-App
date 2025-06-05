import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Teacher } from '../models/teacher.dto';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private readonly baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAll(filter: string = '', page: number = 0, size: number = 100): Observable<Teacher[]> {
    return this.http.post<{ data: Teacher[] }>(`${this.baseUrl}/filterTeachers`, {
      filter,
      page,
      size
    }).pipe(
      map(response => response.data || []) // merr vetëm data nga përgjigjja
    );
  }

  upsert(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${this.baseUrl}/upsertTeacher`, teacher);
  }

  delete(id: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/deleteTeacher`, { id });
  }

  getById(id: number): Observable<Teacher> {
    return this.http.post<Teacher>(`${this.baseUrl}/getTeacher`, { id });
  }
}
