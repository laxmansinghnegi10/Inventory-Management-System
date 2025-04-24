import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import { ColumnDef } from './Table.types';

export default function TableHeader<T>({
  columns,
  sortConfig,
  requestSort,
}: {
  columns: ColumnDef<T>[];
  sortConfig: { key: keyof T; direction: 'asc' | 'desc' } | null;
  requestSort: (key: keyof T) => void;
}) {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column) => (
          <th
            key={column.key as string}
            scope="col"
            className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
              column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
            }`}
            onClick={() => column.sortable && requestSort(column.key)}
          >
            <div className="flex items-center">
              {column.header}
              {column.sortable && (
                <span className="ml-1">
                  {sortConfig?.key === column.key ? (
                    sortConfig.direction === 'asc' ? (
                      <ArrowUpIcon className="h-4 w-4" />
                    ) : (
                      <ArrowDownIcon className="h-4 w-4" />
                    )
                  ) : (
                    <span className="h-4 w-4" />
                  )}
                </span>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}