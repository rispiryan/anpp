export function formatDate(dateString: string, language: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    day: 'numeric',
    month: 'long',
  };

  let formattedDate = '';

  switch (language) {
    case 'ar':
      formattedDate = new Intl.DateTimeFormat('hy-AM', options).format(date);
      formattedDate = formattedDate.replace(/(\d{4})/, '$1');
      break;
    case 'en':
      formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
      break;
    case 'ru':
      formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date);
      break;
    default:
      throw new Error('Unsupported language');
  }

  return formattedDate;
}
