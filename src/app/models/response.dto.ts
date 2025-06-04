 export interface RespSingleDto<T> {
  data: T | null;
  error: string | null;
}

export interface RespSliceDto<T> {
  data: {
    content: T[];
    number: number;
    size: number;
    last: boolean;
    first: boolean;
    totalPages: number;
    totalElements: number;
  };
  error: string | null;
}

