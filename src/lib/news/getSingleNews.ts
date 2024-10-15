import { API_BASE_PATH } from '@/lib/consts';

export default async function getSingleNews(id: string | number) {
  try {
    const response = await fetch(`${API_BASE_PATH}/news/${id}`, {
      next: { revalidate: 60 },
    });
    if (response.status !== 200) {
      return undefined;
    }
    return await response.json();
  } catch (error) {
    return undefined;
  }
}
