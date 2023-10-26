export interface ApiResponse<T> {
  statusCode: number;
  data: T;
  count?: number;
}
