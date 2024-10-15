import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';

import getEducation from '@/lib/education/getEducation';

export default async function Post() {
  const data: IEducation[] = await getEducation();
  console.log(data, 'data');
  return (
    <>
      <Breadcrumb crumbLabel={'education'} />
    </>
  );
}
