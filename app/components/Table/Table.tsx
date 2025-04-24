"use client";
import { useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

type Column = {
  key: string;
  header: string;
  sortable?: boolean;
};

export default function InventoryTable({ data }: { data: any[] }) {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [filters, setFilters] = useState<Record<string, string>>({});

  // Sorting logic
  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig?.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Apply sorting and filtering
  const processedData = [...data]
    .filter(item => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return String(item[key]).toLowerCase().includes(value.toLowerCase());
      });
    })
    .sort((a, b) => {
      if (!sortConfig) return 0;
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

  const columns: Column[] = [
    { key: 'id', header: 'ID', sortable: true },
    { key: 'name', header: 'Product Name', sortable: true },
    { key: 'category', header: 'Category', sortable: true },
    { key: 'price', header: 'Price', sortable: true },
    { key: 'quantity', header: 'Quantity', sortable: true },
    { key: 'status', header: 'Status' }
  ];

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      {/* Filter Row */}
      <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50">
        {columns.map(column => (
          <div key={column.key}>
            <input
              placeholder={`Filter ${column.header}...`}
              className="w-full p-2 border rounded text-sm"
              onChange={(e) => setFilters({...filters, [column.key]: e.target.value})}
            />
          </div>
        ))}
      </div>

      {/* Table */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map(column => (
              <th
                key={column.key}
                onClick={() => column.sortable && handleSort(column.key)}
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
                }`}
              >
                <div className="flex items-center">
                  {column.header}
                  {column.sortable && sortConfig?.key === column.key && (
                    <span className="ml-1">
                      {sortConfig.direction === 'asc' ? (
                        <ArrowUpIcon className="h-4 w-4" />
                      ) : (
                        <ArrowDownIcon className="h-4 w-4" />
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {processedData.map(item => (
            <tr key={item.id}>
              {columns.map(column => (
                <td key={`${item.id}-${column.key}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {column.key === 'status' ? (
                    <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                      item.status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
                    </span>
                  ) : column.key === 'price' ? (
                    `$${item.price.toFixed(2)}`
                  ) : (
                    item[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}