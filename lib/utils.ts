export function formatCurrency(value: number, currency: string = 'INR'): string {
  if (currency === 'INR') {
    return `₹${parseFloat(value.toString()).toLocaleString('en-IN')}`
  }
  return `$${parseFloat(value.toString()).toFixed(2)}`
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}