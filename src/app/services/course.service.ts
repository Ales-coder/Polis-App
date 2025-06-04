import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface CourseDto {
  id: number;
  code?: string;
  title: string;
  description: string;
  year?: number;
  teacher?: {
    id: number;
    firstName: string;
    lastName: string;
  };
  students?: any[];
}

export interface PaginationDto {
  pageNumber: number;
  pageSize: number;
}

export interface SimpleStringFilterDto {
  filter: string;
  pagination: PaginationDto;
}

export interface RespSliceDto<T> {
  slice: {
    content: T[];
    pageable: {
      pageNumber: number;
      pageSize: number;

    };
    first: boolean;
    last: boolean;
    size: number;
    number: number;
  };
  status: any[];  // backend sends "status" array, not error string
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  /**
   * Filters courses using a search string and pagination.
   */
  filterCourses(
    filter: string = '',
    page: number = 0,
    size: number = 10
  ): Observable<RespSliceDto<CourseDto>> {
    const body: SimpleStringFilterDto = {
      filter,
      pagination: {
        pageNumber: page,
        pageSize: size,
      },
    };
    return this.http.post<RespSliceDto<CourseDto>>(`${this.baseUrl}/filterCourses`, body);
  }

  /**
   * Gets all courses with default pagination and no search filter.
   */
  getAll(): Observable<RespSliceDto<CourseDto>> {
    return this.filterCourses('', 0, 10);
  }
}
