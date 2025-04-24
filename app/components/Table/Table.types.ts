export interface ColumnDef<T> {
    key: keyof T;
    header: string;
    sortable?: boolean;
    filterable?: boolean;
    render?: (item: T) => React.ReactNode;
  }
  
  export interface TableProps<T> {
    data: T[];
    columns: ColumnDef<T>[];
    pageSize?: number;
    showPagination?: boolean;
    showFilters?: boolean;
  }