import Cooperation from '@/app/[locale]/cooperation/components/Cooperation';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';

import getCooperation from '@/lib/cooperation/getCooperation';

export default async function Post() {
  const cooperation: ICooperation[] = await getCooperation();

  return (
    <>
      <Breadcrumb crumbLabel={'cooperation'} />
      <Cooperation cooperation={cooperation} />
    </>
  );
}
