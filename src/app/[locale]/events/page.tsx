import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import Events from '@/app/[locale]/events/components/Events';

import getEvents from '@/lib/events/getEvents';

export default async function Post() {
  const data: IEvents[] = await getEvents();

  return (
    <>
      <Breadcrumb crumbLabel={'events'} />
      <Events events={data} />
    </>
  );
}
