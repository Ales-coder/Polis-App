export interface PaginationDto {
  page: number;
  size: number;
}

export interface SimpleStringFilterDto {
  filter: string;
  pagination: PaginationDto;
}
