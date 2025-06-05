export interface StudentDto {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
  // add more fields as needed
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
  status: any[];
}
