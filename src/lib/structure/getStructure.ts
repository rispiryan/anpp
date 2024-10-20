import { API_BASE_PATH } from '@/lib/consts';

export default async function getStructure() {
  try {
    const response = await fetch(`${API_BASE_PATH}/employees`, {
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
