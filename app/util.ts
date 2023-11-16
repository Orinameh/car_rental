const formatAmount = (amount: number, currency?: string) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency ?? 'NGN' }).format(
        amount,
      )
}

export { formatAmount }