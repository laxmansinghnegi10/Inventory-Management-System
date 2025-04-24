import Input from '../ui/Input';
import { ColumnDef } from './Table.types';

export default function TableFilters<T>({
  columns,
  filters,
  setFilters,
}: {
  columns: ColumnDef<T>[];
  filters: Record<keyof T, string>;
  setFilters: React.Dispatch<React.SetStateAction<Record<keyof T, string>>>;
}) {
  return (
    <div className="px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-50">
      {columns
        .filter((column) => column.filterable)
        .map((column) => (
          <div key={column.key as string}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter by {column.header}
            </label>
            <Input
              type="text"
              value={filters[column.key] || ''}
              onChange={(e) =>
                setFilters({ ...filters, [column.key]: e.target.value })
              }
              placeholder={`Search ${column.header}...`}

              
            />
          </div>
        ))}
    </div>
  );
}