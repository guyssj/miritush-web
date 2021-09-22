export interface APIResponse<T> {
    Result: T;
    StatusCode: number;
    ErrorMessage: string;
}