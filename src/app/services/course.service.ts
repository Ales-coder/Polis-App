import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CourseDto {
  id: number;
  name: string;
  description: string;
  // add your course fields here
}

export interface RespSliceDto<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  // other pagination fields if any
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  filterCourses(filter: string) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAll(filter: string = ''): Observable<RespSliceDto<CourseDto>> {
    return this.http.post<RespSliceDto<CourseDto>>(`${this.baseUrl}/filterCourses`, {
      filter,
    });
  }
}
