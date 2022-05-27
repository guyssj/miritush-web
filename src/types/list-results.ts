export interface ListResults<T> {
    data: T
    totalRecord: number,
    totalPages: number,
    pageSize: number,
    pageNumber: number
}