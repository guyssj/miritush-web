export interface Book {
    BookID?: number | null;
    StartDate: any;
    StartAt: number;
    CustomerID: number;
    ServiceID: number;
    Durtion: number;
    ServiceTypeID: number[];
    Notes?: string | null;
    canEdit?: boolean | null
}