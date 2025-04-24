// import { InventoryApiResponse } from '@/types/inventory';
"use client";
import { InventoryApiResponse } from "../types/inventory";

export async function fetchInventory(): Promise<InventoryApiResponse> {
  try {
    const response = await fetch("https://dev.electorq.com/dummy/inventory");
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return {
      components: data.map((comp: any) => ({
        ...comp,
        created_at: new Date(comp.created_at).toLocaleString(),
        updated_at: new Date(comp.updated_at).toLocaleString(),
        last_updated: comp.last_updated ? new Date(comp.last_updated).toLocaleString() : undefined
      }))
    };
  } catch (error) {
    console.error('Failed to fetch inventory:', error);
    return { components: [] };
  }
}