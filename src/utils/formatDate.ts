export const formatDate = (date: string, type: 'short' | 'full' = 'full') =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    ...(type === 'full' ? { weekday: 'long' } : {}),
  })
