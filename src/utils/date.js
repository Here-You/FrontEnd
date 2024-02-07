const formatDate = timestamp => {
  return new Date(timestamp * 1000)
    .toLocaleDateString('ko-GB', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    })
    .split('/')
    .join('.');
};

export { formatDate };
