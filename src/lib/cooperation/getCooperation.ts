import { API_BASE_PATH } from '@/lib/consts';

export default async function getCooperation() {
  try {
    const response = await fetch(`${API_BASE_PATH}/cooperation`, {
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
