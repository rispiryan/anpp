import { API_BASE_PATH } from '@/lib/consts';

export default async function getNews() {
  const response = await fetch(`http://localhost:8000/news`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  return data;
}
