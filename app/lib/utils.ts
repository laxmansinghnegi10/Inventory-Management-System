
export function classNames(...classes: Array<string | boolean | undefined | null>): string {
    return classes
      .filter(className => typeof className === 'string') // Keep only strings
      .join(' ')                                        // Join with spaces
      .trim();                                          // Remove extra spaces
  }
  
  
  export function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  }