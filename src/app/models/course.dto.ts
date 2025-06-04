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
  status: any[]; // backend sends "status" array, not error string
}

export interface SimpleStringFilterDto {
  filter: string;
  pagination: {
    pageNumber: number;
    pageSize: number;
  };
}
