"use client";
import InventoryTable from "./components/Table/Table";

interface InventoryItem {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  status: string;
}


const inventoryData: InventoryItem[] = [
  { id: 1, name: 'Bike Frame', category: 'Frames', price: 299.99, quantity: 15, status: 'In Stock' },
  { id: 2, name: 'Wheel Set', category: 'Wheels', price: 199.99, quantity: 8, status: 'In Stock' },
  { id: 3, name: 'Bike Frame', category: 'Frames', price: 299.99, quantity: 15, status: 'In Stock' },
  { id: 4, name: 'Wheel Set', category: 'Wheels', price: 199.99, quantity: 8, status: 'In Stock' },
  { id: 5, name: 'Handlebar', category: 'Components', price: 49.99, quantity: 0, status: 'Out of Stock' },
  { id: 6, name: 'Pedals', category: 'Components', price: 29.99, quantity: 25, status: 'In Stock' },
  { id: 7, name: 'Saddle', category: 'Components', price: 59.99, quantity: 12, status: 'In Stock' },
  { id: 8, name: 'Chain', category: 'Drivetrain', price: 24.99, quantity: 30, status: 'In Stock' },
  { id: 9, name: 'Gear Set', category: 'Drivetrain', price: 89.99, quantity: 5, status: 'In Stock' },
  { id: 10, name: 'Brake Pads', category: 'Brakes', price: 19.99, quantity: 0, status: 'Out of Stock' },
  { id: 11, name: 'Tire Set', category: 'Wheels', price: 69.99, quantity: 18, status: 'In Stock' },
  { id: 12, name: 'Fork', category: 'Suspension', price: 149.99, quantity: 7, status: 'In Stock' },
  { id: 13, name: 'Handlebar', category: 'Components', price: 49.99, quantity: 0, status: 'Out of Stock' },
  { id: 14, name: 'Pedals', category: 'Components', price: 29.99, quantity: 25, status: 'In Stock' },
  { id: 15, name: 'Saddle', category: 'Components', price: 59.99, quantity: 12, status: 'In Stock' },
  { id: 16, name: 'Chain', category: 'Drivetrain', price: 24.99, quantity: 30, status: 'In Stock' },
  { id: 17, name: 'Gear Set', category: 'Drivetrain', price: 89.99, quantity: 5, status: 'In Stock' },
  { id: 18, name: 'Brake Pads', category: 'Brakes', price: 19.99, quantity: 0, status: 'Out of Stock' },
  { id: 19, name: 'Tire Set', category: 'Wheels', price: 69.99, quantity: 18, status: 'In Stock' },
  { id: 20, name: 'Fork', category: 'Suspension', price: 149.99, quantity: 7, status: 'In Stock' },
  { id: 21, name: 'Bike Frame', category: 'Frames', price: 299.99, quantity: 15, status: 'In Stock' },
  { id: 22, name: 'Wheel Set', category: 'Wheels', price: 199.99, quantity: 8, status: 'In Stock' },
  { id: 23, name: 'Handlebar', category: 'Components', price: 49.99, quantity: 0, status: 'Out of Stock' },
  { id: 24, name: 'Pedals', category: 'Components', price: 29.99, quantity: 25, status: 'In Stock' },
  { id: 25, name: 'Saddle', category: 'Components', price: 59.99, quantity: 12, status: 'In Stock' },
  { id: 26, name: 'Chain', category: 'Drivetrain', price: 24.99, quantity: 30, status: 'In Stock' },
  { id: 27, name: 'Gear Set', category: 'Drivetrain', price: 89.99, quantity: 5, status: 'In Stock' },
  { id: 28, name: 'Brake Pads', category: 'Brakes', price: 19.99, quantity: 0, status: 'Out of Stock' },
  { id: 29, name: 'Tire Set', category: 'Wheels', price: 69.99, quantity: 18, status: 'In Stock' },
  { id: 30, name: 'Fork', category: 'Suspension', price: 149.99, quantity: 7, status: 'In Stock' },
  { id: 31, name: 'Bike Frame', category: 'Frames', price: 299.99, quantity: 15, status: 'In Stock' },
  { id: 32, name: 'Wheel Set', category: 'Wheels', price: 199.99, quantity: 8, status: 'In Stock' },
  { id: 33, name: 'Handlebar', category: 'Components', price: 49.99, quantity: 0, status: 'Out of Stock' },
  { id: 34, name: 'Pedals', category: 'Components', price: 29.99, quantity: 25, status: 'In Stock' },
  { id: 35, name: 'Saddle', category: 'Components', price: 59.99, quantity: 12, status: 'In Stock' },
  { id: 36, name: 'Chain', category: 'Drivetrain', price: 24.99, quantity: 30, status: 'In Stock' },
  { id: 37, name: 'Gear Set', category: 'Drivetrain', price: 89.99, quantity: 5, status: 'In Stock' },
  { id: 38, name: 'Brake Pads', category: 'Brakes', price: 19.99, quantity: 0, status: 'Out of Stock' },
  { id: 39, name: 'Tire Set', category: 'Wheels', price: 69.99, quantity: 18, status: 'In Stock' },
  { id: 40, name: 'Fork', category: 'Suspension', price: 149.99, quantity: 7, status: 'In Stock' },
  { id: 41, name: 'Bike Frame', category: 'Frames', price: 299.99, quantity: 15, status: 'In Stock' },
  { id: 42, name: 'Wheel Set', category: 'Wheels', price: 199.99, quantity: 8, status: 'In Stock' },
  { id: 43, name: 'Handlebar', category: 'Components', price: 49.99, quantity: 0, status: 'Out of Stock' },
  { id: 44, name: 'Pedals', category: 'Components', price: 29.99, quantity: 25, status: 'In Stock' },
  { id: 45, name: 'Saddle', category: 'Components', price: 59.99, quantity: 12, status: 'In Stock' },
  { id: 46, name: 'Chain', category: 'Drivetrain', price: 24.99, quantity: 30, status: 'In Stock' },
  { id: 47, name: 'Gear Set', category: 'Drivetrain', price: 89.99, quantity: 5, status: 'In Stock' },
  { id: 48, name: 'Brake Pads', category: 'Brakes', price: 19.99, quantity: 0, status: 'Out of Stock' },
  { id: 49, name: 'Tire Set', category: 'Wheels', price: 69.99, quantity: 18, status: 'In Stock' },
  { id: 50, name: 'Fork', category: 'Suspension', price: 149.99, quantity: 7, status: 'In Stock' },
  { id: 51, name: 'Bike Frame', category: 'Frames', price: 299.99, quantity: 15, status: 'In Stock' },
  { id: 52, name: 'Wheel Set', category: 'Wheels', price: 199.99, quantity: 8, status: 'In Stock' },
  { id: 53, name: 'Handlebar', category: 'Components', price: 49.99, quantity: 0, status: 'Out of Stock' },
  { id: 54, name: 'Pedals', category: 'Components', price: 29.99, quantity: 25, status: 'In Stock' },
  { id: 55, name: 'Saddle', category: 'Components', price: 59.99, quantity: 12, status: 'In Stock' },
  { id: 56, name: 'Chain', category: 'Drivetrain', price: 24.99, quantity: 30, status: 'In Stock' },
  { id: 57, name: 'Gear Set', category: 'Drivetrain', price: 89.99, quantity: 5, status: 'In Stock' },
  { id: 58, name: 'Brake Pads', category: 'Brakes', price: 19.99, quantity: 0, status: 'Out of Stock' },
  { id: 59, name: 'Tire Set', category: 'Wheels', price: 69.99, quantity: 18, status: 'In Stock' },
  { id: 60, name: 'Fork', category: 'Suspension', price: 149.99, quantity: 7, status: 'In Stock' },
  { id: 61, name: 'Bike Frame', category: 'Frames', price: 299.99, quantity: 15, status: 'In Stock' },
  { id: 62, name: 'Wheel Set', category: 'Wheels', price: 199.99, quantity: 8, status: 'In Stock' },
  { id: 63, name: 'Handlebar', category: 'Components', price: 49.99, quantity: 0, status: 'Out of Stock' },
  { id: 64, name: 'Pedals', category: 'Components', price: 29.99, quantity: 25, status: 'In Stock' },
  { id: 65, name: 'Saddle', category: 'Components', price: 59.99, quantity: 12, status: 'In Stock' },
  { id: 66, name: 'Chain', category: 'Drivetrain', price: 24.99, quantity: 30, status: 'In Stock' },
  { id: 67, name: 'Gear Set', category: 'Drivetrain', price: 89.99, quantity: 5, status: 'In Stock' },
  { id: 68, name: 'Brake Pads', category: 'Brakes', price: 19.99, quantity: 0, status: 'Out of Stock' },
  { id: 69, name: 'Tire Set', category: 'Wheels', price: 69.99, quantity: 18, status: 'In Stock' },
  { id: 70, name: 'Fork', category: 'Suspension', price: 149.99, quantity: 7, status: 'In Stock' },
  { id: 71, name: 'Bike Frame', category: 'Frames', price: 299.99, quantity: 15, status: 'In Stock' },
  { id: 72, name: 'Wheel Set', category: 'Wheels', price: 199.99, quantity: 8, status: 'In Stock' },
  { id: 73, name: 'Handlebar', category: 'Components', price: 49.99, quantity: 0, status: 'Out of Stock' },
  { id: 74, name: 'Pedals', category: 'Components', price: 29.99, quantity: 25, status: 'In Stock' },
  { id: 75, name: 'Saddle', category: 'Components', price: 59.99, quantity: 12, status: 'In Stock' },
  { id: 76, name: 'Chain', category: 'Drivetrain', price: 24.99, quantity: 30, status: 'In Stock' },
  { id: 77, name: 'Gear Set', category: 'Drivetrain', price: 89.99, quantity: 5, status: 'In Stock' },
  { id: 78, name: 'Brake Pads', category: 'Brakes', price: 19.99, quantity: 0, status: 'Out of Stock' },
  { id: 79, name: 'Tire Set', category: 'Wheels', price: 69.99, quantity: 18, status: 'In Stock' },
  { id: 80, name: 'Fork', category: 'Suspension', price: 149.99, quantity: 7, status: 'In Stock' },
  { id: 81, name: 'Bike Frame', category: 'Frames', price: 299.99, quantity: 15, status: 'In Stock' },
  { id: 82, name: 'Wheel Set', category: 'Wheels', price: 199.99, quantity: 8, status: 'In Stock' },
  { id: 83, name: 'Handlebar', category: 'Components', price: 49.99, quantity: 0, status: 'Out of Stock' },
  { id: 84, name: 'Pedals', category: 'Components', price: 29.99, quantity: 25, status: 'In Stock' },
  { id: 85, name: 'Saddle', category: 'Components', price: 59.99, quantity: 12, status: 'In Stock' },
  { id: 86, name: 'Chain', category: 'Drivetrain', price: 24.99, quantity: 30, status: 'In Stock' },
  { id: 87, name: 'Gear Set', category: 'Drivetrain', price: 89.99, quantity: 5, status: 'In Stock' },
  { id: 88, name: 'Brake Pads', category: 'Brakes', price: 19.99, quantity: 0, status: 'Out of Stock' },
  { id: 89, name: 'Tire Set', category: 'Wheels', price: 69.99, quantity: 18, status: 'In Stock' },
  { id: 90, name: 'Fork', category: 'Suspension', price: 149.99, quantity: 7, status: 'In Stock' },
  { id: 91, name: 'Bike Frame', category: 'Frames', price: 299.99, quantity: 15, status: 'In Stock' },
  { id: 92, name: 'Wheel Set', category: 'Wheels', price: 199.99, quantity: 8, status: 'In Stock' },
  { id: 93, name: 'Handlebar', category: 'Components', price: 49.99, quantity: 0, status: 'Out of Stock' },
  { id: 94, name: 'Pedals', category: 'Components', price: 29.99, quantity: 25, status: 'In Stock' },
  { id: 95, name: 'Saddle', category: 'Components', price: 59.99, quantity: 12, status: 'In Stock' },
  { id: 96, name: 'Chain', category: 'Drivetrain', price: 24.99, quantity: 30, status: 'In Stock' },
  { id: 97, name: 'Gear Set', category: 'Drivetrain', price: 89.99, quantity: 5, status: 'In Stock' },
  { id: 98, name: 'Brake Pads', category: 'Brakes', price: 19.99, quantity: 0, status: 'Out of Stock' },
  { id: 99, name: 'Tire Set', category: 'Wheels', price: 69.99, quantity: 18, status: 'In Stock' },
  { id: 100, name: 'Fork', category: 'Suspension', price: 149.99, quantity: 7, status: 'In Stock' },


  // ... other items
];

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Inventory Management</h1>
      <InventoryTable data={inventoryData} />
    
    </main>
  );
}