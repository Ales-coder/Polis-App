import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDto, RespSliceDto, SimpleStringFilterDto } from '../models/student.dto';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) {}

  filterStudents(filterDto: SimpleStringFilterDto): Observable<RespSliceDto<StudentDto>> {
    return this.http.post<RespSliceDto<StudentDto>>(`${this.baseUrl}/filterStudents`, filterDto);
  }
}
