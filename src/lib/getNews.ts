import { API_BASE_PATH } from '@/lib/consts';

export default async function getNews() {
  const response = await fetch(`${API_BASE_PATH}/news`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  return data;
}
