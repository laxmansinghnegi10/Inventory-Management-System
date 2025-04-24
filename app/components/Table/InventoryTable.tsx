

import { useState } from 'react';
import { InventoryComponent } from '../../types/inventory';
// import { InventoryComponent } from '@/types/inventory';

export function InventoryTable({ components }: { components: InventoryComponent[] }) {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const toggleExpand = (componentId: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [componentId]: !prev[componentId]
    }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Component</th>
            <th className="p-3 text-left">SKU</th>
            <th className="p-3 text-left">HSN</th>
            <th className="p-3 text-right">Usable</th>
            <th className="p-3 text-right">Damaged</th>
            <th className="p-3 text-right">Discarded</th>
            <th className="p-3 text-right">Total</th>
            <th className="p-3 text-left">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {components.map((component) => (
            <ComponentRow 
              key={component.component_id}
              component={component}
              level={0}
              expanded={expandedRows[component.component_id] || false}
              onToggleExpand={toggleExpand}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ComponentRow({
  component,
  level,
  expanded,
  onToggleExpand
}: {
  component: InventoryComponent;
  level: number;
  expanded: boolean;
  onToggleExpand: (id: string) => void;
}) {
  const hasChildren = component.has_subcomponent && component.subcomponents?.length;
  
  return (
    <>
      <tr 
        className={`border-t ${level > 0 ? 'bg-gray-50' : ''}`}
        onClick={() => hasChildren && onToggleExpand(component.component_id)}
      >
        <td className="p-3" style={{ paddingLeft: `${level * 20 + 12}px` }}>
          <div className="flex items-center">
            {hasChildren && (
              <span className="mr-2">
                {expanded ? '▼' : '▶'}
              </span>
            )}
            {component.component_name}
            {component.is_subcomponent && (
              <span className="ml-2 text-xs text-gray-500">
                (Subcomponent of {component.parent_component_id})
              </span>
            )}
          </div>
        </td>
        <td className="p-3">{component.sku_code}</td>
        <td className="p-3">{component.hsn_code}</td>
        <td className="p-3 text-right">{component.usable_quantity ?? '-'}</td>
        <td className="p-3 text-right">{component.damaged_quantity ?? '-'}</td>
        <td className="p-3 text-right">{component.discarded_quantity ?? '-'}</td>
        <td className="p-3 text-right">{component.total_quantity ?? '-'}</td>
        <td className="p-3">{component.last_updated ?? '-'}</td>
      </tr>
      
      {expanded && hasChildren && component.subcomponents?.map(sub => (
        <ComponentRow
          key={sub.component_id}
          component={sub}
          level={level + 1}
          expanded={false}
          onToggleExpand={onToggleExpand}
        />
      ))}
    </>
  );
}